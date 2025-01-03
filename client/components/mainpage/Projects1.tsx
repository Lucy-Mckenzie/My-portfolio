import { Link, useOutletContext } from 'react-router-dom'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import MouseHover from '../MouseHover'
import ButtonLive from './ButtonLive'
import ViewCase from './ViewButton'

const photos = [
  'images/mockups/suncoastmain.png',
  'images/mockups/suncoastpn.png'
]

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  afterChange: () => {} 
}

export default function Projects1() {
  const sliderRef = useRef<Slider | null>(null)
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  const [isImage, setIsImage] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  
return (
  <div 
  className={`min-h-screen flex flex-col items-center shadow-lg justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
    <h1 className={`lg:text-6xl font-extralight font-manrope w-2/4 text-center mb-10 pb-2 mx-auto ${darkMode ? 'border-b-[0.5px] border-white' : 'border-b-[0.5px] border-gray-600'}`}>
      PROJECTS
    </h1>
  <div 
  className='slick-slider slider-card-container relative mx-auto lg:h-[905px] md:h-[600px] lg:max-w-[1200px] md:max-w-[600px] sm:max-w-[400px] border border-black rounded-xl'>
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative flex justify-center items-center hover:cursor-pointer z-0 overflow-hidden'
        tabIndex={-1}
        style={{ position: 'relative' }}
        aria-hidden='false'
        >
        <Link
        to='/suncoastpatios'
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
    <MouseHover />
  )}
      <ButtonLive />
        </div>
      ))}
    </Slider>
    <div className='absolute pt-8 w-full px-4 text-center md:text-left'>
      <h2 className='text-xs font-manrope'>CASE STUDY 01</h2>
    <h1 className='text-2xl md:text-3xl font-manrope'>
     <strong>Suncoast Patios:</strong> A small business specializing in outdoor living solutions. With a focus on <strong>SEO optimization</strong>, we expect a <strong>40% increase in sales</strong>.
      </h1>
         <Link
          to='/suncoastpatios'
          >
          <ViewCase />
          </Link>
    </div>
  </div>
  </div>
 )
}

