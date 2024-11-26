import { NavLink } from 'react-router-dom'

export default function Nav() {


  return (
    <nav>
      <div className="flex items-center bg-[#203a58] shadow-[3px_6px_10px_rgba(0,_0,_0,_0.4)] px-3 justify-center z-2 pb-4 pt-4">
      <div className="px-9 text-black flex items-center space-x-28 no-underline ">
      <NavLink className="flex text-white" to="/">About</NavLink>
      <NavLink className="flex text-white" to="/skills">Skills</NavLink>
      <NavLink className="flex text-white" to="/projects">Projects</NavLink>
      <NavLink className="flex text-white" to="/contact">Contact</NavLink>
      </div>
      </div>
    </nav>
  )
}