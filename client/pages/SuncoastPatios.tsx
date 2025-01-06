import { useOutletContext } from 'react-router-dom'
import SuncoastCarousel from '../components/SuncoastCarousel'
import SEO from './Seo'

export default function SuncoastPatios() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <>
      <SEO 
        title='Suncoast Patios - Lucy Mckenzie Portfolio'
        description='A website created for a client of mine, Suncoast Patios.'
        keywords='portfolio, about, web developer, software developer, Next.js, React, Typescript'
        canonical='https://lucymckenziedev.com/suncoastpatios'
      />
    <div className={`flex flex-col h-full mx-auto space-y-6 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <div className='lg:max-w-6xl md:max-w-5xl text-center mx-auto md:p-4'>
    <h1 className='font-manrope text-left font-semibold lg:text-4xl md:text-3xl md:w-9/12'>
     Suncoast Patios: Specialising in comfortable outdoor living
    </h1>
    <p 
    className='font-manrope test-sm text-left mb-10 underline '>
      4 minute read
      </p>
      <div className='flex justify-center'>
        <img
      src='/images/mockups/suncoastlg.png'
       alt='suncoast-patios project'
       className='max-w-full max-h-[60vh] sm:max-w-[90vw] sm:max-h-[90vh] md:max-w-[90vw] md:max-h-[90vh] lg:max-w-[100vw] lg:max-h-[120vh] rounded-md mb-16'>
     </img>
      </div>
      <div className='flex pb-10 space-x-14 font-manrope justify-center'>
        <a 
          href='https://github.com/Lucy-Mckenzie/suncoast-patios' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-xl font-light transition-transform duration-300 hover:scale-105'
        >
          View Code
        </a>
        <a 
          href='https://suncoast-patios-4ecd1fa1b515.herokuapp.com/' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-xl font-light transition-transform duration-300 hover:scale-105'
        >
          View Website
        </a>
      </div>
      </div>

  <div className='flex flex-col lg:flex-row items-start mb-10'>
    <div className='text-left'>

     <div className='mb-10 max-w-3xl mx-auto'>
     <h1 className='font-poppins text-xl pb-2'>
       DESIGN BRIEF
      </h1>
      <p className='font-manrope'>
        Suncoast Patios needed a website revamp. The outdated design was being left behind in the digital graveyard, gradually slipping down the search engine rankings.
      </p>
      <p className='pt-4 font-manrope'>
        The new design prioritises <strong>SEO optimisation</strong>, <strong>user-friendly interface design</strong>, and <strong>enhanced user experience</strong> to better serve their audience.
      </p>
  </div>

    <div className='mb-10 w-[100vw]'>
      <SuncoastCarousel />
    </div>

    <div className='max-w-3xl mx-auto'>
    <div className='mb-10'>
      <h2 className='text-lg pb-2 font-poppins'>TECH STACK AND EXPLANATION</h2>
      <p className='font-manrope pb-2'>
      SEO optimisation was cruicial for this project, as well as server based rendering to ensure quick loading. I found <strong>Next.js</strong> to be the ideal framework for this. 
      </p>
      <p className='font-manrope'>
      However, I had never touched it. I spent the first two weeks learnign the ins and outs of Next.js and quickly picked up its patterns. Its not only one I can add to my toolbelt but one I will continue using throughout my projects.
      </p>
    </div>

    <div className='mb-10'>
      <h2 className='text-lg pb-2 font-poppins'>WHO ARE WE SOLVING FOR?</h2>
      <p className='font-manrope pb-2'>
        Previously, most of the clientele for this company came through word of mouth. Online inquiries were minimal due to the outdated website. The <strong>poor SEO</strong> caused the website to rank 9th among outdoor brands in Hawkes Bay.
      </p>
      <p className='font-manrope'>
       The sole focus is to have a <strong>simple, dynamic</strong> website that users can easily navigate. With testimonials, many call to actions, we create a user flow that efortlessly brings clients to the enquiry form.
      </p>
    </div>

    <div className='mb-10'>
    <h2 className='text-lg pb-2 font-poppins'>PROBLEMS AND THOUGHT PROCESSES</h2>
    <p className='font-manrope'>
      Several aspects of this project were new territory for me:
    </p>
    <ul className='font-manrope list-disc pl-5'>
      <li>Connecting a form to an email (Mailjet solved this problem).</li>
      <li>Using Next.js to load files on the server via a file-based routing system (this involved a lot of trial, error, and Google searches).</li>
      <li>Implementing a carousel (Slick Carousel solved this problem).</li>
    </ul>
  </div>
  </div>
</div>
</div>
</div>
</>
  )
} 
