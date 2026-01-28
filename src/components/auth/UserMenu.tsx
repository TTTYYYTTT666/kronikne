'use client';

import { useState, useRef, useEffect } from 'react';
import { logout } from '@/actions/auth-actions';
import Link from 'next/link';

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    carBrand?: string | null;
    role?: string | null;
}

interface UserMenuProps {
    user?: User;
}

export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isProfileIncomplete = !user?.carBrand;
    const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER';

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!user) {
        return (
            <a
                href="/giris"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors text-sm"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Giriş Yap
            </a>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none relative"
            >
                {user.image ? (
                    <img
                        src={user.image}
                        alt={user.name || 'User'}
                        className={`w-10 h-10 rounded-full border-2 transition-colors ${user.role === 'OWNER' ? 'border-red-500' :
                                user.role === 'ADMIN' ? 'border-orange-500' :
                                    'border-emerald-500/50 hover:border-emerald-500'
                            }`}
                    />
                ) : (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${user.role === 'OWNER' ? 'bg-red-500' :
                            user.role === 'ADMIN' ? 'bg-orange-500' :
                                'bg-emerald-500'
                        }`}>
                        {user.name?.[0] || 'U'}
                    </div>
                )}
                {/* Warning badge for incomplete profile */}
                {isProfileIncomplete && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                        !
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#18181b] rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.name || 'Kullanıcı'}</p>
                            {user.role === 'OWNER' && (
                                <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded">OWNER</span>
                            )}
                            {user.role === 'ADMIN' && (
                                <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-bold rounded">ADMIN</span>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>

                    {/* Admin Panel Link */}
                    {isAdmin && (
                        <Link
                            href="/admin"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center gap-2 border-b border-gray-200 dark:border-zinc-800"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            🛡️ Admin Paneli
                        </Link>
                    )}

                    {/* Bilgilerim Link */}
                    <Link
                        href="/bilgilerim"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Bilgilerim
                        {isProfileIncomplete && (
                            <span className="ml-auto bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs px-2 py-0.5 rounded-full">
                                Eksik
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={() => logout()}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Çıkış Yap
                    </button>
                </div>
            )}
        </div>
    );
}
