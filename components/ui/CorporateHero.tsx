import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { TrendingUp, Award, Users } from 'lucide-react';
import { getEducationContent } from '@/lib/education-content';

interface HeroProps {
    settings: WebsiteSettings;
}

export function CorporateHero({ settings }: HeroProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="relative bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95" />

            {settings.hero_image && (
                <img
                    src={settings.hero_image}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
            )}

            <div className="container mx-auto px-4 relative z-10 py-32">
                <div className="max-w-4xl">
                    <div
                        className="inline-block px-4 py-2 mb-6 text-xs font-bold uppercase tracking-widest"
                        style={{ backgroundColor: settings.primary_color }}
                    >
                        EST. 1990 • ACCREDITED INSTITUTION
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        {settings.hero_title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                        {settings.hero_subtitle || eduContent.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Link
                            href="#programs"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-wider hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: settings.primary_color }}
                        >
                            {eduContent.ctaButton}
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-colors uppercase tracking-wider"
                        >
                            Schedule Visit
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-700">
                        {[
                            { icon: Users, value: '5,000+', label: 'Students' },
                            { icon: Award, value: '98%', label: 'Graduation Rate' },
                            { icon: TrendingUp, value: 'Top 10', label: 'National Ranking' }
                        ].map(({ icon: Icon, value, label }, idx) => (
                            <div key={idx} className="text-center sm:text-left">
                                <Icon className="w-8 h-8 mb-3 mx-auto sm:mx-0" style={{ color: settings.primary_color }} />
                                <div className="text-3xl font-bold mb-1">{value}</div>
                                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
