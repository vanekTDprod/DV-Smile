import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ openBookingModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(27, 31, 59, 0.7), rgba(27, 31, 59, 0.7)), url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-white mb-6">
            Profesionální dentální hygiena,<br />
            která vám zajistí zdravý úsměv
          </h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-white/90 mb-8"
          >
            Precizní péče, moderní technologie, bezbolestné ošetření
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary-gold text-primary px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 mx-auto hover:bg-primary-teal transition-all duration-300 group"
            onClick={() => openBookingModal(null)}
          >
            <span>Objednat se nyní</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
