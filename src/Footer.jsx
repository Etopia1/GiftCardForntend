import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e293b] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">GiftlyCheck</h3>
          <p className="text-sm text-gray-300">
            Reliable Gift Card Validation Services for Everyone.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 text-sm">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} GiftlyCheck. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
