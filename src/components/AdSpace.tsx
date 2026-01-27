'use client';

interface AdSpaceProps {
    type: 'expert' | 'sell' | 'insurance' | 'generic';
    className?: string;
}

export default function AdSpace({ type, className = '' }: AdSpaceProps) {
    const ads = {
        expert: {
            title: '🛡️ Bu Aracı Almadan Önce Emin Ol!',
            desc: 'Sürpriz masraflardan kaçınmak için kurumsal ekspertiz raporu alın.',
            cta: '%20 İndirimli Ekspertiz Randevusu Al',
            bg: 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-blue-500/30',
            icon: '🔍'
        },
        sell: {
            title: '💰 Aracını Hemen Nakite Çevir',
            desc: 'Uğraşmadan, pazarlıksız, anında teklif alıp aracını sat.',
            cta: 'Ücretsiz Fiyat Teklifi Al',
            bg: 'bg-gradient-to-r from-emerald-900/50 to-green-900/50 border-emerald-500/30',
            icon: '🤝'
        },
        insurance: {
            title: '🛡️ En Uygun Kasko Teklifleri',
            desc: '20+ sigorta şirketinden karşılaştırmalı teklif al.',
            cta: 'Hemen Hesapla',
            bg: 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30',
            icon: '📝'
        },
        generic: {
            title: 'Reklam Alanı',
            desc: 'Buraya Google Adsense veya Sponsorlu İçerik gelebilir.',
            cta: 'Detaylı Bilgi',
            bg: 'bg-zinc-800/50 border-zinc-700',
            icon: '📢'
        }
    };

    const content = ads[type];

    return (
        <div className={`mt-8 p-6 rounded-2xl border ${content.bg} backdrop-blur-sm ${className}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="text-4xl">{content.icon}</div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{content.title}</h3>
                        <p className="text-gray-300 text-sm">{content.desc}</p>
                    </div>
                </div>
                <button className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform whitespace-nowrap">
                    {content.cta}
                </button>
            </div>
            <div className="mt-2 text-right">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest px-2 py-1 bg-black/20 rounded">Sponsorlu</span>
            </div>
        </div>
    );
}
