import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    // Handle hash on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors">
      <Navbar />

      <main>
        <Hero />
        <FeaturesGrid />

        {/* Portfolio Preview Section */}
        <section id="work" className="bg-slate-50 dark:bg-slate-800/50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                Karya Pilihan
              </h3>
              <div className="flex items-center justify-between mt-3 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
                  Proyek yang Kami Banggakan
                </h2>
                <a
                  href="/portfolio"
                  className="hidden sm:flex text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline items-center gap-1 group"
                >
                  Lihat Semua Proyek
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Platform E-commerce Fashion',
                  category: 'E-commerce',
                  description: 'Redesign dan pengembangan lengkap untuk retailer fashion boutique — peningkatan konversi 200%.',
                  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
                  duration: '3 bulan',
                },
                {
                  title: 'Redesign Dashboard SaaS',
                  category: 'Web App',
                  description: 'UI/UX dashboard modern untuk platform analitik B2B — peningkatan retensi user 45%.',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
                  duration: '2 bulan',
                },
                {
                  title: 'Sistem Booking Restoran',
                  category: 'Web Development',
                  description: 'Platform booking full-stack dengan ketersediaan real-time dan integrasi pembayaran.',
                  image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
                  duration: '4 bulan',
                },
              ].map((project, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                      {project.category}
                    </div>
                    <h4 className="mt-2 text-lg font-semibold dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <span>{project.duration}</span>
                      <a href="/portfolio" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 group/link">
                        Lihat proyek
                        <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 text-center sm:hidden">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium"
              >
                Lihat Semua Proyek
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <Process />
        <Pricing />
        <Testimonials />
        <TechStack />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
