import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-primary p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-white/20 rounded-2xl mb-6"
          >
            <Shield className="size-12" />
          </motion.div>
          <h1 className="text-4xl font-black mb-4">Privacy Policy</h1>
          <p className="text-white/80 font-medium">Last updated: March 18, 2026</p>
        </div>

        <div className="p-8 md:p-16 space-y-12 text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Eye className="text-primary size-6" /> 1. Information We Collect
            </h2>
            <p>
              At Lumina Wellness, we collect information to provide better services to all our clients. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification:</strong> Name, email address, phone number, and mailing address when you book an appointment or contact us.</li>
              <li><strong>Health Information:</strong> Relevant medical history and physical condition details provided during consultation to ensure safe and effective treatments.</li>
              <li><strong>Payment Information:</strong> Credit card details and billing information processed securely through our payment partners.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser types, and pages visited.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Lock className="text-primary size-6" /> 2. How We Use Your Information
            </h2>
            <p>
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and manage your bookings and appointments.</li>
              <li>To personalize your spa experience and tailor treatments to your needs.</li>
              <li>To communicate with you regarding your appointments, promotions, and updates.</li>
              <li>To improve our website functionality and customer service.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Shield className="text-primary size-6" /> 3. Data Protection
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <FileText className="text-primary size-6" /> 4. Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request the correction of inaccurate personal information.</li>
              <li>Request the deletion of your personal information, subject to legal requirements.</li>
              <li>Object to the processing of your personal information for marketing purposes.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p className="font-bold text-slate-900">Lumina Wellness Spa</p>
              <p>45, Lotus Plaza, MG Road, Bangalore, Karnataka 560001</p>
              <p>Email: privacy@lumina-wellness.in</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
