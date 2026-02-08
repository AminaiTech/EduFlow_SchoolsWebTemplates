import { Event, NewsArticle, WebsiteSettings } from '@/types';
import Link from 'next/link';
import { Calendar, MapPin, Newspaper, PartyPopper } from 'lucide-react';
import { inferEducationLevel, getEducationContent } from '@/lib/education-content';

interface ContentProps {
    news: NewsArticle[];
    events: Event[];
    settings: WebsiteSettings;
}

export function CreativeContent({ news, events, settings }: ContentProps) {
    const colors = ['bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-orange-400'];
    const level = inferEducationLevel(settings.school_sections);
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* News Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <Newspaper className="w-8 h-8 text-purple-500" />
                        <h2 className="text-5xl font-black text-gray-900">{eduContent.newsTitle}</h2>
                        <Newspaper className="w-8 h-8 text-purple-500" />
                    </div>
                    <p className="text-xl text-gray-600 font-semibold">
                        {level === 'NURSERY' ? 'Fun stories from our little learners! 🌟' :
                            level === 'PRIMARY' ? "What's happening in our amazing school? 🎊" :
                                level === 'JUNIOR_SECONDARY' ? 'Stay updated with the latest happenings! 📣' :
                                    'Important updates and achievements 📰'}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {news.map((item, index) => {
                        const colorClass = colors[index % colors.length];
                        return (
                            <article
                                key={item.id}
                                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                            >
                                <div className={`${colorClass} p-8 text-white relative overflow-hidden`}>
                                    {/* Decorative circles */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full" />
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Calendar className="w-5 h-5" />
                                            <span className="text-sm font-bold uppercase">
                                                {new Date(item.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-black mb-4 leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-white/90 mb-6 leading-relaxed line-clamp-3">
                                            {item.summary}
                                        </p>

                                        <Link
                                            href={`/news/${item.slug}`}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:scale-110 transition-transform shadow-lg"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Events Section */}
                <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-3xl p-12 mt-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <PartyPopper className="w-10 h-10 text-purple-600" />
                            <h2 className="text-5xl font-black text-gray-900">{eduContent.eventsTitle}</h2>
                            <PartyPopper className="w-10 h-10 text-purple-600" />
                        </div>
                        <p className="text-xl text-gray-700 font-semibold">
                            {level === 'NURSERY' ? "Fun time adventures ahead! 🎨" :
                                level === 'PRIMARY' ? "Don't miss out on the excitement! 🎉" :
                                    level === 'JUNIOR_SECONDARY' ? "Mark your calendars! 📅" :
                                        "Important academic and extracurricular events ⭐"}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group hover:scale-105"
                            >
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className={`${colors[index % colors.length]} w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg transform group-hover:rotate-12 transition-transform`}>
                                            <span className="text-3xl font-black">
                                                {new Date(event.start_datetime).getDate()}
                                            </span>
                                            <span className="text-xs font-bold uppercase">
                                                {new Date(event.start_datetime).toLocaleDateString('en-US', { month: 'short' })}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {event.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location || 'School Campus'}</span>
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
