import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">FindMyAITool</h2>
            <p className="text-white/80 max-w-md">FindMyAITool is a website dedicated to providing a comprehensive list of AI tools to assist individuals and businesses in finding the most suitable AI tool for their specific requirements.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="flex space-x-8 md:space-x-16">
            <div>
              <h3 className="text-lg font-bold mb-2">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">AI Tools Category</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Submit AI Tool</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-white/80 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <ul className="space-y-2">
                <li><span className="text-white/80">info@findmyaitool.com</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-white/60 border-t border-white/10">
          <p>&copy; 2024 FindMyAITool. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
