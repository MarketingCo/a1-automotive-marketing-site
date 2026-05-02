'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Truck, Warehouse, ShieldCheck, Activity } from 'lucide-react';

type Step = 1 | 2 | 3;

export default function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [state, handleSubmit] = useForm("xovjezno");
  const [selectedService, setSelectedService] = useState('');

  const nextStep = () => setStep((prev) => (prev + 1) as Step);
  const prevStep = () => setStep((prev) => (prev - 1) as Step);

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 text-center bg-black text-white border border-secondary/20"
      >
        <div className="w-20 h-20 bg-secondary text-black rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Brief Authenticated</h3>
        <p className="text-xs text-white/40 uppercase tracking-[0.2em] leading-relaxed">
          Logistics data received. Our regional operations team is reviewing your requirements. Expect a proposal within 4 business hours.
        </p>
      </motion.div>
    );
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-10 border-b border-black/10 pb-6">
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 w-10 transition-all duration-500 ${step >= i ? 'bg-secondary' : 'bg-black/5'}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Protocol Step 0{step}</span>
      </div>

      <form onSubmit={handleSubmit} className="min-h-[400px] flex flex-col justify-between text-left">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              <h4 className="text-2xl font-black uppercase tracking-tighter text-black">Select Primary Requirement</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'transport', name: 'Vehicle Transport', icon: <Truck size={24} /> },
                  { id: 'storage', name: 'Vehicle Storage', icon: <Warehouse size={24} /> },
                  { id: 'pdi', name: 'PDI & Defleet', icon: <ShieldCheck size={24} /> },
                  { id: 'custom', name: 'Bespoke Logistics', icon: <Activity size={24} /> },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => { setSelectedService(s.name); nextStep(); }}
                    className={`flex flex-col items-center gap-5 p-10 border-2 transition-all duration-300 group ${
                      selectedService === s.name ? 'border-secondary bg-secondary text-black' : 'border-black/5 bg-gray-50 hover:border-black/20 text-black'
                    }`}
                  >
                    <div className={`${selectedService === s.name ? 'text-black' : 'text-black/20 group-hover:text-black'} transition-colors`}>
                      {s.icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-center">{s.name}</span>
                    <input type="hidden" name="requirement" value={selectedService} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-10"
            >
              <h4 className="text-2xl font-black uppercase tracking-tighter text-black">Project Scale</h4>
              <div className="space-y-8">
                <div>
                  <label htmlFor="fleet" className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mb-3 block">Estimated Fleet Size / Units</label>
                  <input
                    id="fleet"
                    type="text"
                    name="fleet"
                    required
                    className="w-full bg-gray-50 border border-black/10 p-5 font-black text-black focus:border-secondary outline-none transition-all uppercase tracking-widest text-xs"
                    placeholder="e.g. 50+ Units per month, Single distribution..."
                  />
                </div>
                <div>
                  <label htmlFor="location" className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mb-3 block">Primary Route / Destination</label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    className="w-full bg-gray-50 border border-black/10 p-5 font-black text-black focus:border-secondary outline-none transition-all uppercase tracking-widest text-xs"
                    placeholder="e.g. Midlands to Scotland, National UK..."
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-6">
                <button type="button" onClick={prevStep} className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 hover:text-black transition-colors">← Return</button>
                <button type="button" onClick={nextStep} className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary hover:text-black transition-colors">Continue →</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              <h4 className="text-2xl font-black uppercase tracking-tighter text-black">Auth Verification</h4>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label htmlFor="name" className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mb-3 block">Contact Name / Operations Lead</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-gray-50 border border-black/10 p-5 font-black text-black focus:border-secondary outline-none transition-all uppercase tracking-widest text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mb-3 block">Corporate Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-gray-50 border border-black/10 p-5 font-black text-black focus:border-secondary outline-none transition-all uppercase tracking-widest text-xs"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] font-bold mt-2" />
                </div>
              </div>
              <div className="flex justify-between items-center pt-10">
                <button type="button" onClick={prevStep} className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 hover:text-black transition-colors">← Return</button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-black text-secondary px-14 py-6 font-black uppercase text-sm tracking-[0.3em] hover:bg-secondary hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center gap-4"
                >
                  {state.submitting ? 'Authenticating...' : 'Transmit Proposal Request'}
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
