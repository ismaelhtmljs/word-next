"use client"
import '@/css/section/sector-4/contact.css'
import { Instagram_enlace, Instagram_enlace_jibaja } from '@/utils/enlaces';
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import Formulario from './form/formulario';

export default function Contact() {
    return (
        <div className='bg-gray-200 p-[35px]' id='contact'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='flex flex-col gap-4 text-center'>
                    <div>
                        <h2 className='text-[1.953em] palanquin-s'>CONTACT</h2>
                    </div>
                    {/*  */}
                    <div className='flex flex-row gap-5 reponsive-flex'>
                        <div className='items-center flex gap-2 justify-center'>
                            <FaPhone className='text-color' />
                            <a href="https://wa.me/51978680283" className='text-color hover:underline'>+51 978-680-283 (Ismael Guerrero)</a>
                        </div>
                        <div className='items-center flex gap-2 justify-center'>
                            <CgMail className='text-color' />
                            <a href="mailto:ismaelgq.88@gmail.com" className='text-color hover:underline'>ismaelgq.88@gmail.com</a>
                        </div>
                        <div className='items-center flex gap-2 justify-center'>
                            <FaInstagram className='text-color' />
                            <a onClick={Instagram_enlace} className='text-color hover:underline'>Ismaelxd74</a>
                        </div>
                        <div className='items-center flex gap-2 justify-center'>
                            <FaPhone className='text-color' />
                            <a href="https://wa.me/51930848164" className='text-color hover:underline'>+51 930-848-164 (Matias Jibaja)</a>
                        </div>
                        <div className='items-center flex gap-2 justify-center'>
                            <FaInstagram className='text-color' />
                            <a onClick={Instagram_enlace_jibaja} className='text-color hover:underline'>mathiasx13</a>
                        </div>
                    </div>
                </div>
                {/*  */}
                <Formulario />
            </div>
        </div>
    )
}