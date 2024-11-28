import { useOutletContext } from 'react-router-dom'

export default function SlothLibrary() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-5xl mx-auto text-center'>
    <h1 className='font-manrope text-left font-semibold text-4xl'>
    Sloth Library: The backend library manager 
    </h1>
    <p 
    className='font-manrope test-sm text-left pb-5 underline'>
      4 minute read
      </p>
      <p className='font-manrope mb-9 text-left'>
      
        <br/>
      
      </p>
      <div className='flex justify-center'>
      <img
       src='/images/project-photos/slothli.png'
        alt='sloth library project'
        className={`max-w-[700px] max-h-[700px] rounded-lg mb-16 ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'} `}>
      </img>
      </div>
      <div className='text-left mb-10'>
      <h1 className='font-playfair pb-2 text-xl'>
        DESIGN BRIEF
        </h1>
      <p 
      className='font-manrope'>
       
        < br/>
      
      </p>
      </div>
       <div className='text-left mb-10'>
      <h2 className='pb-2'>TECH STACK AND EXPLAINATION</h2>
    <p className='font-manrope'>
     
    </p>
      </div>
      <div className='text-left mb-10'>
        <h2 className='pb-2'>WHO ARE WE SOLVING FOR?</h2>
        <p className='font-manrope'>
        
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
