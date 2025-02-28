import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    try {
        const {name, email, message_problem, phone} = await req.json();
        if (!name || !email || !message_problem || !phone) {
            return NextResponse.json({ mensaje: "Rellene todos los campo" }, { status: 400 })
        }

        const transportador = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS_USER
            }
        })

        const body_support = {
            from: process.env.EMAIL_USER,
            to: 'ismaelgq.88@gmail.com',
            subject: 'Soporte Técnico',
            text: ` Nombre del cliente : ${name}\n
                Correo del cliente : ${email}\n
                Problema del cliente : ${message_problem}\n
                Número del cliente : ${phone}`
        }

        await transportador.sendMail(body_support);
        return NextResponse.json({ mensaje: "Se envio el formulario para soporte técnico" }, { status: 200 })
    }
    catch (error_support) {
        console.error("Error enviando el correo:", error_support);
        return NextResponse.json({ mensaje: "Error al enviar el correo" }, { status: 500 });
    }
}