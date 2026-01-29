import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCarBySlug, cars, getCategoryLabel } from '@/data/cars';
import ReliabilityGauge from '@/components/ReliabilityGauge';
import IssueCard from '@/components/IssueCard';
import AdSpace from '@/components/AdSpace';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import CommentsSection from '@/components/comments/CommentsSection';


interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cars.map((car) => ({
        slug: car.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const car = getCarBySlug(slug);

    if (!car) {
        return {
            title: 'Araç Bulunamadı - SORUNSUZAL',
        };
    }

    return {
        title: `${car.brand} ${car.model} ${car.variant} Sorunları ve Güvenilirlik | SORUNSUZAL`,
        description: `${car.brand} ${car.model} ${car.variant} kronik sorunları, yaygın arızaları ve satın alma öncesi kontrol listesi. Güvenilirlik puanı: ${car.reliabilityScore}/100`,
    };
}

export default async function CarDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const car = getCarBySlug(slug);

    if (!car) {
        notFound();
    }

    // Group issues by category
    const issuesByCategory = car.issues.reduce((acc, issue) => {
        if (!acc[issue.category]) {
            acc[issue.category] = [];
        }
        acc[issue.category].push(issue);
        return acc;
    }, {} as Record<string, typeof car.issues>);

    const highRiskCount = car.issues.filter(i => i.riskLevel === 'HIGH').length;
    const mediumRiskCount = car.issues.filter(i => i.riskLevel === 'MEDIUM').length;
    const lowRiskCount = car.issues.filter(i => i.riskLevel === 'LOW').length;

    // Fetch Session and Comments
    const session = await auth();

    // Create type-safe user object for CommentsSection
    const currentUser = session?.user?.id ? {
        id: session.user.id,
        name: session.user.name,
        image: session.user.image
    } : null;

    const comments = await prisma.comment.findMany({
        where: { carSlug: slug },
        include: { user: true },
        orderBy: { createdAt: 'desc' }
    });

    // Get similar cars



    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#18181b]">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-emerald-400 transition-colors">
                            Ana Sayfa
                        </Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{car.brand}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-emerald-400">{car.model}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Car Info */}
                        <div className="lg:col-span-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-4">
                                {car.generation}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                {car.brand} {car.model}
                            </h1>
                            <p className="text-2xl text-emerald-400 font-semibold mb-4">{car.variant}</p>
                            <p className="text-gray-400 text-lg">{car.years}</p>

                            {/* Risk Summary */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                {highRiskCount > 0 && (
                                    <div className="flex items-center gap-2 px-3 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        <span className="text-red-300 font-medium">{highRiskCount} Yüksek Risk</span>
                                    </div>
                                )}
                                {mediumRiskCount > 0 && (
                                    <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                        <span className="text-yellow-300 font-medium">{mediumRiskCount} Orta Risk</span>
                                    </div>
                                )}
                                {lowRiskCount > 0 && (
                                    <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        <span className="text-emerald-300 font-medium">{lowRiskCount} Düşük Risk</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Reliability Score */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h3 className="text-center text-gray-300 font-medium mb-4">Güvenilirlik Puanı</h3>
                                <ReliabilityGauge score={car.reliabilityScore} size="lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Issues Section - Main Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Sanayi Notu (Expert Note) */}
                        {car.expertNote && (
                            <div className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-sm">
                                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
                                    <span className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </span>
                                    Sanayi Notu (Usta Tavsiyesi)
                                </h3>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                            "{car.expertNote}"
                                        </p>
                                        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-500 uppercase tracking-wider">
                                            <span className="w-8 h-[1px] bg-amber-300 dark:bg-amber-700"></span>
                                            Oto Sanayi Deneyimi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Chronic Issues */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                    <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </span>
                                Kronik Sorunlar ({car.issues.length})
                            </h2>

                            {Object.entries(issuesByCategory).map(([category, issues]) => (
                                <div key={category} className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        {getCategoryLabel(category)}
                                    </h3>
                                    <div className="space-y-4">
                                        {issues.map((issue) => (
                                            <IssueCard key={issue.id} issue={issue} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Ads: Expert */}
                        <AdSpace type="expert" />

                        {/* Comments Section */}
                        <CommentsSection
                            carSlug={slug}
                            currentUser={currentUser}
                            comments={comments}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Buying Tips */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Satın Alma Öncesi Kontrol
                            </h3>
                            <ul className="space-y-3">
                                {car.buyingTips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pros */}
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-6">
                            <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Artıları
                            </h3>
                            <ul className="space-y-2">
                                {car.pros.map((pro, index) => (
                                    <li key={index} className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                                        <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons */}
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800 p-6">
                            <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                </svg>
                                Eksileri
                            </h3>
                            <ul className="space-y-2">
                                {car.cons.map((con, index) => (
                                    <li key={index} className="flex items-start gap-2 text-red-700 dark:text-red-300">
                                        <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Back to Search */}
                        <Link
                            href="/"
                            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-emerald-500/25"
                        >
                            Yeni Araç Ara
                        </Link>
                    </div>
                </div>



                {/* Ads: Insurance */}
                <div className="mt-12">
                    <AdSpace type="insurance" />
                </div>
            </div>
        </div >
    );
}
