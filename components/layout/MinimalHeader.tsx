'use client';

import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

interface HeaderProps {
    settings: WebsiteSettings;
}

export function MinimalHeader({ settings }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                    {settings.hero_title}
                    <span
                        className="text-4xl leading-none ml-1 text-primary"
                        style={{ color: settings.primary_color }}
                    >
                        .
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {['About', 'Academics', 'Admissions', 'News', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button className="text-gray-400 hover:text-black transition-colors">
                        <Search size={20} strokeWidth={1.5} />
                    </button>
                    <button className="md:hidden">
                        <Menu size={24} strokeWidth={1.5} />
                    </button>
                    <Link
                        href="/portal"
                        className="hidden md:block text-sm font-medium border border-gray-200 px-6 py-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-all"
                    >
                        Portal
                    </Link>
                </div>
            </div>
        </header>
    );
}
