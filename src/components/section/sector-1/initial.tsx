import '@/css/section/sector-1/initial.css'

export default function Initial(){
    return(
        <div className="flex bg-slate-500 responsive-section" id='Home' translate="no">
            <div className="Fondo_initial">
                <img src="/images/Image_1.jpg" alt="imagen de codigo creando una pagina web" className="img-s"/>
            </div>
            <div className="text-center bg-moded-initial rounded-l-2xl p-2 content-center rounde responsive-rounded">
                <div>
                    <h1 className="text-[79px] letter-mod media-text"><strong>Impulsa tu presencia online con <span className='bg-animated'>WordNext</span></strong></h1>
                </div>
                <hr className='hr-moded mb-[10px] mt-[10px]'/>
                <div>
                    <h2 className="text-[25px] media-text_des">Creamos sitios web rápidos, eficientes y a medida, con código optimizado para un rendimiento excepcional.</h2>
                </div>
            </div>
        </div>
    )
}