import { useOutletContext } from 'react-router-dom'
import SEO from './Seo.tsx'

export default function WeHike() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <>
      <SEO 
        title='We Hike - Lucy Mckenzie Portfolio'
        description='A personal project of mine.'
        keywords='portfolio, about, web developer, software developer, Next.js, React, Typescript'
        canonical='https://lucymckenziedev.com/wehike'
      />
      <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <div className='max-w-5xl mx-auto text-center'>
          <h1 className='font-manrope text-left font-semibold text-4xl'>
            We Hike: Your Ultimate Hiking Resource
          </h1>
          <p 
            className='font-manrope test-sm text-left pb-5 underline'>
            5 minute read
          </p>
          <div className='flex justify-center'>
            <img
              src='/images/mockups/wehikelg.png'
              alt='we-hike project'
              className='max-w-full max-h-[60vh] sm:max-w-[90vw] sm:max-h-[90vh] md:max-w-[90vw] md:max-h-[90vh] lg:max-w-[95vw] lg:max-h-[120vh] rounded-md mb-16'>
            </img>
          </div>
          <div className='flex pb-10 space-x-14 font-manrope justify-center'>
            <a href='https://github.com/Lucy-Mckenzie/We-Hike' target='_blank' rel='noopener noreferrer'
              className='text-xl font-light transition-transform duration-300 hover:scale-105'
            >
              View Code
            </a>
            <a href='https://www.wehikenewzealand.com/' target='_blank' rel='noopener noreferrer'
              className='text-xl font-light transition-transform duration-300 hover:scale-105'
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
              This project was designed for the sole purpose of making hiking more accessible by viewing all track and hut information in one place. By integrating <strong>third-party APIs</strong>, users can easily access essential details about hiking locations. To extend the experience, statistics are layered over an interactive map, allowing users to see the best times to hike in specific regions. The project leverages <strong>React, React Leaflet.js, and GeoJSON</strong> to provide dynamic and informative mapping features.
            </p>
            <p className='pt-4 font-manrope'>
              The Figma prototype below was one of my first designs. It relates to the user stories, and page navigation.
            </p>
            <img
              src='images/wehike-figma.png'
              alt='figma planning'
            />
          </div>
          <div className='text-left mb-10'>
            <h2 className='pb-2'>TECH STACK AND EXPLANATION</h2>
            <p className='font-manrope'>
              The front end of the application was built using React, React Leaflet, and <strong>TypeScript</strong> to create a smooth, user-friendly interface. On the back end, <strong>Node.js and Express.js</strong> were chosen for their efficient server-side capabilities and seamless integration with the front end. 
            </p>
            <p className='pt-4 font-manrope'>
              The server communicates with the SQLite database through <strong>Knex.js</strong> for easy and efficient data management. JWT is used for secure user authentication.
              To ensure platform stability and high-quality code, <strong>Test-Driven Development (TDD)</strong> was applied using <strong>Vitest</strong> for unit testing. Additionally, linting and TypeScript type checking were implemented to maintain clean and error-free code.
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
              <strong>A significant challenge</strong> I encountered was accessing and displaying data from the API through the backend, particularly in mapping the coordinates. The data I received was in NZTM (New Zealand Transverse Mercator) format, which Leaflet—an international mapping library—does not natively support. Leaflet requires coordinates in the standard latitude and longitude format.
                To solve this, I used a package called proj4 to transform the coordinates from NZTM to WGS84, the coordinate system used by Leaflet. Once the transformation was complete, I was able to map the data and display it as pins on the map.
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 
