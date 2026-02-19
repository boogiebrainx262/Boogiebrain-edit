import axios from "axios";

export const initializePayment = async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: email,
        amount: amount * 100
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

    res.json(response.data);

  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      status: false,
      message: "Payment initialization failed"
    });
  }
};
