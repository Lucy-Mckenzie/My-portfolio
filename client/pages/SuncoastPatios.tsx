import { useOutletContext } from 'react-router-dom'

export default function SuncoastPatios() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-5xl mx-auto text-center'>
    <h1 className='font-manrope text-left font-semibold text-4xl'>
     Suncoast Patios: Specialising in comfortable outdoor living
    </h1>
    <p 
    className='font-manrope test-sm text-left mb-10 underline'>
      4 minute read
      </p>
      {/* <p className='font-manrope mb-9 text-left'>
      Growing up, hiking was a significant part of my life, making this project especially meaningful to me. Too often, I&apos;ve encountered hikers unprepared for the trails—unaware of crucial details like distances, weather conditions, or hut closures. 
        <br/>
      &quot;We Hike&quot; is designed to address these challenges. The platform allows users to sign in, save their favorite hikes, check real-time weather for specific areas, and stay updated on trail conditions.
      </p> */}
      <div className='flex justify-center'>
        <img
      src='/images/mockups/suncoastlg.png'
       alt='suncoast-patios project'
       className='max-w-[93rem] max-h-[73rem] rounded-md mb-16'>
     </img>
      </div>
      <div className='flex pb-10 space-x-14 font-manrope justify-center'>
        <a 
          href='https://github.com/Lucy-Mckenzie/suncoast-patios' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-xl font-light transition-transform duration-300 hover:scale-105'
        >
          View Code
        </a>
        <a 
          href='https://suncoast-patios-4ecd1fa1b515.herokuapp.com/' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-xl font-light transition-transform duration-300 hover:scale-105'
        >
          View Website
        </a>
      </div>
      <div className='text-left mb-10'>
      <h1 className='font-manrope pb-2 text-xl'>
        DESIGN BRIEF
        </h1>
        <p className='font-manrope'>
          Suncoast Patios needed a website revamp. The outdated design was being left behind in the digital graveyard, gradually slipping down the search engine rankings.
        </p>
        <p className='pt-4 font-manrope'>
          The new design focused on SEO optimisation, user-friendly interface design, and improved usability to better serve their audience.
        </p>
        <img
        src='images/project-photos/suncoast-figma.png'
        alt='figma planning'
        className='w-1/2'
        />
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope'>
     
      </p>
      <p className='pt-4 font-manrope'>
      
      </p>
      </div>
      <div className='text-left mb-10'>
        <h2 className='pb-2'>WHO ARE WE SOLVING FOR?</h2>
        <p className='font-manrope'>
        Previously most of the cliental for this company was coming through word of mouth, the enquirys coming through online were next to none. 
        This was due to a few reasons, the website was getting out of date. This affected the SEO, making the website return 9th on the list of outdoor brands in Hawkes Bay. 
        </p>
        </div>
        <div className='text-left mb-10'>
          <h2 className='pb-2'>PROBLEMS AND THOUGHT PROCESSES</h2>
          <p className='font-manrope'>
         
          </p>
        </div>
      </div>
    </div>
  )
} 
