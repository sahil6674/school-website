import React from 'react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <footer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-evenly px-5 py-10 bg-blue-200'>
        <div className='mb-5 lg:mb-0'>
          <h2 className='text-xl font-bold mb-5'>S.M. Family</h2>
          <p className='text-base pr-1 sm:pr-10'>Nurturing young minds since 1976. We are committed to providing quality education and holistic development for every student.</p>
          <div>
            {/* Facebook youtube insta icons place */}
          </div>
        </div>
        <div className='mb-5 lg:mb-0'>
          <h2 className='text-xl font-bold mb-5'>Quick Links</h2>
          <div>
            {/* Links are here */}
            <p>About</p>
            <p>Academics</p>
            <p>Results</p>
            <p>Gallery</p>
            <p>Sports</p>
          </div>
        </div>
        <div>
          <h2 className='text-xl font-bold mb-5'>Contact Info</h2>
          <div>
            <div className='flex gap-2'>
              {/* <span></span>  Location */}
              <p className='text-base'>Bhonsla, Jind, Haryana</p>
            </div>
            <div className='flex gap-2'>
              <span><Phone className='size-5 shrink-0' strokeWidth={2.5}/></span>
              <p className='text-base'>+91 9466815588</p>
            </div>
            <div className='flex gap-2'>
              <span><Mail className='size-5 shrink-0' strokeWidth='2.5'/></span>
              <p className='text-base'>smps@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-xl font-bold mb-5'>Office Hours</h2>
          <div>
            <div className='flex gap-2 text-base lg:flex-wrap lg:gap-0'>
              <span className='font-bold'>Monday-Saturday:</span>
              <p>8:00 A.M - 3:00 P.M</p>
            </div>
            <div className='flex gap-2 text-base lg:flex-wrap lg:gap-0'>
              <span className='font-bold'>Sundays & 2nd Saturdays:</span>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer