import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const categories = ['Tümü', 'Rehber', 'Analiz', 'Teknik', 'Bilgi'];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        📰 Blog & <span className="text-emerald-400">Haberler</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Otomotiv dünyasından güncel haberler, analizler ve ipuçları
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-5 py-2 rounded-full font-medium transition-colors ${cat === 'Tümü'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 mb-12 border border-emerald-500/30">
                    <div className="flex items-start gap-6">
                        <div className="text-6xl">{blogPosts[0].image}</div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                                    {blogPosts[0].category}
                                </span>
                                <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                                <span className="text-gray-500 text-sm">• {blogPosts[0].readTime} okuma</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
                            <p className="text-gray-400 mb-4">{blogPosts[0].excerpt}</p>
                            <Link href={`/blog/${blogPosts[0].slug}`} className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-colors inline-block">
                                Devamını Oku →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.slice(1).map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors group block"
                        >
                            <div className="h-40 bg-zinc-800 flex items-center justify-center text-5xl">
                                {post.image}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-2 py-1 bg-zinc-800 text-gray-400 rounded text-xs font-medium">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-xs">{post.date}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                                <div className="mt-4 text-emerald-400 text-sm font-medium">
                                    {post.readTime} okuma →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800">
                    <h3 className="text-2xl font-bold mb-3">📩 Haftalık Bültenimize Abone Olun</h3>
                    <p className="text-gray-400 mb-6">
                        Yeni araç analizleri, sektör haberleri ve özel içerikler için
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="flex-grow px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
                        />
                        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors whitespace-nowrap">
                            Abone Ol
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
