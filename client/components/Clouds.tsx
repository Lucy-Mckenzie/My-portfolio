export default function Clouds() {
  return (
    <div className='overflow-hidden'>
    <img src='/images/clouds/cloud.png' 
    alt='cloud' 
    className='absolute max-w-[300px] max-h-[300px] animate-clouds-moving' 
    style={{ top: "-4%", left: "20%" }}>
    </img>

     <img 
    src='/images/clouds/cloud.png'
     alt='cloud' className='absolute 
     left-1/2 max-w-[300px] max-h-[300px] animate-clouds-moving' 
      style={{ top: "1%", left: "30%" }}>
      </img>

    <img 
    src='/images/clouds/cloud.png' alt='cloud'
     className='absolute max-w-[800px] max-h-[400px] animate-clouds-moving' 
     style={{ top: "10%", left: "10%" }}>
     </img>

    <img 
    src='/images/clouds/cloud.png' 
    alt='cloud' 
    className='absolute left-1/2 max-w-[500px] max-h-[500px] animate-clouds-moving' 
    style={{ top: "1%", left: "50%" }}>
    </img>

    <img
     src='/images/clouds/cloud.png' 
     alt='cloud' 
     className='absolute max-w-[300px] max-h-[300px] animate-clouds-moving'
      style={{ top: "40%", left: "20%" }}>
      </img>

    <img
     src='/images/clouds/cloud.png' 
     alt='cloud'
      className='absolute left-1/2 max-w-[400px] max-h-[300px] animate-clouds-moving'  
       style={{ top: "50%", left: "70%" }}>
       </img>

     <img
     src='/images/clouds/cloud.png' 
     alt='cloud' 
     className='absolute max-w-[300px] max-h-[300px] animate-clouds-moving'
      style={{ top: "40%", left: "90%" }}>
      </img>

    <img 
    src='/images/clouds/cloud.png'
     alt='cloud' 
     className='absolute left-1/2 max-w-[500px] max-h-[500px] animate-clouds-moving' 
     style={{ top: "60%", left: "-1%" }}>
     </img>
    
    </div>
  )
}