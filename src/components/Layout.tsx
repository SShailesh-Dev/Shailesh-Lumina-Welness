import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flower2, Menu, X, Globe, Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Flower2 className="text-primary size-8" />
          <h1 className="text-xl font-bold tracking-tight">Lumina Wellness</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/booking"
            className="hidden sm:block bg-primary text-white hover:bg-primary/90 transition-all px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20"
          >
            Book Now
          </Link>
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-primary/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-bold"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-primary/10 pt-20 pb-10" id="contact">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Flower2 className="text-primary size-8" />
            <h2 className="text-xl font-bold">Lumina Wellness</h2>
          </div>
          <p className="text-slate-600 max-w-xs">
            Elevating your wellness experience through professional, holistic care in a tranquil environment.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Globe className="size-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Mail className="size-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-slate-400">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link className="text-sm hover:text-primary transition-colors" to="/">Home</Link>
              <Link className="text-sm hover:text-primary transition-colors" to="/services">Services</Link>
              <Link className="text-sm hover:text-primary transition-colors" to="/about">About Us</Link>
              <Link className="text-sm hover:text-primary transition-colors" to="/testimonials">Testimonials</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-slate-400">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="text-primary size-4" /> 
                45, Lotus Plaza, MG Road, Bangalore, Karnataka 560001
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-primary size-4" /> 
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-primary size-4" /> 
                info@lumina-wellness.in
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-slate-400">Find Us</h3>
          <div className="w-full h-48 rounded-xl overflow-hidden grayscale contrast-125 border border-primary/10 shadow-inner">
            <img
              alt="Location Map"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5965T4OsCdk_F6L_ydtfswHy_V6mq2hkIc9E53iaQaieO3sU0sLq7Hz70JXKfdZr8_HL9H8po2EwGbIHjgWPQSsgxdXDcT7Qip_8Etfh0hsoCW5NdwBCtJmhJZIAKBlSYhP-NmV6RSpOVzeXV5habCRc_QsjMmJCmSoEeFjX4kMZhdajxHii4abIr0JeCTgr8hpDoqc-g16tAjO1olP3zCFUQCPdS7TvTAjUhKJu_YfUo18XDHkAl3Z8ilzTdoY7-3ocj-6O7jw"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
        <p>© 2024 Lumina Wellness Spa. All rights reserved.</p>
        <div className="flex gap-8">
          <Link className="hover:text-primary" to="/privacy">Privacy Policy</Link>
          <Link className="hover:text-primary" to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
