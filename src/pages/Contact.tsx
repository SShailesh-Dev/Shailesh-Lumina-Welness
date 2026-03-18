import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { db, collection, addDoc, serverTimestamp } from '../firebase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving contact message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-end px-6 lg:px-20 pb-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(20, 33, 17, 0.2), rgba(20, 33, 17, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIuekemP0RKrqZO-_AcGUEmAtWd9wP0Y_4wxuoYH7il1WCaUwkuVBlzy_5Taz8cOeq-I3xclxHRu2ioyGFk3d6XIjOZXAQgeftLMrOhG2JhfJRdrpkTp7gYDS5IVohSrSxYIgZissMuBLx8SyvfO5eFqbKDjgu7g78Iitfproop2HwFbIvtD1gkChzZUfp8AvS5ZcGcdRyfZK1P3jJjA9koQr0lcqusNCgjth2C51EtI0E7TwnYKodRjAI-z7XI92h5cpJE2IiHA')` 
          }}
        ></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Contact Us</h1>
          <p className="text-primary font-medium text-lg">Your journey to tranquility starts here.</p>
        </div>
      </section>

      {/* Contact Content */}
      <main className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a message</h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        required
                        className="w-full rounded-xl border-primary/20 bg-background-light focus:border-primary focus:ring-primary p-3 text-base" 
                        placeholder="Rahul Sharma" 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input 
                        className="w-full rounded-xl border-primary/20 bg-background-light focus:border-primary focus:ring-primary p-3 text-base" 
                        placeholder="+91 98765 43210" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      required
                      className="w-full rounded-xl border-primary/20 bg-background-light focus:border-primary focus:ring-primary p-3 text-base" 
                      placeholder="rahul@example.com" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea 
                      required
                      className="w-full rounded-xl border-primary/20 bg-background-light focus:border-primary focus:ring-primary p-3 text-base" 
                      placeholder="How can we help you today?" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : <><Send className="size-5" /> Send Message</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Quick Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed">
                Have questions about our treatments or want to schedule a personalized session? Reach out to our concierge team.
              </p>
            </div>
            <div className="space-y-6">
              <a className="flex items-center gap-4 group" href="tel:+919876543210">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                  <p className="text-lg font-semibold text-slate-900">+91 98765 43210</p>
                </div>
              </a>
              <a className="flex items-center gap-4 group" href="mailto:hello@luminawellness.in">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                  <p className="text-lg font-semibold text-slate-900">hello@luminawellness.in</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Hours of Serenity</p>
                  <div className="text-slate-900">
                    <p className="font-semibold">Mon - Fri: <span className="font-normal">9:00 AM - 8:00 PM</span></p>
                    <p className="font-semibold">Sat - Sun: <span className="font-normal">10:00 AM - 6:00 PM</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <MapPin className="text-primary size-6" /> Find Us
          </h3>
          <p className="text-slate-600">45, Lotus Plaza, MG Road, Bangalore, Karnataka 560001</p>
        </div>
        <div className="h-[450px] w-full relative">
          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale opacity-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKBCk1G0vmfROF_6CWii28vNbWXc5gLEekNs08NO1n3fvtjgY8TghIF069_ykwd7fdJ-g6oT2cvmTVNpaCLd_ZehfU3yZQdd2pXFz9aPZ7q6Rwknz3WTZQd0-_ZO3Vbe2VuJgfKoq5ju7hCesaSC_Ao8L-UiKb5_gJI64VVbD51E1SH8ffSZz24wGOIeCxgFo4CHIndYMNVU7PGE07zCwrO5XRlqunPtUoY_yBIs7ASoqWAGZJ59R_4m2Rp58W4E3WDujktxni_Q" 
              alt="Map"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border-2 border-primary">
                <div className="size-10 bg-primary text-white rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">spa</span>
                </div>
                <div>
                  <p className="font-bold">Lumina Wellness</p>
                  <p className="text-xs text-slate-500">Main Entrance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
