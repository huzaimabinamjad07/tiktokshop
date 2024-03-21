function sendEmail() {
  const params = {
    from_name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send("service_y6qkl6i", "template_j2oenkf", params).then(
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
