import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent bg-opacity-10 rounded-full text-accent mb-6">
              <Sparkles size={16} className="mr-2" /> AI-Powered Conversations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Transform Customer <span className="text-accent">Interactions</span> with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Conversia helps businesses engage customers with intelligent, human-like conversations that drive results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="#contact" className="btn bg-accent hover:bg-accent-dark text-white">
                Get Started <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary-light/10 rounded-xl"></div>
              <div className="relative p-6 rounded-xl bg-primary-light/90 backdrop-blur-sm shadow-medium">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                    <MessageSquare size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-3">
                      <div className="bg-primary p-3 rounded-lg rounded-tl-none">
                        <p className="text-gray-200">How can AI improve our customer support?</p>
                      </div>
                      <div className="bg-accent/10 p-3 rounded-lg rounded-tr-none">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-2">
                            <Brain size={14} className="text-white" />
                          </div>
                          <span className="font-medium text-accent">Conversia AI</span>
                        </div>
                        <p className="text-gray-200">Our AI handles routine inquiries 24/7, providing instant responses while your team focuses on complex cases. This improves response times and customer satisfaction.</p>
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

export default Hero;