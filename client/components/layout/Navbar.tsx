import { NavLink } from 'react-router-dom'

interface Props {
  darkMode: boolean
}

export default function Nav({darkMode}: Props ) {


  return (
    <nav>
      <div className={`flex items-center bg-[#203a58] shadow-[3px_6px_10px_rgba(0,_0,_0,_0.4)] px-3 justify-center z-2 pb-4 pt-4 ${darkMode ? 'bg-[#203a58] text-white hover:text-gray-300' : 'bg-[#66a5bc] text-black hover:text-gray-800'}`}>
      <div className='px-9 flex items-center space-x-28 no-underline'>
      <NavLink className='hover:underline' to='/'>About</NavLink>
      <NavLink className='hover:underline' to='/wehike'>Projects</NavLink>
      <NavLink className='hover:underline' to='/contact'>Contact</NavLink>
      </div>
      </div>
    </nav>
  )
}