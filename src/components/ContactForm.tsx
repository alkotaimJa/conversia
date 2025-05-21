import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jwahralqtym@gmail.com?subject=Conversia Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-primary-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Ready to transform your customer experience with AI? Let's talk about your needs.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your company"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Tell us about your needs..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn bg-accent hover:bg-accent-dark text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;