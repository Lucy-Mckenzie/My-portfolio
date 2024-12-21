import { motion } from "motion/react"

export default function WeHikeIcons() {
  return (
    <>
       <motion.div className='relative group'>
        <motion.img 
          src='/images/icons/react.svg'
          alt='React icon'
          className='w-7 h-7 hover:cursor-pointer'
          drag
        />
        <motion.div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          React
        </motion.div>
      </motion.div>
      <motion.div className='relative group'>
        <motion.img 
         src='/images/icons/tailwind.svg'
          alt='Tailwind icon'
          className='w-7 h-7 hover:cursor-pointer'
          drag
        />
        <motion.div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          Tailwind CSS
        </motion.div>
      </motion.div>
      <motion.div className='relative group'>
        <motion.img 
         src='/images/icons/typescript.svg'
          alt='Tyescript icon'
          className='w-7 h-7 hover:cursor-pointer'
          drag
        />
        <motion.div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          Typescript
        </motion.div>
      </motion.div>
      <motion.div className='relative group'>
        <motion.img 
         src='/images/icons/leaflet.svg'
          alt='Leaflet icon'
          className='w-7 h-7 hover:cursor-pointer'
          drag
        />
        <motion.div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          Leaflet.js
        </motion.div>
      </motion.div>
      <motion.div className='relative group'>
        <motion.img 
         src='/images/icons/sqlite.svg'
          alt='SQLite icon'
          className='w-7 h-7 hover:cursor-pointer'
          drag
        />
        <motion.div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          SQLite
        </motion.div>
      </motion.div>
      <motion.div className='relative group'>
        <motion.img 
         src='/images/icons/auth0.png'
          alt='Auth0 icon'
          className='w-7 h-7 hover:cursor-pointer'
          drag
        />
        <motion.div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          Auth0
        </motion.div>
      </motion.div>
  </>
  )
}
