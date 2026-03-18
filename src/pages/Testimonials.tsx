import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, User } from 'lucide-react';

const reviews = [
  {
    name: "Aditi Rao",
    date: "March 12, 2024",
    rating: 5,
    title: "Absolute Bliss!",
    text: "I visited Lumina for a deep tissue massage and it was life-changing. The therapist really listened to my concerns and I left feeling completely tension-free. The atmosphere is just incredible.",
    service: "Deep Tissue Massage",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Arjun Kapoor",
    date: "February 28, 2024",
    rating: 5,
    title: "Professional & Serene",
    text: "The Signature Glow Facial is worth every penny. My skin has never felt so hydrated and refreshed. The staff is professional and the facility is spotless.",
    service: "Signature Glow Facial",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Sanya Malhotra",
    date: "February 15, 2024",
    rating: 4,
    title: "Wonderful Experience",
    text: "A truly relaxing afternoon. The aromatherapy ritual was exactly what I needed to de-stress. I'll definitely be back for a full day package soon.",
    service: "Aromatherapy Ritual",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "Rohan Mehra",
    date: "January 20, 2024",
    rating: 5,
    title: "Hidden Gem",
    text: "I've been to many spas in the city, but Lumina stands out for its attention to detail and holistic approach. The hot stone therapy was exceptional.",
    service: "Hot Stone Therapy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-background-dark text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Transformation Starts Here
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Read about the experiences of our valued clients and how Lumina Wellness has helped them find their inner peace.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto w-full px-6 -mt-10 mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-primary/10">
          <div className="text-center space-y-2">
            <p className="text-4xl font-black text-primary">4.9/5</p>
            <div className="flex justify-center text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-primary" />)}
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Average Rating</p>
          </div>
          <div className="text-center space-y-2 border-y md:border-y-0 md:border-x border-slate-100 py-6 md:py-0">
            <p className="text-4xl font-black text-primary">2,500+</p>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Verified Reviews</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-black text-primary">98%</p>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 size-12 text-primary/5 -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-1 text-primary">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="size-4 fill-primary" />)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{review.title}</h3>
                <p className="text-slate-600 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <img src={review.avatar} alt={review.name} className="size-12 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <p className="font-bold text-slate-900 flex items-center gap-1">
                      {review.name} <CheckCircle2 className="size-4 text-primary" />
                    </p>
                    <p className="text-xs text-slate-500 font-medium">{review.service}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all">
            Load More Reviews
          </button>
        </div>
      </section>
    </div>
  );
}
