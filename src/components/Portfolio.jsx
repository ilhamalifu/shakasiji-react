import React from 'react';

export default function Portfolio() {
  return (
    <section id='work' className='bg-slate-50 dark:bg-slate-800/50 py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Selected work</h3>
        <h2 className='text-3xl font-bold mt-2 dark:text-white'>Projects we're proud of</h2>

        <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3].map((i) => (
            <article key={i} className='rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'>
              <img src={`https://picsum.photos/seed/pm${i}/800/500`} alt={`project-${i}`} className='w-full h-44 object-cover' />
              <div className='p-4'>
                <div className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>E-commerce</div>
                <h4 className='mt-2 font-semibold dark:text-white'>Project Title {i}</h4>
                <p className='text-sm text-slate-600 dark:text-slate-300 mt-2'>Design and development for a boutique retailer — conversion uplift and faster checkout.</p>
                <div className='mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400'>
                  <span>3 months</span>
                  <a href='#' className='underline hover:text-indigo-600 dark:hover:text-indigo-400'>
                    Case study
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

