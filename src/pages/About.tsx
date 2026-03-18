import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Wind, ArrowRight, History, Globe, Heart, Mail } from 'lucide-react';

export default function About() {
  return (
    <main className="flex-1">
      <section className="px-6 md:px-20 py-8 md:py-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden bg-slate-200 mb-12 shadow-xl group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-3cHvxryWnUCWN-JnzWkcA2745yGx7eIefzW3JW-gEUNIQ61ZMTi_RP2qykj5VvJPQlONxjjKGRtdXBhhKQQ0LuKq6wzVmfPdDr1AXd6_W20pugKAYhsqn16sCiu23wov8WFXpZh-wzBUzlIcHWG4ovk9t2y58vL4f0m8nb_ObbqtBk2JFu8xETfjHjAbUgahEHq9pE6SyEf87I4JTsSSyyF9rdJlDEXevAddvNA-FAQHNG5HXeMylpUGJZLrV0kllwn06HCohw')` 
            }}
          ></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-4">About Lumina Wellness</h1>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-xl mb-8">Where science meets serenity to restore your inner balance.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-center">Book Now</Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors text-center">Contact Us</Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <History className="size-4" /> Since 2010
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Our Story</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Lumina Wellness was founded on the belief that true beauty radiates from within. Our journey began over a decade ago with a simple mission: to provide a sanctuary where mindful healing and holistic tranquility coexist.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Over the last ten years, we have evolved into a premier destination for those seeking a reprieve from the modern world. We combine ancient healing traditions with modern scientific advancements to create personalized treatments that honor the uniqueness of every individual.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Founder"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUvs2l7PeE7MrqOOyHTRrzvBIYdn5GZwTRpqoN7W9NXJoabT4P0u8zwS8VDdJmWLVM5wnoEXFtAXlM687-K7vEIyLDCiGDREtRGqQpL1YI-BKgOkRtWu2aodl7j5oJZ-GnMBwUs8E5yfQGw7zb_36cpxUkJfVdgaGnWlTSaI0L2XYb6DHgAZrA7tzzl3d7xhzsxJp-GXo5M_lBOXxNv3vR_IFivrq0P3ieCW7CN-267FyMLFb3Co-GEWDPlV4Lf5gV07P_rJfT6g"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-primary/20 hidden lg:block">
              <p className="text-primary font-bold text-4xl">14+</p>
              <p className="text-slate-500 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Certified Therapists',
                desc: 'Our team consists of internationally certified professionals with deep expertise in various modalities.',
                icon: <ShieldCheck className="size-8" />
              },
              {
                title: 'Organic Products',
                desc: 'We exclusively use premium, eco-friendly, and sustainably sourced botanical products for all treatments.',
                icon: <Leaf className="size-8" />
              },
              {
                title: 'Serene Environment',
                desc: 'Our space is architecturally designed to promote immediate relaxation and sensory harmony.',
                icon: <Wind className="size-8" />
              }
            ].map((item, i) => (
              <div key={item.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Peaceful Workspace</h2>
            <p className="text-slate-500">Take a virtual tour of our facilities designed for your ultimate comfort and privacy.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            View all gallery <ArrowRight className="size-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-md">
            <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaMlkWpONKJrJkFscJaUVgdC53F6Bz8C8IS2swJQpSFfbGBLh4cdJmDrxxuKR0w5483-kHiVaXcDHHqiQBXP0oXH4FP1USEWSUp2FmPjfhkYL39uxrsDipQmA720GoPs_KoanoDqkxDnQtSUZIyMVFKXkEvMscORodTnDdQgGAgwQKNEwYqT7oGgL_hW_oxfmwruh16WE3LyO6gCwVhnD_mdChJxW04PkUCtEAApoO-HLxgMOpohsR3R23gs4oREfmdn5zdPLVqA" alt="Workspace 1" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsZ9ODn-kNuQm8-wN6OcMNfo2fY4gmNBp8JUZRb0RrfpnNxXsmYRkJRif96g1a-1zu3X7dnBIgOyoi4dArVjPPdZeEY12K0a_5mY4-543gth2seLJ2kHoG_lVzj_0eoi9BUjHOH95SPz7x9AnKnyxSZIJ_82uXWn7pumwfzP9zoP9HgZTCvX1Pj0ALxYmKTjvn9fV8LJOtj1ScyETZoR1eejH1hfAz0klTaUqGO7KWeHoEphUj3LXlshM2xPoq74NNSYOIqKt-pA" alt="Workspace 2" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUMG5y9u2_f9lcoHVn90wDRPjOJBioPHUuiicR9DQXoZob2dkjMTqSAlF4YrHSDL-nWxmKcG_zrY9Sgnh6VTTtS3BwKv06iAYFkso8TU6CZ24Rth3HYrDEcM06GwUvNSiz_0VMn5mpk8o7LpB57Rt2xaz-UvnUdOWzQYy0RX4hvBw8-IyW84mhC9lLXyh2VvjKXQIY5ykC6uhpe2NLrUB1grKM0brCoAMeN67pLFFy5RkyHml_ArHutpj5WrXmtq4j20pXl_4PQ" alt="Workspace 3" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden shadow-md h-48 md:h-64">
            <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoctgaV1WdBfyO7ucACgzxwUZJGhf7934XTN9HpMKqsqC2wx0UkwT3o49MICaV_1mVzvsU04j5adbG5MZS9SewZngZlY0CsQv55TOxti9Ql4XRRLZnq52YOSA7LvUN6EYa1XIsw9JYqeI9YHEOMbmhgELLAoiaayaBl8l_9Se3f6p4J3dDMD_WhQhhjlk1d3AEE1NS369w1ooGXYrD0PeEcHfPIxnAIpIB--AUAh4ArKB_tOa65_V5UIaPegys61I1C1DHffa5Og" alt="Workspace 4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your transformation?</h2>
            <p className="text-white/70 text-lg">Book your initial consultation and discover the Lumina difference.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/booking" className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-center">Book Now</Link>
            <Link to="/contact" className="border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-center">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
