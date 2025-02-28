import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Soporte from "./main"
import './style.css'
import '@/css/media-queri/style.css'

export default function SoporteTecnico(){
    return(
        <div>
            <div>
                <Header/>
                <Soporte/>
                <Footer/>
            </div>
        </div>
    )
}