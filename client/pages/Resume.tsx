import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Resume() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isImage, setIsImage] = useState(false)

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
    <motion.div
    className={`flex justify-center items-center ${
      darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'
    }`}
  >
  {isImage && (
    <motion.div
      style={{
        position: 'absolute',
        top: mousePosition.y - 30, 
        left: mousePosition.x + 10,
        pointerEvents: 'none', 
        zIndex: 10,
      }}
      className='bg-gray-500 text-white text-xs py-1 px-2 rounded'
    >
      Click to download
    </motion.div>
  )}
    <motion.div 
    onMouseEnter={() => setIsImage(true)}
    onMouseLeave={() => setIsImage(false)}
    className='relative group'> 
      <a
        className='hover:text-gray-500'
        href='/images/Resume.pdf'
        download='Resume-Lucy-Mckenzie.pdf'
      >
        <div className='w-[600px] h-auto rounded-sm shadow-lg hover:cursor-pointer'>
          <img src='/images/resume.png' alt='resume' />
        </div>
      </a>
    </motion.div>
  </motion.div>
  )
}