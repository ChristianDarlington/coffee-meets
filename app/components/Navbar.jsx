"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaMugHot } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="relative left-0 right-0 top-0 flex items-center justify-between z-50 shadow-md bg-[#ebf0fa]">
      <div className="ml-10 flex items-center space-x-2 ">
        <h1 className="text-main-color text-2xl font-bold tracking-wide">
          Coffee Meets
        </h1>
        <div>
          <FaMugHot />
        </div>
      </div>

      <ul className="hidden sm:flex space-x-5 text-main-color text-lg tracking-widest">
        <li className='hover:text-[#767659]'><Link href="/">Home</Link></li>
        <li className='hover:text-[#767659]'><Link href="/about">About</Link></li>
        <li className='hover:text-[#767659]'><Link href="/menu">Menu</Link></li>
        <li className='hover:text-[#767659]'><Link href="/review">Review</Link></li>
        <li className='hover:text-[#767659]'><Link href="/book">Book</Link></li>
      </ul>

      <a className="hidden sm:block tracking-wide font-bold px-6 py-6 text-[#443] cursor-pointer mt-2 text-xl hover:text-[#767659] ">
        Book a Table
      </a>

      {/* Mobile layout */}
      <div onClick={handleNav} className='sm:hidden block z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'sm:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            : 'hidden'
        }
      >
        <ul>
          <li>
            <ul>
              <li onClick={handleNav} className='hover:text-[#767659] p-4 text-4xl'>
                <Link href="/">Home</Link>
              </li>
              <li onClick={handleNav} className='hover:text-[#767659] p-4 text-4xl'>
                <Link href="/about">About</Link>
              </li>
              <li onClick={handleNav} className='hover:text-[#767659] p-4 text-4xl'>
                <Link href="/menu">Menu</Link>
              </li>
              <li onClick={handleNav} className='hover:text-[#767659] p-4 text-4xl'>
                <Link href="/review">Review</Link>
              </li>
              <li onClick={handleNav} className='hover:text-[#767659] p-4 text-4xl'>
                <Link href="/book">Book</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
