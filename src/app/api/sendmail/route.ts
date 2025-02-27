
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    try{
        const {nombre,email,mensaje} = await req.json();
        
        if (!nombre || !email || !mensaje) {
            return NextResponse.json({message: "RELLENE LOS CAMPOS"}, {status: 400})
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS_USER
            }
        })

        const MailOptions = {
            from : process.env.EMAIL_USER,
            to: "ismaelgq.88@gmail.com",
            subject: "Enviar formulario para contactarse",
            text: `Nombre del cliente : ${nombre} \n Correo del cliente : ${email} \n Mensaje : ${mensaje}`
        }

        await transporter.sendMail(MailOptions);
        return NextResponse.json({mensjae : "Se envio el formulario para contactarse"},{status: 200})
    }
    catch(error){
        console.error("Error enviando el correo:", error);
        return NextResponse.json({ mensaje: "Error al enviar el correo" }, { status: 500 });
    }
}