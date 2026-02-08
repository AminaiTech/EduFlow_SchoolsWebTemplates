'use client';

import Link from 'next/link';
import { WebsiteSettings } from '@/types';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
    settings: WebsiteSettings;
}

export function CorporateHeader({ settings }: HeaderProps) {
    return (
        <header className="bg-white shadow-sm">
            {/* Top Bar */}
            <div className="bg-gray-900 text-gray-300 text-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <a href="tel:+234800123" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={14} />
                            <span className="font-medium">+234 800 123 4567</span>
                        </a>
                        <a href="mailto:info@school.edu" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={14} />
                            <span className="font-medium">admissions@school.edu.ng</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hover:text-white transition-colors font-medium">Student Login</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/careers" className="hover:text-white transition-colors font-medium">Careers</Link>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div
                                className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl"
                                style={{ backgroundColor: settings.primary_color }}
                            >
                                {settings.hero_title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 leading-none">{settings.hero_title}</h1>
                                <p className="text-xs text-gray-500 font-medium mt-1">Excellence in Education</p>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {['About', 'Academics', 'Admissions', 'Campus Life', 'Alumni', 'News'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors rounded-md"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <Link
                            href="/apply"
                            className="hidden md:inline-flex px-6 py-3 text-sm font-bold text-white uppercase tracking-wide hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: settings.primary_color }}
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
