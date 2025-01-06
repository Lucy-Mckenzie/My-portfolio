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
    className='absolute max-w-[300px] max-h-[300px] hover:cursor-pointer' 
    style={{ top: '-4%', left: '20%' }}
    animate={cloudAnimation}
    >
    </motion.img>

     <motion.img 
    src='/images/clouds/cloud.webp'
    alt='cloud' className='absolute 
    left-1/2 max-w-[300px] max-h-[300px] hover:cursor-pointer' 
    style={{ top: '1%', left: '30%' }}
  animate={cloudAnimation}
      >

      </motion.img>

    <motion.img 
    src='/images/clouds/cloud.webp' alt='cloud'
    className='absolute max-w-[800px] max-h-[400px] hover:cursor-pointer' 
    style={{ top: '10%', left: '10%' }}
    animate={cloudAnimation}
     >
     </motion.img>

    <motion.img 
    src='/images/clouds/cloud.webp' 
    alt='cloud' 
    className='absolute left-1/2 max-w-[500px] max-h-[500px] hover:cursor-pointer' 
    style={{ top: '1%', left: '50%' }}
    animate={cloudAnimation}
    >
    </motion.img>

    <motion.img
    src='/images/clouds/cloud.webp' 
    alt='cloud' 
    className='absolute max-w-[300px] max-h-[300px] hover:cursor-pointer'
    style={{ top: '40%', left: '20%' }}
    animate={cloudAnimation}
      >

      </motion.img>

    <motion.img
    src='/images/clouds/cloud.webp' 
    alt='cloud'
    className='absolute left-1/2 max-w-[400px] max-h-[300px] hover:cursor-pointer'  
    style={{ top: '50%', left: '70%' }}
    animate={cloudAnimation}
       >

       </motion.img>

     <motion.img
    src='/images/clouds/cloud.webp' 
    alt='cloud' 
    className='absolute max-w-[300px] max-h-[300px] hover:cursor-pointer'
    style={{ top: '40%', left: '90%' }}
    animate={cloudAnimation}
      >

      </motion.img>

    <motion.img 
    src='/images/clouds/cloud.webp'
    alt='cloud' 
    className='absolute left-1/2 max-w-[500px] max-h-[500px] hover:cursor-pointer' 
    style={{ top: '60%', left: '-1%' }}
    animate={cloudAnimation}
     >
     </motion.img>
    </motion.div>
  )
}