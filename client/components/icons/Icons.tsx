import { motion } from "motion/react"
import { useRef } from "react"

export default function Icons() {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div 
    className='flex flex-wrap text-left gap-2 mb-8 relative' ref={constraintsRef}>
    <motion.p 
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      React
    </motion.p>
    <motion.p 
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer' 
    drag
    dragConstraints={constraintsRef}>
      Javascript
      </motion.p>
    <motion.p
     className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
      drag
      dragConstraints={constraintsRef}> 
      Typescript
    </motion.p>
    <motion.p 
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      Node.js
    </motion.p>
    <motion.p 
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      Leaflet.js
    </motion.p>
    <motion.p 
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      HTML-5
    </motion.p>
    <motion.p
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      CSS-3
    </motion.p>
    <motion.p 
    className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
    Tailwind-CSS
    </motion.p>
    <motion.p className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      SQLite
    </motion.p>
    <motion.p className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      Git
    </motion.p>
    <motion.p className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      Excel
    </motion.p>
    <motion.p className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      AWS
    </motion.p>
    <motion.p className='border-gray-100 bg-gray-600 text-white px-2 py-1 shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-sm hover:bg-gray-500 hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    drag
    dragConstraints={constraintsRef}>
      Next.js
    </motion.p>
    </motion.div>
  )
}

