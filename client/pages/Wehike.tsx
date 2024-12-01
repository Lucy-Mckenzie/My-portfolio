import { useOutletContext } from 'react-router-dom'

export default function WeHike() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-5xl mx-auto text-center'>
    <h1 className='font-manrope text-left font-semibold text-4xl'>
     We Hike: Your Ultimate Hiking Resource
    </h1>
    <p 
    className='font-manrope test-sm text-left pb-5 underline'>
      4 minute read
      </p>
      <p className='font-manrope mb-9 text-left'>
      Growing up, hiking was a significant part of my life, making this project especially meaningful to me. Too often, I’ve encountered hikers unprepared for the trails—unaware of crucial details like distances, weather conditions, or hut closures. 
        <br/>
      &quot;We Hike&quot; is designed to address these challenges. The platform allows users to sign in, save their favorite hikes, check real-time weather for specific areas, and stay updated on trail conditions.
      </p>
      <div className='flex justify-center'>
      <img
       src='/images/project-photos/wehike.png'
        alt='we-hike project'
        className='max-w-[700px] max-h-[700px] rounded-lg mb-16'>
      </img>
      </div>
      <div className='pb-10 space-x-14 font-manrope'>
    <a href='https://github.com/Lucy-Mckenzie/We-Hike' target='_blank' rel='noopener noreferrer'
    className='hover:font-semibold text-xl'
    >
    View Code
    </a>
    <a href='https://wehikenewzealand.com/' target='_blank' rel='noopener noreferrer'
    className='hover:font-semibold text-xl'
    >
    View Website
    </a>
    </div>
      <div className='text-left mb-10'>
      <h1 className='font-manrope pb-2 text-xl'>
        DESIGN BRIEF
        </h1>
      <p 
      className='font-manrope'>
        This project was designed for the sole purpose of making hiking more accessible by viewing all track and hut information in one place. By integrating third-party APIs, users can easily access essential details about hiking locations. To extend the experience, statistics are layered over an interactive map, allowing users to see the best times to hike in specific regions. The project leverages React, React Leaflet.js, and GeoJSON to provide dynamic and informative mapping features.
        < br/>
        Additionally, accessibility was a key focus of this project. I aimed to ensure the website is usable by everyone, regardless of ability. To achieve this, I used the WAVE extension to identify and address any accessibility issues throughout the development process.
      </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope'>
      The front end of the application was built using React, React Leaflet, and TypeScript to create a smooth, user-friendly interface. On the back end, Node.js and Express.js were chosen for their efficient server-side capabilities and seamless integration with the front end. 
      The server communicates with the SQLite database through Knex.js for easy and efficient data management. JWT is used for secure user authentication.
      To ensure platform stability and high-quality code, Test-Driven Development (TDD) was applied using Vitest for unit testing. Additionally, linting and TypeScript type checking were implemented to maintain clean and error-free code.
    </p>
      </div>
      <div className='text-left mb-10'>
        <h2 className='pb-2'>WHO ARE WE SOLVING FOR?</h2>
        <p className='font-manrope'>
          One of my main goals is to make hiking accessible for everyone, regardless of experience level. This project is still ongoing, with many more features in development. One of the key features I&apos;m working on is categorizing hiking tracks into groups for different abilities, such as &quot;First Timers&quot; and &quot;Multi-Day Walks.&quot;
        </p>
        </div>
        <div className='text-left mb-10'>
          <h2 className='pb-2'>PROBLEMS AND THOUGHT PROCESSES</h2>
          <p className='font-manrope'>
          A significant challenge I encountered was accessing and displaying data from the API through the backend, particularly in mapping the coordinates. The data I received was in NZTM (New Zealand Transverse Mercator) format, which Leaflet—an international mapping library—does not natively support. Leaflet requires coordinates in the standard latitude and longitude format.
          To solve this, I used a package called proj4 to transform the coordinates from NZTM to WGS84, the coordinate system used by Leaflet. Once the transformation was complete, I was able to map the data and display it as pins on the map.
          </p>
        </div>
      </div>
    </div>
  )
} 
