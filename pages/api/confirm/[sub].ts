import { subscribe } from "../../../models/Subscribe";
import mercadopago from "mercadopago";
import { configs } from "../../../configs/configs";
import type { NextApiRequest, NextApiResponse } from "next";

mercadopago.configure({
  access_token:
    configs.ambient === "dev" ? configs.mp_test : configs.mp_production,
});

async function saveStatus(id: string, method: string, sub: string) {
  await subscribe.findOneAndUpdate(
    { _id: sub },
    { paymend_id: id, payment_method: method, status: "confirmed" }
  );
}

export default function Confirm(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const { sub } = req.query;
  try {
    const subusc = sub.toString();
    if (data) {
      mercadopago.payment
        .findById(data.id)
        .then((data) => {
          const { response } = data;
          const status = response.status;
          const payment_id = response.payment_type_id;
          const payment_method = response.payment_method_id;

          return res.status(201).json({ message: "OK" });
        })
        .catch((err) => {
          return res.status(400).json({ message: "Error" });
        });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
}
