require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = sendMail = (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let emailArgs = {
    to: process.env.SEND_TO,
    subject: `Website Contact - ${name}`,
    text: `${name} at ${email} with message: ${message}`,
  };

  transporter.sendMail(emailArgs, function (err, data) {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log("Email Sent");
    }
  });
};
