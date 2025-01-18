import { useOutletContext } from 'react-router-dom'
import SuncoastCarousel from '../components/SuncoastCarousel'
import SEO from './Seo'
import Projects2 from '../components/mainpage/Projects2'

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
      src='/images/mockups/suncoastlg.webp'
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
      However, I had never touched it. I spent the first two weeks learning the ins and outs of Next.js and quickly picked up its patterns. Its not only one I can add to my toolbelt but one I will continue using throughout my projects.
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
    <h3 className='font-manrope text-md'>
      Several aspects of this project were new territory for me:
    </h3>
    <ul className='font-manrope list-disc pl-5 mb-2'>
    <li className='mb-4'>
  <strong>Receiving emails from the enquiry form: </strong>
  I considered several approaches before deciding on the best option. The first was Nodemailer, a Node.js library that allows sending emails via SMTP. However, it lacks built-in email analytics and advanced spam protection, which were important to us. My other options were SendGrid and Mailjet, both cloud-based API and SMTP services. I ultimately chose Mailjet because it was the simplest to implement, offering built-in analytics and spam protection.
    </li>
    <li className='mb-4'>
  <strong>Learning Next.js, when to load files on the client side:</strong>
  {`Learning Next.js was a really fun part of the process. It's very intuitive and well-documented. However, when starting the project, I encountered errors and had the 'use client' directive (which means it renders on the frontend and makes it difficult for Google crawlers to find) in more files than I'd like to admit. That's when I started focusing on clean code practices, reducing reused code, and splitting larger components into smaller ones that would render on the client side. Overall, I believe Next.js significantly improved my code quality.`}
    </li>
      <li>
        <strong>Managing Spam for enquiry form: </strong>
        I was weighing up different options for this. My first idea was to create a custom solution from scratch. However, this proved to be quite challenging, and due to time constraints, it wasn’t feasible. So, I decided to use a library to help. When choosing between reCAPTCHA and hCaptcha, I found that the steps for both were quite similar, but I ultimately chose hCaptcha because it collects less data than Google’s reCAPTCHA. 
        </li>
    </ul>
  </div>
  </div>
</div>
</div>
<div className='text-center my-10 rounded-lg'> 
      <h1 className='text-lg pb-2 font-manrope border-b-[1px] rounded-lg border-black'>
       Explore more
      </h1>
      <Projects2 /> 
    </div>
</div>
</>
  )
} 
