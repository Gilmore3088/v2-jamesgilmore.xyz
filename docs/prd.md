# Product Requirements Document
## JamesGilmore.xyz Personal Website

### Version 1.0
**Date**: August 2025  
**Author**: James Gilmore  
**Status**: Draft

---

## 1. Executive Summary

### 1.1 Purpose
Create a professional personal website that serves as a portfolio, blog, and professional presence for James Gilmore. The site will feature a robust content management system with an admin interface, allowing for easy content updates without code changes.

### 1.2 Goals
- Establish professional online presence
- Showcase projects and portfolio work
- Publish blog content 2-3 times per month
- Minimize ongoing operational costs
- Enable content management without code updates

### 1.3 Success Metrics
- Site loads in under 2 seconds
- Zero monthly hosting costs (using free tiers)
- Admin can publish blog posts in under 5 minutes
- Mobile-responsive across all devices
- SEO optimized for name and key skills

---

## 2. Technical Stack

### 2.1 Core Technologies
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (admin only)
- **Hosting**: Vercel
- **IDE**: Cursor
- **Language**: TypeScript
- **Package Manager**: pnpm (recommended) or npm

### 2.2 Additional Libraries
- **MDX**: @next/mdx, @mdx-js/react
- **Forms**: react-hook-form, zod
- **Date handling**: date-fns
- **Icons**: lucide-react
- **SEO**: next-sitemap
- **Syntax Highlighting**: shiki or prism
- **Email**: Resend or EmailJS (contact form)

---

## 3. Feature Requirements

### 3.1 Public Pages

#### 3.1.1 Home Page
**Purpose**: Landing page that creates strong first impression  
**Requirements**:
- Hero section with name, title, and brief tagline
- Quick navigation to key sections
- Recent blog posts (3-5)
- Featured projects (2-3)
- Call-to-action for contact
- Professional photo or avatar
- Social links (GitHub, LinkedIn, Twitter/X)

#### 3.1.2 About Page
**Purpose**: Personal and professional background  
**Requirements**:
- Longer bio/story (admin-editable)
- Professional journey timeline
- Skills and technologies grid
- Personal interests/hobbies section
- Professional photo
- Education and certifications
- Link to resume

#### 3.1.3 Resume Page
**Purpose**: Detailed professional experience  
**Requirements**:
- Structured resume display (web format)
- Downloadable PDF version
- Work experience with descriptions
- Skills categorized by proficiency
- Education history
- Certifications and achievements
- Admin-managed PDF upload
- Print-friendly CSS variant

#### 3.1.4 Projects/Portfolio Page
**Purpose**: Showcase technical and creative work  
**Requirements**:
- Grid/list view toggle
- Project cards with:
  - Screenshot/thumbnail
  - Title and description
  - Tech stack badges
  - Links (live demo, GitHub)
  - Date/timeframe
  - Project type/category
- Filtering by technology or type
- Detailed project view (optional for v1)

#### 3.1.5 Blog Page
**Purpose**: Technical writing and thought leadership  
**Requirements**:
- Blog post list with pagination
- Search functionality
- Category/tag filtering
- Post previews showing:
  - Title
  - Excerpt
  - Published date
  - Reading time
  - Featured image
  - Tags
- RSS feed
- Archive view

#### 3.1.6 Blog Post Page (Individual)
**Purpose**: Rich content reading experience  
**Requirements**:
- MDX support for rich content
- Table of contents (floating/sidebar)
- Code syntax highlighting
- Image optimization and captions
- Embeds support (YouTube, Twitter, CodePen)
- Social sharing buttons
- Related posts
- Author bio section
- Reading progress indicator
- Copy code button for code blocks
- Responsive typography

#### 3.1.7 Contact Page
**Purpose**: Professional inquiries and networking  
**Requirements**:
- Contact form with:
  - Name
  - Email
  - Subject/Type of inquiry
  - Message
  - Anti-spam protection
- Social links
- Professional email
- Location (general, e.g., "Seattle, WA")
- Availability status
- Success/error notifications

### 3.2 Admin Features

#### 3.2.1 Admin Dashboard
**Purpose**: Central management interface  
**URL**: `/admin`  
**Requirements**:
- Authentication required
- Quick stats (blog views, messages)
- Recent activity
- Quick actions menu
- Navigation to all admin sections

#### 3.2.2 Content Management
**Blog Management**:
- Create/Edit/Delete posts
- Rich text editor with MDX preview
- Draft/Published status
- Schedule publishing (v2)
- Media upload for posts
- SEO metadata fields
- Category/tag management

**Project Management**:
- Add/Edit/Remove projects
- Image upload for screenshots
- Reorder projects
- Set featured projects
- Archive old projects

**Site Settings**:
- Edit about page content
- Update resume PDF
- Manage social links
- Update contact information
- SEO settings
- Site metadata

#### 3.2.3 Media Library
- Upload images
- Organize by folders
- Image optimization on upload
- Copy URL functionality
- Delete unused media

---

## 4. Non-Functional Requirements

### 4.1 Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Image lazy loading
- Code splitting

### 4.2 SEO
- Meta tags on all pages
- OpenGraph images
- JSON-LD structured data
- Sitemap.xml
- Robots.txt
- Semantic HTML

### 4.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Alt text for images
- Proper heading hierarchy
- Focus indicators

### 4.4 Security
- Admin authentication required
- Rate limiting on contact form
- Input sanitization
- HTTPS only
- Environment variables for secrets
- SQL injection prevention

### 4.5 Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome)

---

## 5. Data Models

### 5.1 Blog Post
```typescript
{
  id: string
  title: string
  slug: string
  excerpt: string
  content: string (MDX)
  featured_image: string
  published_at: datetime
  updated_at: datetime
  status: 'draft' | 'published'
  tags: string[]
  category: string
  reading_time: number
  seo_title: string
  seo_description: string
  author_id: string
}
```

### 5.2 Project
```typescript
{
  id: string
  title: string
  slug: string
  description: string
  long_description: string (MDX)
  thumbnail: string
  screenshots: string[]
  tech_stack: string[]
  live_url: string
  github_url: string
  project_type: string
  featured: boolean
  display_order: number
  created_at: datetime
  updated_at: datetime
}
```

### 5.3 Site Settings
```typescript
{
  id: string
  about_content: string (MDX)
  resume_pdf_url: string
  social_links: {
    github: string
    linkedin: string
    twitter: string
    email: string
  }
  contact_email: string
  availability_status: string
  site_title: string
  site_description: string
  site_keywords: string[]
}
```

---

## 6. User Stories

### 6.1 Visitor Stories
- As a visitor, I want to quickly understand who James is and what he does
- As a recruiter, I want to download his resume and see his projects
- As a reader, I want to easily navigate and read blog posts
- As a potential client, I want to contact James easily

### 6.2 Admin Stories
- As an admin, I want to publish blog posts without touching code
- As an admin, I want to update my project portfolio easily
- As an admin, I want to see analytics about my site traffic
- As an admin, I want to manage all content from one interface

---

## 7. MVP Scope (v1)

### In Scope
- All public pages (Home, About, Resume, Projects, Blog, Contact)
- Basic admin authentication
- Blog post creation/editing with MDX
- Project management
- Contact form
- Mobile responsive design
- Basic SEO

### Out of Scope (v2+)
- Blog post scheduling
- Comments system
- Newsletter integration
- Advanced analytics
- Multiple authors
- Blog series/collections
- Member-only content
- API endpoints
- Advanced search

---

## 8. Timeline

### Phase 1: Setup & Infrastructure (Week 1)
- Project setup with Next.js, shadcn, Supabase
- Basic routing and layouts
- Authentication setup

### Phase 2: Public Pages (Week 2-3)
- Implement all public pages
- Responsive design
- SEO implementation

### Phase 3: Admin Interface (Week 3-4)
- Admin dashboard
- Content management forms
- Media handling

### Phase 4: Polish & Deploy (Week 5)
- Testing and bug fixes
- Performance optimization
- Deployment to Vercel

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|

| Complex MDX editing in admin | Medium | Start with simple markdown, add MDX features gradually |
| SEO not effective | Medium | Research keywords, implement proper meta tags, create sitemap |
| Admin interface too complex | Low | Start with basic CRUD, iterate based on needs |

---

