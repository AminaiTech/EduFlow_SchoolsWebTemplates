import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { getEducationContent } from '@/lib/education-content';

interface HeroProps {
    settings: WebsiteSettings;
}

export function ClassicHero({ settings }: HeroProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="relative h-[600px] flex items-center bg-gray-900 border-b-8" style={{ borderColor: settings.primary_color }}>
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {settings.hero_image ? (
                    <img
                        src={settings.hero_image}
                        alt="School Building"
                        className="w-full h-full object-cover opacity-40"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800 opacity-50 patterned-bg" />
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full">
                <div className="bg-white/95 max-w-xl p-10 border-l-4 shadow-2xl" style={{ borderColor: settings.secondary_color }}>
                    <h2
                        className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
                        style={{ color: settings.primary_color }}
                    >
                        Welcome to
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        {settings.hero_title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 font-light italic border-l-2 border-gray-300 pl-4">
                        "{settings.hero_subtitle || eduContent.heroSubtitle}"
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="#admissions"
                            className="inline-block px-8 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-gray-800 transition-colors"
                            style={{ backgroundColor: settings.primary_color }}
                        >
                            {eduContent.ctaButton}
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-block px-8 py-3 text-sm font-bold text-gray-900 uppercase tracking-wider border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
