import { useOutletContext } from 'react-router-dom'

export default function Resume() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex justify-center items-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
    
       <a className='hover:text-gray-500' href='/images/Resume.pdf' download='Resume-Lucy-Mckenzie.pdf'>
        <div className='w-[600px] h-auto rounded-sm shadow-lg'>
        <img src='/images/resume.png' alt='resume' />
        </div>
      </a>
    </div>

  )

}