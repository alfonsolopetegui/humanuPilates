// /app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { nombre, email, mensaje } = await req.json();

  // Configura el transporte de nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Cambia esto por tu SMTP
    port: 587,
    secure: false, // true para puerto 465, false para otros puertos
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Destinatario
    subject: `Hola Humanu! Tenés un nuevo mensaje de ${nombre}`,
    text: mensaje,
    html: `<p>${mensaje}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Mensaje enviado' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), { status: 500 });
  }
}
