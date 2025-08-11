import { useTranslation } from "react-i18next";
import portada from "../imgs/1.webp"
import project12 from "../imgs/2.webp"
import project13 from "../imgs/3.webp"
import project14 from "../imgs/4.webp"
import { useState } from "react";
import { ProjectModal } from "./Modals/ProjectModal";

type projectType={
    imgs:string[],
    title:string,
    descriptionTitle:string,
    description:string,
    descriptionLong:string,
    technologies:string[]
}

export function Projects(){
    const [t]=useTranslation()
    const [projectSelected, setProjectSelected] = useState<projectType|null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal=()=>setIsModalOpen(false);

    const projects = [
        {
            "imgs":[portada,project12,project13,project14],
            "title":t(`project1Title`),
            "descriptionTitle":t(`descriptionTitle`),
            "description":t(`project1Desc`),
            "descriptionLong":t(`project1LongDesc`),
            "technologies":["steam","slack","vscode"]
        },
        {
            "imgs":[portada,project14,project13,project12],
            "title":t(`project2Title`),
            "descriptionTitle":t(`descriptionTitle`),
            "description":t(`project2Desc`),
            "descriptionLong":t(`project2LongDesc`),
            "technologies":["steam","slack","vscode"]
        },
        {
            "imgs":[portada,project13,project14,project12],
            "title":t(`project3Title`),
            "descriptionTitle":t(`descriptionTitle`),
            "description":t(`project3Desc`),
            "descriptionLong":t(`project3LongDesc`),
            "technologies":["steam","slack","vscode"]
        }
    ]
    
    return(
        <div className="flex flex-col items-center">
            <h3 id="projects" className="scroll-mt-16 text-4xl font-bold bg-gradient-to-r from from-pink-300 to-pink-400 bg-clip-text text-transparent mt-36">{t(`projectsTitle`)}</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-400 to-pink-400 mt-2 rounded-full"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 max-w-screen-xl mx-auto">
                {projects.map((project,i)=>(
                    <div key={i} onClick={()=>{setProjectSelected(project); setIsModalOpen(true); console.log(isModalOpen)}} className="flex flex-col bg-black/40 backdrop-blur-xs p-4 rounded-2xl shadow-sm shadow-violet-400 hover:scale-105 hover:shadow-md transition duration-300 hover:bg-black/60 mx-6 max-w-100 cursor-pointer">
                        <img className="rounded-sm h-45 w-full " src={project.imgs[0]} alt="portada"/>
                        <h5 className="text-2xl my-2 pr-4">{project.title}</h5>
                        <p className="text-sm pr-4 min-h-24">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((_,i)=>(
                                <div key={i} className="border border-violet-500 p-2 rounded-2xl text-xs">
                                    <p>{project.technologies[i]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal isOpen={isModalOpen} onClose={closeModal} projectSelected={projectSelected}/>
        </div>
    )
}