import { useOutletContext } from 'react-router-dom'
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
  
return (
  <div 
  className={`w-full flex flex-col items-center shadow-lg justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#EEBF61] text-black'}`}>
  <div 
  className='slider-container relative w-[65rem] items-center lg:h-[900px] h-[500px] rounded-lg overflow-hidden'>
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative'
        >
          <motion.img
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={900}
            className='w-full lg:h-auto object-cover lg:max-h-[800px] h-[400px]'
          />
        </div>
      ))}
    </Slider>
  </div>
   </div>
 )
}