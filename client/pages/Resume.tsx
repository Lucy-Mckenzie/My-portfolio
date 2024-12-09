
export default function Resume() {
  return (
    <div className='flex justify-center items-center '>
    
       <a href="/images/Resume.pdf" download="Resume-Lucy-Mckenzie.pdf">
        <button className='font-manrope text-lg'>Click to download</button>
        <div className='w-[600px] h-auto'>
        <img src='/images/cv.png' alt='cv' />
        <img src='/images/cv1.png' alt='cv' />
        </div>
      </a>
    </div>

  )

}