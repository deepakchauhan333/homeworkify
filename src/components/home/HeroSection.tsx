import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-[#0c0a3e] to-black min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating brand icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-50">
            Discover AI Tools
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> for Your Business</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12">
            Streamline Your Workflow with Our List of AI tools. Find Your Perfect Solution.
          </p>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for over 1500+ tools..."
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-100 pr-12 placeholder-gray-500"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 text-gray-400 hover:text-white bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
              Explore 1500+ AI Tools
              <ChevronRight className="inline ml-2" size={16} />
            </button>
            <button className="px-6 py-2 text-gray-400 hover:text-white bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
              View All Categories
              <ChevronRight className="inline ml-2" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;