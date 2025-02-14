import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';

const services = [
  {
    id: 1,
    icon: 'Sparkles',
    title: 'Kompletní dentální hygiena',
    price: '1 200 Kč',
    duration: 'cca 60 minut',
    description: 'Odstranění zubního kamene, plaku a pigmentací ultrazvukem a AirFlow + fluoridace pro ochranu skloviny.'
  },
  {
    id: 2,
    icon: 'Wind',
    title: 'AirFlow (pískování zubů)',
    price: '800 Kč',
    duration: 'cca 30 minut',
    description: 'Rychlé a šetrné odstranění povrchových pigmentací (zejména od kávy, čaje, kouření) s okamžitým efektem vyhlazených a bělejších zubů.'
  },
  {
    id: 3,
    icon: 'Smile',
    title: 'Bělení zubů – domácí sada',
    price: '3 500 Kč',
    duration: 'První návštěva (otisky, instruktáž): cca 30 minut',
    description: 'Vytvoření individuálních dlah a profesionální bělicí gel pro šetrné bělení doma.'
  },
  {
    id: 4,
    icon: 'Sun',
    title: 'Ordinační bělení zubů',
    price: '4 500 Kč',
    duration: 'cca 60–90 minut',
    description: 'Rychlé a bezpečné bělení zubů přímo v ordinaci za použití vysoce koncentrovaného bělicího gelu. Efekt je patrný okamžitě.'
  },
  {
    id: 5,
    icon: 'Book',
    title: 'Instruktáž správné ústní hygieny',
    price: '300 Kč',
    duration: 'cca 15–20 minut',
    description: 'Individuální ukázka techniky čištění zubů, výběr vhodných pomůcek (kartáček, mezizubní kartáčky, dentální nit atd.) a doporučení, jak o zuby nejlépe pečovat.'
  },
  {
    id: 6,
    icon: 'Leaf',
    title: 'Ošetření citlivých zubů',
    price: '500 Kč',
    duration: 'cca 20 minut',
    description: 'Aplikace speciálních materiálů (např. lak nebo gel) na citlivé zuby pro snížení citlivosti a ochranu skloviny.'
  },
  {
    id: 7,
    icon: 'Heart',
    title: 'Parodontologická péče',
    price: '1 500 Kč',
    duration: 'cca 60–90 minut',
    description: 'Hluboké čištění podél kořenů zubů a ošetření parodontálních chobotů pro prevenci i léčbu zánětů dásní a parodontu.'
  },
  {
    id: 8,
    icon: 'Zap',
    title: 'Antibakteriální ošetření ozonem',
    price: '600 Kč',
    duration: 'cca 15–20 minut',
    description: 'Lokální aplikace ozonu k dezinfekci dutiny ústní, účinně pomáhá při boji s bakteriemi a záněty.'
  },
  {
    id: 9,
    icon: 'Calendar',
    title: 'Kontrolní dentální hygiena',
    price: '900 Kč',
    duration: 'cca 30–45 minut',
    description: 'Pravidelná údržba hygieny zubů a dásní – odstranění nově vzniklého plaku či zubního kamene a zhodnocení, jak se daří udržovat výsledky z předchozích ošetření.'
  },
  {
    id: 10,
    icon: 'Droplet',
    title: 'Remineralizace skloviny',
    price: '700 Kč',
    duration: 'cca 20–30 minut',
    description: 'Aplikace gelů s obsahem minerálních látek (vápník, fosfát, fluor) pro posílení zubní skloviny a snížení citlivosti.'
  },
  {
    id: 11,
    icon: 'Baby',
    title: 'Dětská dentální hygiena',
    price: '800 Kč',
    duration: 'cca 30 minut',
    description: 'Šetrné odstranění plaku, motivace a edukace dětí ke správným návykům, naučení jednoduché a efektivní péče o zuby.'
  }
];

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = (service) => {
    console.log('Opening booking modal for service:', service);
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    console.log('Closing booking modal');
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary-white">
      <Header openBookingModal={openBookingModal} />
      <Hero openBookingModal={openBookingModal} />
      <WhyChooseUs />
      <AboutUs />
      <Services openBookingModal={openBookingModal} />
      <Gallery />
      <FAQ />
      <Reviews />
      <Contact openBookingModal={openBookingModal} />

      {isBookingModalOpen && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
          service={selectedService}
          services={services} // Pass the services array
        />
      )}
    </div>
  );
}

export default App;
