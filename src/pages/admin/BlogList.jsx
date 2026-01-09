import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { Plus, Search, Edit, Trash2, Eye, MoreVertical, AlertCircle } from 'lucide-react';

export default function BlogList() {
    const { posts, isLoading, deletePost } = useBlogPosts();
    const [searchQuery, setSearchQuery] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = async (id) => {
        setIsDeleting(true);
        await deletePost(id);
        setIsDeleting(false);
        setDeleteConfirm(null);
    };

    const navigateTo = (path) => {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <AdminLayout currentPage="posts">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Artikel Blog</h2>
                        <p className="text-slate-500 dark:text-slate-400">Kelola semua artikel blog Anda</p>
                    </div>
                    <button
                        onClick={() => navigateTo('/admin/posts/new')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 transition-colors"
                    >
                        <Plus size={18} />
                        Artikel Baru
                    </button>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari artikel..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Posts Table */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    {isLoading ? (
                        <div className="p-8 text-center text-slate-500">
                            <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                            Memuat artikel...
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">
                            {searchQuery ? 'Tidak ada artikel yang cocok' : 'Belum ada artikel. Buat artikel pertama Anda!'}
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 dark:bg-slate-700/50">
                                    <tr>
                                        <th className="text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300">Artikel</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hidden md:table-cell">Kategori</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hidden sm:table-cell">Status</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hidden lg:table-cell">Tanggal</th>
                                        <th className="text-right px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {filteredPosts.map((post) => (
                                        <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-12 h-10 rounded-lg object-cover hidden sm:block"
                                                    />
                                                    <div className="min-w-0">
                                                        <div className="font-medium text-slate-900 dark:text-white truncate max-w-xs">
                                                            {post.title}
                                                        </div>
                                                        <div className="text-sm text-slate-500 dark:text-slate-400 md:hidden">
                                                            {post.category}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 hidden md:table-cell">
                                                <span className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                                                    {post.category}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 hidden sm:table-cell">
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${post.published
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                                                    }`}>
                                                    {post.published ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400 hidden lg:table-cell">
                                                {new Date(post.createdAt).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => navigateTo(`/admin/posts/${post.id}`)}
                                                        className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Edit size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirm(post)}
                                                        className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-sm w-full shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Hapus Artikel?</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            Apakah Anda yakin ingin menghapus artikel "<strong>{deleteConfirm.title}</strong>"? Tindakan ini tidak dapat dibatalkan.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                disabled={isDeleting}
                                className="flex-1 px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => handleDelete(deleteConfirm.id)}
                                disabled={isDeleting}
                                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isDeleting ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    'Hapus'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
