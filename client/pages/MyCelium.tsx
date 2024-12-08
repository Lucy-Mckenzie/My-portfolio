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
    
      </p>
      <div className='flex justify-center'>
      <img
       src='/images/project-photos/slothli.png'
        alt='sloth library project'
        className='max-w-[60rem] max-h-[60rem] rounded-lg mb-16'>
      </img>
      </div>
      <div className='pb-10 font-manrope'>
    <a href='https://github.com/Lucy-Mckenzie/myCelium' target='_blank' rel='noopener noreferrer'
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
       
        </p>
        <p className='font-manrope pt-2'>
       
      </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope'>
   
    </p>
      </div>
        <div className='text-left mb-10'>
          <h2 className='pb-2'>PROBLEMS AND THOUGHT PROCESSES</h2>
          <p className='font-manrope'>
          <p className='font-manrope pt-2'>
   
        </p>
          </p>
        </div>
      </div>
    </div>
  )
} 