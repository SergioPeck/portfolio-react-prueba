import { useEffect } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type projectProps={
    isOpen:boolean;
    onClose:()=>void;
    projectSelected:{
        imgs:string[],
        title:string,
        descriptionTitle:string,
        description:string,
        descriptionLong:string,
        technologies:string[]
    }|null
}

export function ProjectModal({onClose,isOpen,projectSelected}:projectProps){

    const btnClasses="p-2 px-4 border border-violet-300 flex items-center gap-2 cursor-pointer rounded-full bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent hover:scale-105 hover:shadow-sm hover:shadow-violet-300";
    useEffect(()=>{
        if (!isOpen) return;
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    },[isOpen]);

    if(!isOpen||!projectSelected) return null;
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50" onClick={onClose}>
            <button className="absolute top-4 right-4 cursor-pointer text-4xl text-white hover:scale-110 hover:text-zinc-400 transition" aria-label={`closeModal`} onClick={onClose}>{<FiX/>}</button>
            <div className="overflow-x-hidden bg-zinc-800 p-6 rounded-lg max-w-screen-xl h-10/12  overflow-auto max-h-fit w-11/12 md:w-8/12 sm:w-10/12 shadow shadow-violet-400" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-center mb-4">{projectSelected.title}</h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-400 to-pink-400 rounded-full mb-4"></div>
                <div className="flex flex-col gap-4">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        initialSlide={0}
                        navigation
                        centeredSlides
                        slidesPerView={1}
                        loop
                        speed={500}
                        slideToClickedSlide
                        pagination={{ clickable: true }}
                        className="w-full h-40 min-h-[300px] max-h-[400px]"
                        
                    >
                        {projectSelected.imgs.map((imageSelected,i)=>(
                            <SwiperSlide key={i}> 
                                <img src={imageSelected} alt={`img ` + i} className="w-full h-full object-contain" />
                            </SwiperSlide>

                        ))}
                    </Swiper>

                    <p className="text-md text-zinc-400">{projectSelected.descriptionTitle}</p>
                    <p className="text-sm pr-4">{projectSelected.descriptionLong}</p>
                    <div className="flex flex-row gap-4">
                        <button className={btnClasses}>{<FiExternalLink className="text-pink-400/70"/>}Visitar Pag</button>
                        <button className={btnClasses}>{<FiGithub className="text-pink-400/70"/>}Visitar GitHub</button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {projectSelected.technologies.map((_,i)=>(
                            <div key={i} className="border border-violet-500 p-2 rounded-2xl text-xs">
                                <p>{projectSelected.technologies[i]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}