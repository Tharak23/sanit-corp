'use client';

import { Code, Server, Database, Cpu, GitBranch, Layers } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Full-Stack Development',
    description: 'We build modern web and mobile applications with responsive interfaces and secure backends using React, Next.js, Node.js, and more.',
    features: [
      'Custom web application development',
      'Mobile app development',
      'E-commerce solutions',
      'API development and integration',
      'UI/UX design and implementation'
    ]
  },
  {
    icon: <Server className="h-12 w-12 text-primary" />,
    title: 'DevOps & Infrastructure',
    description: 'We set up and manage cloud infrastructure, CI/CD pipelines, and automated deployments to ensure your systems run efficiently.',
    features: [
      'Cloud infrastructure setup (AWS, Azure, GCP)',
      'Docker and Kubernetes orchestration',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Monitoring and alerting systems',
      '24/7 infrastructure support'
    ]
  },
  {
    icon: <Cpu className="h-12 w-12 text-primary" />,
    title: 'AI Agents for Businesses',
    description: 'We develop custom AI solutions to automate workflows, enhance customer experiences, and unlock insights from your data.',
    features: [
      'Customer service chatbots',
      'AI-powered recommendation systems',
      'Natural language processing solutions',
      'Workflow automation with AI',
      'Custom AI agent development'
    ]
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: 'ML Model Integration',
    description: 'We implement and optimize machine learning models tailored to your specific business needs and data environment.',
    features: [
      'Custom ML model development',
      'Model training and optimization',
      'Data preprocessing pipelines',
      'Model deployment to production',
      'Continuous model improvement'
    ]
  },
  {
    icon: <GitBranch className="h-12 w-12 text-primary" />,
    title: 'CI/CD Pipeline Setup',
    description: 'We implement seamless continuous integration and deployment pipelines that ensure reliability, speed, and quality.',
    features: [
      'Automated testing frameworks',
      'Continuous integration setup',
      'Deployment automation',
      'Version control workflows',
      'Code quality gates'
    ]
  },
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: 'System Architecture & Design',
    description: 'We design scalable system architectures that grow with your business, ensuring performance, security, and maintainability.',
    features: [
      'Microservices architecture design',
      'Database schema optimization',
      'System scalability planning',
      'Security architecture review',
      'Legacy system modernization'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h1 
                className="text-4xl font-mono font-bold tracking-tight text-accent sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Everything Your Tech Stack Needs
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From idea to scale, we provide end-to-end software solutions tailored to your business needs.
              </motion.p>
            </div>
            
            <motion.div 
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="hover-lift flex flex-col bg-white rounded-2xl border border-grid shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="p-8 flex-grow">
                    <div className="flex items-center gap-x-4">
                      <div>{service.icon}</div>
                      <h3 className="text-xl font-mono font-bold text-accent">{service.title}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <div className="h-2 w-2 mt-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background-alt p-6 border-t border-grid">
                    <Button href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} variant="primary">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">
              Ready to Build Something Great?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {"Let's discuss how we can help you build systems that grow with your business."}
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button href="/contact" size="lg">
                Book a Free Consultation
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 