const nodemailer = require("nodemailer");

/**
 * @description - This function is used to send email with nodemailer
 * @param {String} email
 * @param {String} tempPassword
 * @returns
 */
const sendEmail = async (email, tempPassword) => {
  //create transpoter object with nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_MAIL,
      pass: process.env.ADMIN_MAILAPP_PASSWORD,
    },
  });

  //create mail options object with nodemailer with all data to send email
  const mailOptions = {
    from: `SurgeGlobal Assigment ${process.env.ADMIN_MAIL}`,
    to: `${email}`,
    subject: "Surge Global Assignment Logins",
    html: `<h1>Welcome to Surge Global Assignment</h1>
        <strong>Your temporary password is ${tempPassword}</strong>
        <p>Use this link for sign in  <a href="https://www.w3schools.com"></a> <a href="http://localhost:3000/signIn">Surge Global Assignment</a></p>
        `,
  };

  //send email with nodemailer
  const result = await transporter.sendMail(mailOptions);

  if (result) {
    return true;
  }
};

module.exports = sendEmail;
