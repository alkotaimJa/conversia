import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, avatar, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl shadow-medium p-6 relative"
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
        <Quote size={18} />
      </div>
      
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6">{quote}</p>
      
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      quote: "Conversia has transformed our customer service. Response times dropped from hours to seconds, and customer satisfaction is up 40%. The AI handles routine inquiries brilliantly.",
      author: "Sarah Johnson",
      position: "Director of Customer Experience",
      company: "TechGrowth Inc.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Implementing Conversia was the best decision for our e-commerce business. Our conversion rate increased by 28% with 24/7 support for customer questions about products.",
      author: "Michael Reeves",
      position: "E-commerce Manager",
      company: "StyleHub",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "As a small business owner, Conversia has been a game-changer. It's like having a customer service team that works around the clock without the overhead costs.",
      author: "Elena Diaz",
      position: "Founder",
      company: "Artisan Crafts",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="testimonials" className="section gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Trusted by <span className="text-accent">Leading Businesses</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            See how Conversia is helping businesses of all sizes transform their customer interactions and drive tangible results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              avatar={testimonial.avatar}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Acme Corp', 'TechGrowth', 'GlobalMedia', 'StyleHub', 'InnovateCo'].map((company, index) => (
              <div key={index} className="text-gray-500 font-semibold text-xl">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;