import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPostBySlug, getAllPosts } from '../lib/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className='min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors'>
        <Navbar />
        <main className='py-20'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h1 className='text-3xl font-bold dark:text-white mb-4'>Post Not Found</h1>
            <p className='text-slate-600 dark:text-slate-300 mb-8'>
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to='/blog'
              className='inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-95'
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors'>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20'>
          <div className='max-w-4xl mx-auto px-6'>
            <Link
              to='/blog'
              className='inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-6'
            >
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
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Back to Blog
            </Link>
            <div className='mb-4'>
              <span className='px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full'>
                {post.category || 'Uncategorized'}
              </span>
            </div>
            <h1 className='text-4xl lg:text-5xl font-extrabold dark:text-white mb-4'>
              {post.title}
            </h1>
            <div className='text-sm text-slate-500 dark:text-slate-400'>
              {formatDate(post.date)}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className='py-8'>
            <div className='max-w-4xl mx-auto px-6'>
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-96 object-cover rounded-lg shadow-lg'
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className='py-8'>
          <div className='max-w-4xl mx-auto px-6'>
            <article className='prose prose-slate dark:prose-invert max-w-none'>
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className='text-3xl font-bold dark:text-white mb-4' {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className='text-2xl font-bold dark:text-white mb-3 mt-8' {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className='text-xl font-semibold dark:text-white mb-2 mt-6' {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className='text-slate-700 dark:text-slate-300 mb-4 leading-relaxed' {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className='text-indigo-600 dark:text-indigo-400 hover:underline'
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className='list-disc list-inside mb-4 text-slate-700 dark:text-slate-300' {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className='list-decimal list-inside mb-4 text-slate-700 dark:text-slate-300' {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className='mb-2' {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className='px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded text-sm'
                      {...props}
                    />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre
                      className='bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4'
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className='border-l-4 border-indigo-600 pl-4 italic text-slate-600 dark:text-slate-400 mb-4'
                      {...props}
                    />
                  ),
                }}
              >
                {post.body}
              </ReactMarkdown>
            </article>
          </div>
        </section>

        {/* Navigation */}
        <section className='py-8 border-t border-slate-200 dark:border-slate-700'>
          <div className='max-w-4xl mx-auto px-6'>
            <Link
              to='/blog'
              className='inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-95'
            >
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
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

