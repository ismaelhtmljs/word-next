import '@/css/section/sector-5/reserva.css'
import Link from 'next/link'

export default function Reservation(){
    return(
        <div className="bg-reservation p-6" id='reservation' translate='no'>
            <div className='flex gap-4 items-center responsive-reservation '>
                <div className='flex flex-col gap-5 w-[85%]'>
                    <div className='text-center'>
                        <h1 className='text-[38px] palanquin-s'>Realiza tu reserva ahora y personaliza el diseño tu página web a tu medida.</h1>
                    </div>
                    <div>
                        <p className='system-font text-[20px]'>Indícanos las características que deseas para tu página web y agenda tu reserva de forma rápida y sencilla. Nos pondremos en contacto contigo para hacer realidad tu proyecto.</p>
                    </div>
                    <div className='p-2 w-full mt-5 mb-2'>
                        <Link href="./pages/reservation/" className='bg-yellow-300 p-2 rounded-md text-center w-full flex justify-center hover-bton-mod'>
                            <span className='text-lg palanquin-s text-moded-bton-reservation'>hacer una reserva</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/images/Image_3.jpg" alt="chica haciendo una reserva por online" className='rounded-xl image-responsive-reserva'/>
                </div>
            </div>
        </div>
    )
}