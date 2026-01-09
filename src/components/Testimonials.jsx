import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Andi Setiawan',
    role: 'CEO',
    company: 'TechStart Indonesia',
    avatar: 'https://i.pravatar.cc/100?img=11',
    rating: 5,
    quote: 'Shaka Siji Creative mengubah kehadiran online kami secara total. Traffic website meningkat 300% dan tingkat konversi berlipat ganda dalam 3 bulan. Sangat recommended!',
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    role: 'Marketing Director',
    company: 'Fashion Bali',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
    quote: 'Tim Shaka Siji melebihi ekspektasi kami. Mereka membuat website e-commerce yang memukau dan sesuai dengan brand kami. Penjualan tidak pernah sebagus ini!',
  },
  {
    id: 3,
    name: 'Budi Hartono',
    role: 'Founder',
    company: 'EduTech Solutions',
    avatar: 'https://i.pravatar.cc/100?img=12',
    rating: 5,
    quote: 'Profesional, kreatif, dan berorientasi hasil. Shaka Siji membantu kami meluncurkan platform dalam waktu cepat. Support mereka sangat berharga.',
  },
];

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'DigitalFirst', logo: 'DF' },
  { name: 'StartupHub', logo: 'SH' },
  { name: 'CloudSystems', logo: 'CS' },
  { name: 'DataDriven', logo: 'DD' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Testimonials() {
  return (
    <section className="bg-slate-50 dark:bg-slate-800/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
            Dipercaya oleh 120+ Perusahaan
          </h3>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-bold">
                  {client.logo}
                </div>
                <span className="font-medium hidden sm:inline">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            Apa Kata Klien Kami
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Jangan hanya percaya kata kami. Inilah yang klien kami katakan tentang bekerja sama dengan kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Quote size={18} className="text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <footer className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-indigo-900"
                />
                <div>
                  <div className="font-semibold dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
