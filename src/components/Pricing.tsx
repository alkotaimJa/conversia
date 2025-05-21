import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText: string;
}

const PricingPlans: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: annual ? '$49' : '$59',
      description: 'Perfect for small businesses just getting started with AI.',
      features: [
        { name: '1,000 AI conversations/month', included: true },
        { name: 'Website chat widget', included: true },
        { name: 'Email integration', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Single language support', included: true },
        { name: 'Standard response time', included: true },
        { name: 'Advanced customization', included: false },
        { name: 'Priority support', included: false },
      ],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Business',
      price: annual ? '$149' : '$179',
      description: 'Ideal for growing businesses with increasing customer interactions.',
      features: [
        { name: '10,000 AI conversations/month', included: true },
        { name: 'Website chat widget', included: true },
        { name: 'Email & SMS integration', included: true },
        { name: 'Advanced analytics', included: true },
        { name: '5 language support', included: true },
        { name: 'Fast response time', included: true },
        { name: 'Advanced customization', included: true },
        { name: 'Priority support', included: false },
      ],
      highlighted: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex requirements and high volumes.',
      features: [
        { name: 'Unlimited AI conversations', included: true },
        { name: 'Full integration suite', included: true },
        { name: 'Email, SMS & voice', included: true },
        { name: 'Enterprise analytics', included: true },
        { name: 'Unlimited languages', included: true },
        { name: 'Ultra-fast response time', included: true },
        { name: 'Advanced customization', included: true },
        { name: '24/7 priority support', included: true },
      ],
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Simple, <span className="text-accent">Transparent</span> Pricing</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Choose the plan that works for your business. All plans include a 14-day free trial.
          </p>
          
          <div className="inline-flex items-center p-1 rounded-lg bg-gray-100 mb-8">
            <button 
              className={`px-6 py-2 rounded-md ${annual ? 'bg-white shadow-soft' : ''}`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-xs text-accent font-medium ml-1">Save 20%</span>
            </button>
            <button 
              className={`px-6 py-2 rounded-md ${!annual ? 'bg-white shadow-soft' : ''}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-xl p-1 ${plan.highlighted ? 'bg-gradient-to-r from-accent to-accent-dark' : ''}`}
            >
              <div className={`h-full rounded-lg p-6 flex flex-col ${plan.highlighted ? 'bg-white' : 'border border-gray-200'}`}>
                {plan.highlighted && (
                  <div className="bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 ml-2">/month</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className={`btn w-full ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;