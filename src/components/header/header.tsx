"use client"
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
                    <a className="cursor-pointer flex gap-3 items-center" href="#Home">
                        <img src="/svg/logo.svg" alt="logo de la página" className="w-[45px]" />
                        <h1 className="roboto text-[27px] sp-s"><strong>WordNext</strong></h1>
                    </a>
                    <div className="responsive-navbar">
                        <nav>
                            <ol className="flex list-none gap-3">
                                <li><a href="/#Home">HOME</a></li>
                                <li><a href="/#AboutUs">ABOUT US</a></li>
                                <li><a href="/#Projects">PROJECTS</a></li>
                                <li><a href="/#reservation">RESERVATION</a></li>
                                <li><a href="/#Report_Error">TECHNICAL SUPPORT</a></li>
                                <li><a href="/#contact">CONTACT</a></li>
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
                            <li><a href="/#Home">HOME</a></li>
                            <li><a href="/#AboutUs">ABOUT US</a></li>
                            <li><a href="/#Projects">PROJECTS</a></li>
                            <li><a href="/#reservation">RESERVATION</a></li>
                            <li><a href="/#Report_Error">TECHNICAL SUPPORT</a></li>
                            <li><a href="/#contact">CONTACT</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header