import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Projects() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`h-full m-0 p-0 ${darkMode ? 'bg-[#304954] text-white' : 'bg-[#fcf3e3] text-black'}`}>
     <p className='text-4xl font-light font-lato text-center mb-40 underline'>
      Projects
     </p>
    <div className='flex items-center justify-center'>
      <div className='flex flex-1 flex-col text-left max-w-[600px]'>
      <p className='text-4xl font-light font-lato mb-12'>
        Personal Project
      </p>
        <p className='text-2xl font-semibold mb-4'>
          We Hike
        </p>
        <div className='flex flex-row space-x-2 mb-3'>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 mr-20'>
          Discover information about your favorite hikes! Stay updated on recent alerts and log in to share reviews with friends.
        </p>
        <Link to='/wehike'>
        <button 
        className='border w-24 py-2 bg-slate-500 text-white border-black shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
          View project
          </button>
        </Link>
    </div>
    <div className='max-w-[420px] max-h-[400px] shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
      <img
        src='/images/project-photos/wehike.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-110 rounded-lg'
      />
    </div>
  </div>

  <div className='flex items-center justify-center my-32'>
      <div className='flex flex-1 flex-col text-left max-w-[600px]'>
      <p className='text-4xl font-light font-lato mb-12'>
        Group project/Agile facilitator
      </p>
        <p className='text-2xl font-semibold mb-4'>
          Sloth Library
        </p>
        <div className='flex flex-row space-x-2 mb-3'>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 mr-20'>
          Enter your ID and book ID to check out a book from the Sloth Libraries. The database (SQLite is updated instantly) - just make sure you bring it back!
        </p>
        <Link to='/slothlibraries'>
        <button 
        className='border w-24 py-2 bg-slate-500 text-white border-black shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
          View project
          </button>
        </Link>
    </div>
    <div className='max-w-[420px] max-h-[400px] shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
      <img
        src='/images/project-photos/slothli.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-110 rounded-lg'
      />
      </div>
    </div>
    <div className='flex items-center justify-center pb-32'>
      <div className='flex flex-1 flex-col text-left max-w-[600px]'>
      <p className='text-4xl font-light font-lato mb-12'>
        Group project/Git Keeper
      </p>
        <p className='text-2xl font-semibold mb-4'>
          dotmap
        </p>
        <div className='flex flex-row space-x-2 mb-3'>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 mr-20'>
        Pin your favorite locations on the map with custom markers! Powered by Leaflet.js and SQLite, all your pins are securely saved, allowing you to share them with friends or keep them private.
        </p>
        <Link to='/dotmap'>
        <button 
        className='border w-24 py-2 bg-slate-500 text-white border-black shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
          View project
          </button>
        </Link>
    </div>
    <div className='max-w-[420px] max-h-[400px] shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
      <img
        src='/images/project-photos/dotmap.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-110 rounded-lg'
      />
    </div>
  </div>
    </div>
  )
}


