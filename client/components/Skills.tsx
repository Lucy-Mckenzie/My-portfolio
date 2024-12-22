import Icons from './icons/Icons'
import { useOutletContext } from 'react-router-dom'

export default function Skills() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

return (
  <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
    <div className='flex-1 max-w-[400px]'>
     <h1 className='text-4xl font-light font-manrope text-center mb-10'>
    My Skills
    </h1>
    <div className={`overflow-hidden rounded-md flex items-center mt-2 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}>
      <img 
      src='/images/Lucy-Mckenzie.png'
      alt='Lucy Mckenzie'
        />
    </div>
    </div>
  <div className='flex flex-1 flex-col max-w-[700px] mt-20 ml-4'>
  <Icons />
  <h2 className='text-2xl font-semibold font-manrope mb-4'>
  I love being in the creative flow.
  </h2>
  <p className='mb-4 font-manrope'>
    As a child, I was absolutely fascinated by board games, puzzles and anything to challenge my mind. Over time, this facination grew into a love for tackling increasingly difficult challenges. I quickly found myself right at home in the world of coding.
  </p>
  </div>
  </div>
)

}
