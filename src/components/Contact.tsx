import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';

const Contact = ({ openBookingModal }) => {
  return (
    <footer id="contact" className="bg-primary text-primary-white pt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Kontaktujte nás
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Kontaktní údaje</h3>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Adresa</h4>
                <p>Vítkovická 3083/1</p>
                <p>70200, Ostrava</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:dvsmileostrava@gmail.com" className="hover:text-primary-gold transition-colors duration-300">
                  dvsmileostrava@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Telefon</h4>
                <a href="tel:+420596030053" className="hover:text-primary-gold transition-colors duration-300">
                  +420 596 030 053
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-primary-white/5 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-primary-gold mr-3" />
              <h3 className="text-2xl font-bold">Ordinační hodiny</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                {[
                  { day: 'Pondělí', hours: '8:00 – 17:00' },
                  { day: 'Úterý', hours: '9:00 – 18:00' },
                  { day: 'Středa', hours: '8:30 – 16:30' },
                  { day: 'Čtvrtek', hours: '10:00 – 19:00' },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between border-b border-primary-white/10 pb-2">
                    <span className="font-semibold">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Pátek', hours: '8:00 – 14:00' },
                  { day: 'Sobota', hours: '9:00 – 12:00', note: '(po předchozí domluvě)' },
                  { day: 'Neděle a svátky', hours: 'Zavřeno' },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between border-b border-primary-white/10 pb-2">
                    <span className="font-semibold">{item.day}</span>
                    <div className="text-right">
                      <span className={item.hours === 'Zavřeno' ? 'text-primary-gold' : ''}>
                        {item.hours}
                      </span>
                      {item.note && (
                        <div className="text-sm text-primary-white/70">{item.note}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-primary-white/10">
              <button
                className="w-full bg-primary-gold/20 hover:bg-primary-gold/30 text-primary-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 transition-all duration-300 group"
                onClick={() => openBookingModal(null)}
              >
                <span>Objednat se online</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Navigation and Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-primary-white/10">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              {['Domů', 'O nás', 'Služby', 'Galerie'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-primary-white/80 hover:text-primary-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Naše služby</h4>
            <ul className="space-y-2">
              {['Dentální hygiena', 'Bělení zubů', 'Parodontologie', 'Air Flow'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-primary-white/80 hover:text-primary-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Summary */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <p className="text-primary-white/80 mb-2">
              Kontaktujte nás a objednejte se jednoduše telefonicky, e-mailem nebo online.
            </p>
            <p className="text-primary-white/80">Těšíme se na vás!</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Sledujte nás</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-white/5 hover:bg-primary-white/10 p-3 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5 text-primary-gold" />
              </a>
              <a href="#" className="bg-primary-white/5 hover:bg-primary-white/10 p-3 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5 text-primary-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-primary-white/10">
          <p className="text-primary-white/60">&copy; {new Date().getFullYear()} DV SMILE. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
