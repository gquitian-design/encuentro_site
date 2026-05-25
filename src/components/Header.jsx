import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-emerald-50/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-xs sticky top-0 z-10 transition-colors font-sans antialiased">
      <nav className="container mx-auto px-6 py-4">
        {/* Main Nav Bar Layout */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
            Encuentro XII
          </h1>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-sm font-medium text-emerald-800/80 dark:text-zinc-400 tracking-wide">
              <li>
                <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fqa" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-emerald-800 dark:text-zinc-400 hover:text-emerald-600 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                // Close/X icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Panel Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 max-height-animation ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <ul className="flex flex-col space-y-4 pb-2 text-sm font-medium text-emerald-800/80 dark:text-zinc-400 tracking-wide">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="block py-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/fqa" 
                onClick={() => setIsOpen(false)} 
                className="block py-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                onClick={() => setIsOpen(false)} 
                className="block py-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link 
                to="/us" 
                onClick={() => setIsOpen(false)} 
                className="block py-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="block py-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;