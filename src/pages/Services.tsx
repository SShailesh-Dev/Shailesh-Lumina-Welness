import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Search, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Deep Tissue Massage',
    price: '₹2,499',
    desc: 'Intense pressure applied to release chronic muscle tension and target deep layers of muscle tissue and fascia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnc1vrL2ztNtRJahqbDLonSjT_wEFRiV7eoWHcvf8OZ64rcmhi-S4nNfcQqV158IKnckmhPQ2VgOT737NMyVMOgyPibiTJeHGLyv77f-XJYKthqGi3_TyupSSbivGvbw_DcwnhJ4i8H4rGKoJdukl85nV5HssSdVZ8sbPFiu3HbnCvfmXC_3fRWSeqr072Qq15iypeU-iRHPnz0zU56OTNVOx3cCMR2btRiT_pgfalQq5kOdbOSRFRtzmQ6jzPdD0Ao1Iu0m97Fw'
  },
  {
    title: 'Signature Glow Facial',
    price: '₹3,200',
    desc: 'A revitalizing multi-step treatment designed to hydrate, brighten, and leave your skin with a youthful radiance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM8CZyjibnvPnHV4g17RGQjVj58g4SIv6_FTbrgCt1Vp-CGeDXFqGD2t6yNHdQi86nQ5UAVQdYgZOdqRm1GJJI8VmdzZa45tsT624jHlUH96j9tdSy0Zj3oXHSegEf07OYb_3uJlPjf8JAcaK5SMUJmnFvuMmmTbOuTqVcolz0Yv9u5ftSdWRzWrMuCXQ8lfcH8e7mpRLDm8Mb-_kNwSWUhhfrHsa-3sUz6ZqCyE5Wz-Dq_oXQJG7hEEyOIIJDJ1NEbMpsDUAL2w'
  },
  {
    title: 'Aromatherapy Ritual',
    price: '₹1,850',
    desc: 'Custom-blended essential oils combined with light-to-medium pressure massage for ultimate mind-body relaxation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnncgaXFFRn0nPiToaq2YdcXetGOd89j9o8phK2Chus4GW2tFHN_z7Ee8Ci5X7Tcw8dZQZp7B_31OxmxNeki6ubx3_z79cmRCGqNf-aCLq0UQ48yNSiXxxYUxCKWB2E-mITbPcNu7PKLj7qGBujT7jdAN4-ujNy2PVgm3yATvozxnInTS7nYsysKGxZzLQ0LRU1LK4lwupYwhMBYYOkb8WhD9QZZ5tet1Z2zf3K7VyhljVmSEg7_1D-_qmQqJMOuTeUDSuVL1zwg'
  },
  {
    title: 'Hot Stone Therapy',
    price: '₹2,900',
    desc: "Smooth, heated basalt stones are used to melt away tension and balance your body's natural energy flow.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlIZi9p815NWdnOY08wquO2HsLujlYb9Esti9r_AXsECoSC4id6YRScRJ0aZNYdHAdrAzScXYudB_hr2CyrK_ulLFofhk0pH5h2n7MdwOydvDACrkCytvP7di5ccolHY2Suylqf45xvfXjDnWHC67ex25hpG8UQCPTCncx0mAGACCfvIA973rkugUMroeLiZXZJajCBMLAUNmXuIg-LRKpf8QWZkytO4UJS_grujI8571FKuZ05IRjjw3zU0Azz1Drcr_itCBWTA'
  },
  {
    title: 'Detox Body Wrap',
    price: '₹3,500',
    desc: "Mineral-rich sea mud and herbal infusions wrapped to draw out impurities and firm your skin's texture.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdEbQRt0l_HJO-wGo5YTnnldodfTKqBDpX_pe1Y6agKsHcvU9HZl7ytHaXeBrETvwH9dUZ82ahGeyIpBou7RYZw3TMCBgr8xeGD9IkcQvFZzOa7eZ6IR2GJ8Dxw1FARfvtV-8_obemCY-KVmjBGVHm1cJkYQnsjuneKjsdEz9WhMrRLeGh7xNrF9gHX0pcmyD8ZwKfBxXJc8xq7SgjVQ42S71IsoExJeoMw-tAXbxU3G3gISoHN0PkBro1Se27uXdnqRtTqqBTTg'
  },
  {
    title: 'Zen Reflexology',
    price: '₹1,500',
    desc: 'Targeted pressure point therapy on the feet to promote healing and stress relief throughout the entire body.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIbjn05-ugYQFYrk9HS56DD_BuLhhtFPYosajc0ByiVFYiD5begPjRvQrbNX3dXAnhrsC_DpTli-jMOQX3eXVI8kvQxhjP85QsXl6O8JXz6PHVe4TXDlhbnSqPYviAl2Tx1oSIY3BSqUgaTlzLWYN7fqWcGQYrqmew68MBGaT8zrRox4VeQaG8mGXeKoRbh_qeYMsf4JHBzs6DQpc7q_S2nXv_vDu2IMqxr2zPQa4qbF1vnrAH2FMC1ju1-Qg5FhuumakUlM-F8w'
  }
];

export default function Services() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 leading-relaxed"
        >
          Rejuvenate your mind, body, and spirit with our carefully curated selection of wellness treatments. From deep therapeutic massages to refreshing skin rituals.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <span className="text-primary font-bold">From {service.price}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                {service.desc}
              </p>
              <Link
                to="/booking"
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
              >
                Book Now <Calendar className="size-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
        <h2 className="text-3xl font-black mb-4">Not sure what to choose?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
          Our wellness consultants are here to help you design the perfect experience tailored to your specific needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+919876543210" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
            <Phone className="size-5" /> Call Us Now
          </a>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:shadow-md transition-all border border-slate-200">
            View Packages
          </button>
        </div>
      </div>
    </main>
  );
}
