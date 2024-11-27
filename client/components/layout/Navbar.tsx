import { NavLink } from 'react-router-dom'

interface Props {
  darkMode: boolean
}

export default function Nav({darkMode}: Props ) {


  return (
    <nav>
      <div className={`flex items-center bg-[#203a58] px-3 justify-center z-2 pb-4 pt-4 ${darkMode ? 'bg-[#203a58] text-white' : 'bg-[#63a6c6] text-black '}`}>
      <div className='px-9 flex items-center space-x-28 no-underline'>
      <NavLink className='hover:underline font-manrope hover:text-gray-500' to='/'>HOME</NavLink>
      <NavLink className='hover:underline font-manrope hover:text-gray-500' to='/about'>ABOUT</NavLink>
      <NavLink className='hover:underline font-manrope hover:text-gray-500' to='/contact'>CONTACT</NavLink>
      </div>
      </div>
    </nav>
  )
}