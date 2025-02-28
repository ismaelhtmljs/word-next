import Link from 'next/link'
import '@/css/section/sector-6/error_report.css'

export default function ERROR_Report() {
    return (
        <div className='bg-moded-report-error p-20 flex justify-center items-center' id='Report_Error' translate='no'>
            <div className='flex gap-5 responsive-sector-report-error flex-row-reverse'>
                <div className='flex flex-col gap-5 w-auto size-widht-responsive-report-error text-center'>
                    <div>
                        <h2 className='palanquin-s text-moded-bton-report-error text-[28px]'>HAS TENIDO PROBLEMAS CON NUESTRO SITIO WEB?</h2>
                    </div>
                    <div className='text-[18px]'>
                        <p>Si has experimentado algún problema o inconveniente mientras navegabas por nuestro sitio web, no dudes en comunicarte con nosotros. Puedes contactar directamente al programador y soporte técnico a través de WhatsApp al <strong><a href="https://wa.me/51978680283">+51 978-680-283 </a></strong> o enviar un correo electrónico mediante nuestra sección de contacto al soporte. Estamos aquí para ayudarte y resolver cualquier inconveniente lo antes posible. ¡Tu experiencia es importante para nosotros!</p>
                    </div>
                    <div>
                        <Link href="/pages/support" className='bg-yellow-300 p-2 rounded-md text-center w-full flex justify-center hover-bton-mod'>
                            <p className='text-lg palanquin-s text-moded-bton-reservation'>Contactarse con el soporte técnico</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}