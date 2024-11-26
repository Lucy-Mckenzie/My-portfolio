import Icons from '../components/Icons'
import { useOutletContext } from 'react-router-dom'

export default function Skills() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

return (
  <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-[#304954] text-white' : 'bg-[#fcf3e3] text-black'}`}>
    <div className='flex-1 max-w-[300px]'>
     <p className='text-4xl font-light font-lato text-center mb-10'>
    My Skills
    </p>
    <div className='overflow-hidden rounded-md max-w-[300px] max-h-[366px] flex items-center mt-2 shadow-[0_4px_6px_rgba(10,0.3,0.3,0.3)]'>
      <img src='/images/Lucy-Mckenzie.png' alt='me' />
    </div>
    </div>
  <div className='flex flex-1 flex-col max-w-[700px] mt-20 ml-4'>
  <Icons />
  <p className='text-2xl font-semibold mb-4'>
  I love being in the creative flow.
  </p>
  <p className='mb-4'>
    As a child, I was absolutely fascinated by various board games and, later on, computer games. I spent many hours absorbed in the art of games, always with one sole focus: solving the problem!
    With a passion for problem-solving, teaching, and negotiating, I quickly found myself right at home in the world of coding.
  </p>
  </div>
  </div>
)

}
