import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-[#2196F3]/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="CyberShastra" className="h-12 w-12 mr-2 brightness-200 logo-glow" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
                CyberShastra
              </span>
            </div>
            <p className="text-gray-300">
              Your trusted partner in cybersecurity solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/webvapt" className="text-gray-300 hover:text-[#2196F3] transition-colors">Web Application Testing</Link></li>
              <li><Link to="/mobile" className="text-gray-300 hover:text-[#2196F3] transition-colors">Mobile Testing</Link></li>
              <li><Link to="/api" className="text-gray-300 hover:text-[#2196F3] transition-colors">API Testing</Link></li>
              <li><Link to="/network" className="text-gray-300 hover:text-[#2196F3] transition-colors">Network Testing</Link></li>
              <li><Link to="/iot" className="text-gray-300 hover:text-[#2196F3] transition-colors">IoT Testing</Link></li>
              <li><Link to="/awareness" className="text-gray-300 hover:text-[#2196F3] transition-colors">Security Awareness</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><ScrollLink to="about" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">About</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Services</ScrollLink></li>
              <li><ScrollLink to="team" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Team</ScrollLink></li>
              <li><ScrollLink to="achievements" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Achievements</ScrollLink></li>
              <li><ScrollLink to="consultation" smooth={true} duration={500} className="text-gray-300 hover:text-[#2196F3] transition-colors cursor-pointer">Consultation</ScrollLink></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:services@cybershastra.in" className="text-gray-300 hover:text-[#2196F3] transition-colors">
                  services@cybershastra.in
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/cybershastra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#2196F3] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2196F3]/10 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CyberShastra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;