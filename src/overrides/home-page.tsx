import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import {
  ArrowRight, CheckCircle2, Radio, Zap, Globe2, BarChart3,
  Star, ChevronDown, ChevronUp, Cpu, TrendingUp, Heart, Palette,
  Send, Users, Award, Shield
} from 'lucide-react'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null, max = 160) {
  const v = (text || '').trim()
  if (!v) return 'Read the full press release for complete details.'
  return v.length > max ? v.slice(0, max - 3).trimEnd() + '...' : v
}

function formatDate(d?: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getCategory(post: any): string {
  const c = post?.content?.category
  if (typeof c === 'string' && c.trim()) return c.trim()
  const t = post?.tags?.find((x: any) => typeof x === 'string' && x !== 'mediaDistribution')
  return typeof t === 'string' ? t : 'Press Release'
}

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection({ featuredPost }: { featuredPost: any }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #640D5F 0%, #8B1A6B 28%, #D91656 62%, #EB5B00 100%)' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: headline + CTA */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              <Radio className="h-3.5 w-3.5" />
              Trusted by 10,000+ PR Professionals
            </div>

            <h1
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Distribute Press Releases That{' '}
              <span className="text-[#FFB200]">Get Picked Up</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
              Reach thousands of journalists, editors, and media outlets with one submission.
              PRNowe puts your story in front of the right people — fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#640D5F] shadow-lg transition-all hover:bg-[#FFB200] hover:text-white"
              >
                Submit a Press Release
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {['5,000+ Media Outlets', 'Real-Time Analytics', 'SEO-Optimized Pages'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#FFB200]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured news card */}
          {featuredPost ? (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                <div
                  className="relative h-48 w-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Radio className="mx-auto h-12 w-12 text-white/30" />
                      <p className="mt-2 text-xs text-white/40 uppercase tracking-widest">Featured Release</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="rounded-full bg-[#D91656] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {getCategory(featuredPost)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-white/50">{formatDate(featuredPost.publishedAt)}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-white line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70 line-clamp-2">
                    {excerpt(featuredPost.summary, 120)}
                  </p>
                  <Link
                    href={`/updates/${featuredPost.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFB200] hover:text-white transition-colors"
                  >
                    Read Full Release <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md text-center">
              <Radio className="mx-auto h-16 w-16 text-white/30" />
              <h3 className="mt-4 text-xl font-bold text-white">Your Story, Amplified</h3>
              <p className="mt-2 text-sm text-white/70">Reach 5,000+ media outlets with one submission</p>
              <Link href="/register" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#FFB200] px-5 py-2.5 text-sm font-semibold text-[#640D5F]">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 64L1440 64L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 64Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

// ─── Built for Modern PR Section ────────────────────────────────────────────
function BuiltForPRSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Built for Modern PR</p>
          <h2
            className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            An extension of your communications team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
            PRNowe is designed for agencies, in-house PR teams, and communications professionals who need reliable distribution without the complexity.
          </p>
        </div>

        {/* Large feature card */}
        <div className="mt-12 overflow-hidden rounded-2xl shadow-xl">
          <div
            className="relative min-h-[320px] p-10"
            style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)',
              }}
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  <Users className="h-3.5 w-3.5" /> Agencies & Partners
                </span>
                <h3
                  className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Scale your PR operations without scaling your team
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Manage multiple clients, submit releases in bulk, and track media pickups across all your accounts from a single dashboard. PRNowe is built for the way agencies actually work.
                </p>
                <Link
                  href="/register"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#640D5F] transition-all hover:bg-[#FFB200] hover:text-white"
                >
                  Start for Free <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Globe2, label: '5,000+ Outlets', desc: 'Global media network' },
                  { icon: BarChart3, label: 'Live Analytics', desc: 'Track every pickup' },
                  { icon: Shield, label: 'Verified Reach', desc: 'Real journalist contacts' },
                  { icon: Award, label: 'SEO Boost', desc: 'Rank on Google News' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-[#FFB200]" />
                    <p className="mt-2 text-sm font-bold text-white">{item.label}</p>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Features Section ────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { icon: Send, title: 'Instant Distribution', desc: 'Submit once and reach thousands of verified journalists and media contacts within minutes.' },
    { icon: Globe2, title: 'Global Media Network', desc: 'Access 5,000+ outlets across print, digital, broadcast, and online news platforms.' },
    { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Track opens, pickups, social shares, and media reach with live reporting dashboards.' },
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Why PRNowe</p>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Distribution that stays readable end-to-end
            </h2>
            <p className="mt-4 text-base text-slate-500">
              We don't just blast your release to a list. We ensure it reaches the right journalists in the right format, every time.
            </p>

            <ul className="mt-8 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#640D5F] to-[#D91656]">
                    <f.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{f.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
            >
              Start Distributing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: info card */}
          <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-lg">
            <div
              className="relative h-52"
              style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                    <Radio className="h-8 w-8 text-white" />
                  </div>
                  <p className="mt-3 text-lg font-bold text-white">PRNowe Distribution</p>
                  <p className="text-sm text-white/70">Powered by verified media contacts</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '5,000+', label: 'Media Outlets' },
                  { value: '98%', label: 'Delivery Rate' },
                  { value: '< 2hr', label: 'Distribution Time' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-[#640D5F]">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {['Technology & AI', 'Finance & Markets', 'Health & Science', 'Lifestyle & Culture'].map((cat) => (
                  <div key={cat} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2.5">
                    <span className="text-sm font-medium text-slate-700">{cat}</span>
                    <span className="text-xs text-[#D91656] font-semibold">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Industry Categories Section ─────────────────────────────────────────────
function IndustryCategoriesSection() {
  const categories = [
    {
      icon: Cpu,
      label: 'Technology & AI',
      desc: 'Software launches, AI breakthroughs, startup funding, and tech industry news.',
      color: 'from-[#640D5F] to-[#8B1A6B]',
      href: '/updates?category=technology',
    },
    {
      icon: TrendingUp,
      label: 'Finance & Markets',
      desc: 'Earnings reports, IPOs, mergers, acquisitions, and financial market updates.',
      color: 'from-[#D91656] to-[#EB5B00]',
      href: '/updates?category=finance',
    },
    {
      icon: Heart,
      label: 'Health & Science',
      desc: 'Medical research, clinical trials, pharmaceutical news, and healthcare policy.',
      color: 'from-[#EB5B00] to-[#FFB200]',
      href: '/updates?category=health',
    },
    {
      icon: Palette,
      label: 'Lifestyle & Culture',
      desc: 'Entertainment, fashion, food, travel, and consumer lifestyle announcements.',
      color: 'from-[#8B1A6B] to-[#D91656]',
      href: '/updates?category=lifestyle',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Industry Coverage</p>
            <h2
              className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Industry-ready presentation
            </h2>
          </div>
          <Link href="/updates" className="hidden text-sm font-semibold text-[#640D5F] hover:text-[#D91656] transition-colors sm:inline-flex items-center gap-1">
            Browse all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${cat.color}`} />
              <div className="p-6">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color}`}>
                  <cat.icon className="h-5.5 w-5.5 text-white" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900 group-hover:text-[#640D5F] transition-colors">
                  {cat.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{cat.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#D91656]">
                  Browse releases <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/updates" className="text-sm font-semibold text-[#640D5F] hover:text-[#D91656]">
            Browse all categories →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Banner Section ───────────────────────────────────────────────────────
function CTABannerSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#640D5F] to-[#D91656] shadow-lg shadow-purple-200">
          <Send className="h-6 w-6 text-white" />
        </div>
        <h2
          className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
        >
          Talk with our distribution desk
        </h2>
        <p className="mt-4 text-base text-slate-500">
          Have questions about distribution or media reach? Our team is ready to help you craft the perfect PR strategy.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #D91656, #EB5B00)' }}
          >
            Contact Us Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Browse Press Releases
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Recent Press Wire Section ────────────────────────────────────────────────
function RecentPressWireSection({ posts }: { posts: any[] }) {
  if (!posts.length) return null

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Latest News</p>
            <h2
              className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Recent press wire
            </h2>
          </div>
          <Link href="/updates" className="flex items-center gap-1 text-sm font-semibold text-[#640D5F] hover:text-[#D91656] transition-colors">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <Link
              key={post.id}
              href={`/updates/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-purple-100"
            >
              {/* Image placeholder */}
              <div
                className="relative h-44 w-full overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #640D5F22 0%, #D9165622 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="h-10 w-10 text-[#640D5F]/20" />
                </div>
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-[#640D5F] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {getCategory(post)}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-slate-400">{formatDate(post.publishedAt)}</p>
                <h3 className="mt-2 font-bold leading-snug text-slate-900 group-hover:text-[#640D5F] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500 line-clamp-3">
                  {excerpt(post.summary)}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#D91656]">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────
function FAQSection() {
  const faqs = [
    {
      q: 'How quickly will my press release be distributed?',
      a: 'Most press releases are distributed within 2 hours of submission and approval. Urgent releases can be expedited for same-day distribution.',
    },
    {
      q: 'How many media outlets will receive my press release?',
      a: 'Depending on your plan, your release reaches between 500 and 5,000+ verified media contacts including journalists, editors, bloggers, and news aggregators.',
    },
    {
      q: 'Can I target specific industries or regions?',
      a: 'Yes. PRNowe allows you to target by industry vertical (Technology, Finance, Health, Lifestyle, etc.) and by geographic region for more relevant distribution.',
    },
    {
      q: 'Do you provide analytics on media pickups?',
      a: 'Absolutely. Your dashboard shows real-time data on distribution reach, media pickups, social shares, and estimated audience impressions.',
    },
    {
      q: 'Is my press release indexed by search engines?',
      a: 'Yes. Every press release published on PRNowe is SEO-optimized and indexed by Google, Bing, and Google News for maximum organic visibility.',
    },
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">FAQ</p>
          <h2
            className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            Questions, answered
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  // Using CSS-only accordion via details/summary for zero-JS approach
  return (
    <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-slate-900 hover:text-[#640D5F] transition-colors">
        <span>{question}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-slate-100 px-6 py-4 text-sm leading-7 text-slate-600">
        {answer}
      </div>
    </details>
  )
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      quote: 'PRNowe got our funding announcement picked up by 47 outlets within 6 hours. The reach was incredible for the price.',
      name: 'Sarah K.',
      role: 'Head of Communications, TechStartup',
    },
    {
      stars: 5,
      quote: 'We switched from a legacy wire service and immediately saw better analytics, faster distribution, and a cleaner workflow.',
      name: 'Marcus T.',
      role: 'PR Director, Global Agency',
    },
    {
      stars: 5,
      quote: 'The industry targeting is spot-on. Our health sector releases now consistently reach the right journalists on the first try.',
      name: 'Jennifer R.',
      role: 'Communications Manager, MedPulse Group',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Testimonials</p>
          <h2
            className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            What communicators say
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FFB200] text-[#FFB200]" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { fresh: true })
  const featuredPost = posts[0] ?? null
  const recentPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      <main>
        <HeroSection featuredPost={featuredPost} />
        <BuiltForPRSection />
        <FeaturesSection />
        <IndustryCategoriesSection />
        <CTABannerSection />
        <RecentPressWireSection posts={recentPosts} />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
