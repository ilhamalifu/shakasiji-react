import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, Search, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqCategories = [
    {
        name: 'Umum',
        questions: [
            {
                q: 'Apa saja layanan yang ditawarkan Shaka Siji Creative?',
                a: 'Kami menawarkan layanan lengkap meliputi pembuatan website, branding & desain, digital marketing, dan SEO. Semua layanan kami dirancang untuk membantu bisnis Anda berkembang secara online.',
            },
            {
                q: 'Berapa lama waktu pengerjaan proyek?',
                a: 'Waktu pengerjaan tergantung pada kompleksitas proyek. Landing page sederhana bisa selesai dalam 1-2 minggu, sedangkan website multi-halaman dengan fitur custom membutuhkan 4-8 minggu. Kami akan memberikan timeline yang jelas di awal proyek.',
            },
            {
                q: 'Apakah bisa konsultasi dulu sebelum memulai proyek?',
                a: 'Tentu! Kami menyediakan konsultasi gratis untuk mendiskusikan kebutuhan dan goals bisnis Anda. Hubungi kami melalui WhatsApp atau form kontak di website.',
            },
        ],
    },
    {
        name: 'Harga & Pembayaran',
        questions: [
            {
                q: 'Berapa biaya untuk membuat website?',
                a: 'Harga dimulai dari Rp 5.9 juta untuk landing page sederhana. Untuk website dengan fitur lebih lengkap, harga mulai dari Rp 15 juta. Kami akan memberikan penawaran detail setelah memahami kebutuhan Anda.',
            },
            {
                q: 'Bagaimana sistem pembayarannya?',
                a: 'Kami menggunakan sistem termin: 50% di awal sebagai DP, dan 50% setelah proyek selesai. Untuk proyek besar, bisa dibagi menjadi 3 termin. Pembayaran bisa melalui transfer bank.',
            },
            {
                q: 'Apakah ada biaya maintenance bulanan?',
                a: 'Tergantung paket yang dipilih. Paket Starter sudah termasuk 1 bulan support gratis, Profesional 3 bulan, dan Enterprise mendapat support penuh selama 12 bulan. Setelah itu, maintenance opsional dengan biaya yang akan diinformasikan.',
            },
        ],
    },
    {
        name: 'Teknis',
        questions: [
            {
                q: 'Teknologi apa yang digunakan untuk pembuatan website?',
                a: 'Kami menggunakan teknologi modern seperti React, Next.js, dan Tailwind CSS untuk frontend. Untuk backend dan database, kami menggunakan Node.js, PostgreSQL, atau Firebase tergantung kebutuhan proyek.',
            },
            {
                q: 'Apakah website yang dibuat responsif untuk mobile?',
                a: 'Ya, semua website yang kami buat 100% responsif dan dioptimasi untuk semua ukuran layar - desktop, tablet, dan mobile. Kami juga melakukan testing di berbagai browser.',
            },
            {
                q: 'Apakah saya bisa mengupdate konten sendiri?',
                a: 'Ya! Kami bisa mengintegrasikan CMS (Content Management System) sehingga Anda bisa mengupdate konten, gambar, dan artikel blog secara mandiri tanpa perlu pengetahuan coding.',
            },
            {
                q: 'Bagaimana dengan hosting dan domain?',
                a: 'Kami bisa membantu setup hosting dan domain. Biaya hosting dan domain terpisah dari biaya pembuatan website dan dibayar tahunan langsung ke provider.',
            },
        ],
    },
    {
        name: 'Proses Kerja',
        questions: [
            {
                q: 'Bagaimana proses kerja pembuatan website?',
                a: 'Proses kami meliputi: 1) Konsultasi & riset, 2) Desain mockup & approval, 3) Development, 4) Testing & revisi, 5) Launching. Anda akan mendapat update rutin di setiap tahap.',
            },
            {
                q: 'Berapa kali revisi yang diberikan?',
                a: 'Paket Starter mendapat 3 kali revisi, Profesional unlimited revisi (reasonable), dan Enterprise juga unlimited dengan prioritas response time.',
            },
            {
                q: 'Apakah akan mendapat source code setelah selesai?',
                a: 'Ya, setelah pembayaran lunas, Anda akan mendapat akses penuh ke source code, file desain, dan semua asset yang digunakan dalam proyek.',
            },
        ],
    },
];

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('Umum');
    const [openQuestions, setOpenQuestions] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    const toggleQuestion = (index) => {
        setOpenQuestions((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const currentCategory = faqCategories.find((c) => c.name === activeCategory);

    const filteredQuestions = searchQuery
        ? faqCategories.flatMap((c) =>
            c.questions.filter((q) =>
                q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.a.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
        : currentCategory?.questions || [];

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
                        <div className="flex items-center gap-4 mb-4">
                            <HelpCircle size={40} />
                            <h1 className="text-4xl md:text-5xl font-bold">FAQ</h1>
                        </div>
                        <p className="text-xl text-indigo-100 max-w-2xl">
                            Pertanyaan yang sering diajukan tentang layanan kami.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Search */}
                <div className="relative mb-8">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari pertanyaan..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Category Tabs */}
                {!searchQuery && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {faqCategories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category.name
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                )}

                {/* Questions */}
                <div className="space-y-4">
                    {filteredQuestions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                                <span className="font-medium dark:text-white pr-4">{item.q}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-slate-400 flex-shrink-0 transition-transform ${openQuestions[index] ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openQuestions[index] && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center"
                >
                    <h3 className="text-xl font-semibold dark:text-white mb-2">
                        Masih punya pertanyaan?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Tim kami siap membantu menjawab pertanyaan Anda.
                    </p>
                    <a
                        href="https://wa.me/6281234414314"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Hubungi via WhatsApp
                    </a>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}
