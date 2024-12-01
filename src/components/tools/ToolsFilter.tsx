import React from 'react';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { FilterOptions } from '../../types/tools';

interface ToolsFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const ToolsFilter = ({ filters, onFilterChange }: ToolsFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <div className="relative group">
        <button className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 flex items-center gap-2 border border-gray-700 hover:border-blue-500 transition-all">
          <Filter size={16} />
          Category
          <ChevronDown size={14} />
        </button>
        <div className="absolute top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-10">
          <div className="p-2 space-y-1">
            {['All', 'Text', 'Image', 'Audio', 'Video', 'Development'].map((category) => (
              <button
                key={category}
                className="w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md text-sm"
                onClick={() => onFilterChange({ ...filters, category: category.toLowerCase() })}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {['Free', 'Paid', 'Freemium'].map((price) => (
          <button
            key={price}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              filters.pricing === price.toLowerCase()
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => onFilterChange({ ...filters, pricing: price.toLowerCase() })}
          >
            {price}
          </button>
        ))}
      </div>

      <button className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 flex items-center gap-2">
        <SlidersHorizontal size={16} />
        Sort by: {filters.sort}
      </button>
    </div>
  );
};

export default ToolsFilter;