'use client'

import Link from 'next/link'
import { Radio, CheckCircle2, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

const perks = [
  'Distribute to 5,000+ verified media outlets',
  'Real-time analytics on every release',
  'SEO-optimized press release pages',
  'Industry-specific targeting',
  'No setup fees — free to get started',
]

export function RegisterPageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">

          {/* ── Left: branding panel ── */}
          <div
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-10 text-white"
            style={{ background: 'linear-gradient(135deg, #640D5F 0%, #8B1A6B 30%, #D91656 65%, #EB5B00 100%)' }}
          >
            {/* subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                  <Radio className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  PRNowe
                </span>
              </div>

              <h2
                className="mt-8 text-3xl font-bold leading-snug"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
              >
                Start distributing your press releases today
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Join thousands of PR professionals who trust PRNowe to get their stories in front of the right journalists.
              </p>

              <ul className="mt-8 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB200]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-10 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm italic text-white/80">
                &ldquo;We switched from a legacy wire service and immediately saw better analytics, faster distribution, and a cleaner workflow.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-white/60">— Marcus T., PR Director, Global Agency</p>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
            <h1
              className="text-2xl font-bold text-slate-900"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
            >
              Create your free account
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Free to start. No credit card required.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company / Organization
                </label>
                <input
                  type="text"
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email address <span className="text-[#D91656]">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Password <span className="text-[#D91656]">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  placeholder="Min. 8 characters"
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#640D5F]"
                />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-5">
                  I agree to the{' '}
                  <Link href="/terms" className="font-medium text-[#D91656] hover:text-[#640D5F] transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="font-medium text-[#D91656] hover:text-[#640D5F] transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
              >
                Create Free Account <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-semibold text-[#D91656] hover:text-[#640D5F] transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
