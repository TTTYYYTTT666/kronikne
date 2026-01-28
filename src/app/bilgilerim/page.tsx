'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { brands } from '@/data/cars';
import { updateProfile, getProfile } from '@/actions/auth-actions';

export default function BilgilerimPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [models, setModels] = useState<{ id: string; name: string }[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const profile = await getProfile();
                if (profile) {
                    setFormData({
                        name: profile.name || '',
                        phone: profile.phone || '',
                    });
                    if (profile.carBrand) {
                        setSelectedBrand(profile.carBrand);
                        const brand = brands.find(b => b.id === profile.carBrand);
                        setModels(brand?.models || []);
                        if (profile.carModel) {
                            setSelectedModel(profile.carModel);
                        }
                    }
                }
            } catch (error) {
                console.error(error);
            } finally {
                setFetching(false);
            }
        }
        fetchProfile();
    }, []);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.id === selectedBrand);
            setModels(brand?.models || []);
            // Only reset model if brand changed after initial load
            if (!fetching) {
                setSelectedModel('');
            }
        } else {
            setModels([]);
        }
    }, [selectedBrand, fetching]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const data = new FormData(e.currentTarget);

        try {
            await updateProfile(data);
            setSuccess(true);
            router.refresh();
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error(error);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    }

    if (fetching) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-6">
                        <h1 className="text-2xl font-bold text-white">Bilgilerim</h1>
                        <p className="text-emerald-100 mt-1">Profil bilgilerinizi güncelleyin</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {success && (
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 flex items-center gap-3">
                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-emerald-700 dark:text-emerald-300 font-medium">Bilgileriniz başarıyla güncellendi!</span>
                            </div>
                        )}

                        {/* Ad Soyad */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Ad Soyad
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                placeholder="Adınız Soyadınız"
                            />
                        </div>

                        {/* Telefon */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Telefon Numarası
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-zinc-700/50 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                placeholder="05XX XXX XX XX"
                            />
                        </div>

                        {/* Araç Bilgileri Başlık */}
                        <div className="pt-4 border-t border-gray-200 dark:border-zinc-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                                Araç Bilgileri
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Size özel içerikler gösterebilmemiz için aracınızı ekleyin
                            </p>
                        </div>

                        {/* Marka Seçimi */}
                        <div>
                            <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Araç Markanız
                            </label>
                            <select
                                id="carBrand"
                                name="carBrand"
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

                        {/* Submit Button */}
                        <div className="pt-4">
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
                                    'Kaydet'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
