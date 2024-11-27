import { useOutletContext } from 'react-router-dom'

export default function SlothLibrary() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#304954] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-[1100px]'>
    <h1 className='font-manrope flex items-center font-semibold text-4xl'>
    Sloth Library: The backend library manager 
    </h1>
    <p 
    className='font-manrope test-sm text-center'>
      4 minute read
      </p>
      <p className='font-manrope leading-relaxed'>
      Growing up, hiking was a significant part of my life, making this project especially meaningful to me. Too often, I’ve encountered hikers unprepared for the trails—unaware of crucial details like distances, weather conditions, or hut closures. 
        <br/>
      &quot;We Hike&quot; is designed to address these challenges. The platform allows users to sign in, save their favorite hikes, check real-time weather for specific areas, and stay updated on trail conditions.
      </p>
      <div className='flex justify-center'>
      <img
       src='/images/project-photos/slothli.png'
        alt='sloth library project'
        className='max-w-[700px] max-h-[700px] rounded-lg shadow-[0_8px_10px_rgba(0,0,0,0.25)]'>
      </img>
      </div>
      </div>
    </div>
  )
} 
