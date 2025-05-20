'use client';

import { motion } from 'framer-motion';

export default function TrustLogos() {
  return (
    <div className="bg-background-alt">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-wider mb-8">
          Trusted by innovative companies
        </p>
        <motion.div 
          className="grid grid-cols-2 gap-8 md:grid-cols-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div 
              key={index} 
              className="col-span-1 flex justify-center md:col-span-1"
            >
              <div className="h-12 w-40 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-mono text-xs">
                COMPANY {index}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 