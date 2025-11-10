import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPreview from '../components/BlogPreview';
import { getAllPosts } from '../lib/posts';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors'>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h3 className='text-sm text-indigo-600 dark:text-indigo-400 font-semibold'>Our Blog</h3>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 dark:text-white'>
              Latest <span className='text-indigo-600 dark:text-indigo-400'>Insights & Updates</span>
            </h1>
            <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-6'>
            {posts.length > 0 ? (
              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {posts.map((post) => (
                  <BlogPreview key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className='text-center py-16'>
                <p className='text-slate-600 dark:text-slate-300 text-lg'>
                  No blog posts yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

