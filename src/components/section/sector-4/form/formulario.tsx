"use client"

function Formulario(){
    const EnviarContacto = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // informacion para el envio
        const form = event.currentTarget;
        const nombre = (form.elements.namedItem('name') as HTMLInputElement)?.value;
        const correo = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        const message = (form.elements.namedItem('mensaje') as HTMLInputElement)?.value;
        
        // para el envio del formulario
        const email = "ismaelgq.88@gmail.com"
        const subject = "Enviar formulario para contactarse"
        const body = `Nombre del cliente : ${nombre} \n Correo del cliente : ${correo} \n Mensaje : ${message}`;

        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    return(
        <div className="w-full" translate="no">
            <div>
                <form onSubmit={EnviarContacto} method="post" encType="text/plain" className="flex flex-col gap-5">
                    <input type="text" name="name" required placeholder="name: " className="p-input"/>
                    <input type="email" name="email" required placeholder="Email addres: " className="p-input"/>
                    <input type="text" name="mensaje" required placeholder="Message" className="p-input"/>
                    <input type="submit" value="Enviar" className="bg-green-300 p-input cursor-pointer"/>
                </form>
            </div>
        </div>
    )
}

export default Formulario