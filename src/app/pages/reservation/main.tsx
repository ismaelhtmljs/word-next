"use client"
import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";

function MainReservation(){
    const [loading, setloading] = useState(false)
    const [debugTXT, setDebugTXT] = useState("")
    const [isDEBUGactive, setDEBUGactive] = useState(false)

    const HandleMailto = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setloading(true)

        // para el envio del formulario
        const form = event.currentTarget;
        const nameWeb = (form.elements.namedItem('name_web') as HTMLInputElement)?.value;
        const nameClient = (form.elements.namedItem('name_client') as HTMLInputElement)?.value;
        const correo = (form.elements.namedItem('correo') as HTMLInputElement)?.value;
        const qr_Option = (form.elements.namedItem('codigo_QR') as HTMLInputElement)?.value || 'no seleccionado';
        const Type_web = (form.elements.namedItem('type_web') as HTMLInputElement)?.value || 'sitio web';

        const reponse_reservation = await fetch("/api/sendreservation",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({n_web: nameWeb, n_client: nameClient, email_client: correo, option_qr: qr_Option, typ_web: Type_web})
        })

        if (reponse_reservation.ok) {
            setDebugTXT("Se envio la reserva con éxito")
            setDEBUGactive(!isDEBUGactive)
        }
        else{
            setDebugTXT("hubo un problema al enviar la reserva")
        }

        setloading(false)
    }

    const closeDEBUG = () => {
        setDEBUGactive(false)
    }
    
    return(
        <main className="m-animated-opacity p-4 flex justify-center" translate="no">
            <div className="bg-reservation-mod h-full w-[50%] w-size-responsive-reservation">
                <div className="p-4">
                    <form onSubmit={HandleMailto} method="post" className="flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xl text-center"><strong>Tipo de sitio web</strong>
                                <input type="text" name="type_web" placeholder="" className="p-2 w-full" required/>
                            </label>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xl text-center"><strong>Nombre de su sitio web : </strong>
                                <input type="text" name="name_web" placeholder="" className="p-2 w-full" required/>
                            </label>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xl text-center"><strong>Su Nombre : </strong>
                                <input type="text" name="name_client" placeholder="" className="p-2 w-full" required/>
                            </label>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xl text-center"><strong>La dirección de su correro : </strong>
                                <input type="email" name="correo" className="p-2 w-full" required/>
                            </label>
                        </div>
                        <div className="w-full flex flex-col gap-2 items-center">
                            <label className="text-xl text-center"><strong>Desea que su sitio web tenga Codigo QR?</strong></label>
                            <div className="flex gap-4">
                                <input type="radio" name="codigo_QR" value="si"/><p>Si</p>
                                <input type="radio" name="codigo_QR" value="no"/><p>No</p>
                            </div>
                        </div>
                        <button type="submit" value="Enviar la reserva" className="bg-green-300 p-input p-2 text-center cursor-pointer">
                            {loading ? "enviando..." : "enviar"}
                        </button>
                        {debugTXT && <p className={`text-center palanquin text-2xl txt-responsive-devbug${isDEBUGactive ? "-active" : ''}`}>{debugTXT}<TbXboxXFilled onClick={closeDEBUG} className="text-red-500"/></p>}
                    </form>
                </div>
            </div>
        </main>
    )
}

export default MainReservation