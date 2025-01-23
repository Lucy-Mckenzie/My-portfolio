import { useOutletContext } from 'react-router-dom'
import Icons from '../icons/Icons'

export default function VideoSalesLetter() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div>
    <div className={`flex justify-center items-center w-full h-auto pb-56 px-10 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
    <div className='flex w-full max-w-6xl'>
      <div className='w-1/2'>
    <a href='https://www.loom.com/share/f57c8fcfc6284db7a672347e43781819'>
    </a>
    <a href='https://www.loom.com/share/f57c8fcfc6284db7a672347e43781819' rel='noreferrer' target='_blank'>
      <img className='rounded-md' alt='Video Sales Letter' src='https://cdn.loom.com/sessions/thumbnails/f57c8fcfc6284db7a672347e43781819-ded37878d4032831-full-play.gif'/>
    </a>
    </div>
    <div className='w-1/2 pl-8 flex flex-col justify-center font-manrope'>
      <h1 
      className='text-2xl font-semibold mb-4'>
        My Skills
      </h1>
      <Icons />
      <h2
        className='text-md leading-relaxed'> 
        Hiring developers can be overwhelming with so many applications to sort through. That&apos;s why I created this <strong>short video</strong> to show you exactly who I am, <strong>what I bring to the table,</strong> and how I can help <strong>solve your challenges</strong> effectively.
      </h2>
    </div>
  </div>
</div>
</div>
  )
}

