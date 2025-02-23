import Link from "next/link"
import { Logo_onClick } from "@/utils/enlaces"
import '@/css/header/header.css'

function Header(){
    return(
        <header className="p-4 bg-moded text-white sticky top-0 z-50">
            <div className="flex items-center justify-between marginCenter">
                <div className="cursor-pointer flex gap-3 items-center" onClick={Logo_onClick}>
                    <img src="/svg/logo.svg" alt="logo de la página" className="w-[45px]"/>
                    <h1 className="roboto text-[27px] sp-s"><strong>WordNext</strong></h1>
                </div>
                <div>
                    <nav>
                        <ol className="flex list-none gap-3">
                            <li><Link href="#Home">HOME</Link></li>
                            <li><Link href="#">ABOUT US</Link></li>
                            <li><Link href="#">PROJECTS</Link></li>
                            <li><Link href="#">CONTACT</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header