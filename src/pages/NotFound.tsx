import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Flower2, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="relative inline-block">
          <Flower2 className="size-32 text-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />
          <h1 className="text-9xl font-black text-slate-900 tracking-tighter">404</h1>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">Tranquility Not Found</h2>
          <p className="text-slate-500 max-w-md mx-auto text-lg">
            The page you are looking for seems to have drifted away into a state of deep relaxation. Let's get you back to center.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/" 
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Home className="size-5" /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="size-5" /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
