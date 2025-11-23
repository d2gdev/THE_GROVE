import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'The Grove', path: '/grove' },
    { name: 'Honorees', path: '/honorees' },
    { name: 'Get Involved', path: '/get-involved' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen text-slate-800 bg-beige-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-navy-900 flex items-center justify-center font-serif font-bold text-lg">
                W
              </div>
              <Link to="/" className="font-serif text-lg tracking-wide hover:text-gold-500 transition-colors">
                Women Veterans Memorial Grove
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                    isActive(link.path) ? 'text-gold-500' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/get-involved" className="bg-white text-navy-900 px-6 py-2 rounded-full text-xs uppercase font-bold tracking-wider hover:bg-gold-500 hover:text-white transition-all duration-300">
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path) ? 'text-gold-500 bg-navy-900' : 'text-gray-300 hover:text-white hover:bg-navy-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/get-involved" className="block w-full text-center bg-gold-500 text-white px-4 py-3 rounded text-sm uppercase font-bold tracking-wider" onClick={() => setIsMenuOpen(false)}>
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-serif text-xl mb-6 text-gold-500">Women Veterans Memorial Grove</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Honoring the service and sacrifice of women veterans throughout history. A living monument to their courage and dedication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Navigation</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
                <li><Link to="/history" className="hover:text-gold-500 transition-colors">History</Link></li>
                <li><Link to="/grove" className="hover:text-gold-500 transition-colors">The Grove</Link></li>
                <li><Link to="/honorees" className="hover:text-gold-500 transition-colors">Honorees</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Community</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/get-involved" className="hover:text-gold-500 transition-colors">Ceremony</Link></li>
                <li><Link to="/get-involved" className="hover:text-gold-500 transition-colors">Volunteer</Link></li>
                <li><Link to="/get-involved" className="hover:text-gold-500 transition-colors">News</Link></li>
                <li><Link to="/get-involved" className="hover:text-gold-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
               <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Newsletter</h4>
               <p className="text-gray-400 text-sm mb-4">Subscribe for updates on ceremonies and restoration efforts.</p>
               <div className="flex">
                 <input type="email" placeholder="Email Address" className="bg-navy-800 border border-navy-700 text-white px-4 py-2 w-full text-sm focus:outline-none focus:border-gold-500" />
                 <button className="bg-gold-500 text-white px-4 py-2 text-xs font-bold uppercase hover:bg-gold-600 transition-colors">
                   Join
                 </button>
               </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
             <p>&copy; 2024 Women Veterans Memorial Grove. All rights reserved.</p>
             <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;