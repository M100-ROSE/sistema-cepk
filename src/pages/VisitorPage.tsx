import type { ComponentType } from 'react'
import { Logo } from '../components/Logo'
import {
  ArrowUpRightIcon,
  BookIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PresentationIcon,
  ShieldIcon,
  SparkleIcon,
} from '../components/icons'
import {
  school,
  schoolCourses,
  schoolNews,
  schoolStats,
  schoolYears,
  type SchoolYear,
} from '../data/school'

const yearIcons: Record<SchoolYear['icon'], ComponentType<{ className?: string }>> = {
  book: BookIcon,
  cap: GraduationCapIcon,
  presentation: PresentationIcon,
}

const navLinks = [
  { href: '#anos', label: 'Anos' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#noticias', label: 'Notícias' },
]

type VisitorPageProps = {
  onEnter: () => void
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.18em] text-brand-700 uppercase">
          <span className="tabular-nums">{index}</span>
          <span className="h-px w-7 bg-brand-300" />
          {eyebrow}
        </span>
        <h2 className="mt-2 text-[1.6rem] leading-tight font-extrabold tracking-tight text-ink sm:text-[1.9rem]">
          {title}
        </h2>
      </div>
      <p className="max-w-sm text-[0.88rem] leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  )
}

export function VisitorPage({ onEnter }: VisitorPageProps) {
  return (
    <div className="min-h-dvh bg-mist">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <Logo variant="light" />

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-[0.82rem] font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-800"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={onEnter}
              className="flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-[0.82rem] font-bold text-white transition hover:bg-brand-800"
            >
              Entrar
              <ArrowUpRightIcon className="size-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 sm:pt-8">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(150deg,#0c1712,#050807_55%,#020403)] px-6 py-10 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-brand-500/20 blur-[130px]"
              aria-hidden="true"
            />
            <svg
              className="pointer-events-none absolute -right-10 bottom-[-9rem] size-[22rem] text-brand-400/15"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] text-brand-100 uppercase backdrop-blur-sm">
                <SparkleIcon className="size-3.5 text-accent-400" />
                Escola pública · Ponta Grossa
              </span>

              <h1 className="mt-6 text-[2.3rem] leading-[1.03] font-extrabold tracking-[-0.03em] text-white sm:text-[3.3rem]">
                Conheça o Kennedy
                <br />
                <span className="text-brand-300">por dentro.</span>
              </h1>

              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-brand-100/75 sm:text-[1rem]">
                Ensino fundamental, médio e técnico gratuito no bairro Nova Rússia,
                em Ponta Grossa. Veja anos, cursos e as últimas notícias do colégio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cursos"
                  className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(120deg,#32d583,#12b76a_60%,#039855)] px-5 py-3 text-[0.85rem] font-bold text-brand-950 transition hover:brightness-110"
                >
                  Ver cursos
                  <ArrowUpRightIcon className="size-4" />
                </a>
                <a
                  href="#noticias"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[0.85rem] font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Últimas notícias
                </a>
              </div>
            </div>

            <dl className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-4">
              {schoolStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-brand-200/60 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-[1.6rem] leading-none font-extrabold text-white tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Anos */}
        <section id="anos" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-12 sm:px-6 sm:pt-16">
          <SectionHeading
            index="01"
            eyebrow="Anos e etapas"
            title="Do 6º ano ao técnico"
            description="Uma trajetória contínua no colégio, do fundamental ao ensino médio com formação profissional."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {schoolYears.map((year) => {
              const Icon = yearIcons[year.icon]

              return (
                <article
                  key={year.id}
                  className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon className="size-[1.15rem]" />
                    </span>
                    <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[0.66rem] font-semibold whitespace-nowrap text-slate-500">
                      {year.ages}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[1.02rem] leading-snug font-bold text-ink">
                    {year.name}
                  </h3>
                  <p className="mt-1.5 text-[0.83rem] leading-relaxed text-slate-500">
                    {year.summary}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* Cursos */}
        <section id="cursos" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-12 sm:px-6 sm:pt-16">
          <SectionHeading
            index="02"
            eyebrow="Cursos técnicos"
            title="Formação que já abre portas"
            description="Duas habilitações integradas ao Ensino Médio, gratuitas, com duração de três anos e turno único."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {schoolCourses.map((course) => (
              <article
                key={course.id}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="flex flex-wrap items-center gap-2 text-[0.66rem] font-bold tracking-wide uppercase">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">
                    {course.shift}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-500">
                    {course.duration}
                  </span>
                </div>

                <h3 className="mt-4 text-[1.02rem] leading-snug font-bold text-ink">
                  {course.name}
                </h3>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-slate-500">
                  {course.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {course.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-md border border-slate-200 px-2 py-0.5 text-[0.69rem] font-medium text-slate-600"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.8rem] font-bold text-brand-700 transition-all group-hover:gap-2.5">
                  Quero este curso
                  <ArrowUpRightIcon className="size-3.5" />
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Notícias */}
        <section id="noticias" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-12 sm:px-6 sm:pt-16">
          <SectionHeading
            index="03"
            eyebrow="Últimas notícias"
            title="O que acontece no Kennedy"
            description="Inscrições, projetos e a história do colégio contadas por quem vive a escola."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {schoolNews.map((news, index) => (
              <article
                key={news.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="relative h-36 overflow-hidden bg-[linear-gradient(135deg,#0c1712,#050807)]">
                  <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
                  <div
                    className="absolute -top-10 -right-6 size-40 rounded-full bg-brand-500/25 blur-3xl"
                    aria-hidden="true"
                  />
                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[0.63rem] font-bold tracking-[0.12em] text-brand-100 uppercase backdrop-blur-sm">
                    {news.tag}
                  </span>
                  <span
                    className="absolute right-4 -bottom-3 text-[4.5rem] leading-none font-extrabold text-white/5 tabular-nums select-none"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <span className="absolute bottom-4 left-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-400 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.7rem] font-semibold tracking-wide text-slate-500 uppercase">
                    {news.dateLabel}
                  </p>
                  <h3 className="mt-2 text-[0.98rem] leading-snug font-bold text-ink">
                    {news.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[0.82rem] leading-relaxed text-slate-500">
                    {news.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.78rem] font-bold text-brand-700 transition-all group-hover:gap-2.5">
                    Ler notícia
                    <ArrowUpRightIcon className="size-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(120deg,#12b76a,#039855_60%,#027a48)] px-6 py-10 sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mix-blend-overlay" aria-hidden="true" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-[1.6rem] leading-tight font-extrabold tracking-tight text-brand-950">
                  Quer estudar no Kennedy?
                </h2>
                <p className="mt-1.5 max-w-md text-[0.9rem] leading-relaxed text-brand-950/75">
                  Fale com a secretaria e agende uma visita guiada pelos laboratórios
                  e salas do colégio.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:items-end">
                <a
                  href={school.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-950 px-5 py-3 text-[0.85rem] font-bold text-white transition hover:bg-black"
                >
                  <PhoneIcon className="size-4" />
                  {school.phone}
                </a>
                <a
                  href={school.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[0.78rem] font-semibold text-brand-950/75 hover:text-brand-950"
                >
                  <MailIcon className="size-3.5" />
                  WhatsApp: {school.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[0.75rem] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Logo variant="light" />

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="size-3.5" />
              {school.address} · {school.city}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldIcon className="size-3.5" />
              © 2026 {school.name}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
