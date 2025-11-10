import React from 'react';

export default function TechStack() {
  const techCategories = [
    {
      title: 'Website',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'UI & UX',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Framer Motion'],
    },
    {
      title: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Redis'],
    },
    {
      title: 'Testing',
      technologies: ['Jest', 'Cypress', 'Playwright', 'React Testing Library', 'Vitest'],
    },
  ];

  return (
    <section id='tech-stack' className='py-16 bg-slate-50 dark:bg-slate-800/50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Our Tools & Technologies</h3>
          <h2 className='text-3xl font-bold mt-2 dark:text-white'>Technologies We Work With</h2>
          <p className='mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            We use cutting-edge technologies and tools to build modern, scalable, and high-performance solutions.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {techCategories.map((category, index) => (
            <div
              key={index}
              className='p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
            >
              <h3 className='text-lg font-semibold dark:text-white mb-4'>{category.title}</h3>
              <div className='flex flex-wrap gap-2'>
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

