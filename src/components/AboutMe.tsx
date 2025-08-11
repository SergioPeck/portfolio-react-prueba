import { useTranslation } from "react-i18next";

export function AboutMe(){
    const [t]=useTranslation()
    return(
        <div className="flex flex-col w-full mx-auto max-w-screen-xl">
            <h3 id="aboutMe" className="scroll-mt-16 text-4xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 bg-clip-text text-transparent text-center mt-36">{t(`aboutMeTitle`)}</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-violet-400 mx-auto mt-2 rounded-full"></div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center sm:flex-col-reverse md:flex-col-reverse">

                <div className=" sm:max-w-10/12 flex flex-col items-center mx-auto lg:max-w-1/2  w-full px-4 sm:m-10">
                    <p className="text-2xl mb-5 max-w-2xl">{t(`aboutMeDesc1`)}</p>
                    <p className="text-2xl max-w-2xl">{t(`aboutMeDesc2`)}</p>
                </div>
                <div className="sm:mt-8 md:mt-8 m-10 max-w-3xs w-96 h-64 mx-auto sm:m-auto md:m-auto lg:h-96 lg:w-96 lg:max-w-96 bg-amber-500 rounded-full z-10 border-4 border-violet-400 shadow-2xl shadow-violet-400"></div>
            </div>
        </div>
    )
}