import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { FileText, Eye, TrendingUp, Clock } from 'lucide-react';

export default function Dashboard() {
    const { posts, isLoading } = useBlogPosts();

    const stats = [
        {
            label: 'Total Artikel',
            value: posts.length,
            icon: FileText,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        },
        {
            label: 'Artikel Published',
            value: posts.filter((p) => p.published).length,
            icon: Eye,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
        },
        {
            label: 'Draft',
            value: posts.filter((p) => !p.published).length,
            icon: Clock,
            color: 'from-orange-500 to-amber-500',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        },
        {
            label: 'Kategori',
            value: [...new Set(posts.map((p) => p.category))].length,
            icon: TrendingUp,
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        },
    ];

    const recentPosts = posts.slice(0, 5);

    return (
        <AdminLayout currentPage="dashboard">
            <div className="space-y-6">
                {/* Welcome */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
                    <h2 className="text-2xl font-bold">Selamat Datang, Admin! 👋</h2>
                    <p className="mt-1 text-indigo-100">
                        Kelola artikel blog dan konten website Anda dari sini.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                                        <div className={`bg-gradient-to-r ${stat.color} p-2 rounded-lg`}>
                                            <Icon size={20} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                                            {isLoading ? '...' : stat.value}
                                        </div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Recent Posts */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900 dark:text-white">Artikel Terbaru</h3>
                        <a
                            href="/admin/posts"
                            onClick={(e) => {
                                e.preventDefault();
                                window.history.pushState({}, '', '/admin/posts');
                                window.dispatchEvent(new PopStateEvent('popstate'));
                            }}
                            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Lihat Semua
                        </a>
                    </div>
                    <div className="divide-y divide-slate-200 dark:divide-slate-700">
                        {isLoading ? (
                            <div className="p-5 text-center text-slate-500">Memuat...</div>
                        ) : recentPosts.length === 0 ? (
                            <div className="p-5 text-center text-slate-500">Belum ada artikel</div>
                        ) : (
                            recentPosts.map((post) => (
                                <div key={post.id} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-16 h-12 rounded-lg object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-slate-900 dark:text-white truncate">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                            <span>{post.category}</span>
                                            <span>•</span>
                                            <span>{new Date(post.createdAt).toLocaleDateString('id-ID')}</span>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${post.published
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                                        }`}>
                                        {post.published ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
