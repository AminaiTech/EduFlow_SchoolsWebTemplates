# Education-Level Adaptation Feature

## Overview
All 5 templates now automatically adapt their content, language, and tone based on the **Education Level** setting. This ensures age-appropriate messaging for different student groups.

## Education Levels

### 1. NURSERY (Ages 2-5)
**Content Characteristics:**
- Very playful, simple language
- Lots of emojis and colorful elements
- Focus on play-based learning
- Parent-oriented messaging

**Example Content:**
- Hero Subtitle: "Where Little Ones Learn Through Play & Fun! 🎨🧸"
- CTA Button: "Enroll Your Little One"
- News Title: "What's Happening? 🌈"
- Events Title: "Fun Activities Coming Up! 🎉"

---

### 2. PRIMARY (Ages 6-11)
**Content Characteristics:**
- Engaging, encouraging language
- Balance of fun and learning
- Activity-focused
- Student and parent-friendly

**Example Content:**
- Hero Subtitle: "Building Strong Foundations for Bright Futures! 📚✨"
- CTA Button: "Join Our School Family"
- News Title: "School News & Updates 📰"
- Events Title: "Upcoming Events & Activities 🎪"

---

### 3. JUNIOR SECONDARY (Ages 12-14)
**Content Characteristics:**
- More mature language
- Discovery and exploration focus
- Club/sports oriented
- Teen-appropriate tone

**Example Content:**
- Hero Subtitle: "Discover Your Potential & Shape Your Future 🚀"
- CTA Button: "Start Your Journey"
- News Title: "Latest News & Highlights 📢"
- Events Title: "Events & Opportunities 📅"

---

### 4. SENIOR SECONDARY (Ages 15-18)
**Content Characteristics:**
- Professional, mature language
- University preparation focus
- Career-oriented
- Achievement-driven messaging

**Example Content:**
- Hero Subtitle: "Excellence in Education. Leadership for Tomorrow."
- CTA Button: "Apply for Admission"
- News Title: "News & Announcements"
- Events Title: "Academic Calendar & Events"

---

## Implementation (Automated)

### Backend Integration
The `WebsiteSettings` API now includes a `school_sections` list, which is fetched directly from the school's academic configuration.

### Frontend Inference
The system uses a priority-based inference logic to determine the website "vibe":

```typescript
// PRIORITY: SSS > JSS > PRI > NUR
if (sections.includes('SSS')) return 'SENIOR_SECONDARY';
if (sections.includes('JSS')) return 'JUNIOR_SECONDARY';
if (sections.includes('PRI')) return 'PRIMARY';
return 'NURSERY';
```

---

## How to Set School Sections

### Method 1: School Onboarding
When a school is created by the platform admin, they select which sections the school operates (Nursery, Primary, etc.). These sections are then automatically available to the website template.

### Method 2: Academic Management
School administrators can add or remove sections in the **Academics** module. The website will automatically update its tone to match the highest active section.

### Method 3: During Development (Mock Data)
Edit `lib/api.ts`:
```typescript
school_sections: [
    { code: 'NUR', ... },
    { code: 'PRI', ... },
],
```
The website will automatically adapt based on the codes provided in this list.

---

## Template Adaptation Matrix

| Element | Nursery | Primary | Junior Secondary | Senior Secondary |
|---------|---------|---------|------------------|------------------|
| **Emojis** | Heavy (🎨🧸🌈) | Moderate (📚✨🎪) | Light (🚀📢📅) | Minimal/None |
| **Tone** | Playful | Encouraging | Inspiring | Professional |
| **Language** | Very Simple | Simple | Moderate | Advanced |
| **Focus** | Play & Fun | Learning & Activities | Discovery & Growth | Excellence & Career |
| **Audience** | Parents | Parents & Students | Students & Parents | Students |

---

## Affected Components

### All Templates Adapted:
- ✅ **CreativeHero** - Hero subtitle, CTA buttons
- ✅ **CreativeContent** - News/Events titles, descriptions
- ✅ **ModernTemplate** - Hero, News, Events, and About section
- ✅ **ClassicTemplate** - Hero, Content (News/Events)
- ✅ **MinimalTemplate** - Hero, Content (News/Events)
- ✅ **CorporateTemplate** - Hero, Content (News/Events)

---

## Migration Required

After adding the `education_level` field to the backend model, run:

```bash
cd backend
python manage.py makemigrations school_website
python manage.py migrate_schemas --shared
python manage.py migrate_schemas --tenant
```

---

## Testing Different Levels

To see how each level looks:

1. **Start dev server**: `npm run dev`
2. **Edit** `lib/api.ts` line 21
3. **Change**: `education_level: 'NURSERY'` (or PRIMARY, JUNIOR_SECONDARY, SENIOR_SECONDARY)
4. **Reload** browser - content adapts automatically!

---

## Benefits

✅ **Age-Appropriate** - Content matches student maturity level
✅ **Professional** - Schools can set once and forget
✅ **Automatic** - No manual content editing needed
✅ **Consistent** - All templates follow same adaptation rules
✅ **Flexible** - Easy to add more levels or customize further

---

## Future Enhancements

Potential additions:
- Color scheme adaptation per level
- Font size/complexity variation
- Image/illustration style changes
- Navigation complexity adjustment
- Footer content customization

---

**The system is now fully adaptive to all education levels from Nursery through Senior Secondary!** 🎓
