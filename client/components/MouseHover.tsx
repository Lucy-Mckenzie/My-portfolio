import { motion } from 'framer-motion'
import {  useEffect, useState } from 'react'

export default function MouseHover() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div>
      <motion.div
        style={{
          position: 'absolute',
          pointerEvents: 'none', 
          zIndex: 50,
          width: 'auto', 
          height: 'auto', 
        }}
        animate={{
          top: mousePosition.y + 40,  
          left: mousePosition.x - 100,
        }}
        transition={{
          type: 'spring',
          stiffness: 280, 
          damping: 30, 
        }}
        className='bg-white text-black text-xs py-1 px-2 rounded-lg whitespace-nowrap'
      >
      View Project
      </motion.div>
    </div>
  )}
 

