import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Jak často bych měl/a chodit na dentální hygienu?',
    answer: 'Doporučujeme návštěvu alespoň jednou za 6 měsíců. Pokud máte sklony k tvorbě zubního kamene nebo problémy s dásněmi, může být potřeba častější péče.'
  },
  {
    question: 'Je dentální hygiena bolestivá?',
    answer: 'Ošetření je bezbolestné, ale u citlivějších zubů můžete cítit mírné nepohodlí. Používáme šetrné metody a v případě potřeby můžeme aplikovat znecitlivující gel.'
  },
  {
    question: 'Mohu na dentální hygienu i s rovnátky?',
    answer: 'Ano! Pravidelná dentální hygiena je při nošení rovnátek ještě důležitější, protože se kolem zámečků snadno usazuje plak a zubní kámen.'
  },
  {
    question: 'Mohu po dentální hygieně jíst a pít?',
    answer: 'Po ošetření doporučujeme 30–60 minut nejíst a nepít nic kromě vody. Pokud jste podstoupili bělení nebo pískování, vyhněte se minimálně 24 hodin barevným potravinám (káva, čaj, červené víno, kari apod.).'
  },
  {
    question: 'Proč se mi i po čištění zubů stále tvoří zubní kámen?',
    answer: 'Tvorba zubního kamene závisí na genetice, stravě a správné technice čištění. Pokud se vám kámen tvoří často, doporučíme vám vhodné pomůcky a úpravu péče o chrup.'
  },
  {
    question: 'Je bělení zubů bezpečné?',
    answer: 'Ano, pokud je prováděno odborně. Nabízíme šetrné metody bělení, které nepoškozují sklovinu a zajišťují dlouhotrvající efekt.'
  },
  {
    question: 'Jak probíhá první návštěva dentální hygieny?',
    answer: 'Nejprve si s vámi probereme vaši ústní hygienu a zdravotní stav. Poté provedeme čištění ultrazvukem, pískování a fluoridaci, abychom vaše zuby zbavili plaku, kamene a pigmentací. Na závěr vám poradíme, jak se o zuby správně starat doma.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary-white mb-12"
        >
          Často kladené otázky
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-lg font-semibold text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary-gold" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary-gold" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-primary-white rounded-b-lg shadow-md"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
