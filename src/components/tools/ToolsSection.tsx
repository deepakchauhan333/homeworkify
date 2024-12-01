import React, { useState } from 'react';
import ToolsGrid from './ToolsGrid';
import ToolsFilter from './ToolsFilter';
import { Tool, FilterOptions } from '../../types/tools';

const ToolsSection = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    pricing: 'all',
    sort: 'newest'
  });

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Discover AI Tools
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Explore our curated collection of cutting-edge AI tools to enhance your workflow
            </p>

            <ToolsFilter filters={filters} onFilterChange={setFilters} />
            <ToolsGrid filters={filters} />

            <div className="fixed bottom-8 right-8">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                Submit Your Tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;