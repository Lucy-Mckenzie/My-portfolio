import { motion } from 'framer-motion'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Contact() {

  const email = 'Lucymckenzie62@gmail.com'
  const [click, setClick] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    .then(() => alert('Copied!'))
    .catch(() => console.error('Sorry couldnt copy email'))
  }


  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col w-full mx-auto p-6 space-y-6 py-40 items-center justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <motion.h1 
        className='font-manrope text-3xl text-left hover:cursor-pointer' 
        onClick={() => setClick(prev => !prev)} 
        drag>
       {click ? "Get in touch (Oops, not here! Try again)" : "Get in touch (Click to copy)"}
        </motion.h1>
        <motion.button className='font-manrope text-6xl text-left hover:text-[#459cff]'
        onClick={(handleCopy)}
        whileTap={{ scale: 0.9 }}
        >
          {email}
        </motion.button>
    </div>
  )
} 