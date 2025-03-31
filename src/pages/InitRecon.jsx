import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CodeBracketIcon, CommandLineIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function InitRecon() {
  const tools = [
    {
      icon: CodeBracketIcon,
      title: "Endpoint Crawler",
      description: "Discover hidden endpoints and paths within web applications",
      path: "/init-recon/endpoint-crawler"
    },
    // Add more tools here as needed
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Initial Reconnaissance Tools
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tools.map((tool, index) => (
              <Link to={tool.path} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 p-8 rounded-2xl backdrop-blur-lg"
                >
                  <tool.icon className="h-12 w-12 text-[#2196F3] mb-6" />
                  <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InitRecon;