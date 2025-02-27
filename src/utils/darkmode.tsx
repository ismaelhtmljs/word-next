"use client"
import { useState, useEffect } from "react"

function DarkMode(){

    const [isDarkActive, setDarkActive] = useState<"light" | "dark">("light");
    
    useEffect(() => {
        const uploadThemeSystem = ():void => {
            if (window.matchMedia("@media (prefers-color-scheme: dark)").matches) {
                setDarkActive("dark")
            }
            else{
                setDarkActive("light")
            }
        }

        uploadThemeSystem()
        const media = window.matchMedia("@media (prefers-color-scheme: dark)");
        media.addEventListener("change",uploadThemeSystem)
        return () => {
            media.removeEventListener("change",uploadThemeSystem)
        }
    },[])

    useEffect(() => {
        if (isDarkActive == "dark") {
            document.querySelector('html')?.classList.add('dark')
        }
        else{
            document.querySelector('html')?.classList.remove('dark')
        }
    },[isDarkActive])

    const BtonDarkTheme = ():void => {
        setDarkActive((prevtheme) => (prevtheme === "light" ? "dark" : "light"))
    }

    return(
        <div>
            <div>
                <button type="button" onClick={BtonDarkTheme} className={`style-bton-dark${isDarkActive === "light" ? "-dark" : "-light"}`}>
                    <p>CAMBIAR A TEMA  <span>{isDarkActive === "light" ? "DARK" : "LIGHT"}</span></p>
                </button>
            </div>
        </div>
    )
}

export default  DarkMode