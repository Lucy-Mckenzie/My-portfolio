
export default function Resume() {
  return (
    <div className='flex justify-center items-center '>
    
       <a className='hover:text-gray-500' href='/images/Resume.pdf' download='Resume-Lucy-Mckenzie.pdf'>
        <div className='w-[600px] h-auto rounded-sm shadow-lg'>
        <img src='/images/resume.png' alt='resume' />
        </div>
      </a>
    </div>

  )

}