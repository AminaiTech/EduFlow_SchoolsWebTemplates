import { Event, NewsArticle, WebsiteSettings } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/website';

// Mock data for development/preview
const MOCK_SETTINGS: WebsiteSettings = {
    id: 1,
    hero_title: "Welcome to Excellence Academy",
    hero_subtitle: "Empowering Next Generation Leaders",
    hero_image: null,
    about_us_title: "About Our School",
    about_us_content: "We are dedicated to providing the best education...",
    about_us_image: null,
    primary_color: "#2563eb", // Blue-600
    secondary_color: "#1e40af", // Blue-800
    facebook_url: "#",
    twitter_url: "#",
    instagram_url: "#",
    linkedin_url: "#",
    template: 'MODERN', // 'MODERN' | 'CLASSIC' | 'MINIMAL' | 'CREATIVE' | 'CORPORATE'
    school_sections: [
        { id: 1, name: "Nursery", code: "NUR", description: "Early years education", order: 1, is_active: true },
        { id: 2, name: "Primary", code: "PRI", description: "Foundational education", order: 2, is_active: true },
        { id: 3, name: "Junior Secondary", code: "JSS", description: "Higher education", order: 3, is_active: true },
    ],
    show_news: true,
    show_events: true,
    show_staff: true,
};

const MOCK_NEWS: NewsArticle[] = [
    {
        id: 1,
        title: "Science Fair Winners",
        slug: "science-fair-winners",
        summary: "Congratulations to our students for winning gold!",
        content: "Full article content...",
        image: null,
        published_at: new Date().toISOString(),
    },
    {
        id: 2,
        title: "School Closed for Holidays",
        slug: "school-closed",
        summary: "School will be closed for winter break.",
        content: "Full article content...",
        image: null,
        published_at: new Date().toISOString(),
    }
];

const MOCK_EVENTS: Event[] = [
    {
        id: 1,
        title: "Annual Sports Day",
        slug: "sports-day",
        description: "Join us for a day of fun and activities.",
        location: "School Field",
        start_datetime: new Date(Date.now() + 86400000).toISOString(), // +1 day
        end_datetime: new Date(Date.now() + 90000000).toISOString(),
        image: null,
    }
];

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
    try {
        const res = await fetch(`${API_BASE_URL}/settings/`);
        if (!res.ok) throw new Error('Failed to fetch settings');
        const data = await res.json();
        return data[0] || MOCK_SETTINGS; // Assume list return
    } catch (error) {
        console.warn("Using mock settings:", error);
        return MOCK_SETTINGS;
    }
}

export async function getNews(): Promise<NewsArticle[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/news/`);
        if (!res.ok) throw new Error('Failed to fetch news');
        return await res.json();
    } catch (error) {
        console.warn("Using mock news:", error);
        return MOCK_NEWS;
    }
}

export async function getEvents(): Promise<Event[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/events/`);
        if (!res.ok) throw new Error('Failed to fetch events');
        return await res.json();
    } catch (error) {
        console.warn("Using mock events:", error);
        return MOCK_EVENTS;
    }
}
