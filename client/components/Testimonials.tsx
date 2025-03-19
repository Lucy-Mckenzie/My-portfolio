import { useOutletContext } from "react-router-dom"

const testimonals = [
  {
    id: 1,
    img: '/images/Jaydon.png',
    name: 'Jaydon',
    comment: 'Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom'
  },
  {
    id: 2,
    img: '/images/Andrew.png',
    name: 'Andrew',
    comment: 'Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom Loren Epsom'
  }
]

const Testimonals = () => {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()
  
  return (
    <div className={`flex justify-center items-center flex-col px-44 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <h1 className='text-2xl text-black pb-16'>
        TESTIMONIALS
      </h1>
      <div className='grid grid-cols-2 grid-rows-1 gap-12'>
        {testimonals.map((review, index) => (
          <div key={index} className='relative flex items-center bg-[#FFC41F]/50 rounded-lg shadow-md text-black flex-col py-5 px-12 text-center max-w-md'>
            <div className='absolute -top-10'>
              <img 
                className='w-20 h-20 p-1 object-contain rounded-full shrink-0'
                src={review.img}
                alt={`Review from ${review.name}`}
                width={40}
                height={40}
              />
            </div>
            <h1 className='text-2xl pt-5 pb-3'>
              {review.name}
            </h1>
            <h2 className='text-sm'>
              {review.comment}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonals
