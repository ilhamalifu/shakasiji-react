import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'React', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' },
      { name: 'Next.js', color: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' },
      { name: 'Vue.js', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
      { name: 'TypeScript', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      { name: 'Tailwind CSS', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' },
    ],
  },
  {
    title: 'UI & Desain',
    technologies: [
      { name: 'Figma', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
      { name: 'Adobe XD', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400' },
      { name: 'Framer', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
      { name: 'Illustrator', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    ],
  },
  {
    title: 'Backend & Database',
    technologies: [
      { name: 'Node.js', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
      { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
      { name: 'Firebase', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
      { name: 'Supabase', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
    ],
  },
  {
    title: 'DevOps & Testing',
    technologies: [
      { name: 'Vercel', color: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' },
      { name: 'Docker', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      { name: 'GitHub Actions', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
      { name: 'Jest', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
      { name: 'Cypress', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
    ],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-slate-50 dark:bg-slate-800/50">
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
            Tools & Teknologi Kami
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 dark:text-white">
            Teknologi yang Kami Gunakan
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Kami menggunakan teknologi dan tools terdepan untuk membangun solusi modern, scalable, dan berkinerja tinggi.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold dark:text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg cursor-default transition-all duration-200 ${tech.color}`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
