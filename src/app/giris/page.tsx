'use client';

import { login } from '@/actions/auth-actions';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<{ email?: boolean; password?: boolean }>({});

    async function handleCredentialsLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFieldErrors({});

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Client-side validation
        if (!email || !password) {
            setError('Email ve şifre gereklidir');
            setFieldErrors({ email: !email, password: !password });
            setLoading(false);
            return;
        }

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError('Yanlış email veya şifre');
                setFieldErrors({ email: true, password: true });
            } else {
                router.push('/');
                router.refresh();
            }
        } catch {
            setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    }

    const inputBaseClass = "appearance-none rounded-xl relative block w-full px-4 py-3 border placeholder-gray-500 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-2 sm:text-sm transition-colors";
    const inputNormalClass = `${inputBaseClass} border-gray-300 dark:border-zinc-600 focus:ring-emerald-500 focus:border-emerald-500`;
    const inputErrorClass = `${inputBaseClass} border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50/50 dark:bg-red-900/10`;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        Tekrar Hoşgeldiniz
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Hesabınıza giriş yapın
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    {/* Google Login */}
                    <button
                        onClick={() => login()}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl shadow-sm bg-white dark:bg-zinc-700 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-600 transition-colors"
                    >
                        <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Google ile Giriş Yap
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-zinc-600" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-zinc-800 text-gray-500">veya email ile</span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center gap-3">
                            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</span>
                        </div>
                    )}

                    {/* Email Form */}
                    <form onSubmit={handleCredentialsLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email Adresi
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className={fieldErrors.email ? inputErrorClass : inputNormalClass}
                                placeholder="ornek@email.com"
                                onChange={() => {
                                    if (fieldErrors.email) {
                                        setFieldErrors(prev => ({ ...prev, email: false }));
                                        setError('');
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Şifre
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className={fieldErrors.password ? inputErrorClass : inputNormalClass}
                                placeholder="••••••••"
                                onChange={() => {
                                    if (fieldErrors.password) {
                                        setFieldErrors(prev => ({ ...prev, password: false }));
                                        setError('');
                                    }
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Giriş Yapılıyor...
                                </span>
                            ) : 'Giriş Yap'}
                        </button>
                    </form>

                    <div className="text-sm text-center">
                        <span className="text-gray-500 dark:text-gray-400">Hesabınız yok mu? </span>
                        <Link href="/kayit" className="font-medium text-emerald-600 hover:text-emerald-500">
                            Şimdi Kayıt Olun
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
