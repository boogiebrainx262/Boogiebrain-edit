async function payNow() {
  const email = document.getElementById("email").value
  const amount = document.getElementById("amount").value

  try {
    const response = await fetch(
      "https://boogiebrain-backend.onrender.com/api/payments/initialize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          amount: amount
        })
      }
    )

    const data = await response.json()

    if (data.data.authorization_url) {
      window.location.href = data.data.authorization_url
    }

  } catch (error) {
    alert("Payment failed")
  }
}
