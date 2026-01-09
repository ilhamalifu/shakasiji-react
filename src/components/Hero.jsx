import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 dark:from-cyan-800/20 dark:to-blue-800/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700">
              <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Agensi Kreatif Terpercaya di Surabaya
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight dark:text-white"
          >
            Kami membangun{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                pengalaman digital
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 10"
                fill="none"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>{' '}
            yang mengembangkan bisnis
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            Pembuatan website, SEO, digital marketing, dan desain brand — semua dalam satu tim.
            Kami membantu startup dan UMKM meningkatkan leads dan pendapatan melalui kampanye digital yang terukur.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:bg-indigo-700 transition-all duration-300 font-medium"
            >
              Konsultasi Gratis
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-3 border-2 border-slate-200 dark:border-slate-600 px-6 py-3.5 rounded-xl dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-medium"
            >
              <Play size={18} className="text-indigo-600 dark:text-indigo-400" />
              Lihat Portofolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: '120+', label: 'Klien terlayani' },
              { value: '4.9/5', label: 'Rating rata-rata' },
              { value: '200+', label: 'Proyek selesai' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className="text-center lg:text-left"
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-first lg:order-last"
        >
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* Main Image */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-200 dark:border-slate-700"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
                alt="Tim sedang berkolaborasi pada proyek digital"
                className="w-full h-72 lg:h-80 object-cover"
              />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 w-56 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold dark:text-white">Pengerjaan Cepat</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">2-4 minggu selesai</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                    />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-semibold dark:text-white">50+ Ulasan</div>
                  <div className="flex text-amber-400">★★★★★</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
