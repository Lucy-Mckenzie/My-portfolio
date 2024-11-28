// import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Contact() {
  // const [copy, setCopy] = useState('')


  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 py-40 items-center justify-center ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div>
        <h1 className='font-manrope text-3xl text-left'>Get in touch (Click to copy)</h1>
        <button className='font-manrope text-6xl text-left'>Lucymckenzie62@gmail.com</button>
      </div>
    </div>
  )
} 