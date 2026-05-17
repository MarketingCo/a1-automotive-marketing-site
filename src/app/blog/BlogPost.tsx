"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    author: string;
    category: string;
    image: string;
    content: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-black/40 hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-secondary text-white text-xs font-medium px-3 py-1.5">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm font-medium text-black/40">
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-2" /> {post.date}
            </span>
            <span className="flex items-center">
              <User className="w-3 h-3 mr-2" /> {post.author}
            </span>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-black/10"
        >
          <div className="bg-[#f9f9f9] p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
              Need Vehicle Logistics Support?
            </h3>
            <p className="text-black/40 font-medium mb-8">
              A1 Automotive provides transport, storage, PDI, and defleet services from our central Scotland hub. Contact our team to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white text-sm font-medium px-8 py-4 hover:bg-secondary transition-colors"
            >
              Request a Proposal
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
