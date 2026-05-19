import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { mockTeamMembers } from '@/data/mock-data'
import { ArrowRight, Globe2, BarChart3, Shield, Users, Award, Zap, Radio } from 'lucide-react'

const stats = [
  { value: '10,000+', label: 'PR Professionals' },
  { value: '5,000+', label: 'Media Outlets' },
  { value: '98%', label: 'Delivery Rate' },
  { value: '< 2hr', label: 'Distribution Time' },
]

const values = [
  {
    icon: Globe2,
    title: 'Global Media Reach',
    description: 'We connect your story with journalists, editors, and newsrooms across every major industry and geography.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven PR',
    description: 'Real-time analytics show exactly where your release landed, who opened it, and how far it traveled.',
  },
  {
    icon: Shield,
    title: 'Verified Contacts',
    description: 'Every media contact in our network is verified and actively covering their beat — no dead inboxes.',
  },
  {
    icon: Zap,
    title: 'Fast Distribution',
    description: 'Submit once and reach thousands of outlets within hours, not days. Speed matters in PR.',
  },
  {
    icon: Award,
    title: 'SEO-Optimized',
    description: 'Every press release gets its own indexed page, boosting your brand visibility on Google and Google News.',
  },
  {
    icon: Users,
    title: 'Built for Teams',
    description: 'Agencies, in-house teams, and solo communicators all get the same powerful distribution tools.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden py-20"
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
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            <Radio className="h-3.5 w-3.5" />
            About PRNowe
          </div>
          <h1
            className="mt-5 text-4xl font-bold text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            The modern press wire built for communicators
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75">
            PRNowe is a press release distribution platform trusted by PR professionals, agencies, and communications teams who need reliable reach, real analytics, and a workflow that doesn't slow them down.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#640D5F] transition-all hover:bg-[#FFB200] hover:text-white"
            >
              Submit a Press Release <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 32L1440 32L1440 10C1200 28 960 0 720 10C480 20 240 0 0 10L0 32Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl font-black"
                  style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* ── Our Story ── */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Our Story</p>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Built because PR distribution deserved better
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-500">
              PRNowe was founded by communications professionals who were tired of legacy wire services — expensive, opaque, and built for a pre-digital era. We set out to build a distribution platform that's fast, transparent, and actually useful.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-500">
              Today, PRNowe serves thousands of PR professionals, agencies, and in-house teams across every industry. From a startup's first funding announcement to an enterprise's global campaign — we deliver every story to the right audience.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D91656] hover:text-[#640D5F] transition-colors"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Story card */}
          <div
            className="rounded-2xl p-8 text-white"
            style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <Radio className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs text-white/60">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/15 bg-white/10 p-4">
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="mt-1 text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Values ── */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">What We Stand For</p>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Why communicators choose PRNowe
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-100 hover:shadow-md"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: i % 3 === 0
                      ? 'linear-gradient(135deg, #640D5F, #8B1A6B)'
                      : i % 3 === 1
                      ? 'linear-gradient(135deg, #D91656, #EB5B00)'
                      : 'linear-gradient(135deg, #8B1A6B, #D91656)',
                  }}
                >
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900 group-hover:text-[#640D5F] transition-colors">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Team ── */}
        {mockTeamMembers && mockTeamMembers.length > 0 && (
          <div className="mt-20">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Our Team</p>
              <h2
                className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
              >
                The people behind PRNowe
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mockTeamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-100 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-black text-white"
                      style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-[#640D5F] transition-colors">
                        {member.name}
                      </p>
                      <p className="text-xs text-[#D91656] font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{member.bio}</p>
                  {member.location && (
                    <p className="mt-3 text-xs text-slate-400">{member.location}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div
          className="mt-20 overflow-hidden rounded-2xl px-8 py-12 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
        >
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            Ready to distribute your story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75">
            Join thousands of PR professionals who trust PRNowe to get their press releases in front of the right journalists.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-[#640D5F] transition-all hover:bg-[#FFB200] hover:text-white"
            >
              Submit a Press Release <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
