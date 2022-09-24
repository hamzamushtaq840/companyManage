import React from 'react'
import logo from './../../Assets/logo.svg'
import hamburger from './../../Assets/icon-hamburger.svg'

function Navbar() {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo}/>
        </div>
        <div className="hidden md:flex  md:space-x-3.5 lg:space-x-6" >
          <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
          <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
        </div>
        <a href="#" className='hidden text-s md:block bg-brightRed rounded-full px-8 p-3 text-white hover:bg-brightRedLight'>Get Started</a>
        <div className="md:hidden pt-2">
          <img src={hamburger}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar