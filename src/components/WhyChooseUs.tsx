import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, Users, Calendar } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Špičková technologie',
    description: 'Nejmodernější přístroje pro dokonalou péči. Precizní odstranění zubního kamene a pigmentací bez poškození skloviny.'
  },
  {
    icon: Smile,
    title: 'Bezbolestná ošetření',
    description: 'Používáme šetrné metody a moderní přístroje, díky kterým je ošetření téměř bezbolestné.'
  },
  {
    icon: Users,
    title: 'Individuální přístup',
    description: 'Každému pacientovi přizpůsobujeme péči na míru jeho potřebám a doporučíme ideální ústní hygienu.'
  },
  {
    icon: Calendar,
    title: 'Rychlá a snadná rezervace',
    description: 'Stačí zavolat nebo napsat. Nabízíme flexibilní termíny a krátké objednací lhůty.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Proč si vybrat právě nás?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <feature.icon className="w-12 h-12 text-primary-gold mb-4 group-hover:text-primary-teal transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
