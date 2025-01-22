import { NavLink } from 'react-router-dom'

interface Props {
  isSky: boolean
}


export default function Nav({ isSky }: Props ) {

  return (
    <nav>
       <div className={`flex items-center px-3 justify-center z-40 pb-4 pt-4 sticky top-0 ${isSky}`}>
      <div className='px-9 flex items-center space-x-28 no-underline'>
      <NavLink className='hover:underline font-manrope z-20 lg:text-lg text-4xl' to='/'>HOME</NavLink>
      <NavLink className='hover:underline font-manrope z-20 lg:text-lg text-4xl' to='/about'>ABOUT</NavLink>
      <NavLink className='hover:underline font-manrope z-20 lg:text-lg text-4xl' to='/contact'>CONTACT</NavLink>
      </div>
      </div>
    </nav>
  )
}