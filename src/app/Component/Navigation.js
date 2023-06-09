'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed-top bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-xl font-bold text-gray-800">
          <img
            src="https://www.farmmodules.tech/wp-content/uploads/2021/09/cropped-FMlogo.png"
            alt=""
            className="h-10 mr-2"
          />
          <button
            className="text-gray-600 focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex flex-col md:flex-row md:items-center md:justify-content-center mt-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="nav-item">
            <Link href="#Solutions" className="nav-link px-4 text-gray-600 text-center">
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#About" className="nav-link px-4 text-gray-600 text-center">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#Team" className="nav-link px-4 text-gray-600 text-center">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#Contact" className="nav-link px-4 text-gray-600 text-center">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
