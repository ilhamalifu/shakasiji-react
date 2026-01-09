import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Bell } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
            <div className="text-center max-w-lg">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30"
                >
                    <Clock size={48} className="text-white" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Segera Hadir
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 text-lg mb-8"
                >
                    Kami sedang mempersiapkan sesuatu yang keren untuk Anda.
                    Pantau terus untuk update terbaru!
                </motion.p>

                {/* Notification Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <div className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email Anda"
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors">
                            <Bell size={18} />
                            Notify
                        </button>
                    </div>
                </motion.div>

                {/* Back Button */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    <ArrowLeft size={18} />
                    Kembali ke Beranda
                </motion.a>
            </div>
        </div>
    );
}
