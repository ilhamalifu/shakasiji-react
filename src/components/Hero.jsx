import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className='bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800'>
      <div className='max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center'>
        <div>
          <motion.h1 className='text-4xl lg:text-5xl font-extrabold leading-tight dark:text-white'>
            We build <span className='text-indigo-600 dark:text-indigo-400'>digital experiences</span> that grow businesses
          </motion.h1>
          <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-xl'>Website development, SEO, performance marketing, and brand design — all in one team. We help startups and SMEs increase leads and revenue through measurable digital campaigns.</p>

          <div className='mt-8 flex gap-4'>
            <a href='#contact' className='inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-95 dark:bg-indigo-500'>
              Get a proposal <ArrowRight size={16} />
            </a>
            <a href='/portfolio' className='inline-flex items-center gap-3 border border-slate-300 dark:border-slate-600 px-5 py-3 rounded-lg dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'>
              View work
            </a>
          </div>

          <div className='mt-8 grid grid-cols-3 gap-4 max-w-xs text-sm text-slate-500 dark:text-slate-400'>
            <div>
              <div className='font-semibold text-black dark:text-white'>+120</div>
              clients
            </div>
            <div>
              <div className='font-semibold text-black dark:text-white'>4.9/5</div>
              avg. rating
            </div>
            <div>
              <div className='font-semibold text-black dark:text-white'>200+</div>
              projects
            </div>
          </div>
        </div>

        <div className='order-first lg:order-last'>
          <div className='relative mx-auto max-w-md lg:max-w-lg'>
            <div className='rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700'>
              <img src='https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc' alt='agency' className='w-full h-72 object-cover' />
            </div>
            <div className='absolute -bottom-6 left-6 bg-white dark:bg-slate-800 rounded-xl shadow p-4 w-64 border border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-md bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center'>
                  <Camera size={18} className='text-indigo-600 dark:text-indigo-400' />
                </div>
                <div>
                  <div className='font-semibold dark:text-white'>Full-stack Website</div>
                  <div className='text-xs text-slate-500 dark:text-slate-400'>Design + Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

