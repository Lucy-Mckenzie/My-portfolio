import { useOutletContext } from 'react-router-dom'

export default function Contact() {

  const email = 'Lucymckenzie62@gmail.com'
 
  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    .then(() => alert('Copied!'))
    .catch(() => console.error('Sorry couldnt copy email'))
  }


  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col w-full mx-auto p-6 space-y-6 py-40 items-center justify-center ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div>
        <h1 className='font-manrope text-3xl text-left'>Get in touch (Click to copy)</h1>
        <button className='font-manrope text-6xl text-left'
        onClick={(handleCopy)}
        >
          {email}
        </button>
      </div>
    </div>
  )
} 