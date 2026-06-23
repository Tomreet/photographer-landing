import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ['Портфолио', 'Обо мне', 'Услуги', 'Контакты'];
  const hrefs = ['#portfolio', '#about', '#services', '#contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center">
      <a href="#" className="text-2xl font-serif tracking-widest">DP</a>
      <nav className="hidden md:flex gap-8 text-sm tracking-[0.2em] uppercase">
        {navLinks.map((link, i) => (
          <a key={link} href={hrefs[i]} className="hover:text-copper transition-colors">{link}</a>
        ))}
      </nav>
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
        style={{ zIndex: 20 }}
      >
        {open ? '✕' : '☰'}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-screen w-64 bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white text-xl"
          >
            {navLinks.map((link, i) => (
              <a key={link} href={hrefs[i]} onClick={() => setOpen(false)} className="hover:text-copper transition-colors">{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;