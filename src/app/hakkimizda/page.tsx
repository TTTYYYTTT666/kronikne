import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black py-12 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Hakkımızda
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        SORUNSUZAL, araç alım sürecinizi şeffaflaştırmak ve güvenli hale getirmek için burada.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Mission */}
                    <section className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Misyonumuz</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Amacımız, Türkiye'deki ikinci el araç pazarında bilgi kirliliğini önlemek ve kullanıcılara
                            doğru, tarafsız teknik veriler sunmaktır. Her kullanıcının hayalindeki aracı satın almadan önce
                            olası riskleri bilmeye hakkı olduğuna inanıyoruz. Platformumuz, sanayi ustalarının tecrübeleri
                            ve gerçek kullanıcı geri bildirimleri ile harmanlanmış, veri odaklı bir rehberdir.
                        </p>
                    </section>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl text-center border border-emerald-100 dark:border-emerald-900/30">
                            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">50+</div>
                            <div className="text-sm text-emerald-800 dark:text-emerald-300">Araç Modeli</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl text-center border border-blue-100 dark:border-blue-900/30">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">%100</div>
                            <div className="text-sm text-blue-800 dark:text-blue-300">Ücretsiz</div>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl text-center border border-purple-100 dark:border-purple-900/30">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">7/24</div>
                            <div className="text-sm text-purple-800 dark:text-purple-300">Erişim</div>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl text-center border border-orange-100 dark:border-orange-900/30">
                            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Tarafsız</div>
                            <div className="text-sm text-orange-800 dark:text-orange-300">İçerik</div>
                        </div>
                    </div>

                    {/* Contact */}
                    <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-4">Bize Ulaşın</h2>
                            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                                Öneri, şikayet veya iş birliği talepleriniz için bize e-posta gönderebilirsiniz.
                                Geri bildirimleriniz bizim için çok değerli.
                            </p>
                            <a href="mailto:iletisim@sorunsuzal.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                iletisim@sorunsuzal.com
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
