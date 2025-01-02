import { Link, useOutletContext } from 'react-router-dom'

export default function Projects3() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
      <div className={`w-full py-20 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <div className='flex items-center justify-center gap-x-6 mx-auto px-4'>

          <div className='card rounded-box border border-black rounded-xl flex flex-col lg:h-[800px] w-full max-w-xl'>
            <img 
              src='/images/mockups/myceliummain.png' 
              alt='Mycelium project' 
              className='w-full h-[600px] object-cover rounded-t-xl'
            />
            <div className='p-4 text-center'>
              <h2 className='text-xl font-bold'>Mycelium Project</h2>
              <p></p>
            </div>
          </div>
    
          <div className='divider divider-horizontal h-[800px]'></div>
    
          <div className='card rounded-box border border-black rounded-xl flex flex-col lg:h-[800px] w-full max-w-xl'>
            <img 
              src='/images/mockups/wehikemain.png' 
              alt='WeHike project' 
              className='w-full h-[600px] object-cover rounded-t-xl'
            />
            <div className='p-4 text-center'>
              <h2 className='text-xl font-bold'>WeHike Project</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    )
}
