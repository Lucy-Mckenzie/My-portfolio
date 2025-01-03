import { Link, useOutletContext } from 'react-router-dom'
import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'


const photos = [
  'images/suncoast/photo.png',
  'images/suncoast/photo1.png',
  'images/suncoast/photo2.png',
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

export default function SuncoastCarousel() {
  const sliderRef = useRef<Slider | null>(null)
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  
return (
  <div 
  className={`min-h-screen flex flex-col items-center shadow-lg justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
  <div 
  className='slick-slider slider-card-container relative mx-auto lg:h-[850px] md:h-[600px] lg:max-w-[1200px] md:max-w-[600px] sm:max-w-[400px] border border-black rounded-xl'>
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative flex justify-center items-center hover:cursor-pointer z-0'
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
          />
          </Link>
        </div>
      ))}
    </Slider>
  </div>
  </div>
 )
}