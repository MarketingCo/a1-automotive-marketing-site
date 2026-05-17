"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "vehicle-transport-costs-uk",
    title: "Vehicle Transport Costs UK: What Manufacturers Pay in 2026",
    excerpt: "A complete breakdown of vehicle transport pricing across the UK and Ireland, including factors affecting costs, typical rates per mile, and how to negotiate better logistics contracts.",
    date: "May 10, 2026",
    author: "Operations Director",
    category: "Pricing",
    image: "https://images.unsplash.com/photo-1636500721005-775d09fae4b3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "pdi-services-explained",
    title: "PDI Services Explained: What Pre-Delivery Inspection Includes",
    excerpt: "Everything automotive manufacturers and dealers need to know about pre-delivery inspection processes, compliance requirements, and choosing a PDI partner.",
    date: "May 8, 2026",
    author: "Technical Manager",
    category: "Services",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop",
  },
  {
    slug: "secure-vehicle-storage-uk",
    title: "Secure Vehicle Storage UK: What to Look for in a Facility",
    excerpt: "Key security features, insurance requirements, and location considerations when choosing long-term or short-term vehicle storage for your fleet or inventory.",
    date: "May 5, 2026",
    author: "Facilities Manager",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "defleet-management-guide",
    title: "Defleet Management: End-of-Lease Vehicle Processing Guide",
    excerpt: "How fleet operators and leasing companies can streamline defleet processes, minimise end-of-contract charges, and maximise residual values.",
    date: "May 2, 2026",
    author: "Fleet Consultant",
    category: "Fleet",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "car-transport-scotland",
    title: "Car Transport Scotland: Edinburgh-Glasgow Distribution Hub Guide",
    excerpt: "Why central Scotland is the UK's premier vehicle logistics location, and how the Bathgate hub connects manufacturers to markets across Scotland, England, and Ireland.",
    date: "April 28, 2026",
    author: "Regional Director",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-secondary mb-6 block">
              Industry Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter">
              Logistics <span className="text-secondary italic">Insights.</span>
            </h1>
            <p className="text-xl text-black/40 font-semibold leading-relaxed">
              Expert guidance on vehicle transport, storage, PDI services, and fleet management from Scotland's leading automotive logistics provider.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-[#f9f9f9] overflow-hidden hover:bg-black transition-all duration-500"
            >
              <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-xs font-medium px-3 py-1.5">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-sm font-medium text-black/40 mb-4 group-hover:text-white/40 transition-colors">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-2" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-2" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-black/40 font-medium mb-8 line-clamp-3 leading-relaxed group-hover:text-white/40 transition-colors">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center text-sm font-medium text-secondary group-hover:text-secondary border-b-2 border-secondary pb-1 w-max"
                >
                  Read Article <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
