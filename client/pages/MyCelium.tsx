import { useOutletContext } from 'react-router-dom'

export default function MyCelium() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-5xl mx-auto text-center'>
    <h1 className='font-manrope text-left font-semibold text-4xl'>
    MyCelium: grow your own mushrooms 
    </h1>
    <p 
    className='font-manrope test-sm text-left pb-5 underline'>
      4 minute read
      </p>
      <p className='font-manrope mb-9 text-left'>
      The game you just can&apos;t put down! Whether you are a plant lover or not, myCelium is for everyone. It is intuitive and simple. You plant the spores, watch them grow (by fertilising and watering), then harvest, sell at the market, and keep planting to your hearts content.
      </p>
      <div className='flex justify-center'>
        {darkMode ? 
      <img
       src='/images/project-photos/myceliumtransp.png'
        alt='myCelium project'
        className='max-w-[90rem] max-h-[80rem] rounded-lg mb-16'>
      </img>
      : 
      <img 
      src='/images/project-photos/myceliumwhite.png'
      alt='myCelium project'
       className='max-w-[90rem] max-h-[80rem] rounded-lg mb-16'>
      </img>
      }
      </div>
      <div className='pb-10 space-x-14 font-manrope'>
    <a href='https://github.com/Lucy-Mckenzie/myCelium' target='_blank' rel='noopener noreferrer'
    className='hover:font-light text-xl'
    >
    View Code
    </a>
    <a href='https://my-celium.devacademy.nz/' target='_blank' rel='noopener noreferrer'
    className='hover:font-semibold text-xl font-light'
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
       The idea for MyCelium came from another student in our group project. She proposed creating a game where players could grow mushrooms and sell them for profit.
       Myself and six others jumped on this idea, and together we spent a week learning how to incorporate Phaser.js into React.
        </p>
        <p className='font-manrope pt-2'>
        The idea is simple: you plant spores on a tile, watch the mushroom grow through three stages, water and fertilize it, then harvest the mushroom and sell it at the market to buy more spores.
      </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>AGILE FACILITOR</h2>
    <p className='font-manrope'>
    Myself and one other person were the Agile facilitators. Our task was to create systems and processes to ensure that everyone had work to do, no one encountered obstacles, and the workflow remained smooth. We held daily standups 3-4 times a day, where we asked three fundamental questions:
    </p>
    <ul className='py-2'>
   <li className='font-manrope italic py-2'>- &quot;What have you been working on?&quot;</li> 
   <li className='font-manrope italic py-2'>- &quot;Have you run into any blocks?&quot;</li>
   <li className='font-manrope italic py-2'>- &quot;What are you working on next?&quot;</li>
    </ul>
    <p className='font-manrope'>
  Managing a team of six, this approach was the most effective way to ensure that everyone was heard and supported.
    </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope'>
    For this project, we used Phaser.js for the game, Howl for the audio, and React with TypeScript for the frontend framework.
    Phaser.js and Howl were new libraries to all of us, which introduced a steep learning curve during the planning stage of the project.
    </p>
      </div>
        <div className='text-left mb-10'>
          <h2 className='pb-2'>PROBLEMS AND THOUGHT PROCESSES</h2>
          <p className='font-manrope'>
          As I mentioned above, we used Phaser.js for the game logic, which was a significant challenge. Adding TypeScript and React on top only made things more complicated.
          I had an incredible team that managed the Phaser logic, which allowed me and a few others to focus on UI/UX design. In this part, we created interactive elements and connected them seamlessly to the game.
        </p>
          <p className='font-manrope pt-2'>
          Working in a team of six was complex but very satisfying. As the Agile facilitator, I found the entire process to be an incredibly rewarding experience.
          </p>
        </div>
      </div>
    </div>
  )
} 