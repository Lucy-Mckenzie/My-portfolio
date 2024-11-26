import Navbar from './Navbar'
import Footer from './Footer'
import About from '../../pages/About'
import Skills from '../../pages/Skills'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'

export default function layout() {

  return (
    <div>
      <Navbar />
      <About />
      <div className='bg-[#31465a]'>
      <Skills />
      <Projects />
      <Contact />
      </div>
      <Footer />
    </div>
  )
}




