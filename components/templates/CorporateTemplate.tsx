import { TemplateProps } from "@/types/template";
import { CorporateHeader } from "../layout/CorporateHeader";
import { CorporateHero } from "../ui/CorporateHero";
import { CorporateContent } from "../ui/CorporateContent";
import { CorporateFooter } from "../layout/CorporateFooter";

export default function CorporateTemplate({ settings, news, events }: TemplateProps) {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <CorporateHeader settings={settings} />

            <main>
                <CorporateHero settings={settings} />
                <CorporateContent news={news} events={events} settings={settings} />
            </main>

            <CorporateFooter settings={settings} />
        </div>
    );
}
