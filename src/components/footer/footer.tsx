import '@/css/footer/footer.css'

function Footer() {
    return (
        <footer className="p-10 bg-footer">
            <div className="text-center flex flex-col gap-7 text-[14px]">
                <div className="flex justify-center gap-3">
                    <a href="#Home" className='hover:text-cyan-400'>Home</a>
                    <a href="#AboutUs" className='hover:text-cyan-400'>ABOUT US</a>
                    <a href="#Projects" className='hover:text-cyan-400'>PROJECTS</a>
                    <a href="#contact" className='hover:text-cyan-400'>CONTACT</a>
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