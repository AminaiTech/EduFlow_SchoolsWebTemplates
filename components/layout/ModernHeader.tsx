'use client';

import Link from 'next/link';
import { WebsiteSettings } from '@/types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
    settings: WebsiteSettings;
}

export function ModernHeader({ settings }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16"> // Reduced height for cleaner look
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {settings.hero_image ? (
                            <img
                                src={settings.hero_image}
                                alt={settings.hero_title}
                                className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
                            />
                        ) : (
                            <div
                                className="h-10 w-10 flex items-center justify-center rounded-xl text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform"
                                style={{ backgroundColor: settings.primary_color }}
                            >
                                {settings.hero_title.charAt(0)}
                            </div>
                        )}
                        <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                            {settings.hero_title}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {['Home', 'About Us', 'News', 'Events', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-medium text-gray-600 hover:text-black transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                                style={{
                                    '--hover-color': settings.primary_color
                                } as React.CSSProperties}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/portal/login"
                            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all active:scale-95"
                            style={{ backgroundColor: settings.primary_color }}
                        >
                            Student Portal
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-5">
                    <nav className="flex flex-col p-4 space-y-2">
                        {['Home', 'About Us', 'News', 'Events', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/portal/login"
                            className="block px-4 py-3 mt-4 text-center rounded-xl text-base font-semibold text-white shadow-md active:scale-95 transition-transform"
                            style={{ backgroundColor: settings.primary_color }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Access Portal
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
