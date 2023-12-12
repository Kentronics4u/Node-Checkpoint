const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your@gmail.com",
    pass: "",
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  to: "yourfriend@yahoomail.com",
  subject: "Test Email",
  text: "This is a test email from Node.js using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  }
  else{
    console.log("Message sent: ", info.response);
  }
});
