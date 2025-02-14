import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = {
  clinic: [
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern dental clinic interior',
      category: 'clinic'
    },
    {
      src: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental equipment',
      category: 'clinic'
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Treatment room',
      category: 'clinic'
    }
  ],
  treatment: [
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental treatment',
      category: 'treatment'
    },
    {
      src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental consultation',
      category: 'treatment'
    },
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional cleaning',
      category: 'treatment'
    }
  ],
  results: [
    {
      src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Beautiful smile result',
      category: 'results'
    },
    {
      src: 'https://images.unsplash.com/photo-1601009171781-a7c2816b04e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Happy patient',
      category: 'results'
    },
    {
      src: 'https://images.unsplash.com/photo-1616628188506-4ad99d65620e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Smile transformation',
      category: 'results'
    }
  ]
};

const beforeAfterImages = [
  {
    before: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1616628188506-4ad99d65620e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Profesionální čištění'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const allImages = [...images.clinic, ...images.treatment, ...images.results];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="gallery" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block">
            Galerie
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Podívejte se, jak pečujeme o váš úsměv a prostředí naší kliniky.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>

        {/* Before & After Slider */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Před a Po</h3>
          <div className="max-w-4xl mx-auto">
            {beforeAfterImages.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={comparison.after}
                    alt="Po"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    width: `${sliderPosition}%`,
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={comparison.before}
                    alt="Před"
                    className="w-full h-full object-cover"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute top-1/2 left-0 w-full"
                />
                <div className="absolute top-4 left-4 bg-primary-gold text-white px-3 py-1 rounded">
                  Před
                </div>
                <div className="absolute top-4 right-4 bg-primary-gold text-white px-3 py-1 rounded">
                  Po
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary-gold transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-gold transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = allImages.findIndex(img => img.src === selectedImage.src);
                  const prevImage = allImages[currentIndex - 1] || allImages[allImages.length - 1];
                  setSelectedImage(prevImage);
                }}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-gold transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = allImages.findIndex(img => img.src === selectedImage.src);
                  const nextImage = allImages[currentIndex + 1] || allImages[0];
                  setSelectedImage(nextImage);
                }}
              >
                <ChevronRight size={32} />
              </button>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90%] max-h-[90vh] object-contain"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
