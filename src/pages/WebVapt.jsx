import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function WebVapt() {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate('/#consultation');
    setTimeout(() => {
      document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Web Application Penetration Testing
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-300">
                We conduct comprehensive security assessments of web applications using industry-standard methodologies and cutting-edge tools. Our approach includes manual testing combined with automated scanning to ensure thorough coverage.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4">What We Test</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Authentication & Authorization</li>
                <li>• Session Management</li>
                <li>• Input Validation</li>
                <li>• Business Logic Flaws</li>
                <li>• API Security</li>
                <li>• Data Protection</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">1. Discovery</div>
                <p className="text-gray-300">Initial assessment and scope definition</p>
              </div>
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">2. Testing</div>
                <p className="text-gray-300">Comprehensive security assessment</p>
              </div>
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">3. Reporting</div>
                <p className="text-gray-300">Detailed findings and recommendations</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConsultation}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request a Security Assessment
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default WebVapt;