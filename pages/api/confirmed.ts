import { subscribe } from "../../models/Subscribe";
import type { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";
import { configs } from "../../configs/configs";

mercadopago.configure({
  access_token:
    configs.ambient === "dev" ? configs.mp_test : configs.mp_production,
});

export default function Confirmed(req: NextApiRequest, res: NextApiResponse) {
  const { payment_id, id } = req.body;

  try {
    mercadopago.payment
      .findById(payment_id)
      .then((data) => {
        const { response } = data;
        const status = response.status;

        console.log(response.status);

        let statusSub;
        switch (status) {
          case "approved":
            statusSub = "confirmed";
            break;
          case "pending":
            statusSub = "wait";
            break;
          case "rejected":
            statusSub = "refused";
          default:
            statusSub = "wait";
            break;
        }

        subscribe.findOneAndUpdate({ _id: id }, { status: statusSub });

        return res.status(201).json({
          message: "Inscrição alterada com sucesso",
          status: statusSub,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: "Error" });
      });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Ocorreu um erro ao validar o pagamento" });
  }
}
