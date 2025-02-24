import '@/css/footer/footer.css'

function Footer(){
    return(
        <footer className="p-10 bg-footer">
            <div className="text-center flex flex-col gap-7 text-[14px]">
                <div className="flex justify-center gap-3">
                    <a href="#" className='hover:text-cyan-400'>Home</a>
                    <a href="#" className='hover:text-cyan-400'>ABOUT US</a>
                    <a href="#" className='hover:text-cyan-400'>PROJECTS</a>
                    <a href="#" className='hover:text-cyan-400'>CONTACT</a>
                </div>
                <div>
                    <p>Copyright &copy;2025 All rights reserved - WordNext</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer