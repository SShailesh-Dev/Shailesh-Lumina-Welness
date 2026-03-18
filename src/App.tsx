/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import { AnimatePresence, motion } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper pageKey="home"><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper pageKey="services"><Services /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper pageKey="about"><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper pageKey="contact"><Contact /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper pageKey="testimonials"><Testimonials /></PageWrapper>} />
        <Route path="/booking" element={<PageWrapper pageKey="booking"><Booking /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper pageKey="privacy"><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper pageKey="terms"><TermsOfService /></PageWrapper>} />
        <Route path="*" element={<PageWrapper pageKey="404"><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children, pageKey }: { children: React.ReactNode; pageKey: string }) {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

