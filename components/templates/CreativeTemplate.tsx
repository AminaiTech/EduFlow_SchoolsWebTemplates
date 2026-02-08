import { TemplateProps } from "@/types/template";
import { CreativeHeader } from "../layout/CreativeHeader";
import { CreativeHero } from "../ui/CreativeHero";
import { CreativeContent } from "../ui/CreativeContent";
import { CreativeFooter } from "../layout/CreativeFooter";

export default function CreativeTemplate({ settings, news, events }: TemplateProps) {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <CreativeHeader settings={settings} />

            <main>
                <CreativeHero settings={settings} />
                <CreativeContent news={news} events={events} settings={settings} />
            </main>

            <CreativeFooter settings={settings} />
        </div>
    );
}
