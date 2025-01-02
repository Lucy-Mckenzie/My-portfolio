import { Link, useOutletContext } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'

const photos = [
  'images/mockups/suncoastmain.png',
  'images/mockups/suncoastpn.png'
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  afterChange: () => {} 
}

export default function Projects2() {
  const sliderRef = useRef<Slider | null>(null)
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

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  
return (
  <div className={`h-screen m-0 items-center flex shadow-lg justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
  <div 
  className='slick-slider slider-card-container relative mx-auto lg:h-[850px] md:h-[600px] lg:max-w-[1200px] md:max-w-[600px] sm:max-w-[400px] border border-black rounded-xl'>
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative flex justify-center items-center hover:cursor-pointer z-0'
        tabIndex={-1}
        style={{ position: 'relative' }}
        aria-hidden="false"
        >
        <Link
        to='/wehike'
        onClick={scrollToTop}
        >
          <motion.img
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={400}
            className='lg:h-auto object-fill lg:max-h-[850px] sm:h-[400px] rounded-t-xl relative z-0'
            onMouseEnter={() => setIsImage(true)}
            onMouseLeave={() => setIsImage(false)}
          />
          </Link>
          {isImage && (
    <motion.div
    style={{
      position: 'absolute',
      pointerEvents: 'none', 
      zIndex: 50,
    }}
    animate={{
      top: mousePosition.y + 40,  
      left: mousePosition.x - 100,
    }}
    transition={{
      type: "spring",
      stiffness: 280, 
      damping: 30, 
    }}
      className='bg-gray-500 text-white text-xs py-1 px-2 rounded'
    >
      View Project
    </motion.div>
  )}
         <button 
       className='font-manrope absolute bottom-2 right-4 text-sm z-10 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full shadow-md transition duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-lg'>
        Live Website
      </button>
        </div>
      ))}
    </Slider>
    <div className='absolute pt-8 w-full px-4 text-center md:text-left'>
      <h2 className='text-xs font-manrope'>CASE STUDY 01</h2>
    <h1 className=' text-2xl md:text-3xl font-manrope'>
     <strong>Suncoast Patios:</strong> A small business specializing in outdoor living solutions. With a focus on <strong>SEO optimization</strong>, we expect a <strong>15% increase in sales</strong>.
      </h1>
    </div>
  </div>
  </div>
 )
}

