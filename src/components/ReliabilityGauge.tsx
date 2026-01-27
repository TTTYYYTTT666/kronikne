'use client';

import { useEffect, useState } from 'react';

interface ReliabilityGaugeProps {
    score: number;
    size?: 'sm' | 'md' | 'lg';
}

export default function ReliabilityGauge({ score, size = 'md' }: ReliabilityGaugeProps) {
    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedScore(score);
        }, 100);
        return () => clearTimeout(timer);
    }, [score]);

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-emerald-500';
        if (score >= 60) return 'text-yellow-500';
        return 'text-red-500';
    };

    const getGradientColor = (score: number) => {
        if (score >= 80) return 'from-emerald-500 to-teal-500';
        if (score >= 60) return 'from-yellow-500 to-orange-500';
        return 'from-red-500 to-rose-500';
    };

    const getRiskLabel = (score: number) => {
        if (score >= 80) return 'Düşük Risk';
        if (score >= 60) return 'Orta Risk';
        return 'Yüksek Risk';
    };

    const getRiskBg = (score: number) => {
        if (score >= 80) return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400';
        if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
    };

    const sizeClasses = {
        sm: { container: 'w-24 h-24', text: 'text-2xl', label: 'text-xs' },
        md: { container: 'w-36 h-36', text: 'text-4xl', label: 'text-sm' },
        lg: { container: 'w-48 h-48', text: 'text-5xl', label: 'text-base' }
    };

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className={`relative ${sizeClasses[size].container}`}>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-200 dark:text-gray-700"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" className={score >= 80 ? 'text-emerald-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500'} style={{ stopColor: 'currentColor' }} />
                            <stop offset="100%" className={score >= 80 ? 'text-teal-500' : score >= 60 ? 'text-orange-500' : 'text-rose-500'} style={{ stopColor: 'currentColor' }} />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`font-bold ${sizeClasses[size].text} ${getScoreColor(score)}`}>
                        {animatedScore}
                    </span>
                    <span className={`text-gray-500 dark:text-gray-400 ${sizeClasses[size].label}`}>/ 100</span>
                </div>
            </div>
            <div className={`mt-3 px-4 py-1.5 rounded-full ${getRiskBg(score)} font-medium ${sizeClasses[size].label}`}>
                {getRiskLabel(score)}
            </div>
        </div>
    );
}
