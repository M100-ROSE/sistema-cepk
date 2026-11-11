import { useState } from 'react'
import { BrandPanel } from '../components/BrandPanel'
import { DemoAccounts } from '../components/DemoAccounts'
import { LoginForm } from '../components/LoginForm'
import { Logo } from '../components/Logo'
import { RoleSelector } from '../components/RoleSelector'
import {
  ArrowUpRightIcon,
  CompassIcon,
  ShieldIcon,
} from '../components/icons'
import type { DemoAccount } from '../data/accounts'
import type { Role } from '../lib/roles'
import { school } from '../data/school'

type LoginPageProps = {
  onAuthenticated: (account: DemoAccount, remember: boolean) => void
  onVisit: () => void
}

export function LoginPage({ onAuthenticated, onVisit }: LoginPageProps) {
  const [role, setRole] = useState<Role>('aluno')
  const [prefill, setPrefill] = useState<{
    account: DemoAccount
    key: number
  } | null>(null)

  function handleSelectAccount(account: DemoAccount) {
    setRole(account.role)
    setPrefill((current) => ({ account, key: (current?.key ?? 0) + 1 }))
  }

  return (
    <div className="min-h-dvh overflow-x-hidden lg:grid lg:grid-cols-[1.05fr_1fr]">
      <BrandPanel />

      <main className="relative flex min-h-dvh w-full min-w-0 flex-col overflow-hidden bg-mist px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
        {/* Padrão de pontos + brilho sutil */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(5,79,49,0.12)_1px,transparent_0)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_50%_18%,black,transparent_72%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-28 -right-16 size-80 rounded-full bg-brand-300/25 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative lg:hidden">
          <Logo variant="light" />
        </div>

        <div className="relative flex flex-1 items-center justify-center py-8">
          <div className="w-full max-w-[26.5rem] animate-fade-up">
            <header className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 px-3 py-1 text-[0.64rem] font-bold tracking-[0.16em] text-brand-800 uppercase backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Portal Kennedy · 2026
              </span>

              <h1 className="mt-4 text-[2.05rem] leading-[1.08] font-extrabold tracking-[-0.025em] text-ink">
                Acesse sua conta
              </h1>
              <p className="mt-2 max-w-[24rem] text-[0.9rem] leading-relaxed text-slate-500">
                Escolha seu perfil e entre com as credenciais institucionais.
              </p>
            </header>

            <div className="relative rounded-[1.6rem] border border-slate-200/80 bg-white p-5 shadow-[0_30px_70px_-45px_rgba(3,43,26,0.5)] sm:p-7">
              <span
                className="absolute inset-x-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-brand-500 via-accent-400 to-transparent"
                aria-hidden="true"
              />

              <RoleSelector value={role} onChange={setRole} />

              <div className="mt-5">
                <LoginForm
                  key={prefill?.key ?? 'sem-preenchimento'}
                  role={role}
                  initialIdentifier={prefill?.account.email}
                  initialPassword={prefill?.account.password}
                  onAuthenticated={onAuthenticated}
                />
              </div>

              <DemoAccounts onSelect={handleSelectAccount} />

              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-slate-200" />
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                  ou
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <button
                type="button"
                onClick={onVisit}
                className="group flex w-full items-center gap-3 rounded-xl border border-brand-200 bg-brand-50/60 px-3.5 py-3 text-left transition duration-200 hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-brand-700 ring-1 ring-brand-200">
                  <CompassIcon className="size-[1.1rem]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.85rem] font-bold text-brand-900">
                    Entrar como visitante
                  </span>
                  <span className="block truncate text-[0.72rem] text-brand-800/70">
                    Anos, cursos e notícias da escola
                  </span>
                </span>
                <ArrowUpRightIcon className="size-4 shrink-0 text-brand-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <p className="mt-5 text-center text-[0.8rem] leading-relaxed text-slate-500">
              Problemas para acessar? Fale com a secretaria pelo telefone{' '}
              <a
                href={school.phoneHref}
                className="font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                {school.phone}
              </a>
            </p>
          </div>
        </div>

        <footer className="relative flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-5 text-[0.73rem] text-slate-400 sm:flex-row">
          <span>© 2026 {school.name}</span>
          <span className="flex items-center gap-1.5">
            <ShieldIcon className="size-3.5" />
            Sessão segura · v1.0
          </span>
        </footer>
      </main>
    </div>
  )
}
