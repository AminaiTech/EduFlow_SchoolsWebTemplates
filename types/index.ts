export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string | null;
  published_at: string;
}

export interface Event {
  id: number;
  title: string;
  slug: string;
  description: string;
  location: string;
  start_datetime: string;
  end_datetime: string;
  image: string | null;
}

export type TemplateType = 'MODERN' | 'CLASSIC' | 'MINIMAL' | 'CREATIVE' | 'CORPORATE';
export type EducationLevel = 'NURSERY' | 'PRIMARY' | 'JUNIOR_SECONDARY' | 'SENIOR_SECONDARY';

export interface SchoolSection {
  id: number;
  name: string;
  code: string;
  description: string | null;
  order: number;
  is_active: boolean;
}

export interface WebsiteSettings {
  id: number;
  hero_title: string;
  hero_subtitle: string;
  hero_image: string | null;
  about_us_title: string;
  about_us_content: string;
  about_us_image: string | null;
  primary_color: string;
  secondary_color: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  linkedin_url: string;
  template: TemplateType;
  school_sections: SchoolSection[];
  show_news: boolean;
  show_events: boolean;
  show_staff: boolean;
}
