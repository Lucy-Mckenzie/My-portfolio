import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

const data = [
  { name: 'React', type: 'JavaScript library', image: '/images/icons/react.svg' },
  { name: 'Tailwind', type: 'CSS framework', image: '/images/icons/tailwind.svg' },
  { name: 'TypeScript', type: 'Superset of JavaScript', image: '/images/icons/typescript.svg' },
  { name: 'Figma', type: 'Design and prototyping tool', image: '/images/icons/figma.svg' },
  { name: 'Node.js', type: 'JavaScript runtime', image: '/images/icons/node.svg' },
  { name: 'Next.js', type: 'React framework', image: '/images/icons/next.svg' },
  { name: 'Git', type: 'Version control system', image: '/images/icons/git.svg' },
  { name: 'Vitest', type: 'JavaScript testing framework', image: '/images/icons/vitest.svg' },
]

export default function Skills() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const textMotion = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' }},
  }

  return (
    <div className={`pb-32 px-4 flex flex-col items-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <motion.div className='max-w-6xl'
        initial='hidden'
        whileInView='visible'
        variants={textMotion}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='text-left'>
          <h1 className={`text-4xl font-light font-manrope text-left pb-2 mx-auto`}>
        Current Technologies
          </h1>
          <motion.p className='text-md max-w-2xl text-left font-manrope mb-4'
            initial='hidden'
            whileInView='visible'
            variants={textMotion}
            viewport={{ once: true, amount: 0.1 }}
          >
      I&apos;m proficient in various modern technologies that empower me to build scalable functional solutions.
      These are some of my main technologies.
          </motion.p>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 gap-4 mt-6'>
          {data.map((tech, index) => (
            <div
              key={index}
              className='flex items-center space-x-4 bg-[#e3e3e3] text-black py-2 px-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 border-white border'>
              <img 
                src={tech.image}
                alt={tech.name}
                className='w-12 h-12 p-1 object-contain border border-gray-400 rounded-md shrink-0'
              />
              <div>
                <h3 className='text-lg'>
                  {tech.name}
                </h3>
                <p className='text-xs'>
                  {tech.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

