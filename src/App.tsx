import { useEffect } from "react"
import i18n from "i18next";
import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
function App() {
  useEffect(()=>{
    const savedLang= localStorage.getItem('i18nextLng');
    i18n.changeLanguage(savedLang || 'es');
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 text-white overflow-hidden" >
      <div className="fixed pointer-events-none inset-0 z-0">
        {[...Array(20)].map((_,i)=>(
          <div key={i} className="absolute" 
            style={{
              left:`${Math.random()*100}%`,
              top:`${Math.random()*100}%`
            }}
          >
              <p className="w-2 h-2 text-purple-400 opacity-60">⁕</p>
            </div>
        ))}
      </div>

      <div className="z-10">
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
