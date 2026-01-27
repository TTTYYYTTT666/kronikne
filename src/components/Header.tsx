'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const toolsMenu = [
    { href: '/karsilastir', label: '🔍 Araç Karşılaştırma', desc: '3 aracı yan yana karşılaştır' },
    { href: '/siralama', label: '🏆 Marka Sıralaması', desc: 'Güvenilirlik sıralaması' },
    { href: '/istatistikler', label: '📊 Arıza İstatistikleri', desc: 'Detaylı veri analizi' },
    { href: '/ekspertiz', label: '✅ Ekspertiz Checklist', desc: 'Alım öncesi kontrol listesi' },
    { href: '/bakim-hesapla', label: '🔧 Bakım Hesaplayıcı', desc: 'Yıllık maliyet tahmini' },
    { href: '/degerleme', label: '💰 Araç Değerleme', desc: 'İkinci el fiyat tahmini' },
    { href: '/parcalar', label: '🔩 Parça Fiyatları', desc: 'Marka bazlı karşılaştırma' },
    { href: '/deneyimler', label: '💬 Kullanıcı Deneyimleri', desc: 'Gerçek sahip yorumları' },
    { href: '/blog', label: '📰 Blog', desc: 'Haberler ve rehberler' },
];

export default function Header() {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsToolsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-shadow">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                            SORUNSUZAL
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link href="/markalar" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">
                            Markalar
                        </Link>

                        {/* Tools Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsToolsOpen(!isToolsOpen)}
                                className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                            >
                                Araçlar
                                <svg className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isToolsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-72 max-h-[400px] overflow-y-auto bg-white dark:bg-[#18181b] rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800 py-2 z-50">
                                    {toolsMenu.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsToolsOpen(false)}
                                            className="flex flex-col px-4 py-3 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">{item.label}</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/hakkimizda" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">
                            Hakkımızda
                        </Link>
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Tema değiştir"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Menü"
                        >
                            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex flex-col space-y-1">
                            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors py-2">
                                Ana Sayfa
                            </Link>
                            <Link href="/markalar" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors py-2">
                                Markalar
                            </Link>
                            <div className="py-2 font-medium text-emerald-600 dark:text-emerald-400">Araçlar</div>
                            {toolsMenu.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2 pl-4"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="/hakkimizda" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors py-2">
                                Hakkımızda
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

