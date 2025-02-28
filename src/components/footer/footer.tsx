import '@/css/footer/footer.css'

function Footer() {
    return (
        <footer className="p-10 bg-footer" translate="no">
            <div className="text-center flex flex-col gap-7 text-[14px]">
                <div className="flex justify-center gap-3 list-footer-responsive">
                    <a href="/#Home" className='hover:text-cyan-400'>Home</a>
                    <a href="/#AboutUs" className='hover:text-cyan-400'>ABOUT US</a>
                    <a href="/#Projects" className='hover:text-cyan-400'>PROJECTS</a>
                    <a href="/#reservation" className='hover:text-cyan-400'>RESERVATION</a>
                    <a href="/#Report_Error" className='hover:text-cyan-400'>TECHNICAL SUPPORT</a>
                    <a href="/#contact" className='hover:text-cyan-400'>CONTACT</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Creador y Programador Web : Ismael Guerrero</p>
                    <p>CEO : Matias Jibaja</p>
                </div>
                <div>
                    <p>Copyright &copy;2025 All rights reserved - WordNext</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer