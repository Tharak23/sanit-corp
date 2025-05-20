'use client';

import { Briefcase, Clock, MapPin, CreditCard, Award, Book, Coffee, Laptop } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const jobs = [
  {
    id: 1,
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '2+ years',
    description: "We're looking for a talented Frontend Engineer to join our team and build beautiful, responsive user interfaces. The ideal candidate has experience with React, TypeScript, and modern web technologies.",
    responsibilities: [
      'Develop and maintain responsive web applications using React/Next.js',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Write clean, maintainable, and well-tested code',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and contribute to our frontend architecture'
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent experience",
      '2+ years of professional experience with React',
      'Strong understanding of JavaScript/TypeScript',
      'Experience with CSS frameworks like Tailwind or Styled Components',
      'Knowledge of frontend performance optimization techniques',
      'Experience with version control systems like Git'
    ]
  },
  {
    id: 2,
    title: 'DevOps Specialist',
    department: 'Infrastructure',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '3+ years',
    description: "We're seeking an experienced DevOps Specialist to help build and maintain our cloud infrastructure and CI/CD pipelines. The ideal candidate has experience with AWS, Kubernetes, and infrastructure as code.",
    responsibilities: [
      'Design, implement, and maintain our cloud infrastructure',
      'Build and optimize CI/CD pipelines for continuous deployment',
      'Improve system reliability, performance, and security',
      'Monitor systems and implement automated alerting',
      'Collaborate with development teams to improve deployment processes',
      'Document infrastructure and create runbooks'
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent experience",
      '3+ years of experience in DevOps or Site Reliability Engineering',
      'Strong experience with AWS or other cloud platforms',
      'Experience with containers and Kubernetes',
      'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with monitoring tools and logging systems',
      'Strong scripting skills (Bash, Python)'
    ]
  },
  {
    id: 3,
    title: 'AI/ML Intern',
    department: 'AI Research',
    location: 'Hybrid (Bangalore)',
    type: 'Internship',
    experience: 'Student or Recent Graduate',
    description: "We're offering an exciting internship opportunity for students or recent graduates interested in Artificial Intelligence and Machine Learning. This role will provide hands-on experience working with real-world AI projects.",
    responsibilities: [
      'Assist in developing and training machine learning models',
      'Collaborate with senior data scientists on research projects',
      'Help with data collection, cleaning, and preprocessing',
      'Contribute to model evaluation and improvement',
      'Document research findings and implementation details'
    ],
    qualifications: [
      'Currently pursuing or recently completed degree in Computer Science, AI, or related field',
      'Strong understanding of machine learning fundamentals',
      'Basic experience with Python and ML libraries (TensorFlow, PyTorch)',
      'Good analytical and problem-solving skills',
      'Eager to learn and passionate about AI/ML technologies'
    ]
  }
];

const benefits = [
  {
    name: 'Remote-first culture',
    icon: <Laptop className="h-6 w-6 text-primary" />,
    description: 'Work from anywhere in India with flexible hours and occasional team meetups.'
  },
  {
    name: 'Competitive salary',
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    description: 'We offer market-competitive compensation and regular performance reviews.'
  },
  {
    name: 'Flexible working hours',
    icon: <Clock className="h-6 w-6 text-primary" />,
    description: 'Choose your work schedule that helps you maintain a healthy work-life balance.'
  },
  {
    name: 'Learning budget',
    icon: <Book className="h-6 w-6 text-primary" />,
    description: 'Annual budget for courses, conferences, books, and other learning resources.'
  },
  {
    name: 'Health insurance',
    icon: <Award className="h-6 w-6 text-primary" />,
    description: 'Comprehensive health coverage for you and your dependents.'
  },
  {
    name: 'Regular team retreats',
    icon: <Coffee className="h-6 w-6 text-primary" />,
    description: 'Quarterly team-building activities and annual company retreat.'
  }
];

const lifeAtCompany = [
  'https://placehold.co/600x400/e2e8f0/64748b?text=Team+Meeting',
  'https://placehold.co/600x400/e2e8f0/64748b?text=Office+Space',
  'https://placehold.co/600x400/e2e8f0/64748b?text=Team+Event',
  'https://placehold.co/600x400/e2e8f0/64748b?text=Workstation',
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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
                Join Our Team
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {"We're looking for passionate people to help us build the next generation of technology solutions."}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Life at Company Section */}
      <div className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Life at SAN IT</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {"We've built a culture where creativity, problem-solving, and innovation thrive."}
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {lifeAtCompany.map((image, index) => (
              <motion.div 
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <img src={image} alt={`Life at SAN IT ${index + 1}`} className="h-64 w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Perks & Benefits</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We take care of our team with competitive benefits and a supportive work environment.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="hover-lift bg-white rounded-lg border border-grid shadow-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{benefit.icon}</div>
                  <h3 className="text-lg font-mono font-bold text-accent">{benefit.name}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Open Roles Section */}
      <div className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Open Roles</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in building innovative technology solutions for businesses around the world.
            </p>
          </div>
          
          <div className="mt-16 space-y-8">
            {jobs.map((job) => (
              <motion.div 
                key={job.id} 
                className="hover-lift bg-white rounded-lg border border-grid shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-mono font-bold text-accent">{job.title}</h3>
                      <p className="mt-2 text-gray-600">{job.department}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="mr-1 h-4 w-4 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 ml-4">
                        <Briefcase className="mr-1 h-4 w-4 text-primary" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 ml-4">
                        <Clock className="mr-1 h-4 w-4 text-primary" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-mono font-semibold text-accent">Responsibilities</h4>
                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex gap-x-3">
                          <div className="h-2 w-2 mt-2 bg-primary rounded-full"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-mono font-semibold text-accent">Qualifications</h4>
                    <ul className="mt-4 space-y-2">
                      {job.qualifications.map((item, index) => (
                        <li key={index} className="flex gap-x-3">
                          <div className="h-2 w-2 mt-2 bg-primary rounded-full"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Button href={`/careers/${job.id}`} size="lg">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-mono font-bold text-accent">Don't see a role that fits?</h3>
            <p className="mt-4 text-gray-600">
              {"We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities."}
            </p>
            <div className="mt-6">
              <Button href="mailto:careers@sanit.com" variant="outline">
                Send us your resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 