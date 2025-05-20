import HeroSection from '@/components/HeroSection';
import TrustLogos from '@/components/TrustLogos';
import Button from '@/components/Button';
import { Code, Server, Database, Cpu, GitBranch, Layers } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
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
    icon: <Server className="h-8 w-8 text-primary" />,
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
    icon: <Cpu className="h-8 w-8 text-primary" />,
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
    icon: <Database className="h-8 w-8 text-primary" />,
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
    icon: <GitBranch className="h-8 w-8 text-primary" />,
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
    icon: <Layers className="h-8 w-8 text-primary" />,
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

export default function Home() {
  return (
    <>
      <div className="absolute right-10 top-20 opacity-20 hidden lg:block">
        <Image src="/decoration.svg" width={100} height={100} alt="" />
      </div>
      <div className="absolute left-10 bottom-20 opacity-20 hidden lg:block">
        <Image src="/decoration.svg" width={100} height={100} alt="" style={{ transform: 'rotate(180deg)' }} />
      </div>
      <HeroSection />
      <TrustLogos />
      
      {/* Services Overview */}
      <section className="py-24 paper-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Everything Your Tech Stack Needs</h2>
            <p className="section-subtitle">
              {"From start to scale, we build systems that support your business at every stage of growth."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hand-drawn-box bg-white hover:bg-white flex flex-col">
                <div className="mb-4 animate-float text-primary-dark">{service.icon}</div>
                <h3 className="text-xl font-mono font-bold text-accent mb-2">{service.title}</h3>
                <p className="mt-2 text-gray-600 min-h-[60px]">{service.description}</p>
                <ul className="mt-4 mb-4 space-y-1 text-left">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <div className="h-2 w-2 mt-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} variant="primary" size="sm" icon="arrow-right">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button href="/services" size="lg" variant="hand-drawn">
              View All Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute left-10 top-10">
          <Image src="/paper-airplane.svg" alt="" width={50} height={50} className="opacity-20 transform rotate-45" />
        </div>
        <div className="absolute right-10 bottom-10">
          <Image src="/paper-airplane.svg" alt="" width={30} height={30} className="opacity-20 transform -rotate-45" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center p-10 bg-white rounded-lg hand-drawn-border">
            <h2 className="section-title">Ready to Transform Your Tech?</h2>
            <p className="mt-4 text-xl text-dark-gray">
              {"Let's discuss how we can help you build systems that grow with your business."}
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg" icon="paper-airplane">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
