import { useOutletContext } from 'react-router-dom'

export default function Button() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div>
    <button 
    className={`w-auto px-3 text-sm font-manrope py-2 rounded-md bg-slate-500 text-white border-black hover:text-gray-600 hover:bg-gray-300 hover:scale-105 transition-transform duration-200 hover:cursor-pointer ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
    onClick={scrollToTop}
    >
      VIEW PROJECT
      </button>
    </div>
  )
}

