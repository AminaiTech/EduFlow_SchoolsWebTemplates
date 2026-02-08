import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

interface FooterProps {
    settings: WebsiteSettings;
}

export function CreativeFooter({ settings }: FooterProps) {
    return (
        <footer className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white pt-20 pb-12 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="inline-block bg-white rounded-3xl p-4 mb-6 transform hover:scale-110 hover:rotate-6 transition-transform shadow-2xl">
                            <span className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                                {settings.hero_title.charAt(0)}
                            </span>
                        </div>
                        <h3 className="text-2xl font-black mb-4">{settings.hero_title}</h3>
                        <p className="text-white/90 leading-relaxed font-semibold">
                            Making learning fun, creative, and inspiring every single day! 🌟
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                            <span className="text-2xl">🔗</span> Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Programs', 'Admissions', 'Gallery', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 hover:translate-x-2 transition-transform font-bold text-white/90 hover:text-white"
                                    >
                                        <span className="text-yellow-300">→</span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                            <span className="text-2xl">💬</span> Connect With Us
                        </h4>
                        <div className="flex gap-4 justify-center md:justify-start mb-6">
                            {[
                                { Icon: Facebook, color: 'bg-blue-500' },
                                { Icon: Instagram, color: 'bg-pink-500' },
                                { Icon: Twitter, color: 'bg-sky-400' }
                            ].map(({ Icon, color }, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className={`${color} p-4 rounded-full hover:scale-125 transition-transform shadow-xl hover:shadow-2xl`}
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                        <div className="space-y-2 text-white/90 font-semibold">
                            <p>📞 +234 800 123 4567</p>
                            <p>✉️ hello@school.edu.ng</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t-2 border-white/30 text-center">
                    <p className="text-white/90 font-bold flex items-center justify-center gap-2 flex-wrap">
                        <span>Made with</span>
                        <Heart className="w-5 h-5 text-red-300 animate-pulse" fill="currentColor" />
                        <span>© {new Date().getFullYear()} {settings.hero_title}</span>
                        <span className="text-yellow-300">✨</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
