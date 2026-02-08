import { getEvents, getNews, getWebsiteSettings } from "@/lib/api";
import ModernTemplate from "@/components/templates/ModernTemplate";
import { WebsiteSettings } from "@/types";

// In a real app, we would import other templates lazily or dynamically
import ClassicTemplate from "@/components/templates/ClassicTemplate";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";
import CorporateTemplate from "@/components/templates/CorporateTemplate";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  // Fetch data in parallel
  const [settings, news, events] = await Promise.all([
    getWebsiteSettings(),
    getNews(),
    getEvents(),
  ]);

  // Template Selector
  const renderTemplate = () => {
    switch (settings.template) {
      case 'MODERN':
        return <ModernTemplate settings={settings} news={news} events={events} />;
      case 'CLASSIC':
        return <ClassicTemplate settings={settings} news={news} events={events} />;
      case 'MINIMAL':
        return <MinimalTemplate settings={settings} news={news} events={events} />;
      case 'CREATIVE':
        return <CreativeTemplate settings={settings} news={news} events={events} />;
      case 'CORPORATE':
        return <CorporateTemplate settings={settings} news={news} events={events} />;
      default:
        return <ModernTemplate settings={settings} news={news} events={events} />;
    }
  };

  return renderTemplate();
}
