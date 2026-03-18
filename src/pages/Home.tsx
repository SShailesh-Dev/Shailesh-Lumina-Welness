import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, Smile, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full px-6 py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 z-10"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Holistic Sanctuary
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Rejuvenate Your <span className="text-primary">Body</span> and <span className="text-primary">Mind</span>
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl text-slate-600">
                Experience holistic wellness in the heart of the city. Our expert therapists are dedicated to your total relaxation and renewal.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                Book Now
              </Link>
              <a href="tel:+919876543210" className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary/5 transition-colors text-center">
                Call Now
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Spa interior"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz4dYm_niH04WYe7GGZO2gDcRkj9Ka4wwld1v4FoK0Vmk4-W38sVsZ9DG8jprWRHrvsI--LhbpNbpTl1A3jDyAHecv94LsseQIM8drpG5xluNTOhSanEIr0LJPG6KEOfbXpMxbwFP-DVWhnBG1cN5c7RVSNda-28D3VN-6njWqXC9vJ1d3GCfElzicJ312w5_dWOPOeRUGpa9lbqZf9C910bHXV8PzGN1GYU3UQV7bEmx7xzPDAUH7dCoWE44p61trtl4P2yqZLA"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-primary/5" id="services">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Curated Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Discover a range of treatments designed to restore balance and enhance your natural glow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Massage Therapy',
                desc: 'Deep tissue and relaxation strokes tailored to release tension and improve circulation.',
                icon: <Heart className="size-8" />,
              },
              {
                title: 'Facial Treatments',
                desc: 'Revitalizing skin care solutions using organic ingredients for a radiant, youthful complexion.',
                icon: <Smile className="size-8" />,
              },
              {
                title: 'Body Wraps',
                desc: 'Detoxifying organic body cocoons that nourish the skin and draw out impurities.',
                icon: <Flower2 className="size-8" />,
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/40 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link className="inline-flex items-center gap-2 text-primary font-bold hover:underline" to="/services">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24" id="about">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                alt="Spa Interior"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBXC-VPmWa3QQCd1EwWBOiRU_va0xiiRUEz96CDi-4oacFvxhDaExiVlv-8tvIk8N04otyy0w3biJOzJhU-smSqUQ9hq7MnELkgc4VIZXYYVioigdd3D96bdr7yNuc9FPxFSlAO-nJuYRhdcAlsqq-OvPRZViQMfE7U8pjSId2_Av5bOFK21wld8hEDIpbCOXhUV1y-Sp0f-2zdmvJaJ2kQG4KQ8ziix7xDM5_AOjb9fnivN0TaJ1j0urnNE_nCWFpp2g0TE72Kg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">A Sanctuary for Healing</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded on the principles of balance and tranquility, Lumina Wellness offers a personalized escape from the everyday hustle. Our mission is to provide a holistic environment where every guest can find their inner peace.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With over 15 years of excellence in therapeutic services, our certified practitioners combine ancient techniques with modern wellness science to deliver unparalleled results.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-slate-500 font-medium">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">12k+</p>
                  <p className="text-sm text-slate-500 font-medium">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden" id="testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-slate-600">Real stories of relaxation and transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ananya Iyer',
                role: 'Regular Client',
                text: "The best massage I've ever had. The atmosphere is so calming and the staff is incredibly professional. I felt like a new person walking out.",
                initials: 'AI',
              },
              {
                name: 'Vikram Malhotra',
                role: 'Monthly Member',
                text: "Lumina's facial treatments are revolutionary. My skin hasn't looked this radiant in years. They truly understand holistic skin care.",
                initials: 'VM',
              },
              {
                name: 'Priya Sharma',
                role: 'Business Traveler',
                text: "A true hidden gem in the city center. I come here for the body wraps every time I need a detox from my busy schedule.",
                initials: 'PS',
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary/5 p-8 rounded-xl space-y-4"
              >
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-primary" />)}
                </div>
                <p className="italic text-slate-700">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{t.initials}</div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden bg-primary rounded-xl px-8 py-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Start Your Wellness Journey Today</h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg">Your body deserves the best care. Book your appointment now and experience the Lumina difference.</p>
            <Link to="/booking" className="inline-block bg-white text-primary hover:bg-slate-50 transition-colors px-10 py-4 rounded-xl text-lg font-extrabold shadow-xl">
              Book My Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
