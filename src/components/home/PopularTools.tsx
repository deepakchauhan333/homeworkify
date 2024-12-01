import React from 'react';
import { ArrowUpRight, Star, ExternalLink } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  image: string;
  category: string;
  logo: string;
  link: string;
  rating?: number;
  verified?: boolean;
}

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
      </div>

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <img src={tool.logo} alt={`${tool.name} logo`} className="w-8 h-8 rounded-lg" />
        <div className="px-2 py-1 bg-gray-900/90 rounded-lg text-xs text-gray-400">
          {tool.category}
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 group-hover:text-gray-300">
          {tool.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          {tool.rating && (
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-medium">{tool.rating}</span>
            </div>
          )}
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            Visit Site
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const PopularTools = () => {
  const tools: Tool[] = [
    {
      name: "Elai.io",
      description: "Create AI videos from just text with professional presenters",
      image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&w=800",
      category: "Video Generator",
      logo: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&w=100",
      link: "#",
      rating: 4.8
    },
    {
      name: "Tools IT",
      description: "Generate high quality content and AI images with ToolsIT",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
      category: "Copywriting",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100",
      link: "#",
      rating: 4.9
    },
    {
      name: "Gooey.AI",
      description: "Developer tools for AI-powered applications",
      image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800",
      category: "Developer Tools",
      logo: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=100",
      link: "#",
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular AI Tools
            </h2>
            <p className="text-gray-400">
              Discover the Best AI Tools Making Your Life Easier and More Efficient
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 transition-colors">
            View All
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTools;