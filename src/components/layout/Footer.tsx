import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-white">AIHub.Tools</span>
            </div>
            <p className="text-white/80 max-w-md mb-4">
              Your central hub for discovering AI tools, blogs, and GPT-related resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex space-x-8 md:space-x-16 mt-8 md:mt-0">
            <div>
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Submit Tool</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Categories</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-white/60 border-t border-white/10">
          <p>&copy; 2024 AIHub.Tools. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;