import { EducationLevel, SchoolSection } from "@/types";

export interface EducationLevelContent {
    heroSubtitle: string;
    ctaButton: string;
    newsTitle: string;
    eventsTitle: string;
    aboutTitle: string;
    colors: {
        accent: string;
        background: string;
    };
}

export const educationLevelContent: Record<EducationLevel, EducationLevelContent> = {
    NURSERY: {
        heroSubtitle: "Where Little Ones Learn Through Play & Fun! 🎨🧸",
        ctaButton: "Enroll Your Little One",
        newsTitle: "What's Happening? 🌈",
        eventsTitle: "Fun Activities Coming Up! 🎉",
        aboutTitle: "Our Happy Place 🏫",
        colors: {
            accent: '#FF6B9D', // Pink
            background: '#FFF9E6' // Cream
        }
    },
    PRIMARY: {
        heroSubtitle: "Building Strong Foundations for Bright Futures! 📚✨",
        ctaButton: "Join Our School Family",
        newsTitle: "School News & Updates 📰",
        eventsTitle: "Upcoming Events & Activities 🎪",
        aboutTitle: "About Our School 🏫",
        colors: {
            accent: '#4CAF50', // Green
            background: '#F5F5F5'
        }
    },
    JUNIOR_SECONDARY: {
        heroSubtitle: "Discover Your Potential & Shape Your Future 🚀",
        ctaButton: "Start Your Journey",
        newsTitle: "Latest News & Highlights 📢",
        eventsTitle: "Events & Opportunities 📅",
        aboutTitle: "About Us 🎓",
        colors: {
            accent: '#2196F3', // Blue
            background: '#FAFAFA'
        }
    },
    SENIOR_SECONDARY: {
        heroSubtitle: "Excellence in Education. Leadership for Tomorrow.",
        ctaButton: "Apply for Admission",
        newsTitle: "News & Announcements",
        eventsTitle: "Academic Calendar & Events",
        aboutTitle: "About Our Institution",
        colors: {
            accent: '#1565C0', // Navy Blue
            background: '#FFFFFF'
        }
    }
};

export function inferEducationLevel(sections: SchoolSection[]): EducationLevel {
    if (!sections || sections.length === 0) return 'PRIMARY';
    const codes = sections.map(s => s.code.toUpperCase());

    if (codes.includes('SSS')) return 'SENIOR_SECONDARY';
    if (codes.includes('JSS')) return 'JUNIOR_SECONDARY';
    if (codes.includes('PRI')) return 'PRIMARY';
    if (codes.includes('NUR') || codes.includes('DC')) return 'NURSERY';

    return 'PRIMARY';
}

export function getEducationContent(sections: SchoolSection[]): EducationLevelContent {
    const level = inferEducationLevel(sections);
    return educationLevelContent[level];
}
