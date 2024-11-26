import Navbar from './Navbar'
import Footer from './Footer'
import About from '../../pages/About'
import Skills from '../../pages/Skills'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import { useState } from 'react'

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
    <div>
      <Navbar />
      <About />
      <button onClick={toggleDarkMode} className="absolute z-20 flex right-10">
      <img
        src={darkMode ? '/images/icons/night-mode.png' : '/images/icons/light-mode.png'}
        alt={darkMode ? 'Dark Mode' : 'Light Mode'}
        className="w-10 h-10"
          />
      </button>
      <div className={`${darkMode ? 'bg-[#658095]' : 'bg-[#d5d5d6]'}`}>
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  </>
  )
}




