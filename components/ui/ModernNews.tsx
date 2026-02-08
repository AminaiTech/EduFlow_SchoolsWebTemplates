import { NewsArticle, WebsiteSettings } from '@/types';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { getEducationContent } from '@/lib/education-content';

interface NewsProps {
    news: NewsArticle[];
    settings: WebsiteSettings;
}

export function ModernNews({ news, settings }: NewsProps) {
    if (!news.length) return null;

    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section id="news" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span
                            className="text-sm font-bold tracking-wider uppercase mb-2 block"
                            style={{ color: settings.primary_color }}
                        >
                            Latest Updates
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900">{eduContent.newsTitle}</h2>
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center font-semibold text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                        View All News
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <article
                            key={item.id}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center opacity-10"
                                        style={{ backgroundColor: settings.primary_color }}
                                    >
                                        <span className="text-4xl font-bold opacity-20">NEWS</span>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                                    News
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                    <Calendar size={14} />
                                    <time dateTime={item.published_at}>
                                        {new Date(item.published_at).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                    {item.summary}
                                </p>

                                <Link
                                    href={`/news/${item.slug}`}
                                    className="inline-flex items-center font-semibold text-sm hover:underline mt-auto"
                                    style={{ color: settings.primary_color }}
                                >
                                    Read Full Story
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
