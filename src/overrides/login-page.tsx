'use client'

import Link from 'next/link'
import { Radio, CheckCircle2, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

const perks = [
  'Distribute to 5,000+ verified media outlets',
  'Real-time analytics on every release',
  'SEO-optimized press release pages',
  'Industry-specific targeting',
]

export function LoginPageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">

          {/* ── Left: branding panel ── */}
          <div
            className="flex flex-col justify-between overflow-hidden rounded-2xl p-10 text-white"
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
                Welcome back to your PR distribution hub
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Sign in to manage your press releases, track media pickups, and reach thousands of journalists worldwide.
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
                &ldquo;PRNowe got our funding announcement picked up by 47 outlets within 6 hours.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-white/60">— Sarah K., Head of Communications</p>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
            <h1
              className="text-2xl font-bold text-slate-900"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
            >
              Sign in to PRNowe
            </h1>
            <p className="mt-1 text-sm text-slate-500">Enter your credentials to access your account.</p>

            <form className="mt-8 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">Password</label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-[#D91656] hover:text-[#640D5F] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
              >
                Sign In <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="font-semibold text-[#D91656] hover:text-[#640D5F] transition-colors"
              >
                Create a free account
              </Link>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
