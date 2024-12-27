import { useOutletContext } from 'react-router-dom'

export default function About() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 ${darkMode ? 'bg-[#3d4451] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <div className='max-w-[63rem] mx-auto text-center'>
      <h1 className='font-manrope text-center my-6 lg:text-4xl text-6xl'>
        More about me
        </h1>
        <div className='flex items-center max-w-[58rem]'>
          <div className='flex-1'>
          <img
          src='/images/Lucy-Mckenzie1.jpeg'
          alt='Lucy Mckenzie in action'
          className={`max-h-[500px] w-[375px] rounded ${darkMode ?  'white-shadow' : 'shadow-[0_8px_10px_rgba(0,0,0,0.25)]'}`}
          ></img>
          </div>
        <div className='flex-1 text-left border border-gray-300 p-5 rounded'>
          <p className='font-manrope pb-4 lg:text-lg text-2xl'>
            I&apos;m Lucy, a Software Developer based in New Zealand. I enjoy a balanced life, the fine dance between creativity and logic. This means listening to classical music while my mind works double-time crafting clean, organised code. 
       </p> 
       <p className='font-manrope pb-6 lg:text-lg text-2xl'>
       With a love all things competitive and challenging, I find the flow of solving a problem something that I wake up excited to tackle every single day. 
        </p>
        </div>
        </div>
        <div className='flex flex-col text-left border-b-[1px]'>
        <h2 className='font-manrope pb-2 lg:text-xl text-3xl mt-10'>
          MY PHILOSOPHY
        </h2>
        <p className='font-manrope pb-6 lg:text-lg text-2xl'>
        Growing up, I was really shy. Presenting to people, and standing out in a group terrified me. That changed when I traveled around Australia with my family of six, home schooling along the way. 
        This journey was a turning point in my life. I developed three fundamental skills: problem-solving, making friends, and taking control of my own life. <strong>These lessons shaped who I am today.</strong>
        </p>
          <h2 className='font-manrope pb-2 lg:text-xl text-3xl'>
            MY JOURNEY
          </h2>
          <p className='font-manrope pb-6 lg:text-lg text-2xl'>
          I grew up playing Nancy Drew games, board games, and any mystery adventure book I could get my hands on. <strong>I love the unknown</strong>, the mysteries of the universe that we may never unravel. 
          </p>
          <p className='font-manrope pb-6 lg:text-lg text-2xl'>
          Programming brings a thrill, something I can&apos;t quite put my finger on. All I know is that I found coding and <strong>everything clicked into place.</strong> Studying at Dev Academy only confirmed my drive for solving problems, innovation, and my place in the developing world.
          </p>
          <h2 className='font-manrope pb-2 lg:text-xl text-3xl'>
            AS A COLLEAGUE
            </h2>
            <p className='font-manrope pb-4 lg:text-lg text-2xl'> 
            <strong>Collaboration is at the heart of who I am.</strong> With a background in sales, management, and tourism, I excel at bridging the gap between technical and creative minds on any team. Encouraging and working successfully with others comes naturally to me.
            </p>
             <p className='pb-4 font-manrope lg:text-lg text-2xl'>
              I&apos;m always up for team board games or a coffee chat. I believe team collaboration is one of the key foundations of a successful company.
            </p>
        </div>
        <p className='font-manrope pb-6 lg:text-lg text-2xl text-left pt-3'>
        Thank you for taking the time to check out my work and learn a little more about me. I&apos;m open to any software development opportunities and can&apos;t wait to hear from you!
        </p>
    </div>
    </div>
  )
} 