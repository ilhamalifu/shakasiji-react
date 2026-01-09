import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import {
    ArrowLeft,
    Save,
    Image as ImageIcon,
    Eye,
    Bold,
    Italic,
    List,
    Heading2,
    Link as LinkIcon,
    AlignLeft,
    AlertCircle,
    Check
} from 'lucide-react';

const CATEGORIES = [
    'Web Development',
    'SEO',
    'Desain',
    'Digital Marketing',
    'Bisnis',
    'Tutorial',
    'Berita',
];

export default function BlogEditor({ postId }) {
    const { createPost, updatePost, getPost } = useBlogPosts();
    const [isLoading, setIsLoading] = useState(postId && postId !== 'new');
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const contentRef = useRef(null);

    const [formData, setFormData] = useState({
        title: '',
        category: 'Web Development',
        excerpt: '',
        content: '',
        image: '',
        published: false,
    });

    // Load existing post if editing
    useEffect(() => {
        if (postId && postId !== 'new') {
            loadPost();
        }
    }, [postId]);

    const loadPost = async () => {
        const post = await getPost(postId);
        if (post) {
            setFormData({
                title: post.title,
                category: post.category,
                excerpt: post.excerpt,
                content: post.content,
                image: post.image,
                published: post.published,
            });
        }
        setIsLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage({ type: '', text: '' });

        // Validation
        if (!formData.title.trim()) {
            setMessage({ type: 'error', text: 'Judul artikel harus diisi' });
            setIsSaving(false);
            return;
        }

        if (!formData.content.trim()) {
            setMessage({ type: 'error', text: 'Konten artikel harus diisi' });
            setIsSaving(false);
            return;
        }

        if (!formData.image.trim()) {
            setMessage({ type: 'error', text: 'URL gambar harus diisi' });
            setIsSaving(false);
            return;
        }

        let result;
        if (postId && postId !== 'new') {
            result = await updatePost(postId, formData);
        } else {
            result = await createPost(formData);
        }

        if (result.success) {
            setMessage({ type: 'success', text: postId && postId !== 'new' ? 'Artikel berhasil diperbarui!' : 'Artikel berhasil dibuat!' });
            setTimeout(() => {
                navigateTo('/admin/posts');
            }, 1500);
        } else {
            setMessage({ type: 'error', text: result.error || 'Terjadi kesalahan' });
        }

        setIsSaving(false);
    };

    const navigateTo = (path) => {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    const insertFormatting = (tag) => {
        const textarea = contentRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = formData.content.substring(start, end);

        let wrapper = '';
        switch (tag) {
            case 'bold':
                wrapper = `<strong>${selectedText || 'teks tebal'}</strong>`;
                break;
            case 'italic':
                wrapper = `<em>${selectedText || 'teks miring'}</em>`;
                break;
            case 'h2':
                wrapper = `<h2>${selectedText || 'Heading'}</h2>`;
                break;
            case 'ul':
                wrapper = `<ul>\n<li>${selectedText || 'Item 1'}</li>\n<li>Item 2</li>\n</ul>`;
                break;
            case 'link':
                wrapper = `<a href="URL">${selectedText || 'teks link'}</a>`;
                break;
            case 'p':
                wrapper = `<p>${selectedText || 'Paragraf baru'}</p>`;
                break;
            default:
                return;
        }

        const newContent = formData.content.substring(0, start) + wrapper + formData.content.substring(end);
        setFormData({ ...formData, content: newContent });
    };

    if (isLoading) {
        return (
            <AdminLayout currentPage="posts">
                <div className="flex items-center justify-center h-64">
                    <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout currentPage="posts">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => navigateTo('/admin/posts')}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                        <ArrowLeft size={20} />
                        Kembali
                    </button>
                    <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.published}
                                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-sm text-slate-600 dark:text-slate-300">Publish</span>
                        </label>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 transition-colors"
                        >
                            {isSaving ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Save size={18} />
                            )}
                            {postId && postId !== 'new' ? 'Perbarui' : 'Simpan'}
                        </button>
                    </div>
                </div>

                {/* Message */}
                {message.text && (
                    <div className={`p-4 rounded-lg flex items-center gap-2 ${message.type === 'error'
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800'
                        : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800'
                        }`}>
                        {message.type === 'error' ? <AlertCircle size={18} /> : <Check size={18} />}
                        {message.text}
                    </div>
                )}

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Title */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Judul Artikel *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Masukkan judul artikel..."
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Content Editor */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Konten Artikel *
                            </label>

                            {/* Toolbar */}
                            <div className="flex flex-wrap gap-1 mb-3 p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <button type="button" onClick={() => insertFormatting('bold')} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded" title="Bold">
                                    <Bold size={16} />
                                </button>
                                <button type="button" onClick={() => insertFormatting('italic')} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded" title="Italic">
                                    <Italic size={16} />
                                </button>
                                <button type="button" onClick={() => insertFormatting('h2')} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded" title="Heading">
                                    <Heading2 size={16} />
                                </button>
                                <button type="button" onClick={() => insertFormatting('ul')} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded" title="List">
                                    <List size={16} />
                                </button>
                                <button type="button" onClick={() => insertFormatting('link')} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded" title="Link">
                                    <LinkIcon size={16} />
                                </button>
                                <button type="button" onClick={() => insertFormatting('p')} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded" title="Paragraph">
                                    <AlignLeft size={16} />
                                </button>
                            </div>

                            <textarea
                                ref={contentRef}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="Tulis konten artikel dengan HTML tags..."
                                rows={15}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                            />
                            <p className="text-xs text-slate-500 mt-2">
                                Gunakan HTML tags seperti &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;a&gt;
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Image */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                URL Gambar *
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="url"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    placeholder="https://..."
                                    className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            {formData.image && (
                                <img
                                    src={formData.image}
                                    alt="Preview"
                                    className="mt-3 w-full h-32 object-cover rounded-lg"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            )}
                        </div>

                        {/* Category */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Kategori
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                {CATEGORIES.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Excerpt */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Ringkasan / Excerpt
                            </label>
                            <textarea
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                placeholder="Deskripsi singkat artikel..."
                                rows={3}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
