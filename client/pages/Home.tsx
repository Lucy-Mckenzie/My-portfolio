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
    className={`h-screen p-0 m-0 flex items-center justify-center text-center font-lato w-full overflow-hidden ${darkMode ? 'bg-[#203a58] text-white' : 'bg-[#bfdbf7] text-black'}`}>
      <div className='max-w-[700px] w-full flex flex-col text-left items-center'>
    <h1 className='font-light text-9xl font-lato z-10'>
      Hi, I&apos;m Lucy
      </h1>
    <Clouds />
    <p className='text-lg mt-2 py-3 z-10 text-left max-w-[600px]'>
    I&apos;m a Software Developer with a focus on intuitive and innovative websites... Oh, and I have a slight obsession with clouds!
    </p>
    <div className='flex justify-start items-center space-x-2 z-10'>
      <a href="https://github.com/Lucy-Mckenzie" target="_blank" className="transition-transform transform hover:scale-110" rel="noreferrer">
        <img src="/images/icons/github.svg" alt="Github icon" className="w-7 h-7" />
      </a>
      <a href='/contact' className="transition-transform transform hover:scale-110">
        <img src="/images/icons/mail.svg" alt="Mail icon" className="w-7 h-7" />
      </a>
      <a href="https://www.linkedin.com/in/lucy-mckenzie-a08781317/" target="_blank" className="transition-transform transform hover:scale-110" rel="noreferrer">
        <img src="/images/icons/linkedin.svg" alt="Linkedin icon" className="w-7 h-7" />
      </a>
     </div>
      </div>
    </div>
     <Skills />
      <Projects />
     <Contact />
   </>
  )
}
