import { Event, NewsArticle, WebsiteSettings } from "@/types";

export interface TemplateProps {
    settings: WebsiteSettings;
    news: NewsArticle[];
    events: Event[];
}
