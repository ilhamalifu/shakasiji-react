import { useState, useEffect, useCallback } from 'react';

/**
 * Blog Storage Abstraction Layer
 * This makes it easy to migrate from localStorage to Firebase later
 * Just replace the storage methods without changing the hook interface
 */

// ============================================
// STORAGE LAYER - Replace this section for Firebase migration
// ============================================
const STORAGE_KEY = 'blog_posts';

const storageLayer = {
    async getAll() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    async save(posts) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    },

    async add(post) {
        const posts = await this.getAll();
        posts.unshift(post);
        await this.save(posts);
        return post;
    },

    async update(id, updates) {
        const posts = await this.getAll();
        const index = posts.findIndex((p) => p.id === id);
        if (index !== -1) {
            posts[index] = { ...posts[index], ...updates, updatedAt: new Date().toISOString() };
            await this.save(posts);
            return posts[index];
        }
        return null;
    },

    async delete(id) {
        const posts = await this.getAll();
        const filtered = posts.filter((p) => p.id !== id);
        await this.save(filtered);
        return true;
    },

    async getById(id) {
        const posts = await this.getAll();
        return posts.find((p) => p.id === id) || null;
    },
};
// ============================================
// END STORAGE LAYER
// ============================================

// Initial seed data
const INITIAL_POSTS = [
    {
        id: '1',
        title: 'Mengapa Website Cepat Penting untuk Bisnis Anda di 2025',
        slug: 'mengapa-website-cepat-penting',
        category: 'Web Development',
        excerpt: 'Pelajari mengapa kecepatan website mempengaruhi konversi dan bagaimana cara mengoptimasinya.',
        content: `<p>Kecepatan website adalah salah satu faktor terpenting dalam kesuksesan bisnis online Anda. Studi menunjukkan bahwa 53% pengunjung mobile akan meninggalkan halaman jika loading lebih dari 3 detik.</p>
    
<h2>Mengapa Kecepatan Penting?</h2>
<p>Website yang cepat memberikan pengalaman pengguna yang lebih baik, meningkatkan SEO ranking, dan pada akhirnya meningkatkan konversi dan penjualan.</p>

<h2>Tips Optimasi Kecepatan</h2>
<ul>
<li>Kompres gambar dengan format modern seperti WebP</li>
<li>Gunakan CDN untuk distribusi konten</li>
<li>Minimize CSS dan JavaScript</li>
<li>Implementasi lazy loading</li>
</ul>`,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        published: true,
        createdAt: '2025-11-04T10:00:00Z',
        updatedAt: '2025-11-04T10:00:00Z',
        readTime: '5 menit baca',
    },
    {
        id: '2',
        title: 'Panduan Lengkap SEO untuk UMKM Indonesia',
        slug: 'panduan-lengkap-seo-umkm',
        category: 'SEO',
        excerpt: 'Strategi SEO praktis yang bisa langsung diterapkan untuk meningkatkan visibilitas bisnis Anda online.',
        content: `<p>SEO atau Search Engine Optimization adalah strategi penting untuk membantu bisnis Anda ditemukan di Google. Berikut panduan lengkap untuk UMKM.</p>

<h2>Keyword Research</h2>
<p>Mulai dengan riset kata kunci yang relevan dengan bisnis Anda. Gunakan tools gratis seperti Google Keyword Planner.</p>

<h2>On-Page SEO</h2>
<p>Optimasi halaman website Anda dengan title tag, meta description, dan heading yang tepat.</p>

<h2>Local SEO</h2>
<p>Daftarkan bisnis Anda di Google My Business untuk meningkatkan visibilitas di pencarian lokal.</p>`,
        image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        published: true,
        createdAt: '2025-11-03T10:00:00Z',
        updatedAt: '2025-11-03T10:00:00Z',
        readTime: '8 menit baca',
    },
    {
        id: '3',
        title: 'Tren Desain Website 2025 yang Wajib Anda Tahu',
        slug: 'tren-desain-website-2025',
        category: 'Desain',
        excerpt: 'Temukan tren desain terbaru untuk membuat website yang memukau dan meningkatkan engagement.',
        content: `<p>Desain website terus berkembang. Berikut tren-tren yang akan mendominasi tahun 2025.</p>

<h2>Dark Mode</h2>
<p>Semakin banyak website yang menyediakan opsi dark mode untuk kenyamanan pengguna.</p>

<h2>Micro-interactions</h2>
<p>Animasi kecil yang memberikan feedback kepada pengguna membuat website terasa lebih hidup.</p>

<h2>3D Elements</h2>
<p>Elemen 3D yang subtle dapat meningkatkan ketertarikan visual website Anda.</p>`,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
        author: 'Admin',
        published: true,
        createdAt: '2025-10-30T10:00:00Z',
        updatedAt: '2025-10-30T10:00:00Z',
        readTime: '4 menit baca',
    },
];

export function useBlogPosts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load posts
    const loadPosts = useCallback(async () => {
        try {
            setIsLoading(true);
            let data = await storageLayer.getAll();

            // Initialize with seed data if empty
            if (data.length === 0) {
                await storageLayer.save(INITIAL_POSTS);
                data = INITIAL_POSTS;
            }

            setPosts(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    // Create post
    const createPost = async (postData) => {
        try {
            const newPost = {
                ...postData,
                id: Date.now().toString(),
                slug: generateSlug(postData.title),
                author: 'Admin',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                readTime: calculateReadTime(postData.content),
            };
            await storageLayer.add(newPost);
            await loadPosts();
            return { success: true, post: newPost };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    // Update post
    const updatePost = async (id, postData) => {
        try {
            const updated = await storageLayer.update(id, {
                ...postData,
                slug: generateSlug(postData.title),
                readTime: calculateReadTime(postData.content),
            });
            await loadPosts();
            return { success: true, post: updated };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    // Delete post
    const deletePost = async (id) => {
        try {
            await storageLayer.delete(id);
            await loadPosts();
            return { success: true };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    // Get single post
    const getPost = async (id) => {
        return await storageLayer.getById(id);
    };

    // Get published posts only (for frontend)
    const getPublishedPosts = () => {
        return posts.filter((p) => p.published);
    };

    return {
        posts,
        isLoading,
        error,
        createPost,
        updatePost,
        deletePost,
        getPost,
        getPublishedPosts,
        reload: loadPosts,
    };
}

// Helper functions
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

function calculateReadTime(content) {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} menit baca`;
}

export default useBlogPosts;
