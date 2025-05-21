import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Zap, Users, BarChart3 } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isInView: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isInView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
      className="flex items-start gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <div className="mb-2 flex items-center">
          <div className="w-10 h-10 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center text-accent mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      title: 'Setup Your Account',
      description: 'Create your Conversia account and configure your business profile with your brand voice and specific use cases.',
      icon: <Settings size={20} />
    },
    {
      title: 'Connect Your Channels',
      description: 'Integrate Conversia with your website, messaging apps, and social media platforms in minutes with our simple connectors.',
      icon: <Zap size={20} />
    },
    {
      title: 'Train & Customize',
      description: 'Customize responses for your industry and upload your FAQs to quickly train Conversia on your specific business needs.',
      icon: <Users size={20} />
    },
    {
      title: 'Monitor & Optimize',
      description: 'Track performance, review conversation analytics, and continuously improve responses based on real customer interactions.',
      icon: <BarChart3 size={20} />
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-accent bg-opacity-10 rounded-full text-accent mb-6">
                <Zap size={16} className="mr-2" /> Simple Implementation
              </div>
              <h2 className="mb-6">Get Started in <span className="text-accent">Minutes</span>, Not Months</h2>
              <p className="text-gray-600 mb-12">
                Implementing Conversia is quick and straightforward, with no complex integrations or technical expertise required. Our step-by-step process ensures you're up and running fast.
              </p>
            </motion.div>
            
            <div ref={ref} className="space-y-12">
              {steps.map((step, index) => (
                <Step 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isInView={inView}
                />
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -z-10 w-full h-full bg-gray-100 rounded-xl rotate-3 translate-x-6"></div>
              <div className="absolute -z-10 w-full h-full bg-accent/10 rounded-xl -rotate-3 -translate-x-6"></div>
              
              <div className="relative bg-white p-8 rounded-xl shadow-medium border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Conversia dashboard" 
                  className="w-full rounded-lg shadow-sm mb-6" 
                />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Implementation Progress</h4>
                    <span className="text-accent font-semibold">85%</span>
                  </div>
                  
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-[85%] bg-accent rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Account Setup</p>
                      <div className="w-6 h-6 mx-auto rounded-full bg-success flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Integration</p>
                      <div className="w-6 h-6 mx-auto rounded-full bg-success flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Training</p>
                      <div className="w-6 h-6 mx-auto rounded-full bg-accent/30 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;