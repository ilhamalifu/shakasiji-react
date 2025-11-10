import React from 'react';

export default function Process() {
  return (
    <section id='process' className='py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-2xl font-bold dark:text-white'>Our process</h2>
        <div className='mt-8 grid md:grid-cols-3 gap-6'>
          <div className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='font-semibold dark:text-white'>01 Research</div>
            <p className='text-sm text-slate-600 dark:text-slate-300 mt-2'>Stakeholder interviews, analytics audit and competitor review.</p>
          </div>
          <div className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='font-semibold dark:text-white'>02 Build</div>
            <p className='text-sm text-slate-600 dark:text-slate-300 mt-2'>Design systems, accessibility, fast builds and QA.</p>
          </div>
          <div className='p-6 border border-slate-200 dark:border-slate-700 rounded-xl dark:bg-slate-800/50'>
            <div className='font-semibold dark:text-white'>03 Grow</div>
            <p className='text-sm text-slate-600 dark:text-slate-300 mt-2'>Ads, SEO, and continuous improvements with reporting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

