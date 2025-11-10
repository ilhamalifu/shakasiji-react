import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    <div className='min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors'>
      <Navbar />

      <main>
        <Hero />
        <FeaturesGrid />
        {/* Portfolio Preview Section */}
        <section id='work' className='bg-slate-50 dark:bg-slate-800/50 py-16'>
          <div className='max-w-7xl mx-auto px-6'>
            <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Selected work</h3>
            <div className='flex items-center justify-between mt-2 mb-8'>
              <h2 className='text-3xl font-bold dark:text-white'>Projects we're proud of</h2>
              <Link
                to='/portfolio'
                className='text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1'
              >
                View All Projects
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[1, 2, 3].map((i) => (
                <article key={i} className='rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow'>
                  <img src={`https://picsum.photos/seed/pm${i}/800/500`} alt={`project-${i}`} className='w-full h-44 object-cover' />
                  <div className='p-4'>
                    <div className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>E-commerce</div>
                    <h4 className='mt-2 font-semibold dark:text-white'>Project Title {i}</h4>
                    <p className='text-sm text-slate-600 dark:text-slate-300 mt-2'>Design and development for a boutique retailer — conversion uplift and faster checkout.</p>
                    <div className='mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400'>
                      <span>3 months</span>
                      <Link to='/portfolio' className='underline hover:text-indigo-600 dark:hover:text-indigo-400'>
                        View project
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Process />
        <Testimonials />
        <TechStack />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

