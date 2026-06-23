import { motion } from 'framer-motion';
import { services } from '../../data/services';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-copper text-sm tracking-[0.3em] uppercase">Услуги</span>
          <h2 className="text-5xl md:text-6xl font-light font-serif text-white mt-4">Что я предлагаю</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-500"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-6 text-2xl font-serif text-white">{s.title}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">{s.desc}</p>
              <p className="mt-6 text-copper font-semibold tracking-wide">{s.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;