import { TemplateProps } from "@/types/template";
import { MinimalHeader } from "../layout/MinimalHeader";
import { MinimalHero } from "../ui/MinimalHero";
import { MinimalContent } from "../ui/MinimalContent";
import { MinimalFooter } from "../layout/MinimalFooter";

export default function MinimalTemplate({ settings, news, events }: TemplateProps) {
    return (
        <div className="font-sans text-gray-900 bg-white antialiased">
            <MinimalHeader settings={settings} />

            <main>
                <MinimalHero settings={settings} />
                <MinimalContent news={news} events={events} settings={settings} />
            </main>

            <MinimalFooter settings={settings} />
        </div>
    );
}
