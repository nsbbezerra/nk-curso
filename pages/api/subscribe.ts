import { subscribe } from "../../models/Subscribe";

import type { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";
import { configs } from "../../configs/configs";

mercadopago.configure({
  access_token:
    configs.ambient === "dev" ? configs.mp_test : configs.mp_production,
});

export default async function Subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, cpf, phone, email, sala, obs } = req.body;

  try {
    const mySub = await subscribe.create({
      name,
      cpf,
      phone,
      email,
      sala,
      obs,
      status: "wait",
    });

    let preference = {
      external_reference: mySub._id.toString(),
      notification_url: `${
        configs.ambient === "dev" ? configs.webhook : configs.url_production
      }/confirm/${mySub._id}`,
      items: [
        {
          title: `Curso de Programação de sites - NK Informática`,
          unit_price: configs.price,
          quantity: 1,
        },
      ],
      statement_descriptor: `Curso de Programação de sites - NK Informática`,
      back_urls: {
        success: `${
          configs.ambient === "dev" ? configs.url_dev : configs.url_production
        }/finalizar`,
        failure: `${
          configs.ambient === "dev" ? configs.url_dev : configs.url_production
        }/finalizar`,
        pending: `${
          configs.ambient === "dev" ? configs.url_dev : configs.url_production
        }/finalizar`,
      },
      payment_methods: {
        installments: 2,
      },
    };

    mercadopago.preferences
      .create(preference)
      .then((response) => {
        const url =
          configs.ambient === "dev"
            ? response.body.sandbox_init_point
            : response.body.init_point;
        return res
          .status(200)
          .json({ message: "Inscrição concluída com sucesso", url });
      })
      .catch((error) => {
        let errorMessage = (error as Error).message;
        return res.status(400).json({
          message: "Ocorreu um erro so processar finalizar a inscrição",
          errorMessage,
        });
      });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({
      message: "Ocorreu um erro ao concluir sua inscrição",
      errorMessage,
    });
  }
}
