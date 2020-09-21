const nodemailer = require('nodemailer');

const sendEmail = async options => {
  //create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  //define the email options
  const mailOptions = {
    from: 'shitij talan <shitijtalan@gmail.com>',
    to: options.email,
    text: options.message,
    subject: options.subject
  };
  //actually send email
  await transporter.sendEmail(mailOptions);
};

module.exports = sendEmail;
