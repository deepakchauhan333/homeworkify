import React from 'react';
import { ArrowUpRight, Star, Sparkles } from 'lucide-react';

const ToolCard = ({ name, description, image, price, rating, isNew }: {
  name: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  isNew?: boolean;
}) => (
  <div className="group relative bg-black rounded-lg overflow-hidden border border-gray-700 hover:border-pink-500 transition-all duration-300">
    <div className="aspect-w-16 aspect-h-9 bg-black">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      {isNew && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-pink-600 rounded-full text-xs font-medium text-white shadow-lg">
            Premium
          </div>
        </div>
      )}
    </div>
    
    <div className="p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm line-clamp-2 mb-3 group-hover:text-gray-200">
        {description}
      </p>
      
      <div className="flex items-center justify-between mt-3">
        <span className="text-pink-400 font-semibold">{price}</span>
        <button className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Explore Tool
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

const FeaturedTools = () => {
  const tools = [
    {
      name: "MindForge AI",
      description: "Advanced neural network for creative problem-solving and innovation acceleration",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800",
      price: "$29.99",
      rating: 4.9,
      isNew: true
    },
    {
      name: "NeuroPaint Studio",
      description: "Revolutionary AI art generation with neural style transfer and creative tools",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
      price: "$19.99",
      rating: 4.8
    },
    {
      name: "CodeSynth AI",
      description: "AI-powered code generation and optimization for developers",
      image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800",
      price: "$39.99",
      rating: 4.7,
      isNew: true
    },
    {
      name: "VisionQuest AI",
      description: "Advanced computer vision platform for real-time image analysis",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800",
      price: "$24.99",
      rating: 4.6
    },
    {
      name: "SoundForge AI",
      description: "Neural audio processing and music generation platform",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800",
      price: "$34.99",
      rating: 4.8
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              Featured AI Tools
              <Sparkles className="text-blue-400" size={24} />
            </h2>
            <p className="text-gray-400">
              Discover cutting-edge AI tools to enhance your workflow
            </p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
            View All Tools
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;