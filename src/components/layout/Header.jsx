import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center space-x-12">
          <Link
            to="/"
            className="flex items-center text-3xl md:text-4xl font-semibold hover:text-indigo-500 transition"
          >
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.2aTp4Q3mw92dHJ9FsvaLhQAAAA?cb=12&pid=ImgDet&w=191&h=191&c=7&o=7&rm=3"
              alt="Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-md"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 relative">
            {/* News Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="font-medium text-lg md:text-xl hover:text-indigo-500 transition">
                News ▾
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden animate-fade-in z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category}`}
                      className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-base capitalize"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/tranding"
              className="font-medium text-lg md:text-xl hover:text-indigo-500 transition"
            >
              Tranding
            </Link>
            <Link
              to="/breaking"
              className="font-medium text-lg md:text-xl hover:text-indigo-500 transition"
            >
              Breaking
            </Link>
          </nav>
        </div>

        {/* Right Side: Social + Search + Mobile Menu */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Social Icons */}
          <div className="hidden md:flex space-x-5 text-gray-600 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

        

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-indigo-500 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
     
          

      
  

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white animate-slide-down shadow-md border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link
              to="/"
              className="font-medium text-lg hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile News Dropdown */}
            <div className="relative">
              <button
                className="w-full text-left font-medium text-lg hover:text-indigo-500 transition flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                News ▾
              </button>
              {isOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category}`}
                      className="text-gray-700 capitalize hover:text-indigo-500 transition text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/tranding"
              className="font-medium text-lg hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tranding
            </Link>
            <Link
              to="/breaking"
              className="font-medium text-lg hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Breaking
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
