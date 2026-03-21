import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/digiexpres_logo copy copy copy.png" 
                alt="Digiexpres Tech Solution" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              Transforming businesses through innovative technology solutions and AI-powered services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors">Services</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors">AI Solutions</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 dark:text-gray-400">IT Consultation</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Software Development</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Web Development</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">AI/ML Integration</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Cybersecurity</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Digital Marketing 360°</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                <span className="text-gray-300 dark:text-gray-400">info@digiexpres.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                <span className="text-gray-300 dark:text-gray-400">+91 7397990245 / +44 7748 346550</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 dark:text-gray-400">Unit 16, 2nd Floor, GNP Galleria, Regency Anantam Rd, opp. Kalyan - Shilphata Road, Junction, Dombivli East, Dombivli, Maharashtra 421203</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 dark:text-gray-400">CEME Business Campus, Marsh Way, Rainham RM13 8EU, London, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © 2025 Digiexpres Tech Solution. All rights reserved.
          </p>
          <Link to="/admin/login" className="text-gray-500 dark:text-gray-600 hover:text-gray-300 dark:hover:text-gray-400 text-xs mt-2 inline-block">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;