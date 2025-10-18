import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.2aTp4Q3mw92dHJ9FsvaLhQAAAA?cb=12&pid=ImgDet&w=191&h=191&c=7&o=7&rm=3"
              alt="Logo"
              className="h-12 w-auto object-contain rounded-md"
            />
            <span className="text-2xl font-semibold text-white">MyNews</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Bringing you the latest news from all categories — technology, business, sports, and more. Stay informed and updated daily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Trending", "Breaking", "About"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            {[ "Technology", "Entertainment", "Sports", "Science", "Health"].map((cat) => (
              <li key={cat}>
                <Link
                  to={`/category/${cat.toLowerCase()}`}
                  className="hover:text-indigo-400 transition-colors capitalize"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl mb-4">
            {[{ icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" }].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transform hover:scale-110 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter:</p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">MyNews</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
