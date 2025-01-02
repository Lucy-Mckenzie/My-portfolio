import { Link, useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import MouseHover from './MouseHover'

export default function Projects3() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  
    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

  return (
      <div className={`w-full relative py-20 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <div className='flex items-center justify-center gap-x-6 mx-auto px-4'>

          <div className='card rounded-box border border-black rounded-xl flex flex-col lg:h-[800px] w-full max-w-xl'>
            <Link
            to='/mycelium'
            onClick={scrollToTop}
            >
            <img 
              src='/images/mockups/myceliummain.png' 
              alt='Mycelium project' 
              className='w-full h-[600px] object-cover rounded-t-xl'
              onMouseEnter={() => setHoveredImage('mycelium')}
              onMouseLeave={() => setHoveredImage(null)}
            />
             <button 
            className='font-manrope absolute bottom-2 right-4 text-sm z-10 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full shadow-md transition duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-lg'>
              Live Website
            </button>
            </Link>
            {hoveredImage === 'mycelium' && (
              <MouseHover />
            )}
            <div className='p-4 text-left space-y-2'>
            <h2 className='text-xs font-manrope'>CASE STUDY 02</h2>
            <h1 className=' text-xl font-manrope'>
            <strong>myCelium:</strong> The game you just <em>can’t</em> put down! Whether you’re a <strong>plant lover</strong> or not, myCelium is for everyone. 
            </h1>
            <Link
            to='/mycelium'
            onClick={scrollToTop}
            >
            <button className='font-manrope relative top-14 text-md rounded-full border border-black px-2 py-1 bg-black text-white'>
              View Case Study →
            </button>
            </Link>
            </div>
          </div>
    
          <div className='divider divider-horizontal h-[800px]'></div>
    
          <div className='card rounded-box border border-black rounded-xl flex flex-col lg:h-[800px] w-full max-w-xl'>
          <Link
            to='/wehike'
            onClick={scrollToTop}
            >
            <img 
              src='/images/mockups/wehikemain.png' 
              alt='WeHike project' 
              className='w-full h-[600px] object-cover rounded-t-xl'
              onMouseEnter={() => setHoveredImage('wehike')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            </Link>
            {hoveredImage === 'wehike' && (
              <MouseHover />
            )}
            <div className='p-4 text-left space-y-2'>
            <h2 className='text-xs font-manrope'>CASE STUDY 03</h2>
            <h1 className=' text-xl font-manrope'>
          <strong>We Hike:</strong> helps hikers stay prepared with saved trails and huts, real-time alerts, and trail updates—all in one place.
            </h1>
            <Link
            to='/wehike'
            onClick={scrollToTop}
            >
            <button className='font-manrope relative top-14 right-1 text-md rounded-full border border-black px-2 py-1 bg-black text-white'>
              View Case Study →
            </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
