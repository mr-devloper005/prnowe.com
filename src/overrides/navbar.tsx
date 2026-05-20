'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const utilityLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact Us', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Go home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0f5132] text-sm font-black text-white shadow-lg shadow-emerald-900/20">
            PR
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-2xl font-black tracking-tight text-slate-950">{SITE_CONFIG.name}</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">Newswire</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link href="/" className={navLink(pathname === '/')}>Home</Link>
          <Link href="/press-release" className={navLink(pathname.startsWith('/press-release'))}>Press Releases</Link>
          <Link href="/about" className={navLink(pathname === '/about')}>About</Link>
          <Link href="/contact" className="rounded-full bg-[#0f5132] px-5 py-2 text-sm font-black text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#0b3f27]">
            Submit News
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className="border-t border-slate-100 bg-[#f7fbf8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <Link href="/press-release" className="hover:text-emerald-700">Press releases</Link>
            <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
          </div>
          <Search className="hidden h-4 w-4 shrink-0 text-emerald-700 sm:block" />
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-bold text-slate-700">
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/press-release" onClick={() => setMobileOpen(false)}>Press Releases</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Submit News</Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function navLink(active: boolean) {
  return `text-sm font-black uppercase tracking-[0.18em] transition ${active ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-700'}`
}
