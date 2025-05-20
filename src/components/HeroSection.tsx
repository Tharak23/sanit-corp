'use client';

import { Code, Server, Cpu } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden paper-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-accent mt-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Building digital solutions
            <br />
            <span className="highlight text-primary font-bold">
              that scale with your vision
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SAN IT is your trusted partner for full-stack development, AI integration, 
            and DevOps excellence. We build systems that grow with your business.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button href="/contact" size="lg" icon="paper-airplane">
              Start Your Tech Journey
            </Button>
            <Button href="/services" variant="hand-drawn" size="lg">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="card hand-drawn-box">
            <Code className="h-10 w-10 text-primary mb-4 animate-float" />
            <h3 className="text-xl font-mono font-bold text-accent">Full-Stack Development</h3>
            <p className="mt-2 text-dark-gray">Web and mobile applications built with modern stacks and best practices.</p>
            <div className="mt-4">
              <Button href="/services" variant="text" size="sm" icon="arrow-right">
                Learn more
              </Button>
            </div>
          </div>
          
          <div className="card hand-drawn-box">
            <Server className="h-10 w-10 text-primary mb-4 animate-float" />
            <h3 className="text-xl font-mono font-bold text-accent">DevOps & Infrastructure</h3>
            <p className="mt-2 text-dark-gray">Scalable cloud solutions with CI/CD pipelines and automated workflows.</p>
            <div className="mt-4">
              <Button href="/services" variant="text" size="sm" icon="arrow-right">
                Learn more
              </Button>
            </div>
          </div>
          
          <div className="card hand-drawn-box">
            <Cpu className="h-10 w-10 text-primary mb-4 animate-float" />
            <h3 className="text-xl font-mono font-bold text-accent">AI Integration</h3>
            <p className="mt-2 text-dark-gray">Custom AI agents and ML model integration tailored to your business needs.</p>
            <div className="mt-4">
              <Button href="/services" variant="text" size="sm" icon="arrow-right">
                Learn more
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 