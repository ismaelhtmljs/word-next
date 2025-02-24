function Formulario(){
    return(
        <div className="w-full" translate="no">
            <div>
                <form action="mailto:ismaelgq.88@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-5">
                    <input type="text" name="name" required placeholder="name: " className="p-input"/>
                    <input type="email" name="email" required placeholder="Email addres: " className="p-input"/>
                    <input type="text" name="mensaje" required placeholder="Message" className="p-input"/>
                    <input type="submit" value="Enviar" className="bg-green-300 p-input"/>
                </form>
            </div>
        </div>
    )
}

export default Formulario