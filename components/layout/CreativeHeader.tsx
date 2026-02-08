'use client';

import Link from 'next/link';
import { WebsiteSettings } from '@/types';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
    settings: WebsiteSettings;
}

export function CreativeHeader({ settings }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-300 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                            <div className="relative bg-white text-purple-600 h-14 w-14 flex items-center justify-center rounded-2xl font-black text-2xl shadow-lg transform group-hover:scale-110 transition-transform">
                                {settings.hero_title.charAt(0)}
                            </div>
                        </div>
                        <div>
                            <span className="font-black text-2xl tracking-tight flex items-center gap-2">
                                {settings.hero_title}
                                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                            </span>
                            <span className="text-xs text-white/80 font-bold uppercase tracking-widest">Where Learning is Fun!</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-2 items-center">
                        {['Home', 'About', 'Programs', 'Gallery', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white/20 rounded-full transition-all backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:scale-105"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
                    <nav className="flex flex-col p-4 space-y-2">
                        {['Home', 'About', 'Programs', 'Gallery', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-6 py-4 text-base font-bold uppercase tracking-wider hover:bg-white/20 rounded-2xl transition-colors text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
