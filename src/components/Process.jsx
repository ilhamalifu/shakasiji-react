import React from 'react';
import { motion } from 'framer-motion';
import { Search, Paintbrush, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Riset & Analisa',
    description: 'Kami mendalami bisnis, audiens, dan kompetitor Anda untuk memahami apa yang mendorong kesuksesan di pasar.',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Desain & Strategi',
    description: 'Desainer kami membuat visual memukau sementara strategist merencanakan perjalanan user untuk konversi maksimal.',
    icon: Paintbrush,
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Pengembangan & Testing',
    description: 'Kami membangun website cepat, responsif, dan accessible menggunakan teknologi modern dengan QA ketat.',
    icon: Code2,
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    title: 'Launching & Growth',
    description: 'Setelah launching lancar, kami mendorong traffic melalui SEO, iklan, dan optimasi berkelanjutan.',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
            Cara Kerja Kami
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 dark:text-white">
            Proses yang Terbukti
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Pendekatan sistematis yang menjamin kualitas, transparansi, dan hasil di setiap proyek.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} className="text-white" />
                        {/* Step Number Badge */}
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200 shadow border border-slate-200 dark:border-slate-700">
                          {step.number.slice(-1)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-semibold dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector (visible on lg+) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-slate-300 dark:text-slate-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Mulai proyek Anda hari ini
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
