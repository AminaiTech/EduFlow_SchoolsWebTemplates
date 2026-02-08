import { Event, NewsArticle, WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { getEducationContent } from '@/lib/education-content';

interface ContentProps {
    news: NewsArticle[];
    events: Event[];
    settings: WebsiteSettings;
}

export function ClassicContent({ news, events, settings }: ContentProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content Area - News */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4 mb-10">
                            <h2 className="text-3xl font-serif font-bold text-gray-900">{eduContent.newsTitle}</h2>
                            <Link href="/news" className="text-sm font-bold text-gray-500 hover:text-primary uppercase tracking-wider">
                                View Archive
                            </Link>
                        </div>

                        <div className="space-y-12">
                            {news.map((item) => (
                                <article key={item.id} className="flex flex-col md:flex-row gap-8 group">
                                    <div className="w-full md:w-64 h-48 bg-gray-100 flex-shrink-0 relative overflow-hidden">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full flex items-center justify-center text-white font-serif text-4xl opacity-20"
                                                style={{ backgroundColor: settings.primary_color }}
                                            >
                                                {item.title.charAt(0)}
                                            </div>
                                        )}
                                        <div className="absolute top-0 left-0 bg-gray-900 text-white text-xs font-bold px-3 py-1 uppercase">
                                            News
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-sm text-gray-500 mb-2 font-serif italic">
                                            {new Date(item.published_at).toLocaleDateString(undefined, {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </div>
                                        <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                            <Link href={`/news/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                            {item.summary}
                                        </p>
                                        <Link
                                            href={`/news/${item.slug}`}
                                            className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:underline"
                                            style={{ color: settings.primary_color }}
                                        >
                                            Continue Reading <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar - Events & Quick Links */}
                    <div className="lg:w-1/3 space-y-12">
                        {/* Events Widget */}
                        <div className="bg-gray-50 p-8 border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{eduContent.eventsTitle}</h3>
                            <ul className="space-y-6">
                                {events.map((event) => (
                                    <li key={event.id} className="flex gap-4 group cursor-pointer">
                                        <div
                                            className="w-14 h-14 flex-shrink-0 flex flex-col items-center justify-center text-white font-bold border-2 border-white shadow-sm"
                                            style={{ backgroundColor: settings.secondary_color }}
                                        >
                                            <span className="text-xs uppercase">{new Date(event.start_datetime).toLocaleDateString('en-US', { month: 'short' })}</span>
                                            <span className="text-lg">{new Date(event.start_datetime).getDate()}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">{event.title}</h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                <Calendar size={12} />
                                                <span>{new Date(event.start_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                {events.length === 0 && <li className="text-gray-500 italic">No upcoming events.</li>}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <Link
                                    href="/calendar"
                                    className="block w-full py-3 text-center text-sm font-bold border-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-wider"
                                    style={{ borderColor: 'currentColor' }}
                                >
                                    View Full Calendar
                                </Link>
                            </div>
                        </div>

                        {/* Principal's Message Widget */}
                        <div className="bg-gray-900 text-white p-8 relative overflow-hidden">
                            <div
                                className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"
                            />
                            <h3 className="text-xl font-serif font-bold mb-6 relative z-10">Principal's Welcome</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed relative z-10 italic">
                                "We are committed to fostering a community of learners who are prepared to lead with integrity..."
                            </p>
                            <Link href="/principal" className="text-sm font-bold uppercase tracking-wider hover:text-gray-300 relative z-10 underline decoration-gray-500 underline-offset-4">
                                Read Message
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
