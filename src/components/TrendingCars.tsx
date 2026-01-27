import Link from 'next/link';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';

interface TrendingCarsProps {
    cars: Car[];
}

export default function TrendingCars({ cars }: TrendingCarsProps) {
    const getScoreColor = (score: number) => {
        if (score >= 80) return 'bg-emerald-500';
        if (score >= 60) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getScoreLabel = (score: number) => {
        if (score >= 80) return 'Düşük Risk';
        if (score >= 60) return 'Orta Risk';
        return 'Yüksek Risk';
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
                <Link
                    key={car.id}
                    href={`/arac/${car.slug}`}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
                >
                    {/* Trending Badge */}
                    {index < 3 && (
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs font-bold">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                            #{index + 1} Trend
                        </div>
                    )}

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
                                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                                        {car.brand}
                                    </p>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>{car.totalIssues} Bilinen Sorun</span>
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${car.reliabilityScore >= 80
                                ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                                : car.reliabilityScore >= 60
                                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                }`}>
                                {getScoreLabel(car.reliabilityScore)}
                            </span>
                        </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </Link>
            ))}
        </div>
    );
}
