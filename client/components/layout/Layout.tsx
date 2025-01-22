import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'


export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const location = useLocation()
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const isSky = location.pathname === '/'

  let backgroundColor = ''
  let textColor = ''
  
  if (isSky) {
    backgroundColor = darkMode ? 'bg-[#203a58]' : 'bg-[#638cc0]' 
    textColor = darkMode ? 'text-white' : 'text-black'
  } else if (darkMode) {
    backgroundColor = 'bg-[#203a58]' 
    textColor = 'text-white'
  } else {
    backgroundColor = 'bg-[#fffbf9]'  
  }

  return (
    <>
   <div className={`min-h-screen w-full ${backgroundColor} ${textColor}`}>
      <button onClick={toggleDarkMode} className='absolute z-50 flex right-10 pt-2'>
      <img
        src={darkMode ? '/images/icons/moon.png' : '/images/icons/light-mode.png'}
        alt={darkMode ? 'Dark Mode' : 'Light Mode'}
        className='lg:w-12 lg:h-12 w-16 h-16'
          />
      </button>
      <div>
      <Navbar isSky={isSky} />
      <Outlet context={{ darkMode }} />
      <Footer darkMode={darkMode} />
      </div>
    </div>
  </>
  )
}




