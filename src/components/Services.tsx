import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wind, Smile, Sun, Book, Leaf, Heart, Zap, Calendar, Droplet, Baby } from 'lucide-react';

const Services = ({ openBookingModal }) => {
  const services = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Kompletní dentální hygiena',
      price: '1 200 Kč',
      duration: 'cca 60 minut',
      description: 'Odstranění zubního kamene, plaku a pigmentací ultrazvukem a AirFlow + fluoridace pro ochranu skloviny.'
    },
    {
      id: 2,
      icon: Wind,
      title: 'AirFlow (pískování zubů)',
      price: '800 Kč',
      duration: 'cca 30 minut',
      description: 'Rychlé a šetrné odstranění povrchových pigmentací (zejména od kávy, čaje, kouření) s okamžitým efektem vyhlazených a bělejších zubů.'
    },
    {
      id: 3,
      icon: Smile,
      title: 'Bělení zubů – domácí sada',
      price: '3 500 Kč',
      duration: 'První návštěva (otisky, instruktáž): cca 30 minut',
      description: 'Vytvoření individuálních dlah a profesionální bělicí gel pro šetrné bělení doma.'
    },
    {
      id: 4,
      icon: Sun,
      title: 'Ordinační bělení zubů',
      price: '4 500 Kč',
      duration: 'cca 60–90 minut',
      description: 'Rychlé a bezpečné bělení zubů přímo v ordinaci za použití vysoce koncentrovaného bělicího gelu. Efekt je patrný okamžitě.'
    },
    {
      id: 5,
      icon: Book,
      title: 'Instruktáž správné ústní hygieny',
      price: '300 Kč',
      duration: 'cca 15–20 minut',
      description: 'Individuální ukázka techniky čištění zubů, výběr vhodných pomůcek (kartáček, mezizubní kartáčky, dentální nit atd.) a doporučení, jak o zuby nejlépe pečovat.'
    },
    {
      id: 6,
      icon: Leaf,
      title: 'Ošetření citlivých zubů',
      price: '500 Kč',
      duration: 'cca 20 minut',
      description: 'Aplikace speciálních materiálů (např. lak nebo gel) na citlivé zuby pro snížení citlivosti a ochranu skloviny.'
    },
    {
      id: 7,
      icon: Heart,
      title: 'Parodontologická péče',
      price: '1 500 Kč',
      duration: 'cca 60–90 minut',
      description: 'Hluboké čištění podél kořenů zubů a ošetření parodontálních chobotů pro prevenci i léčbu zánětů dásní a parodontu.'
    },
    {
      id: 8,
      icon: Zap,
      title: 'Antibakteriální ošetření ozonem',
      price: '600 Kč',
      duration: 'cca 15–20 minut',
      description: 'Lokální aplikace ozonu k dezinfekci dutiny ústní, účinně pomáhá při boji s bakteriemi a záněty.'
    },
    {
      id: 9,
      icon: Calendar,
      title: 'Kontrolní dentální hygiena',
      price: '900 Kč',
      duration: 'cca 30–45 minut',
      description: 'Pravidelná údržba hygieny zubů a dásní – odstranění nově vzniklého plaku či zubního kamene a zhodnocení, jak se daří udržovat výsledky z předchozích ošetření.'
    },
    {
      id: 10,
      icon: Droplet,
      title: 'Remineralizace skloviny',
      price: '700 Kč',
      duration: 'cca 20–30 minut',
      description: 'Aplikace gelů s obsahem minerálních látek (vápník, fosfát, fluor) pro posílení zubní skloviny a snížení citlivosti.'
    },
    {
      id: 11,
      icon: Baby,
      title: 'Dětská dentální hygiena',
      price: '800 Kč',
      duration: 'cca 30 minut',
      description: 'Šetrné odstranění plaku, motivace a edukace dětí ke správným návykům, naučení jednoduché a efektivní péče o zuby.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Naše služby a ceník
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <service.icon className="w-10 h-10 text-primary-gold mb-4 group-hover:text-primary-teal transition-colors duration-300" />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                <span className="text-lg font-bold text-primary-gold">{service.price}</span>
              </div>
              <p className="text-gray-600 mb-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
