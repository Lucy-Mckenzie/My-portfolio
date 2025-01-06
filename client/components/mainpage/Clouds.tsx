import { motion } from 'motion/react'

export default function Clouds() {

  const cloudAnimation = {
    x: [0, 100, 200, 300, 400], 
    y: [0, -10, -20, -10, 0], 
    transition: {
      duration: 20,
      repeat: Infinity, 
      ease: 'linear', 
    },
  };

  return (
    <motion.div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
    <motion.img src='/images/clouds/cloud.webp' 
    alt='cloud' 
    className='absolute w-[300px] h-[150px] hover:cursor-pointer' 
    style={{ top: '-4%', left: '20%' }}
    animate={cloudAnimation}
    >
    </motion.img>

     <motion.img 
    src='/images/clouds/cloud.webp'
    alt='cloud' className='absolute 
    left-1/2 w-[400px] h-[200px] hover:cursor-pointer' 
    style={{ top: '1%', left: '40%' }}
    loading='lazy'
    animate={cloudAnimation}
      >

      </motion.img>

    <motion.img 
    src='/images/clouds/cloud.webp' alt='cloud'
    className='absolute w-[600px] h-[300px] hover:cursor-pointer' 
    style={{ top: '10%', left: '10%' }}
    animate={cloudAnimation}
     >
     </motion.img>

    <motion.img 
    src='/images/clouds/cloud.webp' 
    alt='cloud' 
    className='absolute left-1/2 w-[500px] h-[250px] hover:cursor-pointer' 
    style={{ top: '50%', left: '50%' }}
     loading='lazy'
    animate={cloudAnimation}
    >
    </motion.img>

    <motion.img
    src='/images/clouds/cloud.webp' 
    alt='cloud' 
    className='absolute w-[400px] h-[200px] hover:cursor-pointer'
    style={{ top: '40%', left: '-1%' }}
    animate={cloudAnimation}
      >

      </motion.img>

    <motion.img
    src='/images/clouds/cloud.webp' 
    alt='cloud'
    className='absolute left-1/2 [400px] h-[250px] hover:cursor-pointer'  
    style={{ top: '20%', left: '70%' }}
    loading='lazy'
    animate={cloudAnimation}
       >

       </motion.img>

    <motion.img 
    src='/images/clouds/cloud.webp'
    alt='cloud' 
    className='absolute left-1/2 w-[500px] h-[200px] hover:cursor-pointer' 
    style={{ top: '60%', left: '-1%' }}
    loading='lazy'
    animate={cloudAnimation}
     >
     </motion.img>
    </motion.div>
  )
}