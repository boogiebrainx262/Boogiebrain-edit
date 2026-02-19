const paystack = require("../config/paystack")

exports.initializePayment = async (req, res) => {
  try {
    const { email, amount } = req.body

    if (!email || !amount) {
      return res.status(400).json({
        error: "Email and amount are required"
      })
    }

    const response = await paystack.post("/transaction/initialize", {
      email,
      amount: amount * 100
    })

    res.json(response.data)

  } catch (error) {
    console.log("FULL ERROR:", error.response?.data || error.message)

    res.status(500).json({
      error: error.response?.data || error.message
    })
  }
}
