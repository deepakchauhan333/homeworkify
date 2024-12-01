import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { Tool, FilterOptions } from '../../types/tools';

interface ToolsGridProps {
  filters: FilterOptions;
}

const ToolCard = ({ tool }: { tool: Tool }) => (
  <div className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={tool.image}
        alt={tool.name}
        className="w-full h-48 object-cover"
      />
    </div>
    
    {tool.isNew && (
      <span className="absolute top-4 right-4 px-2 py-1 bg-blue-600 text-xs text-white rounded-full">
        New
      </span>
    )}
    
    <div className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">{tool.description}</p>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span className="text-sm">{tool.rating}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2">
        View Details
        <ArrowUpRight size={16} />
      </button>
    </div>
  </div>
);

const ToolsGrid = ({ filters }: ToolsGridProps) => {
  const tools: Tool[] = [
    {
      name: "AI Writer Pro",
      description: "Advanced AI writing assistant powered by GPT-4 for content creation and editing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
      rating: 4.8,
      tags: ["Text", "Writing", "GPT-4"],
      isNew: true,
      pricing: "freemium"
    },
    {
      name: "ImageAI Studio",
      description: "Create stunning visuals with state-of-the-art AI image generation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
      rating: 4.9,
      tags: ["Image", "Art", "Design"],
      isNew: false,
      pricing: "paid"
    },
    {
      name: "VoiceAI Master",
      description: "Transform and generate human-like voices for any content",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800",
      rating: 4.7,
      tags: ["Audio", "Voice", "Speech"],
      isNew: true,
      pricing: "free"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </div>
  );
};

export default ToolsGrid;