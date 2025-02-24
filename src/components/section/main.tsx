import Initial from "./sector-1/initial"
import About_US from "./sector-2/about"
import Projects from "./sector-3/projects"
import Contact from "./sector-4/contact"

function Main(){
    return(
        <div>
            <div>
                {/*  */}
                <Initial/>
                <About_US/>
                <Projects/>
                <Contact/>
                {/*  */}
            </div>
        </div>
    )
}

export default Main