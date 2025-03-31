import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, CodeBracketIcon, DevicePhoneMobileIcon, WrenchIcon, CloudIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: CodeBracketIcon,
    title: "Web-Application Penetration Testing",
    description: "Comprehensive security assessment of web applications",
    path: "/webvapt"
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Penetration Testing",
    description: "Security testing for Android applications",
    path: "/mobile"
  },
  {
    icon: WrenchIcon,
    title: "API Penetration Testing",
    description: "In-depth security analysis of APIs",
    path: "/api"
  },
  {
    icon: CloudIcon,
    title: "Network Penetration Testing",
    description: "Thorough assessment of network infrastructure",
    path: "/network"
  },
  {
    icon: ShieldCheckIcon,
    title: "IoT Penetration Testing",
    description: "Security evaluation of IoT devices and systems",
    path: "/iot"
  },
  {
    icon: AcademicCapIcon,
    title: "Cyber Awareness Campaign",
    description: "Educational programs and security workshops",
    path: "/awareness"
  }
];

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="services" className="py-20 bg-gradient-to-b from-black to-[#1976D2]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Our Services
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 p-8 rounded-2xl backdrop-blur-lg hover:scale-105 transition-transform"
              >
                <service.icon className="h-12 w-12 text-[#2196F3] mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;