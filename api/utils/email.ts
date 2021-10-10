import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const emailTemplate = (email: string) => `
  <h1>TweetSafer</h1>
  <h3>Validate your email</h3>
  <a href="http://localhost:3000/api/auth/login/${email}">
    <button style="color:blue; padding: 10px;">Validate email</button>
  </a>
`;

export const sendLoginEmail = (email: string) => transporter.sendMail({
  from: "pean.ashley@gmail.com",
  to: email,
  subject: "Validate your email",
  text: "Validate your email",
  html: emailTemplate(email),
});

export const sendRegistrationEmail = (email: string) => transporter.sendMail({
  from: "pean.ashley@gmail.com",
  to: email,
  subject: "Validate your email",
  text: "Validate your email",
  html: emailTemplate(email),
});