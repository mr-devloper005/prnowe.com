import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Press Release Distribution',
  },
  footer: {
    tagline: 'Reach journalists, newsrooms & media outlets worldwide',
  },
  hero: {
    badge: 'Trusted by 10,000+ PR professionals',
    title: ['Distribute Press Releases That Get Picked Up'],
    description:
      'Reach thousands of journalists, editors, and media outlets with one submission. PRNowe puts your story in front of the right people — fast.',
    primaryCta: {
      label: 'Submit a Press Release',
      href: '/updates',
    },
    secondaryCta: {
      label: 'Contact Us',
      href: '/contact',
    },
    searchPlaceholder: 'Search press releases',
    focusLabel: 'Latest',
    featureCardBadge: 'Breaking News',
    featureCardTitle: 'Your story, amplified across 5,000+ media outlets.',
    featureCardDescription:
      'From regional newsrooms to national publications, PRNowe ensures your press release lands where it matters most.',
  },
  home: {
    metadata: {
      title: 'PRNowe — Press Release Distribution & Media Outreach',
      description:
        'Distribute press releases to thousands of journalists and media outlets. PRNowe delivers your story to the right audience at the right time.',
      openGraphTitle: 'PRNowe — Press Release Distribution',
      openGraphDescription:
        'Reach journalists, newsrooms, and media outlets worldwide with PRNowe press release distribution.',
      keywords: [
        'press release distribution',
        'media outreach',
        'PR wire',
        'news distribution',
        'press wire service',
        'media relations',
        'PRNowe',
      ],
    },
    introBadge: 'Built for Modern PR',
    introTitle: 'A press wire built for agencies, brands, and communications teams.',
    introParagraphs: [
      'PRNowe is a modern press release distribution platform designed for PR professionals who need reliable reach, real analytics, and a workflow that doesn\'t slow them down.',
      'Submit once and reach thousands of journalists, bloggers, and media outlets across technology, finance, health, lifestyle, and more.',
      'From startups announcing their first funding round to enterprises managing global campaigns — PRNowe scales with your communications needs.',
    ],
    sideBadge: 'Why PRNowe',
    sidePoints: [
      'Instant distribution to 5,000+ verified media contacts.',
      'Real-time analytics: opens, pickups, and media reach.',
      'Industry-specific targeting for maximum relevance.',
      'SEO-optimized press release pages that rank on Google.',
    ],
    primaryLink: {
      label: 'Submit a Press Release',
      href: '/updates',
    },
    secondaryLink: {
      label: 'View Pricing',
      href: '/pricing',
    },
  },
  cta: {
    badge: 'Get Started Today',
    title: 'Ready to get your story in front of the right journalists?',
    description:
      'Join thousands of PR professionals who trust PRNowe to distribute their press releases and grow their media presence.',
    primaryCta: {
      label: 'Submit a Press Release',
      href: '/updates',
    },
    secondaryCta: {
      label: 'Contact Us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest Press Releases',
  taskSectionDescriptionSuffix: 'Browse the most recent press releases and media announcements.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest articles and editorial coverage.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore business listings and directory entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press Releases',
    description: 'Browse the latest press releases and media announcements from companies worldwide.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Press Releases',
    paragraphs: [
      'Browse the latest press releases distributed through PRNowe. From product launches and funding announcements to executive appointments and industry research — find the news that matters to your sector.',
      'Use the category filters to narrow by industry. Each press release includes full distribution details, media pickup data, and direct contact information for the issuing organization.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Submit a Release', href: '/register' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
