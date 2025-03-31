import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Contact Us
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 rounded-2xl backdrop-blur-lg"
          >
            <PhoneIcon className="h-8 w-8 text-[#2196F3] mb-4" />
            <p className="text-gray-300">+91 9527500586</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 rounded-2xl backdrop-blur-lg"
          >
            <EnvelopeIcon className="h-8 w-8 text-[#2196F3] mb-4" />
            <p className="text-gray-300">services@cybershastra.in</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 rounded-2xl backdrop-blur-lg"
          >
            <FaLinkedin className="h-8 w-8 text-[#2196F3] mb-4" />
            <a href="https://www.linkedin.com/company/cybershastra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#2196F3] transition-colors">
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;