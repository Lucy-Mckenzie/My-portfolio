import Clouds from "../components/Clouds"
import Projects from "../components/Projects"
import Skills from '../components/Skills'
import { useOutletContext } from 'react-router-dom'
import Contact from "./Contact"

export default function About() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <>
    <div 
    className={`h-screen flex items-center justify-center text-center font-merriweather overflow-hidden ${darkMode ? 'bg-[#203a58] text-white' : 'bg-[#63a6c6] text-black'}`}>
      <div className='max-w-[700px] w-full flex flex-col text-left items-center ml-16'>
    <h1 className='font-light text-9xl font-playfair z-10'>
      Hi, I&apos;m Lucy
      </h1>
    <Clouds />
    <p className='text-lg mt-4 py-3 z-10 text-left max-w-[570px]'>
   I&apos;m a Junior Software Developer specializing in modern React websites. I&apos;m a creator at heart, a lifelong learner, oh! and I have a small obsession with clouds!
    </p>
    <div className='flex justify-center space-x-2 z-10'>
      <a href="https://github.com/Lucy-Mckenzie" target="_blank" className="transition-transform transform hover:scale-110" rel="noreferrer">
        <img src="/images/icons/github.svg" alt="Github icon" className="w-7 h-7" />
      </a>
      <a href="/contacts" className="transition-transform transform hover:scale-110">
        <img src="/images/icons/mail.svg" alt="Mail icon" className="w-7 h-7" />
      </a>
      <a href="https://www.linkedin.com/in/lucy-mckenzie-a08781317/" target="_blank" className="transition-transform transform hover:scale-110" rel="noreferrer">
        <img src="/images/icons/linkedin.svg" alt="Linkedin icon" className="w-7 h-7" />
      </a>
     </div>
      </div>
    </div>
     <div >
     <Skills />
   </div>
   <div >
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
   </>
  )
}
