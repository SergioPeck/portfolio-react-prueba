import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

type MailModalProps= {
    isOpen: boolean;
    onClose: () => void;
}

export function MailModal({ onClose, isOpen }: MailModalProps) {
    const [t] = useTranslation();
    const [statusMessage, setStatusMessage] = useState<string>("");
    const [statusType, setStatusType] = useState<"success" | "error" | "">("");

    const inputClasses ="w-5/6 h-12 mx-auto p-3 rounded-lg bg-black/40 text-white focus:outline-none focus:ring focus:ring-violet-600 transition duration-300 backdrop-blur-xs invalid:focus:ring-pink-500 invalid:text-pink-500 invalid:border-pink-500 invalid:border-2"; ;
  
    <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
    </script>

     const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
        .sendForm('service_uu1fgud', 'template_mt8qx19', form.current, {
            publicKey: 'u7A__t4ga5gPoa177',
        })
        .then(
            () => {
            setStatusMessage(`✅ {t('emailSuccess')}`);
            setStatusType("success");
            form.current?.reset();
            setTimeout(() => {
                setStatusMessage("");
                setStatusType("");
            },1000)
            },
            (error) => {
            console.error("FAILED...", error.text);
            setStatusMessage(`❌ {t('emailError')}`);
            setStatusType("error");
            },
        );
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40" onClick={onClose}>
            <button className="absolute top-8 right-8 cursor-pointer text-4xl text-white hover:scale-110 transition hover:text-zinc-400" aria-label={t(`closeModal`)} onClick={onClose}>{<FiX/>}</button>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg max-w-md max-h-screen w-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-center mb-4">{t(`mailTitle`)}</h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-400 to-pink-400 rounded-full mb-4"></div>

                <form ref={form} id='contactForm' onSubmit={sendEmail} className="flex flex-col gap-4">
                    <input required name="from_name" type="text" placeholder={t(`contactName`)} className={inputClasses} />
                    <input required name="from_email" type="email" placeholder={t(`contactEmail`)} className={inputClasses} />
                    <input required name="from_title" type="text" placeholder={t(`contactSubject`)} className={inputClasses} />
                    <textarea required name="message" placeholder={t(`contactMessage`)} className="w-5/6 h-30 mx-auto p-3 rounded-lg bg-black/40 text-white/80 focus:outline-none focus:ring focus:ring-violet-600 transition duration-300 backdrop-blur-xs invalid:text-pink-500 invalid:border"></textarea>
                    <button type="submit" className="w-4/6 mx-auto bg-gradient-to-r from-pink-400 to-violet-400 text-white p-3 rounded-lg hover:scale-105 transition duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-pink600 hover:to-violet-600">{t(`send`)}</button>
                </form>
            </div>

            {(
                <div
                    className={`p-3 rounded-lg text-center mb-4 fixed top-4 mx-auto left-1/2 -translate-x-1/2 transform transition-all duration-1000 ease-out
                        ${statusType === "success" ? "bg-green-500 text-white " : "bg-red-500 text-white"}
                        ${statusMessage ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 pointer-events-none"}
                        `}
                >
                    {statusMessage}
                </div>
            )}

        </div>
    );
}