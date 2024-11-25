
const About = () => {
  
  
  return (
    <div className='bg-[#ead0ab] h-screen flex items-center justify-center text-center'>
      <div className='max-w-[#1000px] w-full'>
    <h1 className='font-extrabold text-9xl text-[#213b73]'>Hi, I&apos;m Lucy</h1>
    <p className='text-[#213b73] text-lg mt-4'>I love understanding and creating, I am a lifelong learner, I&apos;m also a little obssesed with clouds</p>
    <div className='flex justify-center space-x-2'>
      <a href="https://github.com/Lucy-Mckenzie" target="_blank" className="transition-transform transform hover:scale-110" rel="noreferrer">
        <img src="/images/icons/github.svg" alt="Github icon" className="w-7 h-7" />
      </a>
      <a href="mailto:your-email@example.com" className="transition-transform transform hover:scale-110">
        <img src="/images/icons/mail.svg" alt="Mail icon" className="w-7 h-7" />
      </a>
      <a href="https://www.linkedin.com/in/lucy-mckenzie-a08781317/" target="_blank" className="transition-transform transform hover:scale-110" rel="noreferrer">
        <img src="/images/icons/linkedin.svg" alt="Linkedin icon" className="w-7 h-7" />
      </a>
    </div>
    </div>
    </div>
  )
}

export default About