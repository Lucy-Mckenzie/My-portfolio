import Icons from '../icons/Icons.tsx'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Skills() {

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
    <div className={`pb-32 px-4 flex items-center justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <motion.div className='flex-1 lg:max-w-[400px]'
        initial='hidden'
        whileInView='visible'
        variants={photoMotion}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={`overflow-hidden rounded-md flex items-center mt-2 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}>
          <img 
            src='/images/Lucy-Mckenzie.png'
            alt='Lucy Mckenzie'
          />
        </div>
      </motion.div>
      <motion.div className='flex flex-1 flex-col max-w-[700px] mt-20 ml-4'
        initial='hidden'
        whileInView='visible'
        variants={textMotion}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Icons />
        <h2 className='text-2xl font-semibold font-manrope mb-4'>
        I love being in the creative flow.
        </h2>
        <motion.p className='mb-4 font-manrope'
          initial='hidden'
          whileInView='visible'
          variants={textMotion}
          viewport={{ once: true, amount: 0.3 }}
        >
      As a child, I was absolutely fascinated by board games, puzzles and anything to challenge my mind. Over time, this facination grew into a love for tackling increasingly difficult challenges. I quickly found myself right at home in the world of coding.
        </motion.p>
      </motion.div>
    </div>
  )
}
