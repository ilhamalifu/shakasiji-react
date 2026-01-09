import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlogPosts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Blog() {
  const { getPublishedPosts, isLoading } = useBlogPosts();
  const publishedPosts = getPublishedPosts();

  // Show only first 3 posts on homepage
  const displayPosts = publishedPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
            Baca Blog Kami
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 dark:text-white">
            Insight & Update Terbaru
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tetap update dengan tren terbaru, tips, dan insight seputar web development, desain, dan digital marketing.
          </p>
        </motion.div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : displayPosts.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            Belum ada artikel. Segera hadir!
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 group/link"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* View All CTA */}
        {publishedPosts.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
            >
              Lihat Semua Artikel
              <ArrowRight size={18} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
