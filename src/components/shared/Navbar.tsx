"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Search, Menu } from 'lucide-react'

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/updates" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuBtn = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsSearchOpen(false)
  }

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className='border-b border-gray-400'>
        <div className='1 flex justify-between p-3 lg:px-5 items-center py-5'>
          <div className='flex gap-3'>
            <div>
              {/* logo image */}
              <Image
                src="/images/smLogo.jpeg"
                width={50}
                height={50}
                alt='logo'
                className='rounded-full'
              />
            </div>
            <div>
              <h2 className='text-xl font-bold light:text-green-600'>S.M. Public School</h2>
              <h6 className='text-sm light:text-gray-600'>Safalta ka nur, Mehangai se dur</h6>
            </div>
          </div>

          <div className='hidden lg:flex gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>


          <div className='flex gap-3 items-center'>
            <input type='text' className='border-2 rounded-xl pl-3'/>
            <Search className='cursor-pointer text-green-600 hover:text-green-800' onClick={handleSearch} />
            <Menu className='cursor-pointer lg:hidden' onClick={handleMenuBtn} />
          </div>
        </div>

        <div className={isSearchOpen ? 'w-full px-2 flex justify-center' : 'hidden'}>
          <input 
            type="text"
            placeholder='Search Here...'
            className='w-full px-6 py-1 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-green-100 focus:border-green-400 transition-all duration-300 mb-3 shadow-sm hover:border-gray-400' />
        </div>

        <div className='2 flex justify-center bg-blue-200 lg:hidden'>
          {isMenuOpen && (
            <div className='flex flex-col p-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar