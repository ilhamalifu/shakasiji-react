import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Siap untuk Memulai?</h2>
        <p className="mt-3 text-slate-100">Ceritakan proyek Anda dan kami akan mengirimkan proposal gratis dalam 48 jam.</p>

        <ContactForm />

        <div className="mt-6 text-sm opacity-90 flex flex-wrap items-center justify-center gap-4">
          <a href="https://wa.me/6281234414314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-200 transition-colors">
            <Phone size={14} /> +62 812-3441-4314
          </a>
          <span>•</span>
          <a href="mailto:admin@hafaracreative.com" className="flex items-center gap-2 hover:text-indigo-200 transition-colors">
            <Mail size={14} /> admin@hafaracreative.com
          </a>
        </div>
      </div>
    </section>
  );
}
