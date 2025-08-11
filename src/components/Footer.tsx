import { useTranslation } from "react-i18next";

export function Footer(){
    const [t] = useTranslation();
    return(
        <footer className="w-full h-16 flex justify-center items-center bg-black/40 mt-20 backdrop-blur-xs">
            <p className="text-center text-sm">© 2025 {t(`footerText`)}</p>
        </footer>
    )
}