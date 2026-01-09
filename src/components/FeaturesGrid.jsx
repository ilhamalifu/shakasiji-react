import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Search, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Pembuatan Website',
    description: 'Website cepat & responsif dengan React/Next.js, dilengkapi CMS dan fitur e-commerce.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Palette,
    title: 'Branding & Desain',
    description: 'Identitas visual, UI/UX, dan sistem desain yang dapat berkembang bersama produk Anda.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Iklan digital, funnel penjualan, dan optimasi konversi untuk ROI yang terukur.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: Search,
    title: 'SEO & Analitik',
    description: 'Technical SEO, strategi konten, dan tracking untuk keputusan berbasis data.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function FeaturesGrid() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
            Layanan Kami
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 dark:text-white">
            Solusi yang Menggerakkan Bisnis Anda
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl">
            Kami menggabungkan desain kreatif dengan strategi marketing berbasis data
            untuk memberikan pertumbuhan yang terukur bagi startup dan bisnis yang sudah mapan.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.a
                key={index}
                href="/#contact"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 cursor-pointer block"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`bg-gradient-to-r ${service.color} p-2 rounded-lg`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Konsultasi Gratis
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
