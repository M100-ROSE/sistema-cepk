import { demoAccountList, type DemoAccount } from '../data/accounts'
import { getRole } from '../lib/roles'
import { ChevronRightIcon, SparkleIcon } from './icons'

type DemoAccountsProps = {
  onSelect: (account: DemoAccount) => void
}

export function DemoAccounts({ onSelect }: DemoAccountsProps) {
  return (
    <section
      aria-label="Contas de demonstração"
      className="mt-5 rounded-xl border border-dashed border-brand-300/70 bg-brand-50/50 p-3.5"
    >
      <header className="flex items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-[0.66rem] font-bold tracking-[0.14em] text-brand-800 uppercase">
          <SparkleIcon className="size-3.5 text-brand-600" />
          Contas de teste
        </p>
        <span className="text-[0.64rem] text-slate-500">clique para preencher</span>
      </header>

      <ul className="mt-2.5 space-y-1.5">
        {demoAccountList.map((account) => {
          const role = getRole(account.role)
          const Icon = role.icon

          return (
            <li key={account.role}>
              <button
                type="button"
                onClick={() => onSelect(account)}
                title={`Preencher login de ${role.label}`}
                className="group flex w-full items-center gap-2.5 rounded-lg border border-transparent bg-white/80 px-2.5 py-2 text-left transition hover:border-brand-300 hover:bg-white"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon className="size-3.5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-1.5 text-[0.74rem] leading-tight">
                    <span className="font-bold text-ink">{role.label}</span>
                    <span className="font-mono text-[0.66rem] text-slate-400">
                      senha {account.password}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-[0.7rem] text-slate-500">
                    {account.email}
                  </span>
                </span>

                <ChevronRightIcon className="size-3.5 shrink-0 text-slate-300 transition-colors group-hover:text-brand-600" />
              </button>
            </li>
          )
        })}
      </ul>

      <p className="mt-2.5 border-t border-brand-200/60 pt-2 text-[0.63rem] leading-relaxed text-slate-500">
        Ambiente de demonstração · contas fictícias para avaliação do portal.
      </p>
    </section>
  )
}
