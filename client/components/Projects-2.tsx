import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useOutletContext } from 'react-router-dom'

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
  
return (
  <div  className={`h-screen m-0 items-center flex shadow-lg justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
  <div className="slider-card-container mx-auto lg:h-[1000px] max-w-[1200px] border border-black rounded-xl">
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative flex justify-center items-center'>
          <img
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={400}
            className=' lg:h-auto object-fill lg:max-h-[750px] h-[400px] rounded-t-xl'
          />
        </div>
      ))}
    </Slider>
  </div>
  </div>
)

}

