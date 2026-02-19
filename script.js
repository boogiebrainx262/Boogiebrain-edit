async function payNow() {
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;

  if (!email || !amount) {
    alert("Please enter email and amount");
    return;
  }

  try {
    const response = await fetch(
      "https://boogiebrain-backend.onrender.com/api/payments/initialize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          amount
        })
      }
    );

    const data = await response.json();

    console.log("Backend response:", data);

    if (data.status && data.data.authorization_url) {
      window.location.href = data.data.authorization_url;
    } else {
      alert("Payment failed: " + data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Payment failed");
  }
}
