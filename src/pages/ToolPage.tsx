import React from 'react';
import { useParams } from 'react-router-dom';

const ToolPage: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();

  return (
    <div className="container mx-auto px-4 py-8 mt-8 flex flex-col items-center bg-black">
      <div className="bg-blue-900 p-8 rounded-lg shadow-md flex justify-between w-full max-w-4xl mb-8">
        {/* Left Side */}
        <div className="w-2/3 pr-8">
          <nav className="text-sm text-white mb-4">
            <a href="#" className="hover:text-blue-500">AI Tools List</a> &gt; <a href="#" className="hover:text-blue-500">Low Code/No Code</a> &gt; <span className="text-white">{toolId}</span>
          </nav>
          <div className="flex items-center mb-6">
            <img
              src="/path/to/logo.jpg"
              alt="Tool Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{toolId}</h1>
              <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full">Low Code/No Code</span>
            </div>
          </div>
          <p className="text-white mb-4">
            {toolId} is a company that provides AI-based solutions for intelligent document processing. It uses self-learning OCR to automate data capture from various types of documents.
          </p>
          <img
            src="/path/to/image.jpg"
            alt="Tool Screenshot"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Right Side */}
        <div className="w-1/3 flex flex-col items-end space-y-4">
          <span className="text-sm text-white">Paid plans start from $0.1/page</span>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500 transition-all">
            Explore Website
          </button>
          <button className="text-white hover:text-blue-500 transition-all">
            <i className="fas fa-bookmark"></i> 105
          </button>
          <div className="mt-8">
            <h2 className="text-lg font-bold text-white mb-4">Alternative Tools</h2>
            <ul className="space-y-2">
              <li className="bg-blue-900 p-4 rounded-lg shadow-md">
                <h3 className="text-white">Tool A</h3>
                <p className="text-white">Description of Tool A</p>
              </li>
              <li className="bg-blue-900 p-4 rounded-lg shadow-md">
                <h3 className="text-white">Tool B</h3>
                <p className="text-white">Description of Tool B</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Tools Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-6">Featured AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-blue-900 p-4 rounded-lg shadow-md">
              <img
                src="/path/to/tool-image.jpg"
                alt={`Tool ${index + 1}`}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-white text-lg font-bold">Tool {index + 1}</h3>
              <p className="text-white text-sm">Low Code/No Code</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolPage;
