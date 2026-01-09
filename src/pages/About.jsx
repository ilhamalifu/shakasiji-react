import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Award, Heart, Lightbulb, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
    {
        icon: Heart,
        title: 'Dedikasi',
        description: 'Kami berkomitmen penuh pada setiap proyek, memperlakukan bisnis klien seperti bisnis kami sendiri.',
    },
    {
        icon: Lightbulb,
        title: 'Inovasi',
        description: 'Selalu mengikuti tren terbaru dan menerapkan solusi kreatif untuk setiap tantangan.',
    },
    {
        icon: Award,
        title: 'Kualitas',
        description: 'Tidak ada kompromi untuk kualitas. Setiap detail diperhatikan dengan cermat.',
    },
    {
        icon: Users,
        title: 'Kolaborasi',
        description: 'Bekerja sama dengan klien sebagai partner, bukan sekadar vendor.',
    },
];

const stats = [
    { value: '120+', label: 'Klien Terlayani' },
    { value: '200+', label: 'Proyek Selesai' },
    { value: '5+', label: 'Tahun Pengalaman' },
    { value: '4.9/5', label: 'Rating Kepuasan' },
];

const team = [
    {
        name: 'Ahmad Fauzi',
        role: 'Founder & CEO',
        image: 'https://i.pravatar.cc/200?img=11',
    },
    {
        name: 'Siti Rahayu',
        role: 'Creative Director',
        image: 'https://i.pravatar.cc/200?img=5',
    },
    {
        name: 'Budi Santoso',
        role: 'Lead Developer',
        image: 'https://i.pravatar.cc/200?img=12',
    },
    {
        name: 'Dewi Lestari',
        role: 'Marketing Manager',
        image: 'https://i.pravatar.cc/200?img=9',
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <Navbar />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <a href="/" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={18} />
                            Kembali ke Beranda
                        </a>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Tentang Shaka Siji Creative
                        </h1>
                        <p className="text-xl text-indigo-100 leading-relaxed">
                            Kami adalah tim kreatif yang berdedikasi untuk membantu bisnis berkembang
                            melalui solusi digital yang inovatif dan efektif.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold dark:text-white mb-6">Cerita Kami</h2>
                            <div className="space-y-4 text-slate-600 dark:text-slate-300">
                                <p>
                                    Shaka Siji Creative didirikan pada tahun 2020 di Surabaya dengan satu visi sederhana:
                                    membantu bisnis lokal bersaing di era digital dengan solusi yang terjangkau namun berkualitas tinggi.
                                </p>
                                <p>
                                    Bermula dari tim kecil yang terdiri dari desainer dan developer yang passionate,
                                    kami telah berkembang menjadi agensi digital full-service yang telah melayani
                                    lebih dari 120 klien dari berbagai industri.
                                </p>
                                <p>
                                    Kami percaya bahwa setiap bisnis, besar maupun kecil, berhak memiliki presence digital
                                    yang profesional. Itulah mengapa kami selalu berusaha memberikan nilai terbaik
                                    dengan harga yang kompetitif.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
                                alt="Tim Shaka Siji Creative"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-xl shadow-xl">
                                <div className="text-3xl font-bold">5+</div>
                                <div className="text-sm text-indigo-200">Tahun Pengalaman</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 mt-2">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold dark:text-white mb-4">Nilai-Nilai Kami</h2>
                        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Prinsip-prinsip yang menjadi landasan dalam setiap pekerjaan kami.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                        <Icon size={24} className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <h3 className="font-semibold dark:text-white mb-2">{value.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold dark:text-white mb-4">Tim Kami</h2>
                        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Orang-orang hebat di balik kesuksesan setiap proyek.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-white dark:ring-slate-700 shadow-lg"
                                />
                                <h3 className="font-semibold dark:text-white">{member.name}</h3>
                                <p className="text-sm text-indigo-600 dark:text-indigo-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Rocket size={48} className="mx-auto text-indigo-600 dark:text-indigo-400 mb-6" />
                        <h2 className="text-3xl font-bold dark:text-white mb-4">
                            Siap Memulai Proyek Bersama?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            Ceritakan ide Anda dan mari wujudkan bersama.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all"
                        >
                            Hubungi Kami
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
