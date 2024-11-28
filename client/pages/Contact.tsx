import { useOutletContext } from 'react-router-dom'

export default function Contact() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
        <h1>Get in touch (Click to copy)</h1>
        <h2>Lucymckenzie62@gmail.com</h2>
    </div>
  )
} 