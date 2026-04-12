import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';

export const Navbar = ({ onNavigate, currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Workshops', path: '/workshops' },
    { name: 'About Us', path: '/about' },
    { name: 'Statistics', path: '/stats' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="font-serif text-2xl font-bold tracking-tight">
          FOSSEE<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <a key={link.name} href={link.path} onClick={(e) => { e.preventDefault(); onNavigate(link.path); }} className={`nav-link ${currentPath === link.path ? 'text-primary' : ''}`}>
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 items-center border-l pl-10 border-muted">
            <User className="w-5 h-5 text-secondary cursor-pointer hover:text-primary" />
            <button onClick={() => onNavigate('/login')} className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90">
              Internal Login
            </button>
          </div>
        </div>

        {/* Mobile Trigger */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-8 flex flex-col gap-6 fade-in">
          {links.map((link) => (
            <a key={link.name} href={link.path} onClick={(e) => { e.preventDefault(); onNavigate(link.path); setIsMenuOpen(false); }} className="text-xl font-medium">
              {link.name}
            </a>
          ))}
          <hr />
          <button className="btn-premium w-full" onClick={() => onNavigate('/login')}>Login</button>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-primary text-white py-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-3xl mb-6">FOSSEE.</h2>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
             IIT Bombay's premier platform for technical collaboration and expert-led workshops. Empowering students across the nation through open-source innovation.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs text-gray-500">Explore</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Workshop Catalog</a></li>
            <li><a href="#" className="hover:text-white">Our Instructors</a></li>
            <li><a href="#" className="hover:text-white">Announcements</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs text-gray-500">Resources</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Contact Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs uppercase tracking-widest">© 2026 FOSSEE, IIT Bombay. All Rights Reserved.</p>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-500">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">X</a>
        </div>
      </div>
    </div>
  </footer>
);
