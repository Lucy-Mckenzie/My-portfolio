import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Projects() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`h-full m-0 p-0 ${darkMode ? 'bg-[#304954] text-white' : 'bg-[#fffbf9] text-black'}`}>
     <p className='text-4xl font-extralight font-manrope text-center mb-40 pb-2 border-b-[0.5px] w-1/2 mx-auto'>
      Projects
     </p>
    <div className='flex items-center justify-center'>
      <div className='flex flex-1 flex-col text-left max-w-[600px]'>
      <p className='text-xl font-light font-lato mb-9'>
        PERSONAL PROJECT
      </p>
        <p className='text-4xl font-manrope pb-6'>
          We Hike
        </p>
        <div className='flex flex-row space-x-2 mb-3'>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
        <img src="/images/icons/leaflet.svg" alt="leaflet icon" className="w-8 h-8" />
        <img src="/images/icons/auth0.png" alt="auth0 icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 mr-20 font-manrope text-xl'>
          Discover information about your favorite hikes! Stay updated on recent alerts and log in to share reviews with friends.
        </p>
        <Link to='/wehike'>
        <button 
        className=' w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:text-gray-600 hover:bg-gray-300'>
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[420px] max-h-[400px]'>
      <img
        src='/images/project-photos/wehike.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-110 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.3)]'
      />
    </div>
  </div>

  <div className='flex items-center justify-center my-32'>
      <div className='flex flex-1 flex-col text-left max-w-[600px]'>
      <p className='font-light font-manrope text-xl mb-12'>
        GROUP PROJECT / AGILE FACILITATOR
      </p>
        <p className='text-4xl font-manrope mb-4'>
          Sloth Library
        </p>
        <div className='flex flex-row space-x-2 mb-3'>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/css3.svg" alt="css3 icon" className="w-7 h-7" />
        <img src="/images/icons/html5.svg" alt="html5 icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 mr-20 font-manrope text-xl'>
          Enter your ID and book ID to check out a book from the Sloth Libraries. The database (SQLite is updated instantly) - just make sure you bring it back!
        </p>
        <Link to='/slothlibrary'>
        <button 
        className=' w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:text-gray-600 hover:bg-gray-300'>
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[420px] max-h-[400px]'>
      <img
        src='/images/project-photos/slothli.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-110 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.3)]'
      />
      </div>
    </div>
    <div className='flex items-center justify-center pb-32'>
      <div className='flex flex-1 flex-col text-left max-w-[600px]'>
      <p className='text-xl font-light font-manrope mb-12'>
        GROUP PROJECT / GIT KEEPER
      </p>
        <p className='text-4xl font-manrope mb-4'>
          dotmap
        </p>
        <div className='flex flex-row space-x-2 mb-3'>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
        <img src="/images/icons/leaflet.svg" alt="leaflet icon" className="w-8 h-8" />
     </div>
        <p className='mb-4 mr-20 font-manrope text-xl'>
        Pin your favorite locations on the map with custom markers! Powered by Leaflet.js and SQLite, all your pins are securely saved, allowing you to share them with friends or keep them private.
        </p>
        <Link to='/dotmap'>
        <button 
        className=' w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:text-gray-600 hover:bg-gray-300'>
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[420px] max-h-[400px] shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>
      <img
        src='/images/project-photos/dotmap.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-110 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.3)]'
      />
    </div>
  </div>
    </div>
  )
}


