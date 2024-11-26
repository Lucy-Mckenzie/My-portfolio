
export default function Projects() {
  return (
    <div className='h-screen'>
     <p className="text-4xl font-light font-lato text-center italic mb-40">
      Projects
     </p>
    <div className='flex items-center justify-center'>
      <div className="flex flex-1 flex-col text-left max-w-96">
      <p className="text-4xl font-light font-lato mb-12">
        Personal Project
      </p>
        <p className="text-2xl font-semibold mb-4">
          We Hike
        </p>
        <p className="mb-4">
          Discover information about your favorite hikes! Stay updated on recent alerts and log in to share reviews with friends.
        </p>
        <button className='border w-24 py-2 bg-slate-500 text-white'>View project</button>
    </div>
    <div className="max-w-[420px] max-h-[400px]">
      <img
        src="/images/wehike.png"
        alt='project display'
        className="transform transition-transform duration-150 hover:shadow-2xl hover:scale-110 rounded-lg"
      />
    </div>
   
  </div>
    </div>
  )
}

