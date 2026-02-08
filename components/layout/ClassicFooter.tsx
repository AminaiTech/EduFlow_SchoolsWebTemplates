import { WebsiteSettings } from '@/types';
import Link from 'next/link';

interface FooterProps {
    settings: WebsiteSettings;
}

export function ClassicFooter({ settings }: FooterProps) {
    return (
        <footer className="bg-gray-100 border-t-4" style={{ borderColor: settings.primary_color }}>
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">{settings.hero_title}</h3>
                        <address className="not-italic text-gray-600 leading-relaxed">
                            123 Education Lane<br />
                            Knowledge City<br />
                            Zip Code 10001<br />
                            <br />
                            <strong>Phone:</strong> +234 800 123 4567<br />
                            <strong>Email:</strong> info@school.edu.ng
                        </address>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-6">Quick Links</h4>
                        <nav className="flex flex-col gap-3">
                            {['Admissions', 'Academic Calendar', 'Staff Directory', 'Alumni', 'Careers'].map((link) => (
                                <Link key={link} href="#" className="text-gray-600 hover:text-primary transition-colors hover:underline">
                                    {link}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-6">Accreditation</h4>
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                            {/* Placeholders for accreditation logos */}
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center font-bold text-[10px] text-center p-1">
                                MOE Approved
                            </div>
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center font-bold text-[10px] text-center p-1">
                                ISO 9001
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 py-6">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} {settings.hero_title}. All rights reserved. | <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
