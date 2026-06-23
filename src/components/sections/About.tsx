import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Scene3D from '../three/Scene3D';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center bg-dark py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-2xl">
          <motion.img
            src={`${import.meta.env.BASE_URL}about.jpg`}
            alt="Фотограф"
            className="w-full h-full object-cover"
            style={{ y: imgY }}
          />
        </div>
        <div className="text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-copper text-sm tracking-[0.3em] uppercase"
            >
              Обо мне
            </motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-6xl font-light font-serif mt-4 leading-tight"
            >
              Я ловлю эмоции,<br /> а не просто кадры
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 text-lg text-gray-400 leading-relaxed font-light"
            >
              С 2021 года работаю с крупнейшими брендами и частными клиентами.
              Моя философия — минимализм и естественность. Каждая съёмка для меня
              как создание маленького фильма, где главный герой — это вы.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-10 flex gap-6"
            >
              <div>
                <span className="text-4xl font-serif text-copper">100+</span>
                <p className="text-sm text-gray-500 mt-1">проектов</p>
              </div>
              <div>
                <span className="text-4xl font-serif text-copper">12</span>
                <p className="text-sm text-gray-500 mt-1">мероприятий</p>
              </div>
            </motion.div>
              <div className="relative h-[300px] md:h-[300px] z-10 flex items-center justify-center order-first md:order-last">
                <Scene3D />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;