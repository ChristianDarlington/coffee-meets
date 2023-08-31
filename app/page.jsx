import Groupimg from '../public/group.jpeg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 z-0 top-0 left-0">
     <Image src={Groupimg} 
    alt='group-coffee' 
    quality={100}
    sizes="100vw"
    style={{
      width: '100%',
      height: '85%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: '-1',
    }}    
     />

      <section>
        
      </section>

      </div>
    </main>
  )
}
