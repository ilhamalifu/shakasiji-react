import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle, Send, Palette } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const benefits = [
    'Gaji kompetitif sesuai pengalaman',
    'Jam kerja fleksibel (WFH/WFO)',
    'Lingkungan kerja yang supportive',
    'Kesempatan belajar dan berkembang',
    'Proyek beragam dan menantang',
    'Bonus performance',
];

const jobs = [
    {
        id: 1,
        title: 'Graphic Designer',
        type: 'Full-time',
        location: 'Surabaya / Remote',
        department: 'Creative',
        description: 'Kami mencari Graphic Designer yang kreatif dan passionate untuk bergabung dengan tim kreatif kami. Anda akan bertanggung jawab untuk menciptakan visual yang menarik untuk berbagai kebutuhan klien.',
        requirements: [
            'Minimal 2 tahun pengalaman sebagai Graphic Designer',
            'Mahir menggunakan Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
            'Familiar dengan Figma atau tools desain UI/UX lainnya',
            'Memiliki portofolio yang kuat menunjukkan berbagai style desain',
            'Memahami prinsip desain, typography, dan color theory',
            'Mampu bekerja dengan deadline dan multiple projects',
            'Kreatif, detail-oriented, dan mampu menerima feedback',
            'Kemampuan komunikasi yang baik',
        ],
        niceToHave: [
            'Pengalaman dengan motion graphics atau video editing',
            'Familiar dengan social media content design',
            'Pengalaman dengan branding dan visual identity',
            'Bisa ilustrasi digital',
        ],
        responsibilities: [
            'Membuat desain visual untuk kebutuhan klien (branding, marketing materials, social media)',
            'Berkolaborasi dengan tim untuk mengembangkan konsep kreatif',
            'Memastikan konsistensi brand dalam semua deliverables',
            'Mengikuti tren desain terkini dan mengaplikasikannya dalam pekerjaan',
            'Melakukan revisi berdasarkan feedback klien dan tim',
            'Mengelola file dan asset desain dengan rapi',
        ],
    },
];

export default function Careers() {
    const handleApply = (jobTitle) => {
        const subject = encodeURIComponent(`Lamaran: ${jobTitle} - Shaka Siji Creative`);
        const body = encodeURIComponent(`Halo Tim HR Shaka Siji Creative,

Saya tertarik untuk melamar posisi ${jobTitle} di perusahaan Anda.

Nama: [Nama Lengkap]
Email: [Email]
No. HP: [Nomor HP]
Link Portofolio: [Link portofolio Anda]

[Ceritakan singkat tentang diri Anda dan mengapa Anda tertarik dengan posisi ini]

Terima kasih atas kesempatannya.

Salam,
[Nama Anda]`);

        window.location.href = `mailto:admin@hafaracreative.com?subject=${subject}&body=${body}`;
    };

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
                            <Briefcase size={40} />
                            <h1 className="text-4xl md:text-5xl font-bold">Karir</h1>
                        </div>
                        <p className="text-xl text-indigo-100 max-w-2xl">
                            Bergabunglah dengan tim kami dan bantu wujudkan solusi digital yang luar biasa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl font-bold dark:text-white mb-2">Mengapa Bergabung dengan Kami?</h2>
                        <p className="text-slate-600 dark:text-slate-300">Kami percaya tim yang bahagia menghasilkan karya terbaik.</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                <span className="dark:text-white">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl font-bold dark:text-white mb-2">Lowongan Tersedia</h2>
                        <p className="text-slate-600 dark:text-slate-300">Temukan posisi yang sesuai dengan skill dan passion Anda.</p>
                    </motion.div>

                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-8"
                        >
                            {/* Job Header */}
                            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                        <Palette size={28} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold dark:text-white">{job.title}</h3>
                                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500 dark:text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={14} />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {job.department}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-slate-600 dark:text-slate-300">{job.description}</p>
                            </div>

                            {/* Job Details */}
                            <div className="p-6 space-y-6">
                                {/* Requirements */}
                                <div>
                                    <h4 className="font-semibold dark:text-white mb-3">Persyaratan:</h4>
                                    <ul className="space-y-2">
                                        {job.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                                <CheckCircle size={16} className="text-indigo-500 mt-1 flex-shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Nice to Have */}
                                <div>
                                    <h4 className="font-semibold dark:text-white mb-3">Nilai Plus:</h4>
                                    <ul className="space-y-2">
                                        {job.niceToHave.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                                <span className="text-indigo-500 mt-1">+</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Responsibilities */}
                                <div>
                                    <h4 className="font-semibold dark:text-white mb-3">Tanggung Jawab:</h4>
                                    <ul className="space-y-2">
                                        {job.responsibilities.map((resp, index) => (
                                            <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* How to Apply */}
                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <h4 className="font-semibold dark:text-white mb-3">Cara Melamar:</h4>
                                    <ol className="space-y-2 text-slate-600 dark:text-slate-300 mb-6">
                                        <li>1. Siapkan CV dan portofolio Anda (link atau PDF)</li>
                                        <li>2. Klik tombol "Lamar Sekarang" di bawah</li>
                                        <li>3. Isi template email dengan data diri Anda</li>
                                        <li>4. Lampirkan CV dan link portofolio</li>
                                        <li>5. Kirim ke admin@hafaracreative.com</li>
                                    </ol>
                                    <button
                                        onClick={() => handleApply(job.title)}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                                    >
                                        <Send size={18} />
                                        Lamar Sekarang
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* No matching position */}
            <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-xl font-semibold dark:text-white mb-2">
                        Tidak menemukan posisi yang cocok?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Kirim CV Anda dan kami akan menghubungi jika ada posisi yang sesuai.
                    </p>
                    <a
                        href="mailto:admin@hafaracreative.com?subject=Open Application - Shaka Siji Creative"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                    >
                        Kirim Open Application
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
