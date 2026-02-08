# School Website Templates - Quick Reference

## All 5 Templates Overview

### 1. MODERN
- **Style**: Contemporary, glassmorphism
- **Colors**: Vibrant blue gradients
- **Best For**: Modern, tech-savvy schools
- **Key Features**:
  - Backdrop blur effects
  - Smooth hover animations
  - Floating elements
  - Mobile hamburger menu

---

### 2. CLASSIC
- **Style**: Traditional, academic
- **Colors**: Professional serif with navy/maroon
- **Best For**: Established institutions, universities
- **Key Features**:
  - Top contact bar
  - Sidebar layouts
  - Traditional navigation
  - Heritage-focused design

---

### 3. MINIMAL
- **Style**: Clean, spacious
- **Colors**: Black & white with subtle accents
- **Best For**: Design-conscious, progressive schools
- **Key Features**:
  - Large typography
  - Generous whitespace
  - Simple, elegant
  - Grayscale hover effects

---

### 4. CREATIVE
- **Style**: Playful, energetic
- **Colors**: Rainbow gradients (purple, pink, orange, yellow)
- **Best For**: Elementary schools, art academies, creative institutions
- **Key Features**:
  - Vibrant gradient backgrounds
  - Colorful cards (rotating colors)
  - Animated floating shapes
  - Fun emojis throughout
  - Wavy SVG borders
  - Rounded, bubbly elements

---

### 5. CORPORATE
- **Style**: Professional, business-like
- **Colors**: Dark gray/black with accent color
- **Best For**: Technical colleges, business schools, professional academies
- **Key Features**:
  - Stats display (students, graduation rate, ranking)
  - Dark hero sections
  - Clean grid layouts
  - Professional typography
  - Executive styling

---

## How to Switch Templates

### Option 1: During Development (Mock Data)
Edit `lib/api.ts` line 20:
```typescript
template: 'CREATIVE', // Change to: MODERN, CLASSIC, MINIMAL, CREATIVE, or CORPORATE
```

### Option 2: Via Backend API
Update the `WebsiteSettings` model:
```python
settings = WebsiteSettings.objects.first()
settings.template = 'CORPORATE'  # Choose any template
settings.save()
```

### Option 3: Django Admin
1. Go to `/admin/school_website/websitesettings/`
2. Edit the settings
3. Change the "Template" dropdown
4. Save

---

## Template Customization

Each template respects these settings:
- **primary_color**: Main brand color
- **secondary_color**: Accent color
- **hero_title**: School name
- **hero_subtitle**: Tagline (Falls back to age-appropriate defaults)
- **education_level**: Controls content tone and language (NURSERY, PRIMARY, JUNIOR_SECONDARY, SENIOR_SECONDARY)
- **show_news**: Toggle news section
- **show_events**: Toggle events section

---

## Education Level Adaptation

Each template automatically adjusts its tone, emojis, and default messaging based on the `education_level`:

- **NURSERY**: Playful language, heavy use of emojis (🎨🧸🌈), focus on fun.
- **PRIMARY**: Encouraging tone, balanced emojis (📚✨🎪), focus on learning foundations.
- **JUNIOR_SECONDARY**: Inspiring tone, moderate emojis (🚀📢📅), focus on discovery.
- **SENIOR_SECONDARY**: Professional tone, no/minimal emojis, focus on excellence and career.

---

## Quick Test Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Visit: http://localhost:3000

---

## Template Comparison

| Feature | Modern | Classic | Minimal | Creative | Corporate |
|---------|--------|---------|---------|----------|-----------|
| Animations | ✓✓✓ | ✓ | ✓ | ✓✓✓ | ✓ |
| Color | Vibrant | Traditional | Monochrome | Rainbow | Dark |
| Layout | Flexible | Structured | Spacious | Playful | Grid |
| Typography | Sans | Serif | Sans (Large) | Bold/Fun | Professional |
| Target Age | All | University | Adult | Elementary | Adult |

✓ = Low, ✓✓ = Medium, ✓✓✓ = High
