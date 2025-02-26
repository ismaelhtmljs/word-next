import MainReservation from "./main"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import '@/css/media-queri/style.css'
import './style.css'

export default function ReservationPag(){
    return(
        <div>
            <div>
                <Header/>
                <MainReservation/>
                <Footer/>
            </div>
        </div>
    )
}