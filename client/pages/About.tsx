import { useOutletContext } from 'react-router-dom'

export default function About() {

  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <div className={`flex flex-col h-full mx-auto p-6 space-y-6 max-w-8xl ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#fffbf9] text-black'}`}>
      <h1 className='font-manrope text-center my-6 text-4xl'>
        More about me
        </h1>
        <div className='flex flex-row pl-20'>
        <div className='flex-1'>
          <img
          src='/images/Lucy-Mckenzie1.jpeg'
          alt='Lucy Mckenzie in action'
          className='max-h-[500px] rounded'
          ></img>
        </div>
        
        <div className='flex-1 text-left mb-10 mr-10'>
          <p className='font-manrope mb-10'>
        I am a creative designer and software developer based in New Zealand, in all works of art I aim for simplicity, intuative and minimalistic. I love what I can create with these tools, and adore the creative process. I love what I can create with these tools and adore the creative process—it&apos;s an intuitive and addictive experience that I can&apos;t get enough of.
        <br />
        I love all things competitive and challenging, I find the the flow of solving a problem something that I wake up excited to tackle every single day. 
        </p>
        <h2 className='font-manrope pb-2 text-xl'>
          MY PHILOSOPHY
        </h2>
        <p>
        I believe that values and philosophy play a crucial role when selecting a new team member. Sharing my beliefs and principles is, therefore, very important to me.
        Growing up in a big family, I learned the importance of communication, honesty, and trust. Alongside these values, one of my greatest strengths is my growth mindset. I&apos;ve always been naturally driven and deeply interested in the foundational concepts of neuroscience—where mindset is everything.
        To quote Seneca, &quot;The mind is the universe.&quot; I truly believe that the more patterns and connections you create, the broader your perception and understanding of the world becomes.
        </p>
        <div className='mb-10'>
          <h2 className='font-manrope pb-2 text-xl'>
            MY JOURNEY
          </h2>
          <p>
          I still remember the day programming truly clicked for me. Early in my career, I was exploring FreeCodeCamp and completed a challenge to build a product landing page. It was a basic project, but it gave me an understanding of how the internet works—something I had been eager to learn.
          From there, I dove deeper, spending hours watching Harvard&apos;s Computer Science lectures. I was hooked! The simplicity of concepts like booleans—true or false, nothing more—just made sense to me. And who doesn’t love when things make sense?
          Now, eight months into my journey as a software developer, I&apos;m more excited than ever about the future. The endless learning opportunities ahead motivate me to keep growing and pushing myself every day.
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='font-manrope pb-2 text-xl'>
            AS A COLLEAGUE
            </h2>
            <p> 
            Collaboration is at the heart of who I am. With a background in sales, management, and tourism, I excel at bridging the gap between technical and creative minds on any team. Encouraging and working successfully with others comes naturally to me.
              <br />
              With extensive customer service experience, my communication skills are top-notch, allowing me to work seamlessly alongside others. I have a strong sense of empathy, which helps me truly understand where others are coming from. My leadership in these collaborations has been one of the highlights of my career.
              <br/>
              I&apos;m always up for team board games or organizing a potluck to bring the team together. I believe team collaboration is one of the key foundations of a successful company.
            </p>
        </div>
        <p>
        Thank you for taking the time to check out my work and learn a little more about me. I&apos;m open to any software development opportunities and can&apos;t wait to hear from you!
        </p>
        </div>
    </div>
    </div>
  )
} 