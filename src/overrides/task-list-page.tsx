import Link from 'next/link'
import { ArrowRight, Radio, Search, Calendar, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null, max = 200) {
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

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 6)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Page header */}
      <div
        className="relative overflow-hidden py-14"
        style={{ background: 'linear-gradient(135deg, #640D5F 0%, #8B1A6B 35%, #D91656 70%, #EB5B00 100%)' }}
      >
        {/* subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Press Releases</span>
          </div>
          <h1
            className="mt-3 text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            Press Release Wire
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Browse the latest press releases distributed through PRNowe — from product launches to funding announcements.
          </p>
        </div>
        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 32L1440 32L1440 10C1200 28 960 0 720 10C480 20 240 0 0 10L0 32Z" fill="white" />
          </svg>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* ── Main feed ── */}
          <div className="space-y-6">
            {posts.map((post, i) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-md"
              >
                <div className="flex gap-0">
                  {/* Left accent bar */}
                  <div
                    className="w-1 shrink-0 rounded-l-2xl"
                    style={{ background: i % 3 === 0 ? '#640D5F' : i % 3 === 1 ? '#D91656' : '#EB5B00' }}
                  />

                  <div className="flex flex-1 flex-col gap-4 p-6 sm:flex-row sm:items-start">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Category + date row */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                          style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                        >
                          {getCategory(post)}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                        {post.authorName && (
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <User className="h-3 w-3" />
                            {post.authorName}
                          </span>
                        )}
                      </div>

                      <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-[#640D5F] transition-colors">
                        <Link href={`/updates/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {excerpt(post.summary)}
                      </p>

                      <Link
                        href={`/updates/${post.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D91656] hover:text-[#640D5F] transition-colors"
                      >
                        Read Full Release <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {posts.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center">
                <Radio className="mx-auto h-10 w-10 text-slate-300" />
                <p className="mt-3 text-slate-500">No press releases yet. Check back soon.</p>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

            {/* Search */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div
                className="px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
              >
                Search Releases
              </div>
              <div className="p-4">
                <div className="flex overflow-hidden rounded-xl border border-slate-200">
                  <input
                    className="h-11 flex-1 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Search press releases..."
                  />
                  <button
                    className="flex h-11 w-11 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #D91656, #EB5B00)' }}
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent releases */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div
                className="px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
              >
                Recent Releases
              </div>
              <div className="divide-y divide-slate-100 p-2">
                {recent.map((post) => (
                  <Link
                    key={post.id}
                    href={`/updates/${post.slug}`}
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-purple-50"
                  >
                    <div
                      className="mt-1 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug text-slate-700 group-hover:text-[#640D5F] transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{formatDate(post.publishedAt)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div
              className="overflow-hidden rounded-2xl p-6 text-center text-white"
              style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
            >
              <Radio className="mx-auto h-8 w-8 text-white/70" />
              <h3 className="mt-3 font-bold text-white">Distribute Your Release</h3>
              <p className="mt-2 text-xs text-white/70">Reach 5,000+ journalists and media outlets instantly.</p>
              <Link
                href="/register"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#640D5F] transition-all hover:bg-[#FFB200] hover:text-white"
              >
                Submit a Release <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Categories */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div
                className="px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
              >
                Browse by Industry
              </div>
              <div className="p-3 space-y-1">
                {['Technology & AI', 'Finance & Markets', 'Health & Science', 'Lifestyle & Culture', 'Corporate News'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/updates?category=${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-purple-50 hover:text-[#640D5F]"
                  >
                    <span>{cat}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
