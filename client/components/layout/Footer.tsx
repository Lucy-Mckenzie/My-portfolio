import { Link } from 'react-router-dom'

interface Props {
  darkMode: boolean
}

export default function Footer({darkMode}: Props) {

  return (
    <div className={`flex flex-col ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
    <footer className='py-8'>
      <div className='container flex flex-row justify-between items-center font-manrope'>
        <p className='text-sm pl-32'>
          LUCY MCKENZIE
        </p>
        </div>
  
      <div className='flex flex-row space-x-8 justify-center items-center font-manrope'>
        <Link to='/about' className='mb-6'>About</Link>
        <Link to='/contact' className='mb-6'>Contact me</Link>
        <Link to='/resume' className='mb-6'>Resume</Link> 
      </div>
    </footer>
    </div>
  )
}