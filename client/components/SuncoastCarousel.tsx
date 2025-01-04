import { useOutletContext } from 'react-router-dom'

const photos = [
  'images/suncoast/photo.png',
  'images/suncoast/photo1.png',
  'images/suncoast/photo2.png',
]

const extendedPhotos = [...photos, ...photos]


export default function SuncoastCarousel() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  
return (
  <div 
  className={`max-w-[100vw] max-h-[100vh] flex flex-col items-center shadow-lg justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#EEBF61] text-black'}`}>
  <div 
    className='marquee-container relative w-[100vw] lg:h-[900px] h-[700px] overflow-hidden'>
    <div className='marquee-content flex'>
      {extendedPhotos.map((photoSrc, index) => (
        <div key={index} className='marquee-item flex items-center justify-center p-6 pt-20 '>
          <img
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            className='w-[90vw] lg:h-auto object-cover lg:max-h-[700px] md:max-h-[600px] h-[600px]'
          />
        </div>
      ))}
    </div>
    <div className='absolute top-1 left-4 p-4 font-manrope w-4/12'>
    <h1 className='text-wrap text-sm pb-1'>
      The main problems with the current website
    </h1>
    <p className='text-wrap text-xs'>
    In discussions with the project manager about the website design, we identified several <strong>key pain points</strong> that were hindering the websites success. 
    </p>
    </div>
  </div>
</div>
 )
}