import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Common Elementor Website Issues and How to Resolve Them',
      category: 'Web Development',
      date: 'November 4, 2025',
      excerpt: 'Learn how to troubleshoot and fix the most common Elementor issues that developers face.',
      image: 'https://picsum.photos/seed/blog1/800/400',
      link: '#',
    },
    {
      id: 2,
      title: '25+ Best Elementor Addons & Plugins for WordPress (Free & Pro)',
      category: 'Web Development',
      date: 'November 3, 2025',
      excerpt: 'Discover the best Elementor addons and plugins to enhance your WordPress website functionality.',
      image: 'https://picsum.photos/seed/blog2/800/400',
      link: '#',
    },
    {
      id: 3,
      title: 'Why Hire an Elementor Expert: Build Faster, Perform Better',
      category: 'Web Development',
      date: 'October 30, 2025',
      excerpt: 'Understanding the benefits of working with an Elementor expert for your next project.',
      image: 'https://picsum.photos/seed/blog3/800/400',
      link: '#',
    },
  ];

  return (
    <section id='blog' className='py-16 bg-white dark:bg-slate-900'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Read Our Blogs</h3>
          <h2 className='text-3xl font-bold mt-2 dark:text-white'>Latest Insights & Updates</h2>
          <p className='mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className='group rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute top-4 left-4'>
                  <span className='px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full'>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <div className='text-xs text-slate-500 dark:text-slate-400 mb-2'>{post.date}</div>
                <h3 className='text-xl font-semibold dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2'>
                  {post.title}
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3'>
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className='inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline'
                >
                  Read More
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
            </article>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href='#'
            className='inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-95 transition-opacity'
          >
            Explore More Blogs
            <svg
              className='w-5 h-5'
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
    </section>
  );
}

