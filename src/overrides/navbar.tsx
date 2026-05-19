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
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100/60 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center group">
          <img
            src="/logo.png"
            alt="PRNowe"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 py-4 text-sm uppercase tracking-[0.08em] sm:px-6">
          <Link href="/" className="text-[#4a90ff]">Home</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <Link href="/search" className="hover:text-black"><Search className="h-4 w-4" /></Link>
        </div>
      )}
    </header>
  )
}
