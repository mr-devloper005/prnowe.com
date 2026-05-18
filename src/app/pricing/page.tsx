import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { CheckCircle2, X, ArrowRight, Radio, Zap, Globe2, BarChart3, Shield, Star } from 'lucide-react'

export const metadata = {
  title: 'Pricing — PRNowe',
  description: 'Simple, transparent pricing for press release distribution. Reach thousands of journalists and media outlets with PRNowe.',
}

const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/release',
    description: 'Perfect for startups and small businesses making their first press release.',
    highlight: false,
    badge: null,
    features: [
      { text: 'Distribution to 500+ outlets', included: true },
      { text: 'Standard media categories', included: true },
      { text: 'SEO-optimized release page', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Email support', included: true },
      { text: 'Priority distribution', included: false },
      { text: 'Advanced targeting', included: false },
      { text: 'Dedicated account manager', included: false },
      { text: 'White-label reports', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/register',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/release',
    description: 'For growing companies that need wider reach and deeper analytics.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      { text: 'Distribution to 2,500+ outlets', included: true },
      { text: 'All media categories', included: true },
      { text: 'SEO-optimized release page', included: true },
      { text: 'Full analytics dashboard', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Priority distribution', included: true },
      { text: 'Advanced industry targeting', included: true },
      { text: 'Dedicated account manager', included: false },
      { text: 'White-label reports', included: false },
    ],
    cta: 'Start with Pro',
    ctaHref: '/register',
  },
  {
    name: 'Premium',
    price: '$349',
    period: '/release',
    description: 'Maximum reach for enterprises, agencies, and high-impact campaigns.',
    highlight: false,
    badge: null,
    features: [
      { text: 'Distribution to 5,000+ outlets', included: true },
      { text: 'All media categories + niche', included: true },
      { text: 'SEO-optimized release page', included: true },
      { text: 'Real-time analytics + exports', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Priority distribution', included: true },
      { text: 'Advanced industry targeting', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'White-label reports', included: true },
    ],
    cta: 'Go Premium',
    ctaHref: '/register',
  },
]

const addons = [
  { icon: Globe2, name: 'International Distribution', desc: 'Extend your reach to media outlets in Europe, Asia-Pacific, and Latin America.', price: '+$99' },
  { icon: BarChart3, name: 'Advanced Analytics Report', desc: 'Detailed PDF report with pickup data, audience reach, and social amplification metrics.', price: '+$49' },
  { icon: Zap, name: 'Same-Day Distribution', desc: 'Expedited review and distribution within 2 hours of submission.', price: '+$79' },
  { icon: Shield, name: 'Multimedia Package', desc: 'Attach photos, videos, and infographics to your release for richer media coverage.', price: '+$59' },
]

const faqs = [
  {
    q: 'How quickly will my press release be distributed?',
    a: 'Standard releases are distributed within 2–4 hours of approval. With the Same-Day add-on, distribution happens within 2 hours.',
  },
  {
    q: 'Can I buy multiple releases at a discount?',
    a: 'Yes. We offer bundle packages for agencies and high-volume users. Contact us for custom pricing on 5+ releases per month.',
  },
  {
    q: 'What counts as a "media outlet"?',
    a: 'Our network includes online news sites, print publications, broadcast affiliates, industry blogs, news aggregators, and verified journalist inboxes.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We don\'t offer a free trial, but the Basic plan at $49 is a low-risk way to test our distribution quality before committing to larger campaigns.',
  },
  {
    q: 'Can I upgrade my plan after submitting?',
    a: 'You can upgrade before your release is distributed. Contact support and we\'ll apply the difference to your account.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden py-20 text-center"
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
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            <Radio className="h-3.5 w-3.5" />
            Simple, Transparent Pricing
          </div>
          <h1
            className="mt-5 text-4xl font-bold text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            Pay per release. No subscriptions.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/75">
            Choose the distribution level that fits your campaign. Every plan includes an SEO-optimized release page and real analytics.
          </p>
        </div>
        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 32L1440 32L1440 10C1200 28 960 0 720 10C480 20 240 0 0 10L0 32Z" fill="white" />
          </svg>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* ── Pricing cards ── */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? 'border-[#D91656] shadow-lg shadow-pink-100'
                  : 'border-slate-200 shadow-sm hover:border-purple-200'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div
                  className="py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-white"
                  style={{ background: 'linear-gradient(135deg, #D91656, #EB5B00)' }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-1 flex-col p-7">
                {/* Plan name + price */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{plan.name}</p>
                  <div className="mt-3 flex items-end gap-1">
                    <span
                      className="text-5xl font-black"
                      style={{
                        background: plan.highlight
                          ? 'linear-gradient(135deg, #640D5F, #D91656)'
                          : 'none',
                        WebkitBackgroundClip: plan.highlight ? 'text' : undefined,
                        WebkitTextFillColor: plan.highlight ? 'transparent' : undefined,
                        color: plan.highlight ? undefined : '#0f172a',
                      }}
                    >
                      {plan.price}
                    </span>
                    <span className="mb-2 text-sm text-slate-400">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`mt-6 flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all hover:opacity-90 ${
                    plan.highlight ? 'text-white' : 'border border-slate-200 bg-white text-slate-900 hover:border-purple-300 hover:text-[#640D5F]'
                  }`}
                  style={plan.highlight ? { background: 'linear-gradient(135deg, #640D5F, #D91656)' } : {}}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Divider */}
                <div className="my-6 border-t border-slate-100" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      {f.included ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D91656]" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      )}
                      <span className={`text-sm ${f.included ? 'text-slate-700' : 'text-slate-400'}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Every release includes ── */}
        <div className="mt-16 rounded-2xl border border-purple-100 bg-purple-50 p-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Every Release Includes</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe2, label: 'Verified Media Network', desc: 'Real journalists, real outlets' },
              { icon: BarChart3, label: 'Analytics Dashboard', desc: 'Track opens and pickups' },
              { icon: Shield, label: 'SEO-Optimized Page', desc: 'Indexed by Google News' },
              { icon: Zap, label: 'Fast Distribution', desc: 'Live within hours' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                >
                  <item.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Add-ons ── */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">Enhance Your Release</p>
            <h2
              className="mt-2 text-3xl font-bold text-slate-900"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Optional add-ons
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              Boost any plan with targeted extras. Add-ons are applied at checkout.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-100 hover:shadow-md"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                >
                  <addon.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900 group-hover:text-[#640D5F] transition-colors">
                  {addon.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{addon.desc}</p>
                <p
                  className="mt-4 text-lg font-black"
                  style={{ background: 'linear-gradient(135deg, #D91656, #EB5B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {addon.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonial strip ── */}
        <div
          className="mt-16 overflow-hidden rounded-2xl p-10 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
        >
          <div className="flex justify-center gap-0.5">
            {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-[#FFB200] text-[#FFB200]" />)}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90">
            &ldquo;PRNowe got our product launch picked up by 60+ outlets in under 4 hours. The ROI compared to our old wire service was immediate.&rdquo;
          </p>
          <p className="mt-4 text-sm text-white/60">— Director of Communications, Series B SaaS Company</p>
          <Link
            href="/register"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-[#640D5F] transition-all hover:bg-[#FFB200] hover:text-white"
          >
            Start Distributing Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D91656]">FAQ</p>
            <h2
              className="mt-2 text-3xl font-bold text-slate-900"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              Pricing questions, answered
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-slate-900 hover:text-[#640D5F] transition-colors">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-6 py-4 text-sm leading-7 text-slate-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Need a custom plan for high-volume distribution?{' '}
            <Link href="/contact" className="font-semibold text-[#D91656] hover:text-[#640D5F] transition-colors">
              Contact us for agency pricing →
            </Link>
          </p>
        </div>

      </main>

      <Footer />
    </div>
  )
}
