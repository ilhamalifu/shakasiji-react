import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogPreview({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className='group rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow'>
      <div className='relative overflow-hidden'>
        <img
          src={post.image || 'https://picsum.photos/seed/blog/800/400'}
          alt={post.title}
          className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute top-4 left-4'>
          <span className='px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full'>
            {post.category || 'Uncategorized'}
          </span>
        </div>
      </div>
      <div className='p-6'>
        <div className='text-xs text-slate-500 dark:text-slate-400 mb-2'>
          {formatDate(post.date)}
        </div>
        <h3 className='text-xl font-semibold dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2'>
          {post.title}
        </h3>
        {post.excerpt && (
          <p className='text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3'>
            {post.excerpt}
          </p>
        )}
        <Link
          to={`/blog/${post.slug}`}
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
        </Link>
      </div>
    </article>
  );
}

