
export default function SlothIcons() {
  return (
    <>
    <div className='relative group'>
    <img 
      src='/images/icons/react.svg'
      alt='React icon'
      className='w-7 h-7 hover:cursor-pointer'
    />
    <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
      React
    </div>
  </div>
  <div className='relative group'>
    <img 
     src='/images/icons/css3.svg'
      alt='CSS3 icon'
      className='w-7 h-7 hover:cursor-pointer'
    />
    <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
      CSS3
    </div>
  </div>
  <div className='relative group'>
    <img 
     src='/images/icons/typescript.svg'
      alt='Tyescript icon'
      className='w-7 h-7 hover:cursor-pointer'
    />
    <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
      Typescript
    </div>
  </div>
  <div className='relative group'>
    <img 
     src='/images/icons/html5.svg'
      alt='HTML5 icon'
      className='w-7 h-7 hover:cursor-pointer'
    />
    <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
     HTML5
    </div>
    </div>
    <div className='relative group'>
    <img 
     src='/images/icons/sqlite.svg'
      alt='sqlite icon'
      className='w-7 h-7 hover:cursor-pointer'
    />
    <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
     SQLite
    </div>
    </div>
  </>
  )
}