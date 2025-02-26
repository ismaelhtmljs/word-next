import Main from "@/components/section/main"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import '@/css/media-queri/style.css'

export default function Home(){
  return(
    <div>
      <div>
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}