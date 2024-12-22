import { useOutletContext } from 'react-router-dom'

export default function SlothLibrary() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-5xl mx-auto text-center'>
    <h1 className='font-manrope text-left font-semibold text-4xl'>
    Sloth Library: The backend library manager 
    </h1>
    <p 
    className='font-manrope test-sm text-left pb-5 underline'>
      4 minute read
      </p>
      <p className='font-manrope mb-9 text-left'>
      Being a book lover myself, this was a project idea I pitched. I&apos;ve always been fascinated by the seamless logic behind how libraries manage book checkouts and returns.
        <br/>
        This project was purely about learning opportunities, and by the end of the day, we felt we had achieved our goals. Our team&apos;s <strong>communication and negotiation</strong> were on point, which made the process smooth and rewarding.
      </p>
      <div className='flex justify-center'>
      <img
       src='/images/project-photos/slothlitransp.png'
        alt='sloth library project'
        className='max-w-[60rem] max-h-[60rem] rounded-lg mb-16'>
      </img>
      </div>
      <div className='pb-10 font-manrope'>
    <a href='https://github.com/Lucy-Mckenzie/Sloth-Library' target='_blank' rel='noopener noreferrer'
    className='hover:font-light text-xl'
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
       The purpose of Sloth Library was to practice seamless communication between the frontend and backend using <strong>RESTful APIs.</strong> Our MVP aimed to create an app for librarians to track book stock and monitor which books are checked out, with real-time updates to the database. 
        </p>
        <p className='font-manrope pt-2'>
        Working in a team of three, we had one day to plan and build the app, which limited the features. My role as <strong>Agile Facilitator</strong> involved organizing daily standups, tracking team progress, identifying and addressing any blockers, and coordinating the next steps to maintain smooth collaboration and ensure we stayed on track.
      </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope'>
    For the frontend, we chose <strong>React, TypeScript, HTML, and CSS</strong> for their simplicity and reliability. The backend utilized <strong>Node.js with Express.js,</strong> and the database was built with <strong>Knex.js and SQLite.</strong>
    < br />
    Using RESTful APIs, we established seamless communication between the frontend and backend to integrate and manage the data effectively.
    </p>
      </div>
        <div className='text-left mb-10'>
          <h2 className='pb-2'>PROBLEMS AND THOUGHT PROCESSES</h2>
          <p className='font-manrope'>
          <p className='font-manrope pt-2'>
    One key challenge was linking the checkout form to the database. Since we were relatively new to the technologies, we initially struggled to connect the pieces. Our solution was to pass the form data as props, sending the necessary information to the parent container. The parent container then connected the data to the database upon user submission.
        </p>
          </p>
        </div>
      </div>
    </div>
  )
} 
