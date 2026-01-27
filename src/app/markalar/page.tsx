import Link from 'next/link';
import { brands, getTotalIssuesCount } from '@/data/cars';
import BrandLogo from '@/components/BrandLogo';

export default function BrandsPage() {
    const totalIssues = getTotalIssuesCount();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Tüm Markalar
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Veritabanımızda {brands.length} farklı marka ve {totalIssues} kronik sorun kaydı bulunmaktadır.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brands.map((brand) => (
                        <div key={brand.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all dark:hover:border-emerald-900/50">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm border border-gray-100">
                                    <BrandLogo brand={brand.name} />
                                </div>
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">
                                    {brand.models.length} Model
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {brand.name}
                            </h2>

                            <div className="space-y-3">
                                {brand.models.map((model) => (
                                    <div key={model.id} className="group">
                                        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{model.name}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {model.variants.map((variant) => (
                                                <Link
                                                    key={variant.id}
                                                    href={`/arac/${variant.slug}`}
                                                    className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-md transition-colors border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800"
                                                >
                                                    {variant.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
