import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-primary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full text-white mb-6">
            <Zap size={16} className="mr-2" /> Start your 14-day free trial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your <span className="text-accent">Customer Conversations</span>?
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-80 mb-10 max-w-3xl mx-auto">
            Join thousands of businesses already using Conversia to provide exceptional customer experiences through AI-powered conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-primary">
              Get Started <ArrowRight size={16} className="ml-2" />
            </button>
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Schedule a Demo
            </button>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-8 text-white text-opacity-80">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current text-accent" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5.414l-3.293-3.293-1.414 1.414L11 17.414l6.707-6.707-1.414-1.414L11 14.586z"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current text-accent" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5.414l-3.293-3.293-1.414 1.414L11 17.414l6.707-6.707-1.414-1.414L11 14.586z"/>
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current text-accent" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5.414l-3.293-3.293-1.414 1.414L11 17.414l6.707-6.707-1.414-1.414L11 14.586z"/>
              </svg>
              <span>Full-featured trial</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;