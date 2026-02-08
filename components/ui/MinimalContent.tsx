import { Event, NewsArticle, WebsiteSettings } from '@/types';
import Link from 'next/link';
import { getEducationContent } from '@/lib/education-content';

interface ContentProps {
    news: NewsArticle[];
    events: Event[];
    settings: WebsiteSettings;
}

export function MinimalContent({ news, events, settings }: ContentProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section className="py-24 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20">

                    {/* News Column */}
                    <div>
                        <div className="flex justify-between items-baseline mb-12">
                            <h2 className="text-3xl font-bold tracking-tight">{eduContent.newsTitle}</h2>
                            <Link href="/news" className="text-sm text-gray-400 hover:text-black transition-colors">All News</Link>
                        </div>

                        <div className="space-y-12">
                            {news.map((item) => (
                                <article key={item.id} className="group cursor-pointer">
                                    <div className="text-xs font-medium text-gray-400 mb-2">
                                        {new Date(item.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 group-hover:underline decoration-1 underline-offset-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed line-clamp-2">
                                        {item.summary}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Events Column */}
                    <div>
                        <div className="flex justify-between items-baseline mb-12">
                            <h2 className="text-3xl font-bold tracking-tight">{eduContent.eventsTitle}</h2>
                            <Link href="/events" className="text-sm text-gray-400 hover:text-black transition-colors">Full Calendar</Link>
                        </div>

                        <div className="space-y-2">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="flex gap-6 py-6 border-b border-gray-100 items-start group hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-xl"
                                >
                                    <div className="flex-shrink-0 w-16 text-center">
                                        <span className="block text-2xl font-bold text-gray-900">
                                            {new Date(event.start_datetime).getDate()}
                                        </span>
                                        <span className="block text-xs uppercase text-gray-400 font-medium tracking-wider">
                                            {new Date(event.start_datetime).toLocaleDateString('en-US', { month: 'short' })}
                                        </span>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors" style={{ '--primary': settings.primary_color } as React.CSSProperties}>
                                            {event.title}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {event.location || "School Campus"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
