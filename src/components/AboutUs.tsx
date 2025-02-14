import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Mgr. Jana Novotná',
    role: 'Dentální hygienistka',
    description: 'Jana je hlavní dentální hygienistka s více než 10 lety zkušeností v oboru. Specializuje se na odstranění zubního kamene, pískování a prevenci zánětlivých onemocnění dásní. Díky jejímu jemnému a šetrnému přístupu se i ti nejcitlivější pacienti cítí během ošetření komfortně.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Bc. Petr Svoboda',
    role: 'Specialista na bělení zubů',
    description: 'Petr se zaměřuje na estetickou dentální hygienu a profesionální bělení zubů. Vždy rád poradí, jak dosáhnout zářivého úsměvu bez poškození skloviny. Jeho pečlivost a smysl pro detail ocení každý, kdo touží po dokonalém úsměvu.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Veronika Dvořáková',
    role: 'Asistentka dentální hygieny',
    description: 'Veronika je nepostradatelnou součástí našeho týmu. Stará se o pohodlí pacientů, organizaci objednávek a ráda vám poradí s výběrem správných pomůcek pro domácí péči. Její vstřícný přístup a ochota pomoci vám zpříjemní každou návštěvu.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary-white mb-12"
        >
          Poznejte náš tým a naši misi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-primary-white/90 text-center max-w-3xl mx-auto mb-16"
        >
          Pomáháme vám udržet zdravý a krásný úsměv po celý život. S důrazem na prevenci, šetrnou péči a individuální přístup zajišťujeme, aby každá návštěva byla příjemná a bez stresu.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-primary-gold font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
