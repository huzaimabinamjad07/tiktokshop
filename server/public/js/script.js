const buyButton = document.querySelector("#buy-button");

function sendEmail() {
  const params = {
    from_name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send("service_hzcp9i6", "template_3lo5ckp", params).then(
    function () {
      document.querySelector("#email-message").textContent =
        "✅ Email Sent Successfully!";
      setTimeout(() => {
        document.querySelector("#email-message").textContent = "";
        document.querySelector("form").clear();
      }, 2000);
    },
    function () {
      document.querySelector("#email-message").textContent =
        "❌ Failed to send message!";
      setTimeout(() => {
        document.querySelector("#email-message").textContent = "";
        document.querySelector("form").clear();
      }, 2000);
    }
  );
}

buyButton.addEventListener("click", () => {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 1, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      console.log(url);
      //   window.location = url;
    })
    .catch((e) => {
      console.log(e.error);
    });
});
