import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Default admin credentials (can be changed)
const DEFAULT_ADMIN = {
    email: 'admin@shakasiji.com',
    password: 'admin123',
    name: 'Admin',
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const savedUser = localStorage.getItem('admin_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    // Initialize admin credentials if not exists
    useEffect(() => {
        const credentials = localStorage.getItem('admin_credentials');
        if (!credentials) {
            localStorage.setItem('admin_credentials', JSON.stringify(DEFAULT_ADMIN));
        }
    }, []);

    const login = async (email, password) => {
        // Get credentials from storage (allows for future Firebase migration)
        const credentials = JSON.parse(localStorage.getItem('admin_credentials') || JSON.stringify(DEFAULT_ADMIN));

        if (email === credentials.email && password === credentials.password) {
            const userData = { email, name: credentials.name };
            setUser(userData);
            localStorage.setItem('admin_user', JSON.stringify(userData));
            return { success: true };
        }
        return { success: false, error: 'Email atau password salah' };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('admin_user');
    };

    const updateCredentials = (newCredentials) => {
        const current = JSON.parse(localStorage.getItem('admin_credentials') || '{}');
        const updated = { ...current, ...newCredentials };
        localStorage.setItem('admin_credentials', JSON.stringify(updated));
    };

    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        updateCredentials,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthContext;
