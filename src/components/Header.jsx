import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-emerald-50/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-xs sticky top-0 z-10 transition-colors font-sans antialiased">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Soft, rounded branding text */}
        <h1 className="text-xl font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
          Encuentro XII
        </h1>
        
        <div className="flex items-center space-x-6">
          {/* Subtle font sizing and smooth color changes */}
          <ul className="flex space-x-6 text-sm font-medium text-emerald-800/80 dark:text-zinc-400 tracking-wide">
            <li>
              <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/fqa" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                Preguntas Frequentes
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                Galeria
              </Link>
            </li>
            <li>
              <Link to="/us" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
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