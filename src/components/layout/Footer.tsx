import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

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
              <a href="https://www.facebook.com/digiexprs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/digi_expres" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/103584716/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/digi_expres" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
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

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 dark:text-gray-400 text-sm">
            © 2025 Digiexpres Tech Solution. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-notice" className="text-gray-400 hover:text-white transition-colors">Cookie Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;