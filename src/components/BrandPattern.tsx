'use client';

export default function BrandPattern() {
    // Using simple-icons CDN for reliable, pure white SVG logos
    // Format: https://cdn.simpleicons.org/[slug]/white
    const brands = [
        'bmw',
        'mercedes',
        'audi',
        'volkswagen',
        'toyota',
        'honda',
        'tesla',
        'ford',
        'renault',
        'peugeot',
        'fiat',
        'skoda',
        'seat',
        'opel',
        'nissan',
        'kia',
        'hyundai',
        'volvo',
        'mitsubishi'
    ];

    // Duplicate array to fill space and shuffle slightly
    const brandList = [...brands, ...brands, ...brands];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* 
               FULL COVERAGE PATTERN
               Rotated -12 deg for a subtle dynamic look
            */}
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] flex flex-wrap content-center justify-center opacity-[0.08] transform -rotate-[12deg]">
                {[...brandList, ...brandList].map((slug, i) => (
                    <div key={`logo-${i}`} className="w-24 h-24 p-4 flex items-center justify-center m-6">
                        <img
                            src={`https://cdn.simpleicons.org/${slug}/white`}
                            alt=""
                            className="w-full h-full object-contain drop-shadow-lg opacity-70"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/90" />
        </div>
    );
}
