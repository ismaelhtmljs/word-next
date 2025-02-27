"use client"
import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";

function Formulario(){
    const [loading, setlodaing] = useState(false)
    const [mensaje,setMensaje] = useState("")
    const [isDEBUGactive, setDEBUGactive] = useState(false)

    const EnviarContacto = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setlodaing(true)

        // informacion para el envio
        const form = event.currentTarget;
        const nombre = (form.elements.namedItem('name') as HTMLInputElement)?.value;
        const correo = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        const message = (form.elements.namedItem('mensaje') as HTMLInputElement)?.value;
        
        const response = await fetch("/api/sendmail",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, email: correo, mensaje: message })
        })

        if (response.ok) {
            setMensaje("Se envio el formulario")
            setDEBUGactive(!isDEBUGactive)
            form.reset()
        }
        else{
            setMensaje("Hubo un error al enviar el mensaje")
        }

        setlodaing(false)
    }

    const closeDEBUG = () => {
        setDEBUGactive(false)
    }

    return(
        <div className="w-full" translate="no">
            <div>
                <form onSubmit={EnviarContacto} method="post" encType="text/plain" className="flex flex-col gap-5">
                    <input type="text" name="name" required placeholder="name: " className="p-input"/>
                    <input type="email" name="email" required placeholder="Email addres: " className="p-input"/>
                    <input type="text" name="mensaje" required placeholder="Message" className="p-input"/>
                    <button type="submit" value="Enviar" className="bg-green-300 p-input cursor-pointer">
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                    {mensaje && <p className={`text-center palanquin text-2xl txt-responsive-devbug${isDEBUGactive ? "-active" : ''}`}>{mensaje}<TbXboxXFilled onClick={closeDEBUG} className="text-red-500"/></p>}
                </form>
            </div>
        </div>
    )
}

export default Formulario