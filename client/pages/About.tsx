import { motion } from 'framer-motion'
import { useOutletContext } from 'react-router-dom'
import SEO from './Seo.tsx'

export default function About() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  }

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  }

  return (
    <>
      <SEO 
        title='About - Lucy Mckenzie Portfolio'
        description='Learn more about me, my skills, and my journey in software development.'
        keywords='portfolio, about, web developer, software developer, Next.js, React, Typescript'
        canonical='https://lucymckenziedev.com/about'
      />
      <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <div className='max-w-[63rem] mx-auto text-center'>
          <motion.h1 
            className='font-manrope text-center my-6 text-4xl hover:cursor-pointer'
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {"More about me".split('').map((child, index) => (
              <span className='hoverText' key={index}>
                {child}  
              </span>
            ))}
          </motion.h1>
          <div className='flex items-center max-w-[58rem]'>
            <div className='flex-1'>
              <motion.img
                src='/images/Lucy-Mckenzie1.jpeg'
                alt='Lucy Mckenzie in action'
                className={`max-h-[500px] w-[375px] rounded ${darkMode ? 'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
                variants={slideIn}
                initial="hidden"
                animate="visible"
              />
            </div>
            <div className='flex-1 text-left border border-gray-300 p-5 rounded'>
              <motion.p 
                className='font-manrope pb-4'
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
              I&apos;m Lucy, a Software Developer based in Australia. I enjoy a balanced life, the fine dance between creativity and logic. This means listening to classical music while my mind works double-time crafting clean, organised code.
              </motion.p>
              <motion.p 
                className='font-manrope pb-6'
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
              With a love all things competitive and challenging, I find the flow of solving a problem something that I wake up excited to tackle every single day.
              </motion.p>
            </div>
          </div>
          <div className='flex flex-col text-left border-b-[1px]'>
            <motion.h2 
              className='font-manrope pb-2 text-xl mt-10'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            MY PHILOSOPHY
            </motion.h2>
            <motion.p 
              className='font-manrope pb-6'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            Growing up, I was really shy. Presenting to people, and standing out in a group terrified me. That changed when I traveled around Australia with my family of six, home schooling along the way.
            This journey was a turning point in my life. I developed three fundamental skills: problem-solving, making friends, and taking control of my own life. <strong>These lessons shaped who I am today.</strong>
            </motion.p>
            <motion.h2 
              className='font-manrope pb-2 text-xl'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            MY JOURNEY
            </motion.h2>
            <motion.p 
              className='font-manrope pb-6'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            I grew up playing Nancy Drew games, board games, and any mystery adventure book I could get my hands on. <strong>I love the unknown</strong>, the mysteries of the universe that we may never unravel.
            </motion.p>
            <motion.p 
              className='font-manrope pb-6'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            Programming brings a thrill, something I can&apos;t quite put my finger on. All I know is that I found coding and <strong>everything clicked into place.</strong> Studying at Dev Academy only confirmed my drive for solving problems, innovation, and my place in the developing world.
            </motion.p>
          
            <motion.h2 
              className='font-manrope pb-2 text-xl'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            AS A COLLEAGUE
            </motion.h2>
            <motion.p 
              className='font-manrope pb-4' 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <strong>Collaboration is at the heart of who I am.</strong> With a background in sales, management, and tourism, I excel at bridging the gap between technical and creative minds on any team. Encouraging and working successfully with others comes naturally to me.
            </motion.p>
            <motion.p 
              className='pb-4 font-manrope'
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
            I&apos;m always up for team board games or a coffee chat. I believe team collaboration is one of the key foundations of a successful company.
            </motion.p>
          </div>
        
          <motion.p 
            className='font-manrope pb-6 text-left pt-3'
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
          Thank you for taking the time to check out my work and learn a little more about me. I&apos;m open to any software development opportunities and can&apos;t wait to hear from you!
          </motion.p>
        </div>
      </div>
    </>
  )
} 
