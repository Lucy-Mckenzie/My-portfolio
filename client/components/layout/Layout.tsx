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
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}




