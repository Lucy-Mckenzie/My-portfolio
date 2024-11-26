import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
    <div className={`min-h-screen ${darkMode ? 'bg-[#203a58] text-white' : 'bg-[#d5d5d6] text-black'}`}>
      <button onClick={toggleDarkMode} className="absolute z-20 flex right-10">
      <img
        src={darkMode ? '/images/icons/night-mode.png' : '/images/icons/light-mode.png'}
        alt={darkMode ? 'Dark Mode' : 'Light Mode'}
        className='w-10 h-10'
          />
      </button>
      <div>
      <Navbar darkMode={darkMode} />
      <Outlet context={{ darkMode }} />
      <Footer darkMode={darkMode} />
      </div>
    </div>
  </>
  )
}




