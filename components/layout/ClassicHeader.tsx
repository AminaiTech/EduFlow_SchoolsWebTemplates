'use client';

import Link from 'next/link';
import { WebsiteSettings } from '@/types';
import { Mail, Phone, MapPin, Search } from 'lucide-react';

interface HeaderProps {
    settings: WebsiteSettings;
}

export function ClassicHeader({ settings }: HeaderProps) {
    return (
        <header className="bg-white border-b border-gray-200">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2 text-sm z-50 relative">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={14} className="text-gray-400" />
                            <span>+234 800 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2 hidden sm:flex">
                            <Mail size={14} className="text-gray-400" />
                            <span>contact@school.edu.ng</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/staff" className="hover:text-gray-300 transition-colors">Staff</Link>
                        <Link href="/parents" className="hover:text-gray-300 transition-colors">Parents</Link>
                        <Link href="/alumni" className="hover:text-gray-300 transition-colors">Alumni</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        {settings.hero_image ? (
                            <img
                                src={settings.hero_image}
                                alt={settings.hero_title}
                                className="h-16 w-16 object-contain"
                            />
                        ) : (
                            <div
                                className="h-16 w-16 flex items-center justify-center rounded-full text-white font-serif font-bold text-3xl border-4 border-gray-100 shadow-sm"
                                style={{ backgroundColor: settings.primary_color }}
                            >
                                {settings.hero_title.charAt(0)}
                            </div>
                        )}
                        <div>
                            <h1 className="text-2xl font-serif font-bold text-gray-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                                {settings.hero_title}
                            </h1>
                            <p className="text-sm text-gray-500 font-medium tracking-wide mt-1 uppercase">Excellence Since 1990</p>
                        </div>
                    </Link>

                    {/* CTA Button - Desktop */}
                    <Link
                        href="/admissions"
                        className="hidden md:inline-flex items-center px-6 py-3 border-2 border-transparent text-sm font-semibold text-white uppercase tracking-wider hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: settings.secondary_color }}
                    >
                        Apply for Admission
                    </Link>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="border-t border-gray-100 bg-white" style={{ borderTopColor: settings.primary_color }}>
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center">
                        <ul className="flex items-center">
                            {['Home', 'About', 'Admissions', 'Academics', 'Student Life', 'News'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="block px-6 py-4 text-sm font-bold text-gray-700 uppercase tracking-wide hover:bg-gray-50 hover:text-black transition-colors relative group"
                                    >
                                        {item}
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                            style={{ backgroundColor: settings.primary_color }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="p-4 text-gray-400 hover:text-primary transition-colors">
                            <Search size={20} />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
