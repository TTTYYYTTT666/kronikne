'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { brands } from '@/data/cars';
import { completeProfile } from '@/actions/auth-actions';

export default function ProfilTamamlaPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [models, setModels] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.id === selectedBrand);
            setModels(brand?.models || []);
            setSelectedModel('');
        } else {
            setModels([]);
        }
    }, [selectedBrand]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            await completeProfile(formData);
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700">
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Profilinizi Tamamlayın
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Size daha iyi hizmet verebilmemiz için birkaç bilgi daha
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* İsim */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Ad Soyad
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                            placeholder="Adınız Soyadınız"
                        />
                    </div>

                    {/* Marka Seçimi */}
                    <div>
                        <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Araç Markanız
                        </label>
                        <select
                            id="carBrand"
                            name="carBrand"
                            required
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                        >
                            <option value="">Marka Seçin</option>
                            {brands.map(brand => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Model Seçimi */}
                    <div>
                        <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Araç Modeliniz
                        </label>
                        <select
                            id="carModel"
                            name="carModel"
                            required
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            disabled={!selectedBrand}
                            className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option value="">
                                {selectedBrand ? 'Model Seçin' : 'Önce marka seçin'}
                            </option>
                            {models.map(model => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Kaydediliyor...
                            </span>
                        ) : (
                            'Devam Et'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
