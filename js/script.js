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
