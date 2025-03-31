import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companies = [
    "NASA", "IBM", "Netflix", "Lenovo", "Reserve Bank Of Australia",
    "U.S. Govt.", "Stanford University", "UNESCO", "GEA Groups", "Drexel University"
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "eLearning Junior Penetration Tester (eJPT)",
    "Certified AppSec Practitioner (CAP)",
    "Certified Network Security Practitioner (CNSP SecOps)",
    "Certified Cyber Criminologist (CCC)",
    "Google CyberSecurity Professional"
  ];

  return (
    <section ref={ref} id="achievements" className="py-20 bg-gradient-to-b from-[#1976D2]/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Team Achievements & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#1976D2]/30 to-[#2196F3]/30 p-8 rounded-2xl backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Reported Vulnerabilities to:</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 p-4 rounded-xl text-center"
                >
                  <p className="text-gray-300">{company}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-300 text-center mt-4 italic">And Many More...</p>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#2196F3]/30 to-[#64B5F6]/30 p-8 rounded-2xl backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#2196F3]/20 to-[#64B5F6]/20 p-4 rounded-xl text-center"
                >
                  <p className="text-gray-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;