import React from 'react';
import { 
  MessageSquare, Image, Type, Bot, Brain, 
  Code, Music, Video, Database, Sparkles 
} from 'lucide-react';

const CategoryCard = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-gray-900 font-medium text-lg">{title}</h3>
  </div>
);

const Categories = () => {
  const categories = [
    { icon: MessageSquare, title: "Chatbots" },
    { icon: Image, title: "Image Generation" },
    { icon: Type, title: "Text Generation" },
    { icon: Bot, title: "Automation" },
    { icon: Brain, title: "Machine Learning" },
    { icon: Code, title: "Development" },
    { icon: Music, title: "Audio & Music" },
    { icon: Video, title: "Video Creation" },
    { icon: Database, title: "Data Analysis" },
    { icon: Sparkles, title: "Creative Tools" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <p className="mt-4 text-gray-600">Find the perfect AI tool for your specific needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;