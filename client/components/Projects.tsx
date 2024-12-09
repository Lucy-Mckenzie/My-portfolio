import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'


export default function Projects() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div className={`h-full m-0 p-0 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
     <h1 className={`text-4xl font-extralight font-manrope text-center mb-32 pb-2 w-1/2 mx-auto ${darkMode ? 'border-b-[0.5px] border-white' : 'border-b-[0.5px] border-gray-600'}`}>
      Projects
     </h1>
    <div className='flex items-center justify-center mb-32'>
      <div className='flex flex-1 flex-col text-left max-w-[500px]'>
      <h2 className='text-xl font-light font-lato mb-9'>
        PERSONAL PROJECT
      </h2>
        <h2 className='text-4xl font-manrope pb-6'>
          We Hike
        </h2>
        <div className={`flex flex-row space-x-2 p-1 rounded w-56 ${darkMode ? 'bg-white' : '' }`}>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
        <img src="/images/icons/leaflet.svg" alt="leaflet icon" className="w-8 h-8" />
        <img src="/images/icons/auth0.png" alt="auth0 icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 font-manrope text-xl'>
          Discover information about your favorite hikes! Stay updated on recent alerts and log in to share reviews with friends.
        </p>
        <Link to='/wehike'>
        <button 
        className={`w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black hover:text-gray-600 hover:bg-gray-300 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
        onClick={scrollToTop}
        >
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
      <img
        src='/images/project-photos/wehike.png'
        alt='project display'
        className={`transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg`}
      />
    </div>
  </div>

  <div className='flex items-center justify-center my-32'>
      <div className='flex flex-1 flex-col text-left max-w-[500px]'>
      <h2 className='text-xl font-light font-lato mb-12'>
        GROUP PROJECT / AGILE FACILITATOR
      </h2>
        <h2 className='text-4xl font-manrope pb-6'>
          myCelium
        </h2>
        <div className={`flex flex-row space-x-2 p-1 rounded w-40 ${darkMode ? 'bg-white' : '' }`}>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
        <img src="/images/icons/phaser.svg" alt="phaser icon" className="w-8 h-8" />
     </div>
        <p className='mb-4 font-manrope text-xl'>
          MyCelium is a game where you grow mushrooms and sell them at the market, you plant mushroom spores, and once grown you can harvest it! 
        </p>
        <Link to='/mycelium'>
        <button 
        className={`w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black hover:text-gray-600 hover:bg-gray-300 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
        onClick={scrollToTop}
        >
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
      <img
        src='/images/project-photos/mycelium.png'
        alt='project display'
        className={`transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg`}
      />
    </div>
  </div>

  <div className='flex items-center justify-center my-32'>
      <div className='flex flex-1 flex-col text-left max-w-[500px]'>
      <h2 className='font-light font-lato text-xl mb-12'>
        GROUP PROJECT / AGILE FACILITATOR
      </h2>
        <h2 className='text-4xl font-manrope mb-4'>
          Sloth Library
        </h2>
        <div className={`flex flex-row space-x-2 p-1 rounded w-48 ${darkMode ? 'bg-white' : '' }`}>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/css3.svg" alt="css3 icon" className="w-7 h-7" />
        <img src="/images/icons/html5.svg" alt="html5 icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
     </div>
        <p className='mb-4 font-manrope text-xl'>
          Enter your ID and book ID to check out a book from the Sloth Libraries. The database (SQLite is updated instantly) - just make sure you bring it back!
        </p>
        <Link to='/slothlibrary'>
        <button 
        className={`w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black hover:text-gray-600 hover:bg-gray-300 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
        onClick={scrollToTop}
        >
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
      <img
        src='/images/project-photos/slothli.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg'
      />
      </div>
    </div>
    <div className='flex items-center justify-center pb-32'>
      <div className='flex flex-1 flex-col text-left max-w-[500px]'>
      <h2 className='text-xl font-light font-lato mb-12'>
        GROUP PROJECT / GIT KEEPER
      </h2>
        <h2 className='text-4xl font-manrope mb-4'>
          dotmap
        </h2>
        <div className={`flex flex-row space-x-2 p-1 rounded w-48 ${darkMode ? 'bg-white' : '' }`}>
        <img src="/images/icons/react.svg" alt='react icon' className="w-7 h-7" />
        <img src="/images/icons/sqlite.svg" alt="sqlite icon" className="w-7 h-7" />
        <img src="/images/icons/tailwind.svg" alt="tailwind icon" className="w-7 h-7" />
        <img src="/images/icons/typescript.svg" alt="typescript icon" className="w-7 h-7" />
        <img src="/images/icons/leaflet.svg" alt="leaflet icon" className="w-8 h-8" />
     </div>
        <p className='mb-4 font-manrope text-xl'>
        Pin your favorite locations on the map with custom markers! Powered by Leaflet.js and SQLite, all your pins are securely saved, allowing you to share them with friends or keep them private.
        </p>
        <Link to='/dotmap'>
        <button 
        className={`w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black hover:text-gray-600 hover:bg-gray-300 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
        onClick={scrollToTop}
        >
          VIEW PROJECT
          </button>
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
      <img
        src='/images/project-photos/dotmap.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg'
      />
    </div>
  </div>
    </div>
  )
}


