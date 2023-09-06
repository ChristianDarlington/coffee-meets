import Groupimg from '../public/group.jpeg'
import Image from 'next/image'


export default function Home() {
  return (
    <main>     
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1] '/>
     <Image 
    src={Groupimg} 
    alt='group-coffee' 
    quality={100} 
    width={1500}
    height={100}
    className='absolute inset-0 bg-center bg-cover z-0 '
    style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', // Adjust as needed
    }}
     />
      <section> 
        <div className='text-white  z-[2]'>
          <h2>Welcome to Coffee Meets</h2>
          <p>Start your day right with a cup of coffee at Coffee Meets. We're more than just a café; we're a community that loves great coffee and connecting with people.</p>
          </div>    
          
      </section>  
    </main>
  )
}
