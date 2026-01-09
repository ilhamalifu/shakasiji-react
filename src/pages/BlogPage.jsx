import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Search, X } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CATEGORIES = ['Semua', 'Web Development', 'SEO', 'Desain', 'Digital Marketing', 'Bisnis', 'Tutorial', 'Berita'];

export default function BlogPage() {
    const { getPublishedPosts, isLoading } = useBlogPosts();
    const publishedPosts = getPublishedPosts();

    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = publishedPosts.filter((post) => {
        const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <Navbar />

            {/* Hero */}
            <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <a href="/" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={18} />
                            Kembali ke Beranda
                        </a>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                        <p className="text-xl text-indigo-100 max-w-2xl">
                            Tips, tutorial, dan insight seputar web development, desain, dan digital marketing.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Search & Filter */}
                <div className="flex flex-col lg:flex-row gap-4 mb-10">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari artikel..."
                            className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>

                    {/* Category Filter - Desktop */}
                    <div className="hidden lg:flex gap-2">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filter - Mobile */}
                <div className="lg:hidden mb-6 overflow-x-auto pb-2">
                    <div className="flex gap-2 min-w-max">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                    {filteredPosts.length} artikel ditemukan
                    {selectedCategory !== 'Semua' && ` dalam kategori "${selectedCategory}"`}
                    {searchQuery && ` untuk "${searchQuery}"`}
                </p>

                {/* Posts Grid */}
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-slate-500 dark:text-slate-400 mb-4">
                            Tidak ada artikel yang ditemukan.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('Semua');
                            }}
                            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                        >
                            Reset filter
                        </button>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
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

                                    <h2 className="text-lg font-semibold dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <a
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 group/link"
                                    >
                                        Baca Selengkapnya
                                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
