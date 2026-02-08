import { TemplateProps } from "@/types/template";
import { ModernHeader } from "../layout/ModernHeader";
import { ModernHero } from "../ui/ModernHero";
import { ModernNews } from "../ui/ModernNews";
import { ModernEvents } from "../ui/ModernEvents";
import { ModernFooter } from "../layout/ModernFooter";
import { getEducationContent } from "@/lib/education-content";

export default function ModernTemplate({ settings, news, events }: TemplateProps) {
    const eduContent = getEducationContent(settings.school_sections);

    return (
        <div className="font-sans text-gray-900 bg-white selection:bg-primary selection:text-white"
            style={{ '--primary': settings.primary_color } as React.CSSProperties}>

            <ModernHeader settings={settings} />

            <main>
                <ModernHero settings={settings} />

                {/* About Section (Inline for now, could be componentized) */}
                <section id="about-us" className="py-24 container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <span
                                className="text-sm font-bold tracking-wider uppercase mb-4 block"
                                style={{ color: settings.primary_color }}
                            >
                                {eduContent.aboutTitle}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{settings.about_us_title}</h2>
                            <div
                                className="prose prose-lg text-gray-600"
                                dangerouslySetInnerHTML={{ __html: settings.about_us_content }}
                            />
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                {settings.about_us_image ? (
                                    <img src={settings.about_us_image} alt="About Us" className="w-full h-auto" />
                                ) : (
                                    <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                                        <span className="text-gray-400 font-bold text-xl">About Image</span>
                                    </div>
                                )}
                            </div>
                            {/* Decor */}
                            <div
                                className="absolute -bottom-10 -right-10 w-full h-full rounded-3xl -z-10 opacity-20"
                                style={{ backgroundColor: settings.primary_color }}
                            />
                        </div>
                    </div>
                </section>

                {settings.show_news && <ModernNews news={news} settings={settings} />}

                {settings.show_events && <ModernEvents events={events} settings={settings} />}
            </main>

            <ModernFooter settings={settings} />
        </div>
    );
}
