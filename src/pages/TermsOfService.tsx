import React from 'react';
import { motion } from 'motion/react';
import { Scale, Gavel, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-6"
          >
            <Scale className="size-12" />
          </motion.div>
          <h1 className="text-4xl font-black mb-4">Terms of Service</h1>
          <p className="text-white/60 font-medium">Last updated: March 18, 2026</p>
        </div>

        <div className="p-8 md:p-16 space-y-12 text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Gavel className="text-primary size-6" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the services provided by Lumina Wellness Spa, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <AlertCircle className="text-primary size-6" /> 2. Appointment & Cancellation Policy
            </h2>
            <p>
              To ensure the best experience for all our clients, we have established the following policies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Arrival:</strong> Please arrive at least 15 minutes before your scheduled appointment time.</li>
              <li><strong>Cancellations:</strong> We require at least 24 hours' notice for any cancellations or rescheduling.</li>
              <li><strong>Late Arrivals:</strong> Late arrivals may result in a shortened treatment time to avoid delaying the next client.</li>
              <li><strong>No-Shows:</strong> Failure to show up for an appointment without notice may result in a charge of the full service fee.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <CheckCircle className="text-primary size-6" /> 3. Health & Safety
            </h2>
            <p>
              Clients are responsible for disclosing any health conditions, allergies, or injuries that may affect their treatment. Lumina Wellness reserves the right to refuse service if a treatment is deemed unsafe for the client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Scale className="text-primary size-6" /> 4. Limitation of Liability
            </h2>
            <p>
              Lumina Wellness Spa shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services or website. We are not responsible for lost or stolen personal items within the spa premises.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p className="font-bold text-slate-900">Lumina Wellness Spa</p>
              <p>45, Lotus Plaza, MG Road, Bangalore, Karnataka 560001</p>
              <p>Email: legal@lumina-wellness.in</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
