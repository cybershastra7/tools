import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Consultation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={ref} id="consultation" className="py-20 bg-gradient-to-b from-black to-[#1976D2]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Schedule a Free Consultation
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Book a 30-minute consultation with our security experts to discuss your cybersecurity needs.
          </p>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 p-8 rounded-2xl backdrop-blur-lg">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/cybershastra7/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Consultation;