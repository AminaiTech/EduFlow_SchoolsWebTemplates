# School Website Templates

A professional, Next.js-based website template system for schools. This project provides **three distinct, customizable templates** that can be dynamically assigned to different schools through the backend API.

## 🎨 Available Templates

### 1. **Modern Template** (`MODERN`)
- Glassmorphism design with vibrant colors
- Smooth animations and hover effects
- Mobile-first responsive design
- Perfect for contemporary, forward-thinking schools

### 2. **Classic Template** (`CLASSIC`)
- Traditional, professional layout
- Serif typography for an academic feel
- Sidebar-based content layout
- Ideal for established, heritage-focused institutions

### 3. **Minimal Template** (`MINIMAL`)
- Clean, distraction-free design
- Large typography and whitespace
- Subtle grayscale aesthetics
- Best for modern, design-conscious schools

### 4. **Creative Template** (`CREATIVE`)
- Vibrant gradient backgrounds
- Playful, colorful card designs
- Animated elements and fun emojis
- Perfect for elementary schools and creative academies

### 5. **Corporate Template** (`CORPORATE`)
- Professional business aesthetic
- Stats-driven hero section
- Clean, structured layouts
- Ideal for technical colleges and business schools

## 🚀 Features

- **Dynamic Template Selection**: Schools can switch templates via the backend `WebsiteSettings` model
- **API-Driven Content**: All content (News, Events, Settings) is fetched from Django REST API
- **SEO Optimized**: Server-side rendering with Next.js for excellent SEO
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Mock Data Fallback**: Works offline with built-in mock data during development

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Backend Integration**: Django REST Framework

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Backend API running at `http://localhost:8000`

### Installation

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Set environment variables** (optional):
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api/website
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
schools_web_templates/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main homepage with template selector
│   └── globals.css          # Global styles
├── components/
│   ├── templates/           # Complete template assemblies
│   │   ├── ModernTemplate.tsx
│   │   ├── ClassicTemplate.tsx
│   │   └── MinimalTemplate.tsx
│   ├── layout/              # Header & Footer components
│   │   ├── ModernHeader.tsx
│   │   ├── ClassicHeader.tsx
│   │   ├── MinimalHeader.tsx
│   │   └── ...Footers
│   └── ui/                  # Reusable UI components
│       ├── ModernHero.tsx
│       ├── ModernNews.tsx
│       └── ...
├── lib/
│   └── api.ts              # API client with mock data
├── types/
│   ├── index.ts            # Data model types
│   └── template.ts         # Template prop types
└── package.json
```

## 🔌 Backend Integration

The templates consume data from the following Django API endpoints:

- **Settings**: `/api/website/settings/` - Returns website configuration including template choice
- **News**: `/api/website/news/` - Published news articles
- **Events**: `/api/website/events/` - Upcoming events

### Backend Models

```python
# school_website/models.py
- NewsArticle: title, slug, summary, content, image, published_at
- Event: title, slug, description, location, start_datetime, end_datetime, image
- WebsiteSettings: hero_title, hero_subtitle, template (MODERN/CLASSIC/MINIMAL), primary_color, etc.
```

## 🎨 Customizing Templates

Each school can customize:
- **Template Choice**: Set `template` field in `WebsiteSettings`
- **Brand Colors**: `primary_color` and `secondary_color` (hex codes)
- **Content**: Hero text, about section, social links
- **Visibility**: Toggle `show_news`, `show_events`, `show_staff`

### Example: Changing Template

Update via Django Admin or API:
```python
settings = WebsiteSettings.objects.first()
settings.template = 'CLASSIC'  # or 'MODERN' or 'MINIMAL'
settings.primary_color = '#1E40AF'  # Navy blue
settings.save()
```

The website will automatically reflect changes on next page load (revalidated every 60 seconds).

## 📱 Responsive Design

All templates are fully responsive with breakpoints:
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🧪 Development

### Adding a New Template

1. Create template components in `components/templates/`:
   ```tsx
   export default function YourTemplate({ settings, news, events }: TemplateProps) {
     // Your design
   }
   ```

2. Add to template selector in `app/page.tsx`:
   ```tsx
   case 'YOUR_TEMPLATE':
     return <YourTemplate settings={settings} news={news} events={events} />;
   ```

3. Update backend `TEMPLATE_CHOICES` in `WebsiteSettings` model

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 📝 License

This project is part of the School Management System.

## 🤝 Contributing

To contribute a new template:
1. Follow the design system patterns from existing templates
2. Ensure mobile responsiveness
3. Test with different color schemes
4. Submit with screenshots

---

**Built with ❤️ for Schools**
