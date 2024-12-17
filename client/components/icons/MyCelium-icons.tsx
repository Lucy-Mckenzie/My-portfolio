
export default function MyCeliumIcons() {
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
         src='/images/icons/tailwind.svg'
          alt='Tailwind icon'
          className='w-7 h-7 hover:cursor-pointer'
        />
        <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          Tailwind CSS
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
         src='/images/icons/phaser.svg'
          alt='Phaser icon'
          className='w-7 h-7 hover:cursor-pointer'
        />
        <div className='absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs py-1 px-2 rounded'>
          Phaser.js
        </div>
      </div>
  </>
  )
}