import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getEducationContent } from '@/lib/education-content';

interface HeroProps {
    settings: WebsiteSettings;
}

export function ModernHero({ settings }: HeroProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-gray-50">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {settings.hero_image ? (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 z-10" />
                        <img
                            src={settings.hero_image}
                            alt="School Campus"
                            className="w-full h-full object-cover"
                        />
                    </>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                        {/* Abstract Decorative blobs */}
                        <div
                            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
                            style={{ backgroundColor: settings.primary_color }}
                        />
                        <div
                            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
                            style={{ backgroundColor: settings.secondary_color }}
                        />
                    </div>
                )}
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Admissions Open for 2026-2027
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        style={{ color: settings.hero_image ? 'white' : '#1a1a1a' }}
                    >
                        {settings.hero_title}
                    </h1>

                    <p
                        className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed"
                        style={{ color: settings.hero_image ? 'rgba(255,255,255,0.9)' : '#4a4a4a' }}
                    >
                        {settings.hero_subtitle || eduContent.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#admissions"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl shadow-xl hover:translate-y-[-2px] hover:shadow-2xl transition-all duration-300 group"
                            style={{ backgroundColor: settings.primary_color }}
                        >
                            {eduContent.ctaButton}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="#tour"
                            className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 ${settings.hero_image
                                ? 'text-white border-white/30 hover:bg-white/10'
                                : 'text-gray-900 border-gray-200 hover:border-gray-900 hover:bg-transparent'
                                }`}
                        >
                            Virtual Tour
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${settings.hero_image ? 'text-white' : 'text-gray-400'}`}>
                <div className="w-1 h-16 rounded-full bg-gradient-to-b from-current to-transparent opacity-50" />
            </div>
        </section>
    );
}
