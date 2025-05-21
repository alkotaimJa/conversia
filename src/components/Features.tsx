import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Brain, Globe } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="card bg-primary-light p-6 flex flex-col items-start"
    >
      <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Natural Conversations',
      description: 'Our AI responds naturally to customer inquiries, understanding context and sentiment for meaningful interactions.'
    },
    {
      icon: <Brain size={24} />,
      title: 'Continuous Learning',
      description: 'Conversia learns from every interaction, constantly improving its responses and understanding of your business.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Multilingual Support',
      description: 'Engage with customers in their preferred language with our advanced translation capabilities.'
    }
  ];

  return (
    <section id="features" className="section bg-primary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful Features for <span className="text-accent">Better Conversations</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Transform how your business interacts with customers using our cutting-edge AI technology.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;