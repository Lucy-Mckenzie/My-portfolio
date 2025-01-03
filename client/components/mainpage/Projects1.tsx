import { Link, useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import MouseHover from '../MouseHover'

export default function Projects1() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  const [isImage, setIsImage] = useState(false)

    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

  return (
      <div className={`w-full relative lg:py-20 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <div className='flex relative items-center justify-center gap-x-6 mx-auto px-4'>
          
          <div className={`card relative rounded-box rounded-xl flex flex-col lg:h-[800px] h-auto w-full max-w-xl ${darkMode ? 'border border-white' : 'border border-black'}`}>
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
             {isImage && (
              <MouseHover />
            )}
            </Link>
               <button 
            className='font-manrope absolute bottom-52 right-2 text-sm z-10 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full shadow-md transition duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-lg'>
              Live Website
            </button>

            <div className='p-4 text-left space-y-2'>
            <h2 className='text-xs font-manrope'>CASE STUDY 02</h2>
            <h1 className=' text-xl font-manrope'>
            <strong>myCelium:</strong> The game you just <em>can&apos;t</em> put down! Whether you&apos;re a <strong>plant lover</strong> or not, myCelium is for everyone. 
            </h1>
            <Link
            to='/mycelium'
            onClick={scrollToTop}
            >
            <button className={`font-manrope relative lg:top-14 md:top-10 sm:top-10 right-1 text-md rounded-full border px-2 py-1 ${darkMode ? 'border-white hover:bg-white hover:text-black hover:border-white transition-all duration-[500ms]  ease-in-out' : 'border-black hover:bg-slate-950 hover:text-white hover:border-white transition-all duration-[500ms] ease-in-out'}`}>
              View Case Study →
            </button>
            </Link>
            </div>
          </div>
    
          <div className='divider divider-horizontal h-[800px]'></div>
    
          <div className={`card relative rounded-box rounded-xl flex flex-col lg:h-[800px] h-auto w-full max-w-xl ${darkMode ? 'border border-white' : 'border border-black'}`}>
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
            </Link>
              <button 
            className='font-manrope absolute bottom-52 right-2 text-sm z-10 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full shadow-md transition duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-lg'>
              Live Website
            </button>

            <div className='p-4 text-left space-y-2'>
            <h2 className='text-xs font-manrope'>CASE STUDY 03</h2>
            <h1 className=' text-xl font-manrope'>
          <strong>We Hike:</strong> helps hikers stay prepared with saved trails and huts, <strong>real-time alerts</strong>, and trail updates—<strong>all in one place.</strong>
            </h1>
            <Link
            to='/wehike'
            onClick={scrollToTop}
            >
            <button className={`font-manrope relative lg:top-14 md:top-10 sm:top-10 right-1 text-md rounded-full border px-2 py-1 ${darkMode ? 'border-white hover:bg-white hover:text-black hover:border-white transition-all duration-[500ms]  ease-in-out' : 'border-black hover:bg-slate-950 hover:text-white hover:border-white transition-all duration-[500ms] ease-in-out'}`}>
              View Case Study →
            </button>
            </Link>
            </div>
          </div>

        </div>
      </div>
    )
}
