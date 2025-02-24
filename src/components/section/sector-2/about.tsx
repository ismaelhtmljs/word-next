import '@/css/section/sector-2/about.css'

export default function About_US() {
    return (
        <div className='mt-[8%] responsive-about' id='AboutUs'>
            <div>
                <div className='g-d p-14 reponsive-area-about'>
                    <div className='flex flex-col'>
                        <h2 className='text-[49px] palanquin text-size-movil'><strong>SOBRE WORDNEXT</strong></h2>
                        <hr className="hr-moded-sector-2 mt-[10px] mb-[10px]" />
                        <div className="text-[25px] l-h-sector-2">
                            <p className='mt-3 mb-3'>Bienvenido a WordNext, tu aliado ideal en la creación de sitios web modernos y funcionales.</p>
                            <p className='mt-3 mb-3'>Nos especializamos en desarrollar plataformas web optimizadas, brindándote soluciones personalizadas para destacar en el mundo digital y potenciar tu presencia en línea.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/Image_2.jpg" alt="" className='rounded-lg size-img-sector-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}