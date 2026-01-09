import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Starter',
        description: 'Cocok untuk bisnis kecil yang baru memulai online',
        price: '500',
        currency: 'rb',
        period: 'proyek',
        icon: Zap,
        features: [
            'Landing Page Custom',
            'Desain Responsif Mobile',
            'Setup SEO Dasar',
            'Integrasi Form Kontak',
            '3 Kali Revisi',
            'Support 1 Bulan Gratis',
        ],
        cta: 'Mulai Sekarang',
        popular: false,
    },
    {
        name: 'Profesional',
        description: 'Ideal untuk bisnis berkembang yang butuh lebih',
        price: '2',
        currency: 'jt',
        period: 'proyek',
        icon: Rocket,
        features: [
            'Website Multi-halaman (max 10)',
            'Desain UI/UX Premium',
            'Optimasi SEO Lengkap',
            'Integrasi CMS',
            'Dashboard Analitik',
            'Revisi Unlimited',
            'Support 3 Bulan Gratis',
            'Optimasi Performa',
        ],
        cta: 'Paling Populer',
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'Untuk organisasi besar dengan kebutuhan khusus',
        price: 'Custom',
        currency: '',
        period: '',
        icon: Building2,
        features: [
            'Halaman Unlimited',
            'Aplikasi Web Custom',
            'Integrasi E-commerce',
            'Pengembangan API',
            'Arsitektur Database',
            'Project Manager Dedicated',
            'Support 12 Bulan',
            'Response Time Prioritas',
            'Training & Dokumentasi',
        ],
        cta: 'Hubungi Kami',
        popular: false,
    },
];

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

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
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
                        Paket Harga
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 dark:text-white">
                        Harga Transparan untuk Setiap Kebutuhan
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Tanpa biaya tersembunyi. Pilih paket yang sesuai dengan kebutuhan bisnis Anda dan kembangkan seiring pertumbuhan.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {pricingPlans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${plan.popular
                                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/30 ring-4 ring-indigo-500/20'
                                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                                            Paling Populer
                                        </span>
                                    </div>
                                )}

                                {/* Icon & Name */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular
                                            ? 'bg-white/20'
                                            : 'bg-indigo-50 dark:bg-indigo-900/30'
                                            }`}
                                    >
                                        <IconComponent
                                            size={24}
                                            className={plan.popular ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}
                                        />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'dark:text-white'}`}>
                                            {plan.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-sm mb-6 ${plan.popular ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        {plan.currency && (
                                            <span className={`text-lg ${plan.popular ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                                Rp
                                            </span>
                                        )}
                                        <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'dark:text-white'}`}>
                                            {plan.price}
                                        </span>
                                        {plan.currency && (
                                            <span className={`text-lg ${plan.popular ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                                {plan.currency}
                                            </span>
                                        )}
                                    </div>
                                    {plan.period && (
                                        <p className={`text-sm mt-1 ${plan.popular ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                            per {plan.period}
                                        </p>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div
                                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-white/20' : 'bg-green-100 dark:bg-green-900/30'
                                                    }`}
                                            >
                                                <Check
                                                    size={12}
                                                    className={plan.popular ? 'text-white' : 'text-green-600 dark:text-green-400'}
                                                />
                                            </div>
                                            <span className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href="/#contact"
                                    className={`block w-full py-3 px-6 text-center font-semibold rounded-lg transition-all duration-200 ${plan.popular
                                        ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-sm text-slate-500 dark:text-slate-400"
                >
                    Semua harga dalam Rupiah. Harga final dapat bervariasi berdasarkan kompleksitas proyek.{' '}
                    <a href="/#contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Hubungi kami
                    </a>{' '}
                    untuk penawaran khusus.
                </motion.p>
            </div>
        </section>
    );
}
