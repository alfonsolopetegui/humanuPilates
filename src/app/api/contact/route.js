export const runtime = 'nodejs';

console.log("LA RUTA CONTACT SE ESTÁ CARGANDO");

import { Resend } from 'resend';

export async function POST(req) {
  const { nombre, email, mensaje } = await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  

  try {
    await resend.emails.send({
      from: 'Consulta Web <onboarding@humanupilates.com>',
      to: process.env.EMAIL_USER,
      reply_to: email,
      subject: `Nuevo mensaje web de ${nombre} (${email})`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${mensaje}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Mensaje enviado' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), {
      status: 500,
    });
  }
}
