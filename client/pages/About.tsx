import { useOutletContext } from 'react-router-dom'

export default function About() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <p>This is a place holder</p>
    </div>
  )
} 