import { Link } from 'react-router-dom'

interface Props {
  darkMode: boolean
}

export default function Footer({darkMode}: Props) {

  return (
    <div className={`flex flex-col ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <footer className='py-8'>
        <div className='flex flex-row space-x-8 justify-center items-center font-manrope'>
          <Link to='/about' className='mb-6 lg:text-lg text-4xl'>About</Link>
          <Link to='/contact' className='mb-6 lg:text-lg text-4xl'>Contact me</Link>
          <Link to='/resume' className='mb-6 lg:text-lg text-4xl'>Resume</Link> 
        </div>
      </footer>
    </div>
  )
}