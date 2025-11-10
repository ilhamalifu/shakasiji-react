import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id='contact' className='py-16 bg-indigo-600 text-white'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold'>Ready to start?</h2>
        <p className='mt-3 text-slate-100'>Tell us about your project and we'll send a free proposal within 48 hours.</p>

        <ContactForm />

        <div className='mt-6 text-sm opacity-90 flex items-center justify-center gap-4'>
          <Phone size={14} /> +62 812-3456-7890 • <Mail size={14} /> hello@wakadigital.id
        </div>
      </div>
    </section>
  );
}

