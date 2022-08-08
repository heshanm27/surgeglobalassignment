const nodemailer = require("nodemailer");

const sendEmail = async (email, tempPassword) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_MAIL,
      pass: process.env.ADMIN_MAILAPP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `SurgeGlobal Assigment ${process.env.ADMIN_MAIL}`,
    to: `${email}`,
    subject: "Surge Global Assignment Logins",
    html: `<h1>Welcome to Surge Global Assignment</h1>
        <strong>Your temporary password is ${tempPassword}</strong>
        <p>Use this link for sign in  <a href="https://www.w3schools.com"></a> <a href="http://localhost:3000/signIn">Surge Global Assignment</a></p>
        `,
  };

  const result = await transporter.sendMail(mailOptions);

  if (result) {
    return true;
  }
};

module.exports = sendEmail;
