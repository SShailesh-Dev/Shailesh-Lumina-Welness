import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, Flower2 } from 'lucide-react';
import { db, collection, addDoc, serverTimestamp } from '../firebase';

const services = [
  { id: '1', name: 'Deep Tissue Massage', duration: '60 min', price: '₹2,499' },
  { id: '2', name: 'Signature Glow Facial', duration: '75 min', price: '₹3,200' },
  { id: '3', name: 'Aromatherapy Ritual', duration: '60 min', price: '₹1,850' },
  { id: '4', name: 'Hot Stone Therapy', duration: '90 min', price: '₹2,900' },
];

const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'];

export default function Booking() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [bookingData, setBookingData] = React.useState({
    service: null as any,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const nextStep = async () => {
    if (step === 4) {
      await handleConfirmBooking();
    } else {
      setStep(s => Math.min(s + 1, 5));
    }
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const isStepValid = () => {
    if (step === 1) return bookingData.service !== null;
    if (step === 2) return bookingData.date !== '' && bookingData.time !== '';
    if (step === 3) return bookingData.name !== '' && bookingData.email !== '' && bookingData.phone !== '';
    return true;
  };

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'bookings'), {
        serviceId: bookingData.service.id,
        serviceName: bookingData.service.name,
        price: bookingData.service.price,
        date: bookingData.date,
        time: bookingData.time,
        customerName: bookingData.name,
        customerEmail: bookingData.email,
        customerPhone: bookingData.phone,
        status: 'confirmed',
        createdAt: serverTimestamp(),
      });
      setStep(5);
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-black text-slate-900">Book Your Session</h1>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Step {step} of 5</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / 5) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-primary/5 overflow-hidden">
          <div className="grid lg:grid-cols-3">
            {/* Main Form Area */}
            <div className="lg:col-span-2 p-8 md:p-12 border-r border-slate-100">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Flower2 className="text-primary" /> Select a Service
                    </h2>
                    <div className="grid gap-4">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setBookingData({ ...bookingData, service: s })}
                          className={`p-6 rounded-2xl border-2 text-left transition-all ${
                            bookingData.service?.id === s.id 
                              ? 'border-primary bg-primary/5 shadow-md' 
                              : 'border-slate-100 hover:border-primary/30'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-bold text-lg">{s.name}</p>
                              <p className="text-sm text-slate-500">{s.duration}</p>
                            </div>
                            <p className="font-black text-primary">{s.price}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Calendar className="text-primary" /> Date & Time
                    </h2>
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Select Date</label>
                      <input 
                        type="date" 
                        className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none"
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        value={bookingData.date}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Available Slots</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setBookingData({ ...bookingData, time: t })}
                            className={`py-3 rounded-xl border-2 font-bold transition-all ${
                              bookingData.time === t 
                                ? 'border-primary bg-primary text-white shadow-lg' 
                                : 'border-slate-100 hover:border-primary/30 text-slate-600'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <User className="text-primary" /> Your Details
                    </h2>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Rahul Sharma"
                          className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none"
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          value={bookingData.name}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="rahul@example.com"
                          className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none"
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                          value={bookingData.email}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+91 98765 43210"
                          className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none"
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          value={bookingData.phone}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <CheckCircle2 className="text-primary" /> Review & Confirm
                    </h2>
                    <p className="text-slate-600">Please review your appointment details before confirming.</p>
                    
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Service</p>
                          <p className="font-bold text-slate-900">{bookingData.service?.name}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Price</p>
                          <p className="font-bold text-primary">{bookingData.service?.price}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Date</p>
                          <p className="font-bold text-slate-900">{bookingData.date}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Time</p>
                          <p className="font-bold text-slate-900">{bookingData.time}</p>
                        </div>
                        <div className="col-span-2 pt-2 border-t border-slate-200">
                          <p className="text-xs font-bold text-slate-400 uppercase">Customer Information</p>
                          <p className="font-bold text-slate-900">{bookingData.name}</p>
                          <p className="text-sm text-slate-600">{bookingData.email}</p>
                          <p className="text-sm text-slate-600">{bookingData.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <p className="text-sm text-slate-600 italic">
                        By clicking confirm, you agree to our terms and conditions. A confirmation email will be sent to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="size-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="size-12" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900">Appointment Confirmed!</h2>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-bold">{bookingData.name}</span>. Your {bookingData.service?.name} is scheduled for <span className="font-bold">{bookingData.date}</span> at <span className="font-bold">{bookingData.time}</span>.
                    </p>
                    <p className="text-sm text-slate-400">A confirmation email has been sent to {bookingData.email}.</p>
                    <button 
                      onClick={() => window.location.href = '/'}
                      className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                    >
                      Return Home
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {step < 5 && (
                <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
                  <button
                    onClick={prevStep}
                    disabled={step === 1 || isSubmitting}
                    className={`flex items-center gap-2 font-bold transition-all ${
                      step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900'
                    } disabled:opacity-50`}
                  >
                    <ChevronLeft className="size-5" /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!isStepValid() || isSubmitting}
                    className={`bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 ${
                      !isStepValid() || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : step === 4 ? 'Confirm Booking' : 'Continue'} <ChevronRight className="size-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Summary */}
            <div className="bg-slate-50 p-8 md:p-12 space-y-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Booking Summary</h3>
              <div className="space-y-6">
                {bookingData.service && (
                  <div className="flex gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Flower2 className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Service</p>
                      <p className="font-bold text-slate-900">{bookingData.service.name}</p>
                      <p className="text-sm text-primary font-bold">{bookingData.service.price}</p>
                    </div>
                  </div>
                )}
                {bookingData.date && (
                  <div className="flex gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Calendar className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Date & Time</p>
                      <p className="font-bold text-slate-900">{bookingData.date}</p>
                      <p className="text-sm text-slate-600">{bookingData.time || 'Select time'}</p>
                    </div>
                  </div>
                )}
                {bookingData.name && (
                  <div className="flex gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <User className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Customer</p>
                      <p className="font-bold text-slate-900">{bookingData.name}</p>
                      <p className="text-sm text-slate-600 truncate max-w-[150px]">{bookingData.email}</p>
                    </div>
                  </div>
                )}
                {!bookingData.service && !bookingData.date && !bookingData.name && (
                  <p className="text-sm text-slate-400 italic">No details selected yet.</p>
                )}
              </div>
              
              <div className="pt-8 border-t border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-slate-500 text-sm">Subtotal</p>
                  <p className="font-bold">{bookingData.service?.price || '₹0'}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-slate-500 text-sm">Tax (Included)</p>
                  <p className="font-bold">₹0</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <p className="text-slate-900 font-bold">Total</p>
                  <p className="text-2xl font-black text-primary">{bookingData.service?.price || '₹0'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
