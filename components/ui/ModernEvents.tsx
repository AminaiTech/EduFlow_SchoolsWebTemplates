import { Event, WebsiteSettings } from '@/types';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { getEducationContent } from '@/lib/education-content';

interface EventsProps {
    events: Event[];
    settings: WebsiteSettings;
}

export function ModernEvents({ events, settings }: EventsProps) {
    if (!events.length) return null;

    const eduContent = getEducationContent(settings.school_sections);

    return (
        <section id="events" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mb-12">
                    <span
                        className="text-sm font-bold tracking-wider uppercase mb-2 block"
                        style={{ color: settings.primary_color }}
                    >
                        Upcoming
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{eduContent.eventsTitle}</h2>
                    <p className="text-gray-600 text-lg">Don't miss out on what's happening at our school.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Featured Event - First item */}
                    {events[0] && (
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden group">
                            <div
                                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 transition-transform group-hover:scale-110"
                                style={{ backgroundColor: settings.primary_color }}
                            />

                            <div>
                                <div className="inline-flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
                                    <span className="text-xs font-bold uppercase text-gray-400">
                                        {new Date(events[0].start_datetime).toLocaleDateString('en-US', { month: 'short' })}
                                    </span>
                                    <span
                                        className="text-2xl font-black"
                                        style={{ color: settings.primary_color }}
                                    >
                                        {new Date(events[0].start_datetime).getDate()}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-4">{events[0].title}</h3>
                                <p className="text-gray-600 mb-8 text-lg">{events[0].description}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-gray-500">
                                    <Clock className="w-5 h-5" />
                                    <span>
                                        {new Date(events[0].start_datetime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-500">
                                    <MapPin className="w-5 h-5" />
                                    <span>{events[0].location || 'School Campus'}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* List of other events */}
                    <div className="flex flex-col gap-4">
                        {events.slice(1).map((event) => (
                            <div
                                key={event.id}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow"
                            >
                                <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 text-center">
                                    <span className="text-[10px] font-bold uppercase text-gray-400">
                                        {new Date(event.start_datetime).toLocaleDateString('en-US', { month: 'short' })}
                                    </span>
                                    <span
                                        className="text-xl font-bold"
                                        style={{ color: settings.primary_color }}
                                    >
                                        {new Date(event.start_datetime).getDate()}
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                                    <div className="flex gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {new Date(event.start_datetime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {event.location || 'Campus'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {events.length === 1 && (
                            <div className="h-full flex items-center justify-center p-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl">
                                No other upcoming events
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
