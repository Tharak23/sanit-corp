'use client';

import { Code, Server, Database, GitBranch, Laptop, Layers } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Shyam Kumar',
    role: 'Founder & CEO',
    image: 'https://placehold.co/400x400/e2e8f0/64748b?text=S',
    bio: 'Full-stack developer with 10+ years of experience. Previously led engineering teams at major tech companies.',
  },
  {
    name: 'Antiha N',
    role: 'CTO',
    image: 'https://placehold.co/400x400/e2e8f0/64748b?text=A',
    bio: 'Machine learning expert with a background in system architecture and cloud infrastructure.',
  },
  {
    name: 'Nagaveti',
    role: 'Lead DevOps Engineer',
    image: 'https://placehold.co/400x400/e2e8f0/64748b?text=N',
    bio: 'Infrastructure specialist with deep expertise in AWS, Kubernetes, and CI/CD pipelines.',
  },
];

const technologies = [
  { name: 'Frontend', icon: <Laptop className="h-6 w-6 text-primary" />, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: <Server className="h-6 w-6 text-primary" />, items: ['Node.js', 'Python', 'Java', 'Go'] },
  { name: 'Database', icon: <Database className="h-6 w-6 text-primary" />, items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
  { name: 'DevOps', icon: <GitBranch className="h-6 w-6 text-primary" />, items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
  { name: 'AI/ML', icon: <Layers className="h-6 w-6 text-primary" />, items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Langchain'] },
  { name: 'Tools', icon: <Code className="h-6 w-6 text-primary" />, items: ['Git', 'GitHub Actions', 'Jest', 'Cypress'] },
];

const values = [
  {
    name: 'Scalability',
    description: 'We build systems that grow with your business, from startup to enterprise scale.',
  },
  {
    name: 'Transparency',
    description: 'Clear communication and honest feedback are central to our working relationships.',
  },
  {
    name: 'Innovation',
    description: 'We stay at the cutting edge of technology to deliver the best solutions.',
  },
  {
    name: 'Quality',
    description: 'We believe in doing things right the first time with a focus on maintainable code.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Founded SAN IT',
    description: 'Started as a small consultancy focused on helping startups build their MVPs.',
  },
  {
    year: '2021',
    title: 'Expanded Services',
    description: 'Added DevOps and cloud infrastructure services to our portfolio.',
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Began offering AI and ML integration services for businesses.',
  },
  {
    year: '2023',
    title: 'Enterprise Clients',
    description: 'Expanded to serve enterprise clients with complex infrastructure needs.',
  },
  {
    year: '2024',
    title: 'Team Growth',
    description: 'Grew our team to 15+ engineers specializing in various technologies.',
  },
];

export default function AboutPage() {
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
                The Team Behind SAN IT
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {"We don't just build apps. We build the systems behind successful startups."}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To empower businesses with scalable, maintainable technology solutions that drive growth and innovation. 
              We believe in building systems right the first time, focusing on quality, security, and performance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Passionate technologists dedicated to solving complex problems.
            </p>
          </div>
          
          <motion.ul 
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
          >
            {team.map((person, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                <img className="aspect-square w-full rounded-2xl object-cover" src={person.image} alt={person.name} />
                <h3 className="mt-6 text-lg font-mono font-bold leading-8 tracking-tight text-accent">{person.name}</h3>
                <p className="text-base leading-7 text-primary">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core principles guide how we work and the decisions we make.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="hover-lift bg-white p-8 rounded-lg border border-grid shadow-sm">
                  <dt className="text-xl font-mono font-bold leading-7 text-accent">
                    {value.name}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      {/* Technologies Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Tech Stack We Love</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use modern, battle-tested technologies that ensure performance, security, and scalability.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {technologies.map((category, index) => (
                <div key={index} className="hover-lift bg-white p-8 rounded-lg border border-grid shadow-sm">
                  <dt className="flex items-center text-xl font-mono font-bold leading-7 text-accent">
                    <div className="mr-3">{category.icon}</div>
                    {category.name}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="bg-background-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Our Journey</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Key milestones in our growth story.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Timeline events */}
              <div className="relative space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Year dot */}
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs text-white font-medium">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-mono font-bold text-accent">{event.title}</h3>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-mono font-bold tracking-tight text-accent">Join Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're always looking for talented individuals who share our values and passion for technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/careers" size="lg">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 