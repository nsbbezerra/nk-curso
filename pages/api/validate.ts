import { subscribe } from "../../models/Subscribe";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Validate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, paymend_id, payment_method, status } = req.body;

  try {
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

    const sub = await subscribe.findOneAndUpdate(
      { _id: id },
      { paymend_id, payment_method, status: statusSub },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "O status da sua inscrição foi alterado", sub });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Ocorreu um erro ao validar o pagamento" });
  }
}
