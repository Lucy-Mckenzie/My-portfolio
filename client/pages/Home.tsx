import Clouds from '../components/Clouds'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { useOutletContext } from 'react-router-dom'
import Contact from './Contact'
import { motion } from 'framer-motion'

export default function About() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  }
  
  return (
      <div>
    <div 
    className={`h-screen p-0 m-0 flex items-center justify-center text-center font-lato w-full overflow-hidden ${darkMode ? 'gradientBackgroundNight text-white' : 'gradientBackgroundDay text-black'}`}>
      <div className='lg:max-w-[700px] lg:w-full flex flex-col text-left items-center'>
      <h1 className='font-light lg:text-9xl text-[180px] font-lato z-10 hover:cursor-pointer'>
  {"Hi, I'm Lucy".split('').map((char, i) => (
    <motion.span key={i} custom={i} variants={textVariants} initial='hidden' animate='visible'>
      {char}
    </motion.span>
  ))}
</h1>
    <Clouds />
    <p className='lg:text-lg text-4xl mt-2 py-3 z-10 text-left max-w-[600px] hover:cursor-pointer'>
      {"I'm a Software Developer with a focus on intuitive and innovative websites... Oh, and I have a slight obsession with clouds!".split('').map((child, index) => (
        <span className='hoverText' key={index}>
          {child}
        </span>
      ))}
    </p>
    <div className='flex justify-start items-center space-x-2 z-10'>
    <motion.a
  href="https://github.com/Lucy-Mckenzie"
  target="_blank"
  rel="noreferrer"
  whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
  >
  <img src="/images/icons/github.svg" alt="Github icon" className="lg:w-7 lg:h-7 w-12 h-12" />
  </motion.a>
  <motion.a
    href="/contact"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    >
    <img src="/images/icons/mail.svg" alt="Mail icon" className="lg:w-7 lg:h-7 w-12 h-12" />
  </motion.a>
  <motion.a
    href="https://www.linkedin.com/in/lucy-mckenzie-a08781317/"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    >
    <img src="/images/icons/linkedin.svg" alt="LinkedIn icon" className="lg:w-7 lg:h-7 w-12 h-12" />
  </motion.a>
     </div>
      </div>
    </div>
     <Skills />
      <Projects />
     <Contact />
   </div>
  )
}
