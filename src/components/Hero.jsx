import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-[#1976D2]/20 to-black z-0"
      />
      
      <div className="relative z-10 container mx-auto px-4 pt-32 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Your Defence Starts
          </h1>
          <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#64B5F6] to-[#2196F3]">
            With Our Offence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Comprehensive, proactive, and cutting-edge cybersecurity solutions for businesses of all sizes.
          </p>
          <div className="flex justify-center space-x-6">
            <ScrollLink to="services" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2196F3] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1976D2] transition-colors"
              >
                Discover More
              </motion.button>
            </ScrollLink>
            <ScrollLink to="consultation" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1976D2] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1565C0] transition-colors"
              >
                Schedule a Free Consultation
              </motion.button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"
      />
    </section>
  );
}

export default Hero;