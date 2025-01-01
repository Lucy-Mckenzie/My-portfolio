import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useOutletContext } from 'react-router-dom'

const photos = [
  'images/mockups/mockup.png',
  'images/mockups/mockup1.png',
  'images/mockups/mockup2.png',
  'images/mockups/mockup3.png'
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  afterChange: () => {} 
}

export default function Projects2() {
  const sliderRef = useRef<Slider | null>(null)
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  
return (
  <div  className={`h-full m-0 px-4 shadow-lg ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
  <div className="slider-card-container mx-auto max-w-[1300px] w-full p-5 shadow-lg rounded-xl">
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative'>
          <img
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={400}
            className=' lg:h-auto object-contain lg:max-h-[700px] h-[400px] rounded-lg'
          />
        </div>
      ))}
    </Slider>
  </div>
  </div>
)

}

