export default async function handler(req, res) {
  if (req.method === "GET") {
    let balance = await fetch("https://api.stripe.com/v1/balance", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.STRIPE_SECRET_KEY,
      },
    });
    balance = await balance.json();
    try {
      res
        .status(200)
        .json((balance.available[0].amount + balance.pending[0].amount) / 100);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
