import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '/coming-soon' },
  { name: 'Twitter', icon: Twitter, href: '/coming-soon' },
  { name: 'Instagram', icon: Instagram, href: '/coming-soon' },
  { name: 'LinkedIn', icon: Linkedin, href: '/coming-soon' },
  { name: 'YouTube', icon: Youtube, href: '/coming-soon' },
];

const footerLinks = {
  Layanan: [
    { name: 'Pembuatan Website', href: '/#services' },
    { name: 'Branding & Desain', href: '/#services' },
    { name: 'Digital Marketing', href: '/#services' },
    { name: 'SEO & Analitik', href: '/#services' },
  ],
  Perusahaan: [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Portofolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Karir', href: '/careers' },
  ],
  Bantuan: [
    { name: 'Kontak', href: '/#contact' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
                SS
              </div>
              <div>
                <div className="font-bold text-xl text-white">Shaka Siji Creative</div>
                <div className="text-sm text-slate-400">Agensi Web & Marketing</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Kami membangun produk digital bermakna yang membantu bisnis berkembang. Dari website memukau hingga kampanye marketing berbasis data.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:admin@hafaracreative.com" className="flex items-center gap-3 text-sm hover:text-indigo-400 transition-colors">
                <Mail size={16} className="text-indigo-400" />
                admin@hafaracreative.com
              </a>
              <a href="https://wa.me/6281234414314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-indigo-400 transition-colors">
                <Phone size={16} className="text-indigo-400" />
                +62 812-3441-4314
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-indigo-400" />
                Mulyorejo, Surabaya, Jawa Timur
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1">Berlangganan Newsletter</h4>
              <p className="text-sm text-slate-400">Dapatkan update terbaru, tips, dan insight langsung ke inbox Anda.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="w-64 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
              >
                {isSubscribed ? (
                  'Berlangganan!'
                ) : (
                  <>
                    Kirim
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Shaka Siji Creative. Hak cipta dilindungi.</p>
            <div className="flex items-center gap-4">
              <a href="/admin/login" className="hover:text-indigo-400 transition-colors">Admin</a>
              <span>•</span>
              <p>Dibuat dengan ❤️ di Surabaya, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
