import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'Design and development for a boutique retailer — conversion uplift and faster checkout.',
      image: 'https://picsum.photos/seed/pm1/800/500',
      duration: '3 months',
      link: '#',
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Corporate',
      description: 'Modern corporate website with CMS integration and responsive design for better engagement.',
      image: 'https://picsum.photos/seed/pm2/800/500',
      duration: '2 months',
      link: '#',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'SaaS',
      description: 'Complex dashboard interface with real-time analytics and user management system.',
      image: 'https://picsum.photos/seed/pm3/800/500',
      duration: '4 months',
      link: '#',
    },
    {
      id: 4,
      title: 'Mobile App Landing',
      category: 'Landing Page',
      description: 'High-converting landing page for mobile app launch with integrated signup flow.',
      image: 'https://picsum.photos/seed/pm4/800/500',
      duration: '1 month',
      link: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Portfolio',
      description: 'Creative portfolio website for design agency with interactive animations and gallery.',
      image: 'https://picsum.photos/seed/pm5/800/500',
      duration: '2 months',
      link: '#',
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'Food & Beverage',
      description: 'Beautiful restaurant website with online ordering system and menu management.',
      image: 'https://picsum.photos/seed/pm6/800/500',
      duration: '2.5 months',
      link: '#',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors'>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Our Portfolio</h3>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 dark:text-white'>
              Projects We're <span className='text-indigo-600 dark:text-indigo-400'>Proud Of</span>
            </h1>
            <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Explore our collection of successful projects across various industries. Each project represents our commitment to quality, innovation, and client success.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => (
                <article
                  key={project.id}
                  className='group rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>
                  <div className='p-6'>
                    <div className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2'>
                      {project.category}
                    </div>
                    <h3 className='text-xl font-semibold dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 mb-4'>
                      {project.description}
                    </p>
                    <div className='flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700'>
                      <span className='text-sm text-slate-500 dark:text-slate-400'>{project.duration}</span>
                      <a
                        href={project.link}
                        className='text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1'
                      >
                        View Case Study
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
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-indigo-600 text-white'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold'>Ready to Start Your Project?</h2>
            <p className='mt-3 text-slate-100'>
              Let's discuss how we can bring your vision to life with our expertise and creativity.
            </p>
            <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/#contact'
                className='inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:opacity-95 transition-opacity'
              >
                Get Started
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors'
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

