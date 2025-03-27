import { useOutletContext } from "react-router-dom"

const testimonals = [
  {
    id: 1,
    img: '/images/Jaydon.png',
    name: 'Jaydon - marketing & project manager',
    website: 'Suncoast Patios',
    comment: 'I loved working with Lucy, she took all of my ideas on board and helped with her own expert perspective when necessary. My previous site had issues with indexing and was slow to load, outdated looking and dropping in search ranking. We’re now seeing much better search results, load speed, and conversions. Lucy is great with communication, super easy to work with and I never would’ve ended up with such a clean, fast, functional site without her help and expertise. She knows her craft inside out and I can’t recommend her enough!'
  },
  {
    id: 2,
    img: '/images/Andrew.png',
    name: 'Andrew - product owner',
    website: 'Suncoast Patios',
    comment: "Lucy was an absolute star! She completely transformed our outdated website, which had been causing ongoing issues and frustration for both us and our customers. Thanks to her expertise, the site is now modern, user-friendly, and functions seamlessly. Our customers have specifically commented on how much easier it is to navigate and how simple the new form is to fill out, making their experience far more enjoyable. Lucy's attention to detail and commitment to delivering a high-quality result exceeded our expectations. We couldn’t recommend her highly enough!"
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
          <div key={index} className='relative flex items-center bg-[#638cc0]/30 rounded-lg shadow-md text-black flex-col py-5 px-12 text-center max-w-md'>
            <div className='absolute -top-10'>
              <img 
                className='w-20 h-20 p-1 object-contain rounded-full shrink-0'
                src={review.img}
                alt={`Review from ${review.name}`}
                width={40}
                height={40}
              />
            </div>
            <h1 className='text-2xl pt-5'>
              {review.name}
            </h1>
            <h1 className='text-lg font-light'>
              {review.website}
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
