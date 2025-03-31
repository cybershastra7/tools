import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (section) => {
    if (!isHomePage) {
      window.location.href = `/#${section}`;
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full z-50 top-0"
        >
          <div className="backdrop-blur-lg bg-black/30 border-b border-[#2196F3]/10">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link to="/" className="flex items-center">
                  <img src="/logo.png" alt="CyberShastra" className="h-16 w-16 mr-2 brightness-200 logo-glow" />
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
                    CyberShastra
                  </span>
                </Link>
                <div className="hidden md:flex space-x-8">
                  {isHomePage ? (
                    <>
                      <ScrollLink to="about" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">About</ScrollLink>
                      <ScrollLink to="services" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Services</ScrollLink>
                      <ScrollLink to="team" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Team</ScrollLink>
                      <ScrollLink to="achievements" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Achievements</ScrollLink>
                      <ScrollLink to="consultation" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Consultation</ScrollLink>
                      <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Contact</ScrollLink>
                    </>
                  ) : (
                    <>
                      <Link to="/#about" onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-[#2196F3] transition-colors">About</Link>
                      <Link to="/#services" onClick={() => handleNavClick('services')} className="text-gray-300 hover:text-[#2196F3] transition-colors">Services</Link>
                      <Link to="/#team" onClick={() => handleNavClick('team')} className="text-gray-300 hover:text-[#2196F3] transition-colors">Team</Link>
                      <Link to="/#achievements" onClick={() => handleNavClick('achievements')} className="text-gray-300 hover:text-[#2196F3] transition-colors">Achievements</Link>
                      <Link to="/#consultation" onClick={() => handleNavClick('consultation')} className="text-gray-300 hover:text-[#2196F3] transition-colors">Consultation</Link>
                      <Link to="/#contact" onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-[#2196F3] transition-colors">Contact</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Navbar;