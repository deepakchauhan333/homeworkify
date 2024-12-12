import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Tool Card Component
interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  rating: number;
  image: string;
  id: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, category, rating, image, id }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group bg-gradient-to-r from-black via-blue-900/50 to-black rounded-2xl overflow-hidden shadow-lg shadow-black/20"
  >
    {/* Preview Image */}
    <div className="relative h-[200px] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs text-white/90">
          {category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="relative p-6 h-[180px] bg-gradient-to-r from-black/80 via-transparent to-black/80">
      {/* Title and Description Container - Fixed Height */}
      <div className="h-[80px]">
        <h3 className="text-xl text-white font-semibold tracking-tight group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mt-2 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Footer - Absolute Positioning */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white/90 font-medium text-sm">{rating}</span>
        </div>

        {/* Explore Tool Button */}
        <motion.button
          whileHover={{ scale: 1.05, x: 3 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400
            text-white text-sm font-medium flex items-center gap-2 transition-all duration-300
            shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
        >
          Explore Tool
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const FeaturedTools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);

  const tools = [
    // First Row
    {
      id: "video-generator",
      name: "Video Generator",
      description: "Create AI videos from just text with professional presenters",
      category: "Video",
      rating: 4.8,
      image: "/images/video-generator-preview.jpg"
    },
    {
      id: "tools-it",
      name: "Tools IT",
      description: "Generate high quality content and AI images with ToolsIT",
      category: "Content",
      rating: 4.9,
      image: "/images/copywriting-preview.jpg"
    },
    {
      id: "gooey-ai",
      name: "Gooey.AI",
      description: "Developer tools for AI-powered applications",
      category: "Development",
      rating: 4.7,
      image: "/images/developer-preview.jpg"
    },
    {
      id: "neural-love",
      name: "Neural.Love",
      description: "Advanced AI image generation and enhancement",
      category: "Image",
      rating: 4.8,
      image: "/images/neural-preview.jpg"
    },
    // Second Row
    {
      id: "deepmind-studio",
      name: "DeepMind Studio",
      description: "Professional AI video creation suite",
      category: "Video",
      rating: 4.9,
      image: "/images/deepmind-preview.jpg"
    },
    {
      id: "ai-fusion",
      name: "AI Fusion",
      description: "Blend and enhance images with AI",
      category: "Image",
      rating: 4.7,
      image: "/images/aifusion-preview.jpg"
    },
    {
      id: "codecraft-ai",
      name: "CodeCraft AI",
      description: "AI-powered development assistant",
      category: "Development",
      rating: 4.8,
      image: "/images/codecraft-preview.jpg"
    },
    {
      id: "pixelmind",
      name: "PixelMind",
      description: "Transform your ideas into stunning visuals",
      category: "Image",
      rating: 4.6,
      image: "/images/pixelmind-preview.jpg"
    },
    // Third Row (2 cards)
    {
      id: "voice-master",
      name: "Voice Master",
      description: "Professional AI voice generation",
      category: "Audio",
      rating: 4.7,
      image: "/images/voice-preview.jpg"
    },
    {
      id: "datasense",
      name: "DataSense",
      description: "AI-powered data analysis and visualization",
      category: "Data",
      rating: 4.8,
      image: "/images/datasense-preview.jpg"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleToolClick = (toolId: string) => {
    setSelectedTool(parseInt(toolId));
    // Here you can add logic to show the tool interface
    console.log('Selected tool:', toolId);
  };

  return (
    <section className="bg-[#0A0C10] py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12"
        >
          Featured Tools
        </motion.h2>

        {/* Tools Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-rows-[auto_auto_auto] gap-y-5"
        >
          {/* First Row - 4 cards */}
          <div className="grid grid-cols-4 gap-5">
            {tools.slice(0, 4).map((tool, index) => (
              <Link to={`/tool/${tool.id}`} key={tool.id}>
                <motion.div
                  variants={item}
                  className="w-full"
                >
                  <div
                    className="bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => handleToolClick(tool.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                        {tool.category}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm">{tool.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                    <ToolCard {...tool} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Second Row - 4 cards */}
          <div className="grid grid-cols-4 gap-5">
            {tools.slice(4, 8).map((tool, index) => (
              <Link to={`/tool/${tool.id}`} key={tool.id}>
                <motion.div
                  variants={item}
                  className="w-full"
                >
                  <div
                    className="bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => handleToolClick(tool.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                        {tool.category}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm">{tool.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                    <ToolCard {...tool} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Third Row - 2 cards centered */}
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-2 col-start-2">
              {tools.slice(8, 10).map((tool, index) => (
                <Link to={`/tool/${tool.id}`} key={tool.id}>
                  <motion.div
                    variants={item}
                    className="w-full mb-5 last:mb-0"
                  >
                    <div
                      className="bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
                      onClick={() => handleToolClick(tool.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {tool.category}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-sm">{tool.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                      <p className="text-gray-400 text-sm">{tool.description}</p>
                      <ToolCard {...tool} />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTools;