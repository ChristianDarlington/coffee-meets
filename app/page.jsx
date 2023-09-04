import Groupimg from '../public/group.jpeg'
import Image from 'next/image'


export default function Home() {
  return (
    <main>     
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]'/>
     <Image 
    src={Groupimg} 
    alt='group-coffee' 
    quality={100} 
    fill
    objectFit='cover'
     />
      <section>      
      </section>  
    </main>
  )
}
