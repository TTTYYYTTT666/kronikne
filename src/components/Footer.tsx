import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">SORUNSUZAL</span>
                        </div>
                        <p className="text-gray-400 max-w-md">
                            Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin.
                            Güvenilir araç rehberiniz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/markalar" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    Tüm Markalar
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Brands */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Popüler Markalar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/arac/fiat-egea-1-4-fire" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    Fiat Egea
                                </Link>
                            </li>
                            <li>
                                <Link href="/arac/volkswagen-passat-b8-1-6-tdi" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    VW Passat
                                </Link>
                            </li>
                            <li>
                                <Link href="/arac/honda-civic-fc5-1-6-vtec" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    Honda Civic
                                </Link>
                            </li>
                            <li>
                                <Link href="/arac/renault-megane-4-1-5-dci" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                    Renault Megane
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 SORUNSUZAL. Tüm hakları saklıdır.
                    </p>
                    <p className="text-gray-500 text-xs mt-2 md:mt-0">
                        Bu site yalnızca bilgilendirme amaçlıdır. Satın alma kararlarınızı uzman görüşleriyle destekleyin.
                    </p>
                </div>
            </div>
        </footer>
    );
}
