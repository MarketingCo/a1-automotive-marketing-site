'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
const partners = [
  { name: 'A1 Automotive Marketing', url: 'https://www.a1automotivemarketing.com', category: 'Marketing' },
  { name: 'Aiden Moffat Racing', url: 'https://www.aidenmoffatracing.com', category: 'Racing' },
  { name: 'Marketing Expert', url: 'https://www.marketing-expert.com', category: 'Consulting' },
  { name: 'Balloon Creative', url: 'https://www.ballooncreative.co.uk', category: 'Creative' },
];
export default function NetworkPartners() {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-40 shrink-0">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-1">Network</p>
            <p className="text-xs text-slate-400">Partner brands</p>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div animate={{ x: [0, -50 * partners.length] }} transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }} className="flex gap-6">
              {[...partners, ...partners, ...partners].map((partner, idx) => (
                <Link key={`${partner.name}-${idx}`} href={partner.url} target="_blank" rel="partner noopener noreferrer" className="flex-shrink-0 group">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-slate-200 hover:border-blue-500/30 hover:shadow-md transition-all duration-300">
                    <span className="text-xs font-medium text-slate-700 group-hover:text-blue-600 transition-colors whitespace-nowrap">{partner.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{partner.category}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
