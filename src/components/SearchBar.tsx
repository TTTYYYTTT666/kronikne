'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { brands, cars } from '@/data/cars';

export default function SearchBar() {
    const router = useRouter();
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');
    const [availableModels, setAvailableModels] = useState<{ id: string; name: string }[]>([]);
    const [availableVariants, setAvailableVariants] = useState<{ id: string; name: string; slug: string }[]>([]);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.id === selectedBrand);
            setAvailableModels(brand?.models || []);
            setSelectedModel('');
            setSelectedVariant('');
            setAvailableVariants([]);
        } else {
            setAvailableModels([]);
            setSelectedModel('');
            setSelectedVariant('');
            setAvailableVariants([]);
        }
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedModel) {
            const brand = brands.find(b => b.id === selectedBrand);
            const model = brand?.models.find(m => m.id === selectedModel);
            setAvailableVariants(model?.variants || []);
            setSelectedVariant('');
        } else {
            setAvailableVariants([]);
            setSelectedVariant('');
        }
    }, [selectedModel, selectedBrand]);

    const handleSearch = () => {
        if (selectedVariant) {
            const variant = availableVariants.find(v => v.id === selectedVariant);
            if (variant) {
                router.push(`/arac/${variant.slug}`);
            }
        } else if (selectedBrand) {
            // Find first matching car for the brand/model
            const matchingCar = cars.find(car => {
                const brandMatch = car.brand.toLowerCase() === brands.find(b => b.id === selectedBrand)?.name.toLowerCase();
                if (selectedModel) {
                    const modelName = availableModels.find(m => m.id === selectedModel)?.name;
                    return brandMatch && car.model.toLowerCase() === modelName?.toLowerCase();
                }
                return brandMatch;
            });
            if (matchingCar) {
                router.push(`/arac/${matchingCar.slug}`);
            }
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Brand Select */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Marka
                        </label>
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer appearance-none"
                        >
                            <option value="">Marka Seçin</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 bottom-3.5 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Model Select */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Model
                        </label>
                        <select
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            disabled={!selectedBrand}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option value="">Model Seçin</option>
                            {availableModels.map((model) => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 bottom-3.5 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Variant Select */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Versiyon
                        </label>
                        <select
                            value={selectedVariant}
                            onChange={(e) => setSelectedVariant(e.target.value)}
                            disabled={!selectedModel}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option value="">Versiyon Seçin</option>
                            {availableVariants.map((variant) => (
                                <option key={variant.id} value={variant.id}>
                                    {variant.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 bottom-3.5 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex items-end">
                        <button
                            onClick={handleSearch}
                            disabled={!selectedBrand}
                            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-500/25"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Ara
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
