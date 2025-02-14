import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jana K.',
    rating: 5,
    text: 'Perfektní přístup a bezbolestné ošetření!'
  },
  {
    name: 'Petr M.',
    rating: 5,
    text: 'Velmi profesionální a milý personál. Vysvětlení každého kroku mi dodalo pocit jistoty.'
  },
  {
    name: 'Lucie R.',
    rating: 5,
    text: 'Skvělý servis, moderní technologie a hlavně žádná bolest. Mohu jen doporučit!'
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Co o nás říkají klienti
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <p className="font-semibold text-primary">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
