import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const testimonials = [
  { text: 'Дарьяна — волшебница! Она смогла передать настроение нашего момента, что каждый кадр дышит любовью.', author: 'Елена и Дмитрий' },
  { text: 'Лучшая фотосессия в моей жизни. Дарьяна помогла расслабиться и быть собой. Результат превзошёл ожидания.', author: 'Мария' },
  { text: 'Профессионал высочайшего уровня. Снимки получились стильными и идеальными. Буду с Дарьяной работать ещё.', author: 'Алексей' },
];

const Testimonials = () => (
  <section className="py-24 bg-dark">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-copper text-sm tracking-[0.3em] uppercase">Отзывы</span>
        <h2 className="text-5xl md:text-6xl font-light font-serif text-white mt-4">Слова клиентов</h2>
      </motion.div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        className="!pb-12"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="p-8 md:p-12 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
              <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed">“{t.text}”</p>
              <p className="mt-8 text-copper tracking-wider">{t.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center gap-2 mt-8" />
    </div>
  </section>
);

export default Testimonials;