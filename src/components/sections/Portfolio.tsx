import { motion } from 'framer-motion';
import { portfolioItems } from '../../data/portfolio';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = portfolioItems.map(item => ({ src: item.src, alt: item.title }));

  return (
    <>
      <section id="portfolio" className="py-24 bg-dark overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-copper text-sm tracking-[0.3em] uppercase">Портфолио</span>
          <h2 className="text-5xl md:text-6xl font-light font-serif text-white mt-4">
            Избранные работы
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {portfolioItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className="w-full md:w-[65%] group cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => { setPhotoIndex(index); setLightboxOpen(true); }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                      <h3 className="text-white text-2xl md:text-3xl font-serif">{item.title}</h3>
                      <p className="text-copper text-sm tracking-widest mt-2">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
};

export default Portfolio;