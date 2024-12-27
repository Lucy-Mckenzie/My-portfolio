import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import SlothIcons from './icons/SlothLibrary-icons'
import MyCeliumIcons from './icons/MyCelium-icons'
import WeHikeIcons from './icons/WeHike-icons'
import DotmapIcons from './icons/Dotmap-icons'
import Button from './Button'


export default function Projects() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div className={`h-full m-0 px-4 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
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
        <WeHikeIcons />
        </div>
        <p className='mb-4 font-manrope text-xl'>
          Discover information about your favorite hikes! Stay updated on recent alerts and log in to share reviews with friends.
        </p>
        <Link to='/wehike'>
          <Button />
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
    <Link to='/wehike'
     onClick={scrollToTop}>
      {darkMode ?
      <img
        src='/images/project-photos/wehiketransp.png'
        alt='project display'
        className={`transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg`}
      />
      :
      <img
      src='/images/project-photos/wehike.png'
      alt='project display'
      className={`transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg`}
    />
      }
      </Link>
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
       <MyCeliumIcons />
     </div>
        <p className='mb-4 font-manrope text-xl'>
          MyCelium is a game where you grow mushrooms and sell them at the market, you plant mushroom spores, and once grown you can harvest it! 
        </p>
        <Link to='/mycelium'>
        <Button />
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
    <Link to='/mycelium' onClick={scrollToTop}>
      {darkMode ?
      <img
        src='/images/project-photos/myceliumtransp.png'
        alt='project display'
        className={`transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg`}
      />
      :
      <img
      src='/images/project-photos/mycelium.png'
      alt='project display'
      className={`transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg`}
    />
      }
      </Link>
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
          <SlothIcons />
        </div>
        <p className='mb-4 font-manrope text-xl'>
          Enter your ID and book ID to check out a book from the Sloth Libraries. The database (SQLite is updated instantly) - just make sure you bring it back!
        </p>
        <Link to='/slothlibrary'>
        <Button />
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
    <Link to='/slothlibrary' onClick={scrollToTop}>
      {darkMode ?
      <img
        src='/images/project-photos/slothlitransp.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg'
      />
      :
      <img
      src='/images/project-photos/slothli.png'
      alt='project display'
      className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg'
    />
      }
      </Link>
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
        <DotmapIcons />
     </div>
        <p className='mb-4 font-manrope text-xl'>
        Pin your favorite locations on the map with custom markers! Powered by Leaflet.js and SQLite, all your pins are securely saved, allowing you to share them with friends or keep them private.
        </p>
        <Link to='/dotmap'>
        <Button />
        </Link>
    </div>
    <div className='max-w-[520px] max-h-[400px]'>
    <Link to='/dotmap' onClick={scrollToTop}>
      {darkMode ?
      <img
        src='/images/project-photos/dotmaptransp.png'
        alt='project display'
        className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg'
      />
      :
      <img
      src='/images/project-photos/dotmap.png'
      alt='project display'
      className='transform transition-transform duration-150 hover:translate-y-[-10px] hover:scale-110 rounded-lg'
    />
      }
      </Link>
    </div>
  </div>
    </div>
  )
}


