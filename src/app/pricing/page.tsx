'use client';

import { Check, X } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Free Consultation',
    id: 'free',
    price: '₹0',
    description: 'Perfect for exploring your tech needs and learning how we can help.',
    features: [
      '45-minute strategy call',
      'Basic technical assessment',
      'Project scoping document',
      'No obligation to proceed',
    ],
    notIncluded: [
      'Implementation work',
      'Dedicated manager',
      'Priority support',
      'Ongoing maintenance',
    ],
    cta: 'Book a Call',
    ctaLink: '/contact',
    popular: false,
  },
  {
    name: 'Startup Plan',
    id: 'startup',
    price: '₹15,000',
    period: '/month',
    description: 'Ideal for startups and small businesses needing technical expertise.',
    features: [
      'Up to 40 development hours',
      'CI/CD pipeline setup',
      'Cloud infrastructure management',
      'Weekly progress meetings',
      'Email support (24h response)',
      'Monthly code quality review',
    ],
    notIncluded: [
      'Dedicated project manager',
      '24/7 emergency support',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    popular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: 'Custom',
    description: 'For organizations with complex needs requiring comprehensive technical partnership.',
    features: [
      'Full-time dedicated team',
      'Custom scope and deliverables',
      'Technical consulting services',
      'System architecture design',
      'Dedicated project manager',
      'Priority support (8h response)',
      '24/7 emergency support',
      'Monthly executive briefings',
    ],
    notIncluded: [],
    cta: 'Contact Us',
    ctaLink: '/contact',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            className="mt-2 text-4xl font-mono font-bold tracking-tight text-accent sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Plans That Scale With You
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your business needs. All plans include access to our technical expertise.
          </motion.p>
        </div>
        
        <motion.div 
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`hover-lift rounded-2xl ring-1 ring-gray-200 ${tier.popular ? 'bg-primary/5 shadow-md' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            >
              <div className="p-8">
                {tier.popular && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-mono font-bold text-accent">{tier.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-accent">{tier.price}</span>
                  {tier.period && <span className="text-sm font-medium text-gray-500">{tier.period}</span>}
                </div>
                
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {tier.notIncluded.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-500">Not included:</h4>
                    <ul className="mt-2 space-y-3 text-sm leading-6 text-gray-500">
                      {tier.notIncluded.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <X className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-8">
                  <Button 
                    href={tier.ctaLink} 
                    variant={tier.popular ? 'primary' : 'outline'} 
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mx-auto max-w-2xl mt-24 rounded-2xl bg-primary/10 p-8 md:p-12">
          <h2 className="text-2xl font-mono font-bold text-accent">Need a custom solution?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We understand every business has unique needs. Contact us for a tailored solution that perfectly fits your requirements.
          </p>
          <div className="mt-6">
            <Button href="/contact">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 