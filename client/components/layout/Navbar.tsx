import { NavLink } from 'react-router-dom'

interface Props {
  darkMode: boolean
  isSky: boolean
}


export default function Nav({darkMode, isSky }: Props ) {

  let backgroundColor = ''
  let textColor = ''

  if (isSky) {
    backgroundColor = darkMode ? 'bg-[#203a58]' : 'bg-[#bfdbf7]' 
    textColor = darkMode ? 'text-white' : 'text-black'
  } else if (darkMode) {
    backgroundColor = darkMode ? 'bg-[#121212]' : 'bg-[#fffbf9]' 
    textColor = 'text-white'
  } 
  

  return (
    <nav>
       <div className={`flex items-center px-3 justify-center z-2 pb-4 pt-4 ${backgroundColor} ${textColor}`}>
      <div className='px-9 flex items-center space-x-28 no-underline'>
      <NavLink className='hover:underline font-manrope hover:text-gray-500 z-20' to='/'>HOME</NavLink>
      <NavLink className='hover:underline font-manrope hover:text-gray-500 z-20' to='/about'>ABOUT</NavLink>
      <NavLink className='hover:underline font-manrope hover:text-gray-500 z-20' to='/contact'>CONTACT</NavLink>
      </div>
      </div>
    </nav>
  )
}