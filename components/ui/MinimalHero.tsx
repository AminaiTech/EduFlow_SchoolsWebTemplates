import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { getEducationContent } from '@/lib/education-content';

interface HeroProps {
    settings: WebsiteSettings;
}

export function MinimalHero({ settings }: HeroProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="pt-32 pb-20 min-h-[80vh] flex flex-col justify-center">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <span className="inline-block mb-6 text-sm font-medium tracking-widest uppercase text-gray-400">
                        Est. 2024
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-none">
                        {settings.hero_title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
                        {settings.hero_subtitle || eduContent.heroSubtitle}
                    </p>

                    <div className="flex gap-6 items-center">
                        <Link
                            href="#explore"
                            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:gap-4 transition-all"
                            style={{ color: settings.primary_color }}
                        >
                            {eduContent.ctaButton}
                            <ArrowDown size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {settings.hero_image && (
                <div className="mt-16 w-full h-[400px] md:h-[600px] relative overflow-hidden bg-gray-100">
                    <img
                        src={settings.hero_image}
                        alt="Hero"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            )}
        </section>
    );
}
