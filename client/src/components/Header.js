import React, { useState } from 'react'
import logo from '../assets/logo.svg'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* banner div */}
      <div className='relative max-w-[85rem] mx-auto h-12 flex justify-end'>
        <div
          className='hidden md:flex bg-green-800 w-full max-w-[25rem] h-12 items-center justify-center space-x-2 sm:space-x-4 rounded-br-xl px-2 sm:px-4'
          style={{ clipPath: 'polygon(0% 0%, 10% 100%, 100% 100%, 100% 0%)' }}
        >
          <div className='text-white text-[10px] sm:text-xs flex space-x-1 sm:space-x-2 items-center justify-center'>
            <i className="fa-duotone fa-thin fa-envelope"></i>
            <h1 className='truncate'>contat@imdad.com</h1>
          </div>
          <div className='text-white text-[10px] sm:text-xs flex space-x-1 sm:space-x-2 items-center justify-center'>
            <i className="fa-duotone fa-thin fa-phone"></i>
            <h1>+921234556765</h1>
          </div>
          <div className='text-white text-[10px] sm:text-xs flex space-x-1 sm:space-x-2 items-center justify-center'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>


      <header className="relative">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2">
          <div className="flex justify-between items-center gap-x-1">
           <div className="absolute -top-[53px] left-4 w-24 h-20 sm:w-32  md:w-32 md:h-28">
  <img 
    src={logo} 
    alt="Logo" 
    className="w-full h-full object-contain"
  />
</div>


            {/* Toggle Button */}
            <button
              type="button"
              className="md:hidden fixed top-4 right-4 z-50 size-10 flex justify-center items-center rounded-full bg-green-800 text-white hover:bg-green-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-x' : 'fa-bars'} text-white`}></i>
            </button>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />
          )}

          {/* Sliding Mobile Menu */}
          <div
            className={`
            fixed 
            top-0 
            right-0 
            w-64 
            h-full 
            bg-white 
            shadow-lg 
            z-50 
            transform 
            transition-transform 
            duration-300 
            ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}
          >
            {/* Close Button at the Top */}
            <button
              type="button"
              className="absolute top-4 right-4 size-10 flex justify-center items-center rounded-full bg-green-800 text-white hover:bg-green-600 focus:outline-none z-60"
              onClick={toggleMenu}
              aria-label="Close navigation"
            >
              <i className="fa-solid fa-x text-white"></i>
            </button>
            <div className="p-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4 mt-12">
                <a
                  className=" p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4 me-3 block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  Technology
                </a>
                <a
                  className=" p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4 me-3 block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width={20} height={14} x={2} y={6} rx={2} />
                  </svg>
                  Petroleum
                </a>
                <a
                  className=" p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4 me-3 block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  Agriculture
                </a>

                {/* Get Started Button */}
                <div className="mt-4">
                  <a
                    className="w-full py-1.5 px-4 inline-flex justify-center items-center text-sm rounded-sm bg-green-800 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:gap-3">
            <div className="flex flex-row items-center gap-1">
              <a
                className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                href="#"
              >
                Technology
              </a>
              <a
                className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                href="#"
              >
                Petroleum
              </a>
              <a
                className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                href="#"
              >
                Agriculture
              </a>
              <a
                className="py-1.5 px-4 inline-flex items-center text-sm rounded-sm bg-green-800 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
        </nav>
      </header>

    </>

  )
}

export default Header;
