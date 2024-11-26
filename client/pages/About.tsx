import Clouds from "../components/Clouds"

export default function About() {

  return (
    <div className='bg-[#203a58] h-screen flex items-center justify-center text-center font-merriweather'>
      <div className='max-w-[700px] w-full flex flex-col text-left items-center ml-16 overflow-hidden'>
    <h1 className='font-light text-8xl text-white font-merriweather z-10'>
      Hi, I&apos;m Lucy
      </h1>
    <Clouds />
    <p className='text-white text-lg mt-4 py-3 z-10 text-left max-w-[570px]'>
      I&apos;m a creator and a lifelong learner, always seeking to understand more. Oh, and I have a small obsession with clouds!
    </p>
    <div className='flex justify-center space-x-2 z-10'>
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
