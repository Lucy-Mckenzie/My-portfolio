import { useOutletContext } from 'react-router-dom'

export default function ViewCase() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div>
      <button className={`font-manrope relative lg:top-14 md:top-10 sm:top-10 right-1 text-md rounded-full border px-2 py-1 ${darkMode ? 'border-white hover:bg-white hover:text-black hover:border-white transition-all duration-[500ms]  ease-in-out' : 'border-black hover:bg-slate-950 hover:text-white hover:border-white transition-all duration-[500ms] ease-in-out'}`}
      onClick={scrollToTop}
      >
        View Case Study →
      </button>
    </div>
  )
} 