import { subscribe } from "../../models/Subscribe";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function FindSubscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cpf } = req.body;

  try {
    const mySubscribe = await subscribe.findOne({ cpf });

    return res.status(200).json(mySubscribe);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Ocorreu um erro ao buscar as informações" });
  }
}
