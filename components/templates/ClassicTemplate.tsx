import { TemplateProps } from "@/types/template";
import { ClassicHeader } from "../layout/ClassicHeader";
import { ClassicHero } from "../ui/ClassicHero";
import { ClassicContent } from "../ui/ClassicContent";
import { ClassicFooter } from "../layout/ClassicFooter";

export default function ClassicTemplate({ settings, news, events }: TemplateProps) {
    return (
        <div className="font-serif text-gray-900 bg-white"
            style={{ '--primary': settings.primary_color } as React.CSSProperties}>

            <ClassicHeader settings={settings} />

            <main>
                <ClassicHero settings={settings} />
                <ClassicContent news={news} events={events} settings={settings} />
            </main>

            <ClassicFooter settings={settings} />
        </div>
    );
}
