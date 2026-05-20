import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ArrowRight, Send, BarChart3, Globe2, FileText, Shield, Zap, HelpCircle } from 'lucide-react'

const topics = [
  {
    icon: Send,
    title: 'Submitting a Press Release',
    description: 'Learn how to write, format, and submit your press release for distribution.',
    href: '/contact',
  },
  {
    icon: Globe2,
    title: 'Distribution Network',
    description: 'Understand how your release reaches journalists and media outlets worldwide.',
    href: '/contact',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Track opens, pickups, and media reach from your analytics dashboard.',
    href: '/contact',
  },
  {
    icon: FileText,
    title: 'Writing Guidelines',
    description: 'Best practices for writing press releases that get picked up by journalists.',
    href: '/contact',
  },
  {
    icon: Shield,
    title: 'Account & Billing',
    description: 'Manage your account settings, payment methods, and release history.',
    href: '/contact',
  },
  {
    icon: Zap,
    title: 'Expedited Distribution',
    description: 'Need same-day distribution? Learn how to fast-track your release.',
    href: '/contact',
  },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'How do I submit a press release?',
    answer: 'Create a free account, click "Submit a Press Release", fill in your headline, body, contact details, and choose your distribution level. Our team reviews and distributes within 2–4 hours.',
  },
  {
    id: 'faq-2',
    question: 'How quickly will my release be distributed?',
    answer: 'Standard releases are distributed within 2–4 hours of approval. With the Same-Day add-on, distribution happens within 2 hours of submission.',
  },
  {
    id: 'faq-3',
    question: 'Can I target specific industries or regions?',
    answer: 'Yes. PRNowe allows targeting by industry vertical (Technology, Finance, Health, Lifestyle, etc.) and by geographic region for more relevant distribution.',
  },
  {
    id: 'faq-4',
    question: 'Where can I see my analytics?',
    answer: 'After distribution, your dashboard shows real-time data on media pickups, opens, social shares, and estimated audience reach.',
  },
  {
    id: 'faq-5',
    question: 'Can I edit my press release after submission?',
    answer: 'You can edit before distribution begins. Once distributed, corrections can be issued as a follow-up release. Contact support for urgent corrections.',
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #640D5F 0%, #8B1A6B 30%, #D91656 65%, #EB5B00 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            <HelpCircle className="h-3.5 w-3.5" />
            Help Center
          </div>
          <h1
            className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            How can we help?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75">
            Find answers, guides, and best practices for distributing your press releases with PRNowe.
          </p>
          {/* Search bar */}
          <div className="mx-auto mt-7 flex max-w-lg overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Search help articles..."
              className="flex-1 bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <button
              className="px-5 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              Search
            </button>
          </div>
        </div>
        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 32L1440 32L1440 10C1200 28 960 0 720 10C480 20 240 0 0 10L0 32Z" fill="white" />
          </svg>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* ── Topic cards ── */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Browse Topics</p>
          <h2
            className="mt-2 text-2xl font-bold text-slate-900"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            What do you need help with?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-md"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: i % 3 === 0
                      ? 'linear-gradient(135deg, #640D5F, #8B1A6B)'
                      : i % 3 === 1
                      ? 'linear-gradient(135deg, #D91656, #EB5B00)'
                      : 'linear-gradient(135deg, #8B1A6B, #D91656)',
                  }}
                >
                  <topic.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 group-hover:text-[#640D5F] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{topic.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#D91656]">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">FAQ</p>
            <h2
              className="mt-2 text-2xl font-bold text-slate-900"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-slate-900 hover:text-[#640D5F] transition-colors">
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <div className="border-t border-slate-100 px-6 py-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* ── Contact support card ── */}
          <div className="space-y-5">
            <div
              className="overflow-hidden rounded-2xl p-7 text-white"
              style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
            >
              <HelpCircle className="h-8 w-8 text-white/60" />
              <h3
                className="mt-4 text-xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Still need help?
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Our support team is available Monday–Friday, 9am–6pm EST. We typically respond within 2 hours.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#640D5F] transition-all hover:bg-[#FFB200] hover:text-white"
              >
                Contact Support <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
              <h3 className="font-bold text-slate-900">Quick links</h3>
              <ul className="mt-4 space-y-2">
                {[
                  { label: 'Submit a Press Release', href: '/register' },
                  { label: 'Browse Press Releases', href: '/updates' },
                  { label: 'About PRNowe', href: '/about' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#640D5F] transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#D91656]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
