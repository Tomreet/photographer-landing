import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  } as const;

  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  } as const;

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`,
          scale: bgScale,
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-[2]" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.h1
          variants={childVariants}
          className="text-5xl sm:text-7xl md:text-9xl font-light font-serif tracking-wider uppercase leading-tight"
          style={{ opacity: textOpacity, y: textY }}
        >
          Dude <br className="xs:hidden" /> pooh
        </motion.h1>
          <motion.p
            variants={childVariants}
            className="mt-8 text-xl md:text-2xl font-extralight tracking-[0.3em] text-copper"
          >
            Искусство в каждом кадре
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-4"
        >
          <span className="text-sm tracking-[0.2em] text-gray-400">СКРОЛЬТЕ</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 border-r-2 border-b-2 border-copper rotate-45"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;