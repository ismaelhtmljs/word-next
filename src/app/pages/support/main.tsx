"use client"
import React from "react"
import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";

function Soporte(){
    const [loading, setloading] = useState(false)
    const [isDebugActive, setDebugActive] = useState("")
    const [isDEBUGactive, setDEBUGactive] = useState(false)

    const SupportSendMail = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setloading(true)

        const form = event.currentTarget;
        const nombre = (form.elements.namedItem('nombre') as HTMLInputElement)?.value;
        const correo = (form.elements.namedItem('correo') as HTMLInputElement)?.value;
        const problem_client = (form.elements.namedItem('problem_client') as HTMLInputElement)?.value;
        const n_phone = (form.elements.namedItem('n_phone') as HTMLInputElement)?.value || "decidio no colocar su número";

        const respuesta = await fetch('/api/sendsupport',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: nombre, email: correo, message_problem: problem_client, phone: n_phone})
        })

        if (respuesta.ok) {
            setDebugActive("Se envio el reporte al soporte técnico")
            setDEBUGactive(!isDEBUGactive)
        }else{
            setDebugActive("Hubo un problema al enviar el reporte, actualize el sitio web y vuelva a intentarlo, si sigue haci, contactese por medio del número de whatsapp (posible error en el lado del servidor)")
        }

        setloading(false)
    }

    const closeDEBUG = () => {
        setDEBUGactive(false)
    }

    return(
        <main className="m-animated-opacity" translate="no">
            <div className="p-6">
                <div className="bg-yellow-300 w-[85%] w-size-responsive-reservation marginCenter rounded-xl p-4">
                    <form onSubmit={SupportSendMail} method="post" className="flex flex-col gap-5 p-2 items-center">
                        <div className="flex flex-col gap-3 text-center ">
                            <h2 className="text-2xl palanquin">Has tenido un incoveniente?</h2>
                            <p className="color-text-soporte">Se necesita que rellene todos los campos para poder ayudarle</p>
                        </div>
                        <div className="w-full flex gap-2 items-center widht-responsive-soport">
                            <p className="text-lg system-font">Su nombre : </p>
                            <input type="text" name="nombre" className="p-1 w-[79%] rounded-md size-moded-responsive-soport" required/>
                        </div>
                        <div className="w-full flex gap-2 widht-responsive-soport">
                            <p className="text-lg system-font">Su dirección de Correo : </p>
                            <input type="email" name="correo" className="p-1 w-[79%] rounded-md size-moded-responsive-soport" required/>
                        </div>
                        <div className="w-full flex gap-2 widht-responsive-soport">
                            <p className="text-lg system-font">Escriba su problema :</p>
                            <input type="text" name="problem_client" className="p-1 w-[79%] rounded-md size-moded-responsive-soport" required/>
                        </div>
                        <div className="w-full flex gap-2 widht-responsive-soport">
                            <p className="text-lg system-font">Su Número <em>(opcional)</em> : </p>
                            <input type="text" name="n_phone" className="p-1 w-[79%] rounded-md size-moded-responsive-soport"/>
                        </div>
                        <div className="w-full flex justify-center items-center flex-col gap-2">
                            <button type="submit" value="Enviar la reserva" className="bg-green-300 p-input p-2 text-center cursor-pointer w-full rounded-lg">
                            {loading ? "enviando..." : "enviar"}
                            </button>
                            {isDebugActive && <p className={`text-center palanquin text-2xl txt-responsive-devbug${isDEBUGactive ? "-active" : ''}`}>{isDebugActive}<TbXboxXFilled onClick={closeDEBUG} className="text-red-500"/></p>}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Soporte