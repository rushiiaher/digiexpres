import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors py-2 group ${isActive
        ? 'text-blue-600 dark:text-blue-400 font-semibold'
        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'}`}></span>
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isResourcesActive = location.pathname.startsWith('/about') || location.pathname.startsWith('/blog');
  const isAdminRoute = location.pathname.startsWith('/admin/dashboard');

  if (isAdminRoute) {
    return (
      <header className="bg-white/90 backdrop-blur-[8px] dark:bg-gray-900/90 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo - Left */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/digiexpres_logo copy copy copy.png" alt="Digiexpres" className="h-10 w-auto" />
            </Link>

            {/* Title - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 font-bold text-slate-800 text-lg hidden sm:block">
              Admin Panel
            </div>

            {/* Logout - Right */}
            <div className="flex items-center">
              <Link
                to="/admin/login"
                onClick={() => localStorage.removeItem('adminAuth')}
                className="bg-red-50 text-red-600 px-[16px] py-[8px] rounded-lg font-semibold hover:bg-red-100 transition-colors shadow-sm"
              >
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="bg-white/90 backdrop-blur-[8px] dark:bg-gray-900/90 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo - Left */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/digiexpres_logo copy copy copy.png" alt="Digiexpres" className="h-10 w-auto" />
          </Link>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center gap-[32px]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/ai-solutions">AI Solutions</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>

            {/* Resources Dropdown */}
            <div className="relative group py-2 z-50">
              <button className={`flex items-center gap-1 font-medium transition-colors relative ${isResourcesActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}>
                Resources
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${isResourcesActive ? 'opacity-100' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'}`}></span>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl py-2 w-48 border border-gray-100 dark:border-gray-700 flex flex-col">
                  <Link to="/about" className="px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-colors">About Company</Link>
                  <Link to="/blog" className="px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-colors">Blog & Insights</Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA & Mobile Menu - Right */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex bg-blue-600 text-white px-[18px] py-[10px] rounded-lg font-semibold hover:bg-blue-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              Get in Touch
            </Link>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Layout Update */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-1 pt-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Services</Link>
            <Link to="/ai-solutions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">AI Solutions</Link>
            <Link to="/case-studies" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Case Studies</Link>
            <div className="px-3 pt-3 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">Resources</div>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block pl-6 pr-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">About</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block pl-6 pr-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Blog</Link>
            <div className="pt-4 px-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">Get in Touch</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
