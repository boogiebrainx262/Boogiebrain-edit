const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
const paymentRoutes = require("./routes/paymentRoutes")
app.use("/api/payments", paymentRoutes)

// Root route (optional but recommended)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

// VERY IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
