import React from 'react'
import Link from 'next/link'
import {FaMugHot} from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className="left-0 right-0 flex items-center justify-between z-50 md:p-2 shadow-md relative bg-[#ebf0fa] ">
    <div className="ml-2 flex items-center space-x-2">
    <a href="/" className="text-main-color text-2xl font-semibold tracking-wide">Coffee Meets</a>   
    <FaMugHot/>
    </div>
   
    <ul className="flex space-x-5 text-main-color text-lg tracking-widest">
      <li className='hover:text-[#767659]'><Link href="/" >Home</Link></li>
      <li className='hover:text-[#767659]'><Link href="/about" >About</Link></li>
      <li className='hover:text-[#767659]'><Link href="/menu" >Menu</Link></li>
      <li className='hover:text-[#767659]'><Link href="/review" >Review</Link></li>
      <li className='hover:text-[#767659]'><Link href="/book" >Book</Link></li>
    </ul>
    
    <a className="tracking-wide font-bold px-6 py-6 text-[#443] cursor-pointer mt-2 text-xl hover:text-[#767659] ">
      Book a Table
      </a>
   </header>
  )
}

export default Navbar