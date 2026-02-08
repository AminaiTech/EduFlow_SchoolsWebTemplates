import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Star, Heart, Rocket, Sparkles } from 'lucide-react';
import { inferEducationLevel, getEducationContent } from '@/lib/education-content';

interface HeroProps {
    settings: WebsiteSettings;
}

export function CreativeHero({ settings }: HeroProps) {
    const level = inferEducationLevel(settings.school_sections);
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-300/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-orange-300/30 rounded-full blur-3xl animate-pulse" />

                {/* Floating Icons */}
                <Star className="absolute top-32 right-1/4 w-12 h-12 text-yellow-200 animate-spin" style={{ animationDuration: '8s' }} />
                <Heart className="absolute bottom-40 left-1/4 w-10 h-10 text-pink-200 animate-pulse" />
                <Rocket className="absolute top-1/3 right-1/3 w-14 h-14 text-blue-200 animate-bounce" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-sm font-bold uppercase mb-8 animate-bounce shadow-xl">
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span>Admissions Open 2026!</span>
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-none transform hover:scale-105 transition-transform">
                        <span className="inline-block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-transparent bg-clip-text drop-shadow-2xl">
                            {settings.hero_title}
                        </span>
                    </h1>

                    <p className="text-2xl md:text-3xl mb-12 font-bold leading-relaxed drop-shadow-lg">
                        {settings.hero_subtitle || eduContent.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="#enroll"
                            className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-purple-600 bg-yellow-300 rounded-full shadow-2xl hover:shadow-yellow-300/50 hover:scale-110 transition-all duration-300 uppercase tracking-wider"
                        >
                            <span className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                            {level === 'NURSERY' ? '🎨 ' : level === 'PRIMARY' ? '📚 ' : '🚀 '}
                            {eduContent.ctaButton}
                        </Link>

                        <Link
                            href="#tour"
                            className="inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white bg-white/20 backdrop-blur-sm rounded-full border-4 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 uppercase tracking-wider hover:scale-110 shadow-xl"
                        >
                            🏫 Virtual Tour
                        </Link>
                    </div>
                </div>
            </div>

            {/* Wavy Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="white"
                        className="drop-shadow-2xl" />
                </svg>
            </div>
        </section>
    );
}
