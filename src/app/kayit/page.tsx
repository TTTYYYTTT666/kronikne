'use client';

import { registerUser } from '@/actions/register-action';
import { brands } from '@/data/cars';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FieldErrors {
    name?: boolean;
    email?: boolean;
    password?: boolean;
    carBrand?: boolean;
    carModel?: boolean;
}

export default function RegisterPage() {
    const router = useRouter();
    const [selectedBrand, setSelectedBrand] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

    const selectedBrandData = brands.find(b => b.name === selectedBrand);
    const models = selectedBrandData?.models || [];

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFieldErrors({});

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const carBrand = formData.get('carBrand') as string;
        const carModel = formData.get('carModel') as string;

        // Client-side validation
        const errors: FieldErrors = {};
        if (!name) errors.name = true;
        if (!email) errors.email = true;
        if (!password) errors.password = true;
        if (!carBrand) errors.carBrand = true;
        if (!carModel) errors.carModel = true;

        if (Object.keys(errors).length > 0) {
            setError('Lütfen tüm alanları doldurun');
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Şifre en az 6 karakter olmalıdır');
            setFieldErrors({ password: true });
            setLoading(false);
            return;
        }

        try {
            await registerUser(formData);
            // Redirect handled in action
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Bir hata oluştu';

            if (errorMessage.includes('zaten kayıtlı')) {
                setError('Bu email adresi zaten kayıtlı');
                setFieldErrors({ email: true });
            } else {
                setError(errorMessage);
            }
            setLoading(false);
        }
    }

    const inputBaseClass = "appearance-none rounded-xl relative block w-full px-4 py-3 border placeholder-gray-500 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-2 sm:text-sm transition-colors";
    const inputNormalClass = `${inputBaseClass} border-gray-300 dark:border-zinc-600 focus:ring-emerald-500 focus:border-emerald-500`;
    const inputErrorClass = `${inputBaseClass} border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50/50 dark:bg-red-900/10`;

    const selectBaseClass = "appearance-none rounded-xl block w-full px-4 py-3 border bg-white dark:bg-zinc-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 sm:text-sm transition-colors";
    const selectNormalClass = `${selectBaseClass} border-gray-300 dark:border-zinc-600 focus:ring-emerald-500 focus:border-emerald-500`;
    const selectErrorClass = `${selectBaseClass} border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50/50 dark:bg-red-900/10`;

    function clearFieldError(field: keyof FieldErrors) {
        if (fieldErrors[field]) {
            setFieldErrors(prev => ({ ...prev, [field]: false }));
            setError('');
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        Hesap Oluştur
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Topluluğumuza katılın ve deneyimlerinizi paylaşın
                    </p>
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

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Ad Soyad
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className={fieldErrors.name ? inputErrorClass : inputNormalClass}
                                placeholder="Ahmet Yılmaz"
                                onChange={() => clearFieldError('name')}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email Adresi
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={fieldErrors.email ? inputErrorClass : inputNormalClass}
                                placeholder="ornek@email.com"
                                onChange={() => clearFieldError('email')}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Şifre
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className={fieldErrors.password ? inputErrorClass : inputNormalClass}
                                placeholder="En az 6 karakter"
                                onChange={() => clearFieldError('password')}
                            />
                        </div>

                        {/* Car Selection */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Araç Markası
                                </label>
                                <select
                                    id="carBrand"
                                    name="carBrand"
                                    required
                                    className={fieldErrors.carBrand ? selectErrorClass : selectNormalClass}
                                    onChange={(e) => {
                                        setSelectedBrand(e.target.value);
                                        clearFieldError('carBrand');
                                    }}
                                >
                                    <option value="">Marka Seçin</option>
                                    {brands.map(brand => (
                                        <option key={brand.id} value={brand.name}>{brand.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Model
                                </label>
                                <select
                                    id="carModel"
                                    name="carModel"
                                    required
                                    disabled={!selectedBrand}
                                    className={fieldErrors.carModel ? selectErrorClass : (selectedBrand ? selectNormalClass : `${selectNormalClass} opacity-50 cursor-not-allowed`)}
                                    onChange={() => clearFieldError('carModel')}
                                >
                                    <option value="">{selectedBrand ? 'Model Seçin' : 'Önce marka seçin'}</option>
                                    {models.map(model => (
                                        <option key={model.id} value={model.name}>{model.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Kayıt Yapılıyor...
                                </span>
                            ) : 'Kayıt Ol'}
                        </button>
                    </div>

                    <div className="text-sm text-center">
                        <span className="text-gray-500 dark:text-gray-400">Zaten hesabınız var mı? </span>
                        <Link href="/giris" className="font-medium text-emerald-600 hover:text-emerald-500">
                            Giriş Yapın
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
