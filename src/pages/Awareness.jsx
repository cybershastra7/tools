import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Awareness() {
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
            Cyber Awareness Campaign
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
              <p className="text-gray-300">
                We offer comprehensive cybersecurity awareness training programs designed to educate employees about current threats and best practices. Our interactive sessions combine theory with practical exercises.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4">Training Topics</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Social Engineering</li>
                <li>• Password Security</li>
                <li>• Email Safety</li>
                <li>• Data Protection</li>
                <li>• Mobile Security</li>
                <li>• Incident Response</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Program Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">1. Interactive Sessions</div>
                <p className="text-gray-300">Engaging learning experience</p>
              </div>
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">2. Practical Exercises</div>
                <p className="text-gray-300">Hands-on training scenarios</p>
              </div>
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">3. Assessment</div>
                <p className="text-gray-300">Progress tracking and certification</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConsultation}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Training Session
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Awareness;