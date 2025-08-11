import { useTranslation } from "react-i18next";
import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiBootstrap, SiTailwindcss, SiNestjs, SiMysql, SiMongodb } from "react-icons/si";
export function Skills(){
    const [t] = useTranslation();
    const iconClass = "text-2xl h-10 w-10 text-violet-600";
    const skills= [
        {name:"Html5",icon:<FaHtml5 className={iconClass}/> },
        {name:"Css3",icon:<FaCss3 className={iconClass}/>},
        {name:"JavaScript",icon:<FaJs className={iconClass}/>},
        {name:"TypeScript",icon:<SiTypescript className={iconClass}/>},
        {name:"Bootstrap",icon:<SiBootstrap className={iconClass}/>},
        {name:"React",icon:<FaReact className={iconClass}/>},
        {name:"Tailwind",icon:<SiTailwindcss className={iconClass}/>},
        {name:"Git",icon:<FaGitAlt className={iconClass}/>},
        {name:"GitHub",icon:<FaGithub className={iconClass}/>},
        {name:"Nestjs",icon:<SiNestjs className={iconClass}/>},
        {name:"mySql",icon:<SiMysql className={iconClass}/>},
        {name:"MongoDB",icon:<SiMongodb className={iconClass}/>}
    ]
    return(
        <div className="flex flex-col">
            <h3 id="skills" className="scroll-mt-16 text-4xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 bg-clip-text text-transparent text-center mt-36">{t(`skillsTitle`)}</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-violet-400 mx-auto text-center mt-2 rounded-full"></div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-5 max-w-screen-xl mx-auto px-4">
                {skills.map((skill,i)=>(
                    <div key={i} className="flex items-center justify-center rounded-2xl backdrop-blur-xs bg-black/40 gap-3 p-10 shadow-sm shadow-violet-400 hover:scale-105 hover:shadow-violet-400 hover:shadow-md hover:bg-black/50 transition duration-300 cursor-default">
                        <p className="text-2xl h-10 w-10">{skill.icon}</p>
                        <p className="text-2xl">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}