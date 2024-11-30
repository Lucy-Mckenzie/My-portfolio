import { useOutletContext } from 'react-router-dom'

export default function Dotmap() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-5xl mx-auto text-center'>
    <h1 className='font-manrope text-left font-semibold text-4xl'>
     dotmap: Customise your map and share with friends!
    </h1>
    <p 
   className='font-manrope test-sm text-left pb-5 underline'>
      4 minute read
      </p>
      <p className='font-manrope mb-9 text-left'>
      The goal of dotmap was to learn a new library, and push the limits a little. We were curious, how doable is this in 24 hour timeframe? 
        <br/>
     The end product was exactly what we imagined, we pushed the code very last minute. Reaching our MVP and sharing it with others was an incredibly rewarding experience
      </p>
      <div className='flex justify-center'>
      <img
       src='/images/project-photos/dotmap.png'
        alt='we-hike project'
        className={`max-w-[700px] max-h-[700px] rounded-lg mb-16 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'} `}>
      </img>
      </div>
    <div className='pb-10 text-xl font-manrope'>
    <a href='https://github.com/Lucy-Mckenzie/dotmap' target='_blank' rel='noopener noreferrer'
    className='hover:font-light'
    >
    View Code
    </a>
    </div>
      <div className='text-left mb-10'>
      <h1 className='font-manrope pb-2 text-xl'>
        DESIGN BRIEF
        </h1>
      <p 
      className='font-manrope'>
       This project was part of our 24-hour bootcamp group challenge. Collaborating in an international team, we quickly gravitated toward the idea of creating an app based around world maps. I pitched the idea of using Leaflet.js due to my prior experience with it.
       < br/>
       Dotmap was designed with user interaction as the main focus. The app allows users to save desired locations on a map and personalize them with details. We built the frontend using React and TypeScript, which communicated with a Node.js backend through RESTful APIs.
       In our group of four, I took on the role of Git Keeper, managing merge conflicts and organizing pull requests. Another significant responsibility of mine was introducing the team to new technology — specifically, React Leaflet — and helping everyone get up to speed.
      </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope pb-4'>
    Our goal was to create a dynamic map experience where users could place pins, drag them around, and save their locations.
    </p>
    <li className='pb-4'><span className='font-semibold'>Frontend: </span>
     We used React and TypeScript for building the user interface, utilizing Leaflet.js with its hooks for features like draggable pins. Tailwind CSS was used for styling.
    </li>
    <li><span className='font-semibold'>Backend: </span>
     The backend handled storing users&apos; pins so they could save across sessions. We implemented this using Node.js and Express.js, building RESTful APIs to allow for seamless communication with the frontend.
     </li>
      </div>
      <div className='text-left mb-10'>
        <h2 className='pb-2'>WHO ARE WE SOLVING FOR?</h2>
        <p className='font-manrope'>  
    This application is designed for users who want a simple and customizable map to save locations and relevant details.
        </p>
        </div>
        <div className='text-left mb-10'>
          <h2 className='pb-2'>PROBLEMS AND THOUGHT PROCESSES</h2>
          <p className='font-manrope'>
          We came across a few problems, one being that we weren&apos;t sure how to go about linking the data from leaflet to the backend api. Initially, we weren’t sure how to synchronize the draggable pin updates with our backend. 
          To solve this, we worked together as a group. Implementing a custom React hook that uses CRUD operations to send POST requests to the backend. By doing so, we successfully updated the database whenever a user moved or added a pin.

          </p>
        </div>
      </div>
    </div>
  )
} 
