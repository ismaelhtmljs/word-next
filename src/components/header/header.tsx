"use client"
import Link from "next/link"
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import '@/css/header/nav.css'
import '@/css/header/header.css'

function Header() {

    const [isNavActive, setNavActive] = useState(false)

    const ToggleMenu = () => {
        setNavActive(!isNavActive)
    }

    const CloseMenu = () => {
        setNavActive(false)
    }

    return (
        <>
            <header className="p-4 bg-moded text-white sticky top-0 z-50" translate="no">
                <div className="flex items-center justify-between marginCenter responsive-header">
                    <div className="hidden responsive-menu-toggle">
                        <IoMenu className="w-[35px] h-auto responsive-menu" onClick={ToggleMenu}/>
                    </div>
                    <a className="cursor-pointer flex gap-3 items-center" href="#home">
                        <img src="/svg/logo.svg" alt="logo de la página" className="w-[45px]" />
                        <h1 className="roboto text-[27px] sp-s"><strong>WordNext</strong></h1>
                    </a>
                    <div className="responsive-navbar">
                        <nav>
                            <ol className="flex list-none gap-3">
                                <li><Link href="#Home">HOME</Link></li>
                                <li><Link href="#AboutUs">ABOUT US</Link></li>
                                <li><Link href="#Projects">PROJECTS</Link></li>
                                <li><Link href="#contact">CONTACT</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <div className={`nav-res${isNavActive ? '-active' : ''}`}>
                <div>
                    <IoCloseOutline onClick={CloseMenu} className="close-menu-size" />
                </div>
                <div className="marginCenter">
                    <nav>
                        <ol className="flex list-none gap-3 responsive-list-nav">
                            <li><Link href="#Home">HOME</Link></li>
                            <li><Link href="#AboutUs">ABOUT US</Link></li>
                            <li><Link href="#Projects">PROJECTS</Link></li>
                            <li><Link href="#contact">CONTACT</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header