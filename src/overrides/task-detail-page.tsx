import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, Radio, Calendar, User, Tag, Share2, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function formatDate(d?: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function getCategory(post: any): string {
  const c = (post?.content as any)?.category
  if (typeof c === 'string' && c.trim()) return c.trim()
  const t = post?.tags?.find((x: any) => typeof x === 'string' && x !== 'mediaDistribution')
  return typeof t === 'string' ? t : 'Press Release'
}

function excerpt(text?: string | null, max = 160) {
  const v = (text || '').trim()
  if (!v) return ''
  return v.length > max ? v.slice(0, max - 3).trimEnd() + '...' : v
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const allRecent = await fetchTaskPosts('mediaDistribution', 9, { fresh: true })
  const recent = allRecent.filter((item) => item.slug !== slug).slice(0, 5)
  const related = allRecent.filter((item) => item.slug !== slug).slice(0, 3)

  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml(
    (content.body as string) || post.summary || '',
    'Full press release content will appear here.'
  )
  const category = getCategory(post)
  const author = post.authorName || 'Editorial Desk'
  const date = formatDate(post.publishedAt)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />
      <section className="bg-neutral-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.02em] sm:text-5xl">{post.title}</h1>
          <div className="mt-5 flex items-center justify-center gap-3 text-sm text-neutral-300">
            <Link href="/">Home</Link>
            <span>›</span>
            <span className="truncate">{post.title}</span>
          </div>
        </div>
      </section>
      <main className="mx-auto grid max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article>
          <div className="border border-[#f0dfd7] bg-[#faece7] px-6 py-5 text-sm text-neutral-600">
            <span className="mr-3 inline-block bg-neutral-800 px-3 py-1 text-white">{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>by {post.authorName || 'Editorial Desk'}</span>
          </div>

          {/* Category badge */}
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Tag className="h-3 w-3" />
              {category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {author}
            </span>
          </div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 32L1440 32L1440 10C1200 28 960 0 720 10C480 20 240 0 0 10L0 32Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Body ── */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* Article */}
          <article>
            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-purple-100 bg-purple-50 px-5 py-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-4 w-4 text-[#D91656]" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-[#D91656]" />
                  {author}
                </span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                >
                  {category}
                </span>
              </div>
              {/* Social share */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Share:</span>
                {['Twitter', 'LinkedIn', 'Email'].map((s) => (
                  <button
                    key={s}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-purple-200 hover:text-[#640D5F]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Article body */}
            <div className="prose prose-slate prose-lg mt-8 max-w-none
              prose-headings:font-bold prose-headings:text-[#640D5F]
              prose-a:text-[#D91656] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-blockquote:border-l-[#D91656] prose-blockquote:bg-purple-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
            ">
              <RichContent html={html} />
            </div>

            {/* Social share bottom */}
            <div className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <Share2 className="h-4 w-4 text-[#D91656]" />
              <span className="text-sm font-medium text-slate-700">Share this release:</span>
              {['Twitter', 'LinkedIn', 'Facebook', 'Email'].map((s) => (
                <button
                  key={s}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <h2
                    className="text-xl font-bold text-slate-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Related Press Releases
                  </h2>
                  <Link
                    href="/updates"
                    className="flex items-center gap-1 text-sm font-semibold text-[#D91656] hover:text-[#640D5F] transition-colors"
                  >
                    View all <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      href={`/updates/${item.slug}`}
                      className="group rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-md"
                    >
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                        style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                      >
                        {getCategory(item)}
                      </span>
                      <p className="mt-2 text-sm font-semibold leading-snug text-slate-800 group-hover:text-[#640D5F] transition-colors line-clamp-3">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xs text-[#D91656] font-medium">
                        {formatDate(item.publishedAt)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Prev / Next nav */}
            {recent.length >= 2 && (
              <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-slate-100 sm:grid-cols-2">
                <Link
                  href={`/updates/${recent[0].slug}`}
                  className="group flex items-start gap-3 bg-white p-5 transition-colors hover:bg-purple-50"
                >
                  <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-[#D91656]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Previous</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-[#640D5F] transition-colors line-clamp-2">
                      {recent[0].title}
                    </p>
                  </div>
                </Link>
                <Link
                  href={`/updates/${recent[1].slug}`}
                  className="group flex items-start justify-end gap-3 border-t border-slate-100 bg-white p-5 text-right transition-colors hover:bg-purple-50 sm:border-l sm:border-t-0"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Next</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-[#640D5F] transition-colors line-clamp-2">
                      {recent[1].title}
                    </p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#D91656]" />
                </Link>
              </div>
            )}
          </article>

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
                {recent.map((item) => (
                  <Link
                    key={item.id}
                    href={`/updates/${item.slug}`}
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-purple-50"
                  >
                    <div
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #640D5F, #D91656)' }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug text-slate-700 group-hover:text-[#640D5F] transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{formatDate(item.publishedAt)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div
              className="overflow-hidden rounded-2xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, #640D5F 0%, #D91656 60%, #EB5B00 100%)' }}
            >
              <Radio className="mx-auto h-8 w-8 text-white/70" />
              <h3 className="mt-3 font-bold text-white">Distribute Your Release</h3>
              <p className="mt-2 text-xs text-white/70">
                Reach 5,000+ journalists and media outlets instantly.
              </p>
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
