import { Event, NewsArticle, WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Briefcase } from 'lucide-react';
import { getEducationContent } from '@/lib/education-content';

interface ContentProps {
    news: NewsArticle[];
    events: Event[];
    settings: WebsiteSettings;
}

export function CorporateContent({ news, events, settings }: ContentProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* News & Announcements */}
                <div className="mb-24">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <div
                                className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-white"
                                style={{ backgroundColor: settings.primary_color }}
                            >
                                Latest Updates
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">{eduContent.newsTitle}</h2>
                        </div>
                        <Link href="/news" className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 uppercase tracking-wide group">
                            View All
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <article key={item.id} className="group bg-white border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
                                <div className="h-56 bg-gray-100 overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                            <Briefcase className="w-16 h-16 text-gray-300" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                                        <Calendar size={14} />
                                        <time>{new Date(item.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                        {item.summary}
                                    </p>

                                    <Link
                                        href={`/news/${item.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group/link"
                                        style={{ color: settings.primary_color }}
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-gray-50 p-12 border-l-4" style={{ borderColor: settings.primary_color }}>
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <div
                                className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-white"
                                style={{ backgroundColor: settings.primary_color }}
                            >
                                Calendar
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">{eduContent.eventsTitle}</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="flex flex-col md:flex-row gap-6 bg-white p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
                            >
                                <div
                                    className="flex-shrink-0 w-20 h-20 flex flex-col items-center justify-center text-white font-bold"
                                    style={{ backgroundColor: settings.primary_color }}
                                >
                                    <span className="text-xs uppercase tracking-wider">
                                        {new Date(event.start_datetime).toLocaleDateString('en-US', { month: 'short' })}
                                    </span>
                                    <span className="text-3xl">{new Date(event.start_datetime).getDate()}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {event.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 font-semibold">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(event.start_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location || 'Main Campus'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
