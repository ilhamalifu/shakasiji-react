import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight
} from 'lucide-react';

const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { id: 'posts', label: 'Artikel Blog', icon: FileText, href: '/admin/posts' },
    { id: 'settings', label: 'Pengaturan', icon: Settings, href: '/admin/settings' },
];

export default function AdminLayout({ children, currentPage = 'dashboard' }) {
    const { user, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigation = (href) => {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setIsSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-800 shadow-xl z-50 transform transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
                            SS
                        </div>
                        <div>
                            <div className="font-semibold text-slate-900 dark:text-white">Shaka Siji</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentPage === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.href)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${isActive
                                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium'
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                                {isActive && <ChevronRight size={16} className="ml-auto" />}
                            </button>
                        );
                    })}
                </nav>

                {/* User & Logout */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold">
                            {user?.name?.charAt(0) || 'A'}
                        </div>
                        <div>
                            <div className="font-medium text-slate-900 dark:text-white text-sm">{user?.name || 'Admin'}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</div>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                        <LogOut size={18} />
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-64">
                {/* Header */}
                <header className="sticky top-0 z-30 bg-white dark:bg-slate-800 shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                        >
                            <Menu size={24} className="text-slate-600 dark:text-slate-300" />
                        </button>
                        <h1 className="text-lg font-semibold text-slate-900 dark:text-white capitalize">
                            {navItems.find((i) => i.id === currentPage)?.label || 'Dashboard'}
                        </h1>
                        <div className="w-10" /> {/* Spacer for alignment */}
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
