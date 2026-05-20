import Link from 'next/link'
import { Twitter, Linkedin, Facebook } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const footerSections = [
  {
    heading: 'Press Release Distribution',
    links: [
      { label: 'Submit Press Release', href: '/register' },
      { label: 'Browse Press Releases', href: '/updates' },
      { label: 'Distribution Network', href: '/about' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'For Journalists', href: '/updates' },
      { label: 'RSS News Feeds', href: '/updates' },
      { label: 'Help Center', href: '/help' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About PRNowe', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
]

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
]

export function FooterOverride() {
  return (
    <footer className="border-t border-slate-200 bg-[#0f0a1a] text-white">
      {/* Top CTA strip */}
      <div
        className="px-4 py-10 text-center"
        style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Ready to get coverage?
        </p>
        <h2
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Distribute your press release today
        </h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/register"
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#640D5F] transition-opacity hover:opacity-90"
          >
            Submit a Press Release
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="PRNowe"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              The modern press release distribution platform trusted by PR professionals, agencies, and communications teams worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                {section.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.heading}__${link.href}__${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} PRNowe.com. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
