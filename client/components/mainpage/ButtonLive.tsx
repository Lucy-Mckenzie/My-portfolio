
export default function Button() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div>
      <button 
      className='font-manrope absolute bottom-52 right-2 text-sm z-10 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full shadow-md transition duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-lg'
      onClick={scrollToTop}
      >
        Live Website
      </button>
    </div>
  )
} 