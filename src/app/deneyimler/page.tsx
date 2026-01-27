'use client';

import { useState } from 'react';
import { cars } from '@/data/cars';
import BrandLogo from '@/components/BrandLogo';

interface UserExperience {
    id: string;
    carBrand: string;
    carModel: string;
    carVariant: string;
    userName: string;
    rating: number;
    title: string;
    content: string;
    km: string;
    ownershipDuration: string;
    date: string;
    pros: string[];
    cons: string[];
}

const experiences: UserExperience[] = [
    {
        id: '1',
        carBrand: 'Honda',
        carModel: 'Civic',
        carVariant: 'FC5 1.6 i-VTEC',
        userName: 'Ahmet K.',
        rating: 4,
        title: '3 yıldır kullanıyorum, memnunum',
        content: 'Aracı 0 olarak aldım, şu an 85.000 km\'de. Motor yağ yakmıyor, şanzıman CVT olmasına rağmen gayet akıcı. Tek sorun C sütununda hafif bir göçük oluştu, kaporta narinliği var. Onun dışında güvenilir bir araç.',
        km: '85.000',
        ownershipDuration: '3 yıl',
        date: '2 gün önce',
        pros: ['Motor güvenilirliği', 'LPG uyumu', 'İkinci el değeri'],
        cons: ['Kaporta narinliği', 'Yalıtım zayıf']
    },
    {
        id: '2',
        carBrand: 'Volkswagen',
        carModel: 'Passat',
        carVariant: 'B8 1.6 TDI',
        userName: 'Mehmet Y.',
        rating: 3,
        title: 'Konforlu ama maliyetli',
        content: '140.000 km\'de aldım, şu an 180.000. DSG kavrama değiştirdim (45.000 TL), AdBlue pompası da arızalandı. Sürüş konforu ve prestiji yüksek ama bakım maliyetleri de yüksek.',
        km: '180.000',
        ownershipDuration: '2 yıl',
        date: '1 hafta önce',
        pros: ['Konfor', 'Sessizlik', 'Yol tutuşu'],
        cons: ['DSG maliyeti', 'AdBlue sorunları', 'Parça fiyatları']
    },
    {
        id: '3',
        carBrand: 'Toyota',
        carModel: 'Corolla',
        carVariant: '1.8 Hybrid',
        userName: 'Zeynep A.',
        rating: 5,
        title: 'Şehir içi en mantıklısı',
        content: 'Hibrit sistem mükemmel çalışıyor. Şehir içi 4.5L/100km altına düşüyor yakıt. 60.000 km\'de hiçbir arıza yaşamadım. Bakım maliyetleri de çok düşük.',
        km: '60.000',
        ownershipDuration: '2.5 yıl',
        date: '3 gün önce',
        pros: ['Düşük yakıt', 'Sıfır arıza', 'Düşük bakım'],
        cons: ['Bagaj küçük', 'Sportif değil']
    },
    {
        id: '4',
        carBrand: 'BMW',
        carModel: '3 Serisi',
        carVariant: 'F30 320i',
        userName: 'Can B.',
        rating: 3,
        title: 'Zincir değişimi pahalı oldu',
        content: '100.000 km\'de triger zinciri uzaması tespit edildi. Değişim toplamda 35.000 TL tuttu. Sürüş keyfi muhteşem ama bu tarz sürprizlere hazırlıklı olmak lazım.',
        km: '120.000',
        ownershipDuration: '4 yıl',
        date: '5 gün önce',
        pros: ['Sürüş dinamikleri', 'Prestij', 'Teknoloji'],
        cons: ['Zincir sorunu', 'Bakım maliyeti', 'Yedek parça']
    }
];

export default function DeneyimlerPage() {
    const [filter, setFilter] = useState('all');

    const filteredExperiences = filter === 'all'
        ? experiences
        : experiences.filter(e => e.rating >= parseInt(filter));

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-zinc-600'}>★</span>
        ));
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        💬 Kullanıcı <span className="text-emerald-400">Deneyimleri</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Gerçek araç sahiplerinden gerçek hikayeler
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
                        <div className="text-3xl font-bold text-emerald-400">{experiences.length}</div>
                        <div className="text-gray-500 text-sm">Deneyim</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
                        <div className="text-3xl font-bold text-yellow-400">
                            {(experiences.reduce((sum, e) => sum + e.rating, 0) / experiences.length).toFixed(1)}
                        </div>
                        <div className="text-gray-500 text-sm">Ort. Puan</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
                        <div className="text-3xl font-bold text-blue-400">
                            {new Set(experiences.map(e => e.carBrand)).size}
                        </div>
                        <div className="text-gray-500 text-sm">Marka</div>
                    </div>
                </div>

                {/* Filter */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-full font-medium transition-colors ${filter === 'all' ? 'bg-emerald-500 text-white' : 'bg-zinc-800 text-gray-400'
                            }`}
                    >
                        Tümü
                    </button>
                    {[5, 4, 3, 2, 1].map(rating => (
                        <button
                            key={rating}
                            onClick={() => setFilter(rating.toString())}
                            className={`px-4 py-2 rounded-full font-medium transition-colors ${filter === rating.toString() ? 'bg-emerald-500 text-white' : 'bg-zinc-800 text-gray-400'
                                }`}
                        >
                            {rating}+ ★
                        </button>
                    ))}
                </div>

                {/* Experiences */}
                <div className="space-y-6">
                    {filteredExperiences.map((exp) => (
                        <div key={exp.id} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12">
                                        <BrandLogo brand={exp.carBrand} />
                                    </div>
                                    <div>
                                        <div className="font-bold">{exp.carBrand} {exp.carModel}</div>
                                        <div className="text-sm text-gray-500">{exp.carVariant}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg">{renderStars(exp.rating)}</div>
                                    <div className="text-sm text-gray-500">{exp.date}</div>
                                </div>
                            </div>

                            {/* Title & Content */}
                            <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                            <p className="text-gray-400 mb-4">{exp.content}</p>

                            {/* Meta */}
                            <div className="flex gap-4 mb-4 text-sm">
                                <span className="px-3 py-1 bg-zinc-800 rounded-lg">📍 {exp.km} km</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-lg">⏱ {exp.ownershipDuration}</span>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-green-400 text-sm font-medium mb-2">👍 Beğendiklerim</div>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        {exp.pros.map((pro, i) => (
                                            <li key={i}>• {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-red-400 text-sm font-medium mb-2">👎 Beğenmediklerim</div>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        {exp.cons.map((con, i) => (
                                            <li key={i}>• {con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-3">
                                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">
                                    {exp.userName[0]}
                                </div>
                                <span className="text-gray-400">{exp.userName}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 text-center border border-emerald-500/30">
                    <h3 className="text-2xl font-bold mb-3">🚗 Deneyiminizi Paylaşın</h3>
                    <p className="text-gray-400 mb-6">
                        Aracınız hakkında yorum yaparak diğer kullanıcılara yardımcı olun
                    </p>
                    <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors">
                        Deneyim Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}
