import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    try {
        const { n_web, n_client, email_client, option_qr, typ_web } = await req.json()

        if (!n_web || !n_client || !email_client || !option_qr || !typ_web) {
            return NextResponse.json({ mensaje_error: "Rellene todos los campor" }, { status: 400 })
        }

        const transporter_reservation = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS_USER
            }
        })

        const Body_Reservation = {
            from: process.env.EMAIL_USER,
            to: 'ismaelgq.88@gmail.com',
            subject: "reserva de creación de sitio web",
            text: `Tipo de sitio web : ${typ_web} 
                    \n Nombre del sitio web : ${n_web}
                    \n Nombre del Cliente : ${n_client}
                    \n Correo del cliente : ${email_client} 
                    \n Codigo QR : ${option_qr}`
        }

        await transporter_reservation.sendMail(Body_Reservation)
        return NextResponse.json({ mensaje_error: "Se envio con exito la reserva" },{status: 200})
    }
    catch (error_reservation) {
        console.error("Error enviando el correo:", error_reservation);
        return NextResponse.json({ mensaje: "Error al enviar el correo" }, { status: 500 });
    }

}