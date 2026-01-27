import SearchBar from '@/components/SearchBar';

import { getTotalIssuesCount, cars } from '@/data/cars';
import BrandPattern from '@/components/BrandPattern';

export default function Home() {

  const totalIssues = getTotalIssuesCount();
  const totalCars = cars.length;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-emerald-500/10 blur-[100px] opacity-30 pointer-events-none" />

        <BrandPattern />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Türkiye&apos;nin En Kapsamlı Araç Veritabanı
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-zinc-100">Hangi Aracı</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Almayı Düşünüyorsunuz?
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Satın almadan önce kronik sorunları, gerçek onarım maliyetlerini ve
            kullanıcı deneyimlerini öğrenin. Bilinçli tercih yapın.
          </p>

          {/* Search Bar - Wrapper for better positioning */}
          <div className="relative z-10 max-w-2xl mx-auto mb-16">
            <SearchBar />
          </div>

          {/* Quick Stats - Premium Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Araç Modeli', value: `${totalCars}+` },
              { label: 'Takip Edilen Sorun', value: `${totalIssues}+` },
              { label: 'Marka', value: '30+' },
              { label: 'Ücretsiz', value: '%100' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-emerald-500/20 transition-colors group">
                <div className="text-2xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Neden SORUNSUZAL?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Araç alım sürecinizde size rehberlik edecek, tamamen veri odaklı analizler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-zinc-900">
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-800">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Kronik Sorun Analizi
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Her modelin zayıf noktalarını, arıza çıkarma potansiyeli olan kilometreleri ve tahmini tamir masraflarını şeffaf bir şekilde görün.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-zinc-900">
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-800">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Güvenilirlik Skoru
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Karmaşık verileri basitleştirdik. 100 üzerinden hesaplanan puanlarla araçları hızlıca kıyaslayın, en sorunsuz modeli kolayca bulun.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover:bg-zinc-900">
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-800">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Alım Rehberi
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Ekspertizde nelere baktırmalısınız? Hangi donanım paketinden uzak durmalısınız? Profesyonel alım satım ipuçları parmaklarınızın ucunda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6 tracking-tight">
            Aracınızı Tanımaya Başlayın
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Sürpriz masraflarla karşılaşmamak için binlerce araç sahibinin tecrübesinden faydalanın.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-full hover:bg-emerald-400 transition-all shadow-xl hover:shadow-emerald-500/20 group"
          >
            Hemen Araştır
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
