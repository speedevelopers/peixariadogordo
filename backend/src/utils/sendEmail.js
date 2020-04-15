// adicione a dependencia
// npm install nodemailer
// === ======= ==========
"use strict";
const nodemailer = require("nodemailer");

/**
 *  data contem os seguintes elementos
 *  to:"maycon123@gmail.com", 
 *  subject: "Ola! Enviado pelo NodeJs ✔", 
 *  text: "Esse email esta sendo enviado pelo NodeJs",
 *  html: "<h1>Posso ainda <strong>definir</strong> uma linha html</h1>",
 */
module.exports = async function sendMail(data) {

  const {to, html} = data

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "speedevelopers@gmail.com" ,
      pass: "JupterNetuno2020",
    }
  });
  
  
  await transporter.sendMail({
    from: '"Speed Developers 👻" <speedevelopers@gmail.com>',
    to: to, 
    subject: "Sua senha - SpeeDevelopers ✔", 
    text: "Obrigado por escolher a Speedevelopers!",
    html: html,
  });
}


