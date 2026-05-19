import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Phone, Clock, MapPin, Mail } from 'lucide-react'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Page heading */}
      <div className="border-b border-slate-100 py-10 text-center">
        <h1
          className="text-4xl font-bold text-[#640D5F]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
        >
          Contact Us
        </h1>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">

          {/* ── Contact form ── */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <form className="space-y-5">

              {/* Row 1: Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Contact Name <span className="text-[#D91656]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email <span className="text-[#D91656]">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  placeholder=""
                />
              </div>

              {/* Divider label */}
              <p className="text-sm text-slate-500">Help Us Understand Your Needs A Little More.</p>

              {/* Row 3: Org type + Subject */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    What type of organization are you? <span className="text-[#D91656]">*</span>
                  </label>
                  <select
                    required
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  >
                    <option value="">Please Select</option>
                    <option>Agency / PR Firm</option>
                    <option>Corporation / Enterprise</option>
                    <option>Small Business</option>
                    <option>Non-Profit</option>
                    <option>Individual / Freelancer</option>
                    <option>Media / Journalist</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Subject: How may we help you? <span className="text-[#D91656]">*</span>
                  </label>
                  <select
                    required
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10"
                  >
                    <option value="">Please Select</option>
                    <option>Press Release Distribution</option>
                    <option>Technical Support</option>
                    <option>Billing Inquiry</option>
                    <option>Media / Journalist Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message / Comment <span className="text-[#D91656]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#640D5F] focus:ring-2 focus:ring-[#640D5F]/10 resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="rounded-lg px-10 py-3 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* ── FAQ banner ── */}
        <div
          className="mt-14 overflow-hidden rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
        >
          <div className="flex flex-col items-start justify-between gap-6 px-8 py-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-bold leading-snug text-white sm:text-xl">
                Please take a moment to check out our FAQs<br className="hidden sm:block" />
                for quick answers to common questions.
              </p>
            </div>
            <a
              href="/#faq"
              className="shrink-0 rounded-lg border-2 border-white bg-transparent px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#640D5F]"
            >
              VIEW FAQs
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
