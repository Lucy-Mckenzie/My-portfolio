import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col'>
    <footer className='bg-slate-600 py-3'>
      <div className='container mx-auto px-2 text-white'>
        <p className='text-sm text-slate-300'>
          &copy; 2024 Lucy Mckenzie. 
        </p>
        <p>
          Links
        </p>
        <Link to='/contact'>Contact me 
        </Link>
        <Link to='/skills'>Skills
        </Link>
        <Link to='/about'>More about me
        </Link>
        <Link to='/wehike'>We Hike
        </Link>
      </div>
    </footer>
  </div>
  )
}