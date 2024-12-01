import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AIHub.Tools</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/tools" className="text-gray-700 hover:text-blue-600">Tools</a>
            <a href="/blogs" className="text-gray-700 hover:text-blue-600">Blogs</a>
            <a href="/categories" className="text-gray-700 hover:text-blue-600">Categories</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Tool
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="/tools" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tools</a>
            <a href="/blogs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blogs</a>
            <a href="/categories" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Categories</a>
            <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Tool
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;