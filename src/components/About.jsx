import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            About CyberShastra
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            At CyberShastra, we are committed to providing comprehensive, proactive, and cutting-edge cybersecurity solutions for businesses of all sizes. Our team of seasoned security professionals goes beyond traditional penetration testing, offering a full suite of services designed to protect, monitor, and strengthen your digital infrastructure.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1976D2]/30 to-[#2196F3]/30 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-300">
                To be the go-to cybersecurity powerhouse, empowering businesses with unmatched security solutions that keep them ahead of evolving cyber threats.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-[#2196F3]/30 to-[#64B5F6]/30 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-300">
                To identify, eliminate and prevent cyber threats with precision and expertise, providing cutting-edge security services that ensure long-term resilience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;