import React from 'react';
import { ArrowRight, Camera, Code, Phone } from 'lucide-react';

export default function FeaturesGrid() {
  return (
    <section id='services' className='py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>What we do</h3>
        <h2 className='text-3xl font-bold mt-2 dark:text-white'>Services that move the needle</h2>
        <p className='text-slate-600 dark:text-slate-300 mt-3 max-w-2xl'>We combine creative design with data-driven marketing to deliver measurable growth.</p>

        <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <article className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='flex items-center gap-4 mb-4'>
              <Code size={20} className='text-indigo-600 dark:text-indigo-400' />
              <h4 className='font-semibold dark:text-white'>Web Development</h4>
            </div>
            <p className='text-sm text-slate-600 dark:text-slate-300'>Fast & responsive React/Next.js websites with CMS and e-commerce capability.</p>
          </article>

          <article className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='flex items-center gap-4 mb-4'>
              <Camera size={20} className='text-indigo-600 dark:text-indigo-400' />
              <h4 className='font-semibold dark:text-white'>Brand & Design</h4>
            </div>
            <p className='text-sm text-slate-600 dark:text-slate-300'>Identity, UI/UX, and visual systems that scale with your product.</p>
          </article>

          <article className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='flex items-center gap-4 mb-4'>
              <ArrowRight size={20} className='text-indigo-600 dark:text-indigo-400' />
              <h4 className='font-semibold dark:text-white'>Performance Marketing</h4>
            </div>
            <p className='text-sm text-slate-600 dark:text-slate-300'>Ads, funnels, and CRO focused on ROI and predictable customer acquisition.</p>
          </article>

          <article className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='flex items-center gap-4 mb-4'>
              <Phone size={20} className='text-indigo-600 dark:text-indigo-400' />
              <h4 className='font-semibold dark:text-white'>SEO & Analytics</h4>
            </div>
            <p className='text-sm text-slate-600 dark:text-slate-300'>Technical SEO, content strategy, and tracking for data-led decisions.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

