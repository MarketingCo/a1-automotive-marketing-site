'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const partners = [
  { name: 'Alumise', url: 'https://www.alumise.co.uk', category: 'Glazing' },
  { name: 'South Edinburgh Joinery', url: 'https://www.south-edinburgh-joinery.co.uk', category: 'Joinery' },
  { name: 'Forge & Frame', url: 'https://www.steel-fabricator.co.uk', category: 'Steel' },
  { name: 'Enviroworx', url: 'https://www.enviroworx.co.uk', category: 'Groundworks' },
  { name: 'Edinburgh Concrete', url: 'https://www.edinburgh-concrete.co.uk', category: 'Concrete' },
  { name: 'Builders QS', url: 'https://www.builders-qs.co.uk', category: 'Surveying' },
];

export default function NetworkPartners() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-48 shrink-0">
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-1">Network Partners</p>
          <p className="text-xs text-gray-400">MarketingCo Ecosystem</p>
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * partners.length] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
            className="flex gap-8"
          >
            {[...partners, ...partners].map((partner, idx) => (
              <Link key={idx} href={partner.url} target="_blank" rel="partner" className="flex-shrink-0 group">
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-gray-200 hover:border-red-600/30 transition-all">
                  <span className="text-xs font-semibold text-gray-900 group-hover:text-red-600 whitespace-nowrap">{partner.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{partner.category}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
