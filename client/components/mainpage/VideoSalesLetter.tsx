import { useOutletContext } from 'react-router-dom'
import Icons from '../icons/Icons'
import { motion } from 'framer-motion'

export default function VideoSalesLetter() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const textMotion = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' }},
  }
  const photoMotion = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' }},
  }
  
  return (
  <div className={`flex justify-center items-center w-full h-auto pb-56 px-10 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
    <motion.div className='flex w-full max-w-6xl'
      initial='hidden'
      whileInView='visible'
      variants={photoMotion}
      viewport={{ once: true, amount: 0.5 }}
    >
  <div className='w-1/2'>
    <a 
     href='https://www.loom.com/share/f57c8fcfc6284db7a672347e43781819'>
    </a>
    <a 
      href='https://www.loom.com/share/f57c8fcfc6284db7a672347e43781819' 
      rel='noreferrer' 
      target='_blank'>
      <img 
        className='rounded-md' 
        alt='Video Sales Letter' 
        src='https://cdn.loom.com/sessions/thumbnails/f57c8fcfc6284db7a672347e43781819-ded37878d4032831-full-play.gif'/>
    </a>
    </div>
    <motion.div 
      className='w-1/2 pl-8 flex flex-col justify-center font-manrope'
      initial='hidden'
      whileInView='visible'
      variants={textMotion}
      viewport={{ once: true, amount: 0.3 }}
      >
    <motion.h1 
      className='text-2xl font-semibold mb-4'
      initial='hidden'
      whileInView='visible'
      variants={textMotion}
      viewport={{ once: true, amount: 0.2 }}
      >
      My Skills
    </motion.h1>
  <Icons />
    <motion.h2
      className='text-md leading-relaxed'
      initial='hidden'
      whileInView='visible'
      variants={textMotion}
      viewport={{ once: true, amount: 0.2 }}
      > 
      Hiring developers can be overwhelming with so many applications to sort through. That&apos;s why I created this <strong>short video</strong> to show you exactly who I am, <strong>what I bring to the table,</strong> and how I can help <strong>solve your challenges</strong> effectively.
     </motion.h2>
    </motion.div>
  </motion.div>
</div>
  )
}

