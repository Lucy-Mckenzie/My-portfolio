import { Link, useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import MouseHover from '../MouseHover.tsx'
import ViewCase from './ViewButton.tsx'
import Button from './ButtonLive.tsx'
import { motion } from 'framer-motion'

export default function Projects2() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  const [isImage, setIsImage] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  const setMotion = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' }},
  }

  return (
    <div className={`w-full relative pb-32 pt-10 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='flex flex-col lg:flex-row relative items-center justify-center gap-x-6 mx-auto px-4'>

        <motion.div className={`card relative rounded-box rounded-xl flex flex-col lg:h-[800px] md:h-[780px] sm:h-[760px] h-auto w-full max-w-xl ${darkMode ? 'border border-white' : 'border border-black'}`}
          initial='hidden'
          whileInView='visible'
          variants={setMotion}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link
            to='/wehike'
            onClick={scrollToTop}
          >
            <img 
              src='/images/mockups/wehikemain.png' 
              alt='WeHike project' 
              className='w-full h-[600px] object-cover rounded-t-xl'
              onMouseEnter={() => setIsImage(true)}
              onMouseLeave={() => setIsImage(false)}
            /> 
            {isImage && (
              <MouseHover />
            )}
          </Link>

          <Link 
            to='https://www.wehikenewzealand.com/'
            target='_blank' rel='noopener noreferrer'>
            <Button />
          </Link>

          <div className='p-4 text-left space-y-2'>
            <h2 className='text-xs font-manrope'>CASE STUDY 02</h2>
            <h1 className=' text-xl font-manrope'>
              <strong>We Hike:</strong> helps hikers stay prepared with saved trails and huts, <strong>real-time alerts</strong>, and trail updates—<strong>all in one place.</strong>
            </h1>
            <Link
              to='/wehike'
            >
              <ViewCase />
            </Link>
          </div>
        </motion.div>
      
        <div className='divider divider-horizontal h-[800px] lg:block md:hidden'></div>

        <motion.div 
          className={`card relative rounded-box rounded-xl flex flex-col lg:h-[800px] md:h-[780px] sm:h-[760px] h-auto w-full max-w-xl sm:mt-10 lg:mt-0 ${darkMode ? 'border border-white' : 'border border-black'}`}
          initial='hidden'
          whileInView='visible'
          variants={setMotion}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            to='/mycelium'
            onClick={scrollToTop}
          >
            <img 
              src='/images/mockups/myceliummain.png' 
              alt='Mycelium project' 
              className='w-full h-[600px] object-cover rounded-t-xl'
              onMouseEnter={() => setIsImage(true)}
              onMouseLeave={() => setIsImage(false)}
            />
          </Link>
          <Link 
            to='https://my-celium.devacademy.nz/'
            target='_blank' rel='noopener noreferrer'>
            <Button />
          </Link>

          <div className='p-4 text-left space-y-2'>
            <h2 className='text-xs font-manrope'>CASE STUDY 03</h2>
            <h1 className=' text-xl font-manrope'>
              <strong>myCelium:</strong> The game you just <em>can&apos;t</em> put down! Whether you&apos;re a <strong>plant lover</strong> or not, myCelium is for everyone. 
            </h1>
            <Link
              to='/mycelium'
            >
              <ViewCase />
            </Link>
          </div>
        </motion.div>
         
      </div>
    </div>
  )
}
