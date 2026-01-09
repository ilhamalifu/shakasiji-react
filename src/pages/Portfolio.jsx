import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Mail, Phone, Briefcase, Rocket, Users, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: Briefcase,
    title: 'Website Company Profile',
    description: 'Website profesional untuk meningkatkan kredibilitas dan menjangkau lebih banyak pelanggan.',
  },
  {
    icon: Rocket,
    title: 'Landing Page & Sales Funnel',
    description: 'Halaman konversi tinggi untuk kampanye marketing dan peluncuran produk.',
  },
  {
    icon: Users,
    title: 'Platform E-commerce',
    description: 'Toko online lengkap dengan sistem pembayaran dan manajemen produk.',
  },
  {
    icon: Award,
    title: 'Web App Custom',
    description: 'Aplikasi web sesuai kebutuhan bisnis Anda dengan fitur-fitur khusus.',
  },
];

const stats = [
  { value: '120+', label: 'Klien Puas' },
  { value: '200+', label: 'Proyek Selesai' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '4.9/5', label: 'Rating Klien' },
];

export default function Portfolio() {
  const waNumber = '6281234414314';
  const waMessage = encodeURIComponent('Halo Shaka Siji Creative! Saya tertarik untuk konsultasi tentang proyek website. Bisa dibantu?');
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors'>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-24 overflow-hidden'>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          <div className='relative max-w-7xl mx-auto px-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft size={18} />
                Kembali ke Beranda
              </a>
              <h1 className='text-4xl lg:text-5xl font-extrabold mb-6'>
                Portofolio & Layanan Kami
              </h1>
              <p className='text-xl text-indigo-100 max-w-2xl leading-relaxed'>
                Kami telah membantu ratusan bisnis berkembang melalui solusi digital yang efektif.
                Sekarang giliran Anda!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-20 bg-slate-50 dark:bg-slate-900'>
          <div className='max-w-7xl mx-auto px-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold dark:text-white mb-4">
                Layanan yang Kami Tawarkan
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Dari website sederhana hingga aplikasi web kompleks, kami siap membantu mewujudkan visi digital Anda.
              </p>
            </motion.div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow'
                  >
                    <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                      <Icon size={28} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className='text-lg font-semibold dark:text-white mb-2'>
                      {service.title}
                    </h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300'>
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Request Portfolio */}
        <section className='py-20 bg-white dark:bg-slate-800'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Briefcase size={40} className="text-white" />
              </div>
              <h2 className='text-3xl font-bold dark:text-white mb-4'>
                Ingin Melihat Portofolio Lengkap?
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto'>
                Kami dengan senang hati akan menunjukkan contoh proyek yang relevan dengan kebutuhan Anda.
                Hubungi kami dan ceritakan jenis proyek yang Anda inginkan!
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all'
                >
                  <MessageCircle size={22} />
                  Chat via WhatsApp
                </a>
                <a
                  href='mailto:admin@hafaracreative.com?subject=Request Portofolio - Shaka Siji Creative'
                  className='inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all'
                >
                  <Mail size={22} />
                  Kirim Email
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 dark:text-slate-400">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Phone size={18} />
                  +62 812-3441-4314
                </a>
                <span className="hidden sm:block">•</span>
                <a href="mailto:admin@hafaracreative.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Mail size={18} />
                  admin@hafaracreative.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Preview */}
        <section className='py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold mb-4'>Siap Memulai Proyek Anda?</h2>
              <p className='text-indigo-100 mb-8 max-w-2xl mx-auto'>
                Mari diskusikan bagaimana kami dapat membantu bisnis Anda berkembang dengan solusi digital yang tepat.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/#contact'
                  className='inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors'
                >
                  Konsultasi Gratis
                </a>
                <a
                  href='/'
                  className='inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors'
                >
                  Kembali ke Beranda
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
