const paystack = require("../config/paystack")

exports.initializePayment = async (req, res) => {
  try {
    const { email, amount } = req.body

    const response = await paystack.post("/transaction/initialize", {
      email,
      amount: amount * 100
    })

    res.json(response.data)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}
