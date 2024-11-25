import { NavLink } from 'react-router-dom'

export default function Nav() {


  return (
    <nav>
      <div className="flex items-center bg-[#ead0ab] shadow-[3px_6px_10px_rgba(0,_0,_0,_0.4)] px-3 justify-between z-2 border">
      <NavLink to="/">
      <img src="/images/logo.png" alt="logo" className="h-[60px] ml-20 mr-auto"/>
      </NavLink>
      <div className="px-9 text-black flex items-center no-underline ">
      <NavLink className="ml-auto mr-11 flex" to="/">About</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/skills">Skills</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/projects">Projects</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/contact">Contact</NavLink>
      </div>
      </div>
    </nav>
  )
}