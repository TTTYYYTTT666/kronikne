import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <span className="text-9xl font-bold text-emerald-500">404</span>
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-8xl font-black text-gray-900 dark:text-white mb-4">
                            4<span className="text-emerald-500">0</span>4
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                            Aradığınız sayfa kayıp!
                        </p>
                    </div>
                </div>

                <p className="text-gray-500 dark:text-gray-500 mb-8">
                    Aradığınız araç veya sayfa veritabanımızda bulunamadı ya da taşınmış olabilir.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="block w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
                    >
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        href="/markalar"
                        className="block w-full px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        Markalara Göz At
                    </Link>
                </div>
            </div>
        </div>
    );
}
