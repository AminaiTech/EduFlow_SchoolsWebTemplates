import { WebsiteSettings } from '@/types';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
    settings: WebsiteSettings;
}

export function MinimalFooter({ settings }: FooterProps) {
    return (
        <footer className="bg-white border-t border-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">

                    <div className="md:col-span-2 space-y-8">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            {settings.hero_title}
                        </Link>
                        <p className="text-gray-500 max-w-sm">
                            Fostering intelligence, creativity, and character in a minimal, distraction-free environment.
                        </p>
                        <div className="flex flex-col gap-2 text-sm text-gray-400">
                            <span>© {new Date().getFullYear()} School System</span>
                            <div className="flex gap-4">
                                <Link href="#" className="hover:text-black">Privacy</Link>
                                <Link href="#" className="hover:text-black">Terms</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul className="space-y-4 text-sm font-medium">
                            {['About', 'Admissions', 'Academics', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-gray-500 transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-4 text-sm font-medium">
                            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map(social => (
                                <li key={social}>
                                    <Link href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors group">
                                        {social}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}
