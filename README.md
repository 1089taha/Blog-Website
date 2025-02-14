# Infinite Threads - Modern Blog Platform

A modern, responsive blog platform built with Next.js and Sanity CMS, featuring a clean design and seamless content management system.


## 🚀 Features

- **Modern Design**: Clean and responsive UI that works across all devices
- **Dynamic Content**: Real-time content management with Sanity CMS
- **SEO Optimized**: Built with best practices for search engine optimization
- **Performance Focused**: Server-side rendering and image optimization
- **Content Categories**: Organized blog posts with category filtering
- **Author Profiles**: Detailed author information and bio sections
- **Responsive Images**: Optimized images with lazy loading
- **Pagination**: Smart pagination system for blog posts
- **Interactive UI**: Smooth transitions and hover effects

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Content Management**: Sanity.io
- **Styling**: TailwindCSS
- **Typography**: Geist Font
- **Icons**: React Icons
- **Database**: Sanity Studio
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/1089taha/Blog-Website
```

2. Install dependencies:
```bash
cd Blog Website
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Run the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
infinite-threads/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   └── sanity/             # Sanity configuration
├── public/                  # Static assets
└── package.json            # Project dependencies
```

## 🔧 Configuration

### Sanity Studio
- The Sanity Studio is configured in `sanity.config.ts`
- Schema definitions are located in `src/sanity/schemaTypes/`
- Custom studio structure in `src/sanity/structure.ts`

### Blog Features
- Dynamic routing for blog posts
- Responsive image handling
- Category management
- Author profiles
- Rich text editor with custom components

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

## 🧩 Components

- **Navbar**: Responsive navigation with mobile menu
- **BlogPageClient**: Main blog listing with pagination
- **Footer**: Comprehensive footer with social links
- **Post Layout**: Dynamic blog post layout with author info

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 👥 Authors

- TahaKhan - Initial work - (https://github.com/1089taha)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Sanity.io for the powerful CMS
- Vercel for hosting solutions