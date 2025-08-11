import { useTranslation } from "react-i18next";
import { MailModal } from "./Modals/MailModal";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export function Contact (){

    const [t] = useTranslation();

    const [isModalOpen, setIsOpen] = useState(false);
    const openModal = ()=>{setIsOpen(true)};
    const closeModal = ()=>{setIsOpen(false)};

    const iconClass = "p-2  cursor-pointer rounded-full shadow shadow-violet-300 hover:scale-105 hover:bg-black/40 hover:shadow-md transition-all duration-300";
    return(
        <div>
            <div>
                <h3 id="contact" className="scroll-mt-16 text-4xl font-bold text-center bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400  text-transparent max-w-screen mt-36">{t(`contactTitle`)}</h3>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r  from-violet-400  to-pink-400 rounded-full max-w-screen-xl mt-2"></div>
            </div>
            
            <p className="text-2xl text-center mx-10 mt-6">{t(`contactDesc`)}</p>

            <div className="mt-6 mb-10 flex justify-center items-center gap-8">
                <a href="https://github.com/SergioPeck" target="_blank" className={iconClass} rel="noopener noreferrer nofollow">
                    <FaGithub className="text-2xl"/>
                </a>
                <a href="https://www.linkedin.com/in/sergio-elias-peckerle-b4a876306/" target="_blank" className={iconClass} rel="noopener noreferrer nofollow">
                    <FaLinkedin className="text-2xl"/>
                </a>
                <a onClick={openModal} className={iconClass}>
                    <FaEnvelope className="text-2xl"/>
                </a>
            </div>

            <MailModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>

    )
}