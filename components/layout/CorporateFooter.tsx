import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
    settings: WebsiteSettings;
}

export function CorporateFooter({ settings }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div
                            className="inline-block w-14 h-14 flex items-center justify-center text-white font-bold text-xl mb-4"
                            style={{ backgroundColor: settings.primary_color }}
                        >
                            {settings.hero_title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{settings.hero_title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            A leading institution committed to academic excellence and professional development, preparing students for success in a global marketplace.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Institution</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Leadership', 'Accreditation', 'Campus', 'Careers', 'Alumni'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: settings.primary_color }} />
                                <span className="font-medium">123 Education Avenue<br />Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: settings.primary_color }} />
                                <span className="font-medium">+234 800 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: settings.primary_color }} />
                                <span className="font-medium">admissions@school.edu.ng</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {settings.hero_title}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
