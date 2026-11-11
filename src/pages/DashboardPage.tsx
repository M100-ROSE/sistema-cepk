import { Logo } from '../components/Logo'
import { CalendarCard } from '../components/dashboard/CalendarCard'
import { ClassesCard } from '../components/dashboard/ClassesCard'
import { LabsCard } from '../components/dashboard/LabsCard'
import { RoomsCard } from '../components/dashboard/RoomsCard'
import { SubjectsCard } from '../components/dashboard/SubjectsCard'
import { LogoutIcon, ShieldIcon } from '../components/icons'
import { dashboards } from '../data/dashboard'
import type { DemoAccount } from '../data/accounts'
import { school } from '../data/school'
import { capitalize } from '../lib/format'
import { getRole } from '../lib/roles'

type DashboardPageProps = {
  account: DemoAccount
  onLogout: () => void
}

export function DashboardPage({ account, onLogout }: DashboardPageProps) {
  const roleConfig = getRole(account.role)
  const RoleIcon = roleConfig.icon
  const dashboard = dashboards[account.role]

  const dateLabel = capitalize(
    new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(new Date()),
  )

  const labsInUse = dashboard.labs.filter((lab) => lab.status === 'em uso').length
  const { subjects: showSubjects, rooms: showRooms } = roleConfig.modules

  const summary =
    account.role === 'professor'
      ? `Você tem ${dashboard.classes.length} aulas hoje e ${dashboard.labs.length} laboratórios com turmas.`
      : account.role === 'escola'
        ? `A escola tem ${dashboard.classes.length} aulas hoje e ${labsInUse} laboratórios em uso.`
        : `Você tem ${dashboard.classes.length} aulas hoje e ${labsInUse} laboratórios em uso.`

  const turmas = new Set(dashboard.classes.map((item) => item.className)).size
  const teachers = new Set(dashboard.subjects.map((item) => item.teacher)).size

  return (
    <div className="flex min-h-dvh animate-fade-in flex-col bg-mist">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <Logo variant="light" />

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <span className="hidden items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[0.7rem] font-bold tracking-wide text-brand-700 uppercase sm:inline-flex">
              <RoleIcon className="size-3.5" />
              {roleConfig.label}
            </span>

            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-full bg-ink text-[0.7rem] font-bold text-white">
                {account.initials}
              </span>
              <div className="hidden leading-tight md:block">
                <p className="text-[0.82rem] font-semibold text-ink">{account.name}</p>
                <p className="text-[0.7rem] text-slate-500">{account.detail}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onLogout}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-2 text-[0.78rem] font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-ink"
            >
              <LogoutIcon className="size-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-7 sm:px-6 sm:py-9">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.14em] text-brand-700 uppercase">
              {dateLabel}
            </p>
            <h1 className="mt-1.5 text-[1.7rem] leading-tight font-extrabold tracking-tight text-ink sm:text-[2rem]">
              Olá, {account.firstName}
            </h1>
            <p className="mt-1.5 text-[0.9rem] text-slate-500">{summary}</p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-[0.72rem] font-semibold text-brand-800 sm:hidden">
            <RoleIcon className="size-3.5" />
            {roleConfig.label}
          </span>
        </div>

        {account.role === 'escola' && (
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Salas', value: dashboard.rooms.length },
              { label: 'Turmas', value: turmas },
              { label: 'Professores', value: teachers },
              { label: 'Conteúdos do dia', value: dashboard.subjects.length },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm shadow-slate-900/5"
              >
                <dt className="text-[0.64rem] font-bold tracking-[0.12em] text-slate-400 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[1.35rem] leading-none font-extrabold text-ink tabular-nums">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-7 grid gap-5 lg:grid-cols-6">
          <ClassesCard
            classes={dashboard.classes}
            role={account.role}
            className="lg:col-span-4"
          />
          <CalendarCard className="lg:col-span-2" />

          <LabsCard labs={dashboard.labs} role={account.role} className="lg:col-span-6" />

          {showSubjects && (
            <SubjectsCard
              entries={dashboard.subjects}
              role={account.role}
              className={showRooms ? 'lg:col-span-3' : 'lg:col-span-6'}
            />
          )}
          {showRooms && (
            <RoomsCard rooms={dashboard.rooms} role={account.role} className="lg:col-span-3" />
          )}
        </div>

        <footer className="mt-9 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-5 text-[0.73rem] text-slate-400 sm:flex-row">
          <span>© 2026 {school.name} · Painel {roleConfig.label.toLowerCase()}</span>
          <span className="flex items-center gap-1.5">
            <ShieldIcon className="size-3.5" />
            Sessão segura · v1.0
          </span>
        </footer>
      </main>
    </div>
  )
}
