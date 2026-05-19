export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'pn9w4q7x2m',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'PRNowe',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Press Release Distribution & Media Outreach',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Distribute your press releases to thousands of journalists, newsrooms, and media outlets. PRNowe delivers your story to the right audience at the right time.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'prnowe.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prnowe.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
