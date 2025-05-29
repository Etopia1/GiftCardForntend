import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional: lucide-react for icons

const HomePage = ({onVerifyClick}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full shadow-md fixed top-o z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/736x/bd/b9/63/bdb9632228612368442d049925ce5dcc.jpg" // replace with your logo path
            alt="Giftlycheck"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center font-medium">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">Home</a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-gray-300 transition">Customer Reviews</a>
          </li>
          <li>
            <p
            onClick={onVerifyClick}
              className="bg-white text-black px-5 py-2 rounded-md font-bold hover:bg-gray-200 transition"
            >
              VERIFY NOW
            </p>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4">
          <a href="#home" className="block text-white hover:text-gray-300">Home</a>
          <a href="#reviews" className="block text-white hover:text-gray-300">Customer Reviews</a>
          <p
            onClick={onVerifyClick}
            className="block bg-white text-black px-4 py-2 rounded-md font-bold text-center"
          >
            VERIFY NOW
          </p>
        </div>
      )}
    </nav>
  );
};

export default HomePage;
