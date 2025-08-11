import { useState } from "react";
import { useTranslation } from "react-i18next"
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const aClasses = "text-xl text-fuchsia-200 hover:text-zinc-400 transition duration-300"

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        localStorage.setItem('i18nextLng', newLang);
        i18n.changeLanguage(newLang);
    }

    return(
        <div className="w-full fixed flex justify-between bg-black/40 bg-blend-saturation h-15 z-20 backdrop-blur-md">
            <div className="flex items-center ml-5">
                <h1 className="text-2xl text-fuchsia-200 font-bold cursor-default">{t('navbarTitle')}</h1>
            </div>

            <div className="items-center hidden min-[871px]:flex gap-2 mr-5">
                <p onClick={toggleLanguage} className="cursor-pointer hover:text-zinc-400 transition duration-300 text-fuchsia-200">
                    {i18n.language === 'es' ? 'ES' : 'EN'}
                </p>
                <p className="text-2xl cursor-default">•</p>
                <a href="#aboutMe" className={aClasses}>{t(`aboutMeTitle`)}</a>
                <p className="text-2xl cursor-default">•</p>
                <a href="#skills" className={aClasses}>{t(`skillsTitle`)}</a>
                <p className="text-2xl cursor-default">•</p>
                <a href="#projects" className={aClasses}>{t(`projectsTitle`)}</a>
                <p className="text-2xl cursor-default">•</p>
                <a href="#contact" className={aClasses}>{t(`contactTitle`)}</a>
            </div>

            <button className="block min-[871px]:hidden mr-4 hover:scale-110 hover:text-zinc-400 cursor-pointer" 
                onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen? <FiX className="text-2xl"/> : <FiMenu className="text-2xl cursor-pointer hover:scale-105 hover:text-zinc-400" />}
            </button>

            {(
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className={`fixed top-15 right-0 w-full h-screen bg-black/40 backdrop-blur-xs flex flex-col pl-6 gap-2 transform transition-all duration-100 ease-in-out min-[871px]:hidden
                    ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
                >
                    <p
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleLanguage();
                        }}
                        className="cursor-pointer hover:text-zinc-400 transition duration-300 text-fuchsia-200"
                    >
                        {i18n.language === "es" ? "ES" : "EN"}
                    </p>
                    <a href="#aboutMe" className={aClasses}>{t(`aboutMeTitle`)}</a>
                    <a href="#skills" className={aClasses}>{t(`skillsTitle`)}</a>
                    <a href="#projects" className={aClasses}>{t(`projectsTitle`)}</a>
                    <a href="#contact" className={aClasses}>{t(`contactTitle`)}</a>
                </div>
        )}
        </div>
    )
}
