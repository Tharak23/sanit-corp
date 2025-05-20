'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'startup', name: 'Startup MVPs' },
  { id: 'enterprise', name: 'Enterprise Overhauls' },
  { id: 'ai', name: 'AI Solutions' },
  { id: 'devops', name: 'DevOps / Infra' },
];

const projects = [
  {
    id: 1,
    title: 'MediTrack Health Platform',
    category: 'startup',
    description: 'A patient monitoring system for healthcare providers with real-time analytics.',
    impact: 'Reduced patient data processing time by 70%',
    image: 'https://placehold.co/600x400/e2e8f0/64748b?text=MediTrack',
    stack: ['React', 'Node.js', 'MongoDB', 'AWS'],
    quote: {
      text: 'SAN IT built a system that transformed how we track patient data. The implementation was flawless.',
      author: 'Dr. Sharma, CTO at MediTrack'
    }
  },
  {
    id: 2,
    title: 'Logistics Management System',
    category: 'enterprise',
    description: 'End-to-end logistics platform for a Fortune 500 retail company.',
    impact: 'Improved delivery time accuracy by 40%',
    image: 'https://placehold.co/600x400/e2e8f0/64748b?text=LogiSmart',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes'],
    quote: {
      text: 'The new system has revolutionized our logistics operations, providing visibility we never had before.',
      author: 'Raj Mehta, Logistics Director'
    }
  },
  {
    id: 3,
    title: 'AI-Powered Customer Service',
    category: 'ai',
    description: 'Intelligent chatbot system that understands context and sentiment for personalized support.',
    impact: 'Handled 65% of inquiries without human intervention',
    image: 'https://placehold.co/600x400/e2e8f0/64748b?text=SupportAI',
    stack: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    quote: {
      text: 'The AI solution from SAN IT has transformed our customer service efficiency while maintaining high satisfaction.',
      author: 'Priya Singh, Customer Success Lead'
    }
  },
  {
    id: 4,
    title: 'DevOps Transformation',
    category: 'devops',
    description: 'Complete CI/CD pipeline overhaul for a financial services provider.',
    impact: 'Deployment frequency increased by 300%',
    image: 'https://placehold.co/600x400/e2e8f0/64748b?text=FinTech',
    stack: ['AWS', 'Terraform', 'Docker', 'Jenkins'],
    quote: {
      text: 'Our deployment process went from days to minutes. The ROI was evident within the first month.',
      author: 'Vijay Kumar, CIO'
    }
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    category: 'startup',
    description: 'A feature-rich online marketplace for artisanal products with inventory management.',
    impact: 'Platform handles 10,000+ daily visitors',
    image: 'https://placehold.co/600x400/e2e8f0/64748b?text=ArtisanMart',
    stack: ['Next.js', 'GraphQL', 'MongoDB', 'Stripe'],
    quote: {
      text: 'SAN IT delivered a platform that exceeded our expectations and scales beautifully with our growth.',
      author: 'Ananya Das, Founder'
    }
  },
  {
    id: 6,
    title: 'Predictive Maintenance System',
    category: 'ai',
    description: 'ML-powered system to predict equipment failures before they happen for a manufacturing company.',
    impact: 'Reduced unexpected downtime by 56%',
    image: 'https://placehold.co/600x400/e2e8f0/64748b?text=PredictMaint',
    stack: ['Python', 'PyTorch', 'IoT Sensors', 'Azure'],
    quote: {
      text: 'The predictive maintenance solution has saved us millions in prevented failures and optimized maintenance.',
      author: 'Ravi Desai, Plant Manager'
    }
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            className="text-4xl font-mono font-bold tracking-tight text-accent sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {"What We've Built"}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our portfolio of successful projects across various industries and technologies.
          </motion.p>
        </div>
        
        <div className="mt-10 flex justify-center">
          <motion.div 
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid gap-12 sm:grid-cols-1 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="hover-lift flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 sm:h-64 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                  {categories.find(cat => cat.id === project.category)?.name}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-mono font-bold text-accent mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="bg-primary/10 px-4 py-3 rounded-lg mb-4">
                    <h4 className="text-sm font-mono font-semibold text-primary mb-1">Impact:</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-mono font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.quote && (
                    <div className="border-l-2 border-primary pl-4 mt-6 italic text-gray-600">
                      <p className="text-sm">"{project.quote.text}"</p>
                      <p className="text-xs font-medium mt-2 text-gray-500">— {project.quote.author}</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Button 
                    href={`/portfolio/${project.id}`} 
                    variant="text" 
                    className="inline-flex items-center text-accent font-medium"
                  >
                    View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600">No projects found in this category.</p>
          </div>
        )}
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-mono font-bold text-accent">Ready to Build Something Amazing?</h2>
          <p className="mt-6 text-lg text-gray-600">
            Let's discuss how we can help you create the next success story in our portfolio.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 