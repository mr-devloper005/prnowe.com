'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { label: 'Press Releases', href: '/updates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="PRNowe"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#640D5F]/8 text-[#640D5F]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="hidden rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors md:flex"
            aria-label="Search"
          >
            <Search className="h-4.5 w-4.5" />
          </Link>

          <Link
            href="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors md:inline-flex"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="hidden rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 md:inline-flex"
            style={{ background: 'linear-gradient(135deg, #D91656, #EB5B00)' }}
          >
            Submit Release
          </Link>

          <button
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active ? 'bg-purple-50 text-[#640D5F]' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #D91656, #EB5B00)' }}
            >
              Submit a Press Release
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
