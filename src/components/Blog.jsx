import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';
import BlogPreview from './BlogPreview';

export default function Blog() {
  const blogPosts = getAllPosts().slice(0, 3); // Show only 3 latest posts in preview

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
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <BlogPreview key={post.slug} post={post} />
            ))
          ) : (
            <div className='col-span-full text-center py-8 text-slate-600 dark:text-slate-400'>
              No blog posts yet. Check back soon!
            </div>
          )}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/blog'
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
          </Link>
        </div>
      </div>
    </section>
  );
}

