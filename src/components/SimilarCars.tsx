'use client';

import Link from 'next/link';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';

interface SimilarCarsProps {
    cars: Car[];
}

export default function SimilarCars({ cars }: SimilarCarsProps) {
    const getScoreColor = (score: number) => {
        if (score >= 80) return 'bg-emerald-500';
        if (score >= 60) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    if (!cars || cars.length === 0) return null;

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                İlginizi Çekebilecek Diğer Araçlar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                    <Link
                        key={car.id}
                        href={`/arac/${car.slug}`}
                        className="group relative bg-white dark:bg-[#18181b] rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300"
                    >
                        {/* Car Image */}
                        <div className="h-44 relative overflow-hidden">
                            <img
                                src={car.image || `https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80`}
                                alt={`${car.brand} ${car.model}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="p-5">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center p-1 shadow-sm border border-gray-200 dark:border-zinc-700">
                                            <BrandLogo brand={car.brand} />
                                        </div>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                                            {car.brand}
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {car.model} {car.variant}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {car.years}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${getScoreColor(car.reliabilityScore)} text-white font-bold text-lg`}>
                                        {car.reliabilityScore}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-zinc-800">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {car.price ? `~${(car.price / 1000000).toFixed(2)} M ₺` : 'Fiyat Bilinmiyor'}
                                </span>
                                <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium group-hover:translate-x-1 transition-transform">İncele →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
