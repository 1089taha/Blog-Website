'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden w-full h-[70px] relative lg:flex lg:items-center lg:justify-between px-7 lg:px-14 bg-[#1B263B] text-white mb-10">
        {/* RightSide */}
        <div className="w-auto flex items-center gap-5">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <Image src="/logo.png" alt="logo" width={25} height={25} className="invert" />
            <h3 className="text-[18px] font-semibold">Infinite Threads</h3>
          </div>
          {/* Links */}
          <div className="w-auto">
            <ul className="flex items-center justify-center gap-6 text-[16px] font-normal pl-5">
              <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">Home</li></Link>
              <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">About</li></Link>
              <Link href="/blogs"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">Blogs</li></Link>
              <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">Pricing</li></Link>
              <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">FAQs</li></Link>
            </ul>
          </div>
        </div>
        {/* LeftSide */}
        <div className="w-auto flex items-center justify-center gap-5">
          <button className="w-[140px] h-[40px] bg-[#1ABC9C] text-white rounded-md hover:bg-[#F39C12] ease-in-out duration-300">Sign Up</button>
          <button className="w-[140px] h-[40px] bg-[#1ABC9C] text-white rounded-md hover:bg-[#F39C12] ease-in-out duration-300">Log In</button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="w-auto h-[50px] flex items-center justify-between lg:hidden px-3 bg-[#1B263B] text-white mb-10 relative">
        <div className="flex items-center justify-center gap-3">
          <Image src="/logo.png" alt="logo" width={25} height={25} className="invert" />
          <h3 className="text-[18px] font-semibold">Infinite Threads</h3>
        </div>
        <div onClick={toggleMenu}>
          <HiMenu className="w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-[#1B263B] text-white px-5 py-4 shadow-md z-10">
          <ul className="flex flex-col items-start gap-4 text-[16px] font-normal">
            <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">Home</li></Link>
            <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">About</li></Link>
            <Link href="/blogs"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">Blogs</li></Link>
            <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">Pricing</li></Link>
            <Link href="#"><li className="hover:underline hover:text-[#F39C12] ease-in-out duration-300">FAQs</li></Link>
          </ul>
          <div className='flex flex-col gap-3 mt-2'>
          <button className="w-[140px] h-[40px] bg-[#1ABC9C] text-white rounded-md hover:bg-[#F39C12] ease-in-out duration-300">Sign Up</button>
          <button className="w-[140px] h-[40px] bg-[#1ABC9C] text-white rounded-md hover:bg-[#F39C12] ease-in-out duration-300">Log In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

