import { WebsiteSettings } from '@/types';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
    settings: WebsiteSettings;
}

export function ModernFooter({ settings }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            {settings.hero_image ? (
                                <img src={settings.hero_image} alt={settings.hero_title} className="h-10 w-10 object-contain brightness-0 invert" />
                            ) : (
                                <div
                                    className="h-10 w-10 flex items-center justify-center rounded-xl font-bold text-xl text-gray-900"
                                    style={{ backgroundColor: 'white' }}
                                >
                                    {settings.hero_title.charAt(0)}
                                </div>
                            )}
                            <span className="font-bold text-xl tracking-tight">{settings.hero_title}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering students to achieve academic excellence and personal growth in a supportive, innovative environment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Admissions', 'Academics', 'News', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                <span>123 Education Lane, Knowledge City, State, 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <span>+234 800 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <span>info@school.edu.ng</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
                        <div className="flex gap-4">
                            {settings.facebook_url && (
                                <a href={settings.facebook_url} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            )}
                            {settings.twitter_url && (
                                <a href={settings.twitter_url} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {settings.instagram_url && (
                                <a href={settings.instagram_url} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            )}
                            {settings.linkedin_url && (
                                <a href={settings.linkedin_url} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {settings.hero_title}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
