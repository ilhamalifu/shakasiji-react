import React from 'react';

export default function Testimonials() {
  return (
    <section className='bg-white dark:bg-slate-900 py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Trusted by</h3>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-slate-500 dark:text-slate-400'>
          <div className='text-center'>Client A</div>
          <div className='text-center'>Client B</div>
          <div className='text-center'>Client C</div>
          <div className='text-center'>Client D</div>
        </div>

        <div className='mt-8 grid md:grid-cols-3 gap-6'>
          {['A', 'B', 'C'].map((t, i) => (
            <blockquote key={i} className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
              <p className='text-slate-700 dark:text-slate-200'>"Great collaboration — delivered on time and results exceeded our targets."</p>
              <footer className='mt-4 text-sm text-slate-500 dark:text-slate-400'>— Founder, Example Co.</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

