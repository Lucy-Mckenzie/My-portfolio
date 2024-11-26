import { Link } from 'react-router-dom'

interface Props {
  darkMode: boolean
}

export default function Footer({darkMode}: Props) {

  return (
    <div className={`flex flex-col ${darkMode ? 'bg-[#203a58] text-white' : 'bg-[#66a5bc] text-black'}`}>
    <footer className=' py-3'>
      <div className='container mx-auto px-2'>
        <p className='text-sm font-manrope text-slate-300'>
          &copy; 2024 Lucy Mckenzie. 
        </p>
        </div>
        <div className='flex flex-col items-center'>
      <p className='text-lg font-semibold mr-11'>
        Links
      </p>
      <div className='flex flex-col items-left'>
        <Link to='/about' className='my-1'>About</Link>
        <Link to='/contact' className='my-1'>Contact me</Link>
        <Link to='/wehike' className='my-1'>We hike</Link>
        <Link to='/dotmap' className='my-1'>dotmap</Link>
        <Link to='/slothlibrary' className='my-1'>Sloth Library</Link>
      </div>
    </div>
    </footer>
  </div>
  )
}