// src/components/sections/Contact.tsx
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/ТВОЙ_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-dark relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-copper text-sm tracking-[0.3em] uppercase"
        >
          Связаться
        </motion.span>
        <h2 className="text-5xl md:text-6xl font-light font-serif text-white mt-4">
          Давайте создадим историю
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          Заполните форму, и я свяжусь с вами в ближайшее время
        </p>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mt-12 max-w-xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Ваше имя"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-copper transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-copper transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Ваше сообщение"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-copper transition-colors"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-4 py-4 bg-copper text-dark font-semibold rounded-xl hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Отправка...' : 'Отправить'}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400"
            >
              Сообщение отправлено! Я отвечу в ближайшее время.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400"
            >
              Ошибка отправки. Попробуйте снова или напишите мне напрямую.
            </motion.p>
          )}
        </motion.form>

        <div className="mt-16 flex justify-center gap-8 text-gray-400">
          {[
            { label: 'Instagram', href: '#' },
            { label: 'Telegram', href: '#' },
            { label: 'WhatsApp', href: '#' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-copper transition-colors text-sm tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;