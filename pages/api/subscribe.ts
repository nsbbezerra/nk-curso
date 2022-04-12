import { subscribe } from "../../models/Subscribe";

import type { NextApiRequest, NextApiResponse } from "next";

interface ISubscribe {
  name: string;
  cpf: string;
  phone: string;
  email?: string;
  sala: string;
  obs?: string;
}

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

    return res.status(200).json({ message: "Inscrição concluída com sucesso" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Ocorreu um erro ao concluir sua inscrição" });
  }
}
