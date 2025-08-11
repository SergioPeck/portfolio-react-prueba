import { useTranslation } from "react-i18next"
import { MailModal } from "./Modals/MailModal";
import { useState } from "react";

export function Hero(){
    const {t} = useTranslation();
    const [isModalOpen, setIsOpen] = useState(false);
    const openModal = ()=>{setIsOpen(true)};    
    const closeModal = ()=>{setIsOpen(false)};
    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <div className="flex flex-col text-center ">
                <div className="inline-flex items-center justify-center">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 bg-clip-text text-transparent animate-pulse mb-6 ">{t(`heroTitle`)}</h1>
                    <p className="text-3xl self-start animate-bounce">🚀</p>
                </div>
                <h2 className="text-5xl font-bold mb-6 ">{t(`heroSubTitle`)}</h2>
                <p className="mb-5 text-3xl text-neutral-400">{t(`heroText1`)}</p>
                <p className="text-3xl text-violet-400 mb-6">{t(`heroText2`)}</p>
                <div>
                    <a href="#projects" className="px-5 inline-block cursor-pointer text-2xl ml-4 md:mr-4 bg-gradient-to-l from-violet-500 to-pink-500 hover:bg-gradient-to-l hover:from-violet-600 hover:to-pink-600 p-2 shadow-lg hover:shadow-violet-900 hover:scale-105 rounded-full">{t(`heroBtnProjects`)}</a>
                    <a onClick={openModal} className="px-5 inline-block cursor-pointer text-2xl mt-4 ml-4 md:ml-4 border-violet-400 text-violet-400 hover:bg-violet-900 shadow-lg hover:shadow-violet-900 hover:scale-105 border p-2 rounded-full">{t(`heroBtnContact`)}</a>
                </div>
            </div>

            <MailModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    )
}