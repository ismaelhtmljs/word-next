"use client"
import { github_project_1, github_project_1_repo, github_project_2, github_project_2_repo } from "@/utils/enlaces"
import '@/css/section/sector-3/projects.css'

export default function Projects() {
    return (
        <div id="Projects" translate="no">
            <div>
                <div className="text-center">
                    <h2 className="text-[1.953em] palanquin-s">PROJECTS DONE</h2>
                </div>
                <div className="flex flex-wrap gap-5 justify-center p-5 reponsive-area">
                    <div className="w-[45%] flex flex-col gap-5 p-4 bg-gray-300 rounded-xl responsive-size">
                        <div>
                            <img src="/images/projects/Project_1.png" alt="Imagen del primer proyecto" className="rounded-2xl"/>
                        </div>
                        <div className="pl-4 text-xl">
                            <p>Proyecto web de la página de <em><strong>Project IDK</strong></em></p>
                            <p>Enlace : <span className="cursor-pointer bg-yellow-300 p-1 rounded-md hover-animation-bton-sector-2" onClick={github_project_1}>Project IDK</span></p>
                            <p>Repositorio de Github : <span className="cursor-pointer bg-yellow-300 p-1 rounded-md hover-animation-bton-sector-2" onClick={github_project_1_repo}>Github</span></p>
                        </div>
                    </div>
                    <div className="w-[45%] flex flex-col gap-5 p-4 bg-gray-300 rounded-xl responsive-size">
                        <div>
                            <img src="/images/projects/Project_2.png" alt="Imagen del segundo proyecto" className="rounded-2xl b-img-moded"/>
                        </div>
                        <div className="pl-4 text-xl">
                            <p>Proyecto web de la página de <strong><em>Abstract</em></strong></p>
                            <p>Enlace : <span className="cursor-pointer bg-yellow-300 p-1 rounded-md hover-animation-bton-sector-2" onClick={github_project_2}>Abstract Web</span></p>
                            <p>Repositorio de Github : <span className="cursor-pointer bg-yellow-300 p-1 rounded-md hover-animation-bton-sector-2" onClick={github_project_2_repo}>Github</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}