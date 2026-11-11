import type { DailyClass } from '../../data/dashboard'
import type { Role } from '../../lib/roles'
import { cn } from '../../lib/cn'
import { ClockIcon } from '../icons'
import { Card, CardAction } from './Card'

type ClassesCardProps = {
  classes: DailyClass[]
  role: Role
  className?: string
}

export function ClassesCard({ classes, role, className }: ClassesCardProps) {
  const title =
    role === 'professor'
      ? 'Aulas que vou dar'
      : role === 'escola'
        ? 'Aulas do dia · todas as turmas'
        : 'Aulas do dia'

  return (
    <Card
      title={title}
      icon={<ClockIcon className="size-[1.15rem]" />}
      action={<CardAction>{classes.length} aulas</CardAction>}
      className={className}
    >
      <ul className="-mx-2 divide-y divide-slate-100">
        {classes.map((item) => {
          const isNow = item.status === 'now'
          const detail =
            role === 'aluno'
              ? `${item.room} · ${item.teacher}`
              : role === 'professor'
                ? `${item.className} · ${item.room}`
                : `${item.className} · ${item.room} · ${item.teacher}`

          return (
            <li
              key={item.id}
              className="flex gap-3.5 rounded-lg px-2 py-2.5 transition-colors hover:bg-mist/70"
            >
              <div className="w-12 shrink-0 pt-0.5 text-right">
                <p className="text-[0.82rem] font-bold text-ink tabular-nums">{item.start}</p>
                <p className="text-[0.68rem] text-slate-400 tabular-nums">{item.end}</p>
              </div>

              <div
                className={cn(
                  'min-w-0 flex-1 border-l-2 pl-3.5',
                  isNow ? 'border-brand-500' : 'border-slate-100',
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[0.88rem] font-semibold text-ink">{item.subject}</p>

                  {item.status === 'now' && (
                    <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide text-white uppercase">
                      Agora
                    </span>
                  )}
                  {item.status === 'next' && (
                    <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide text-slate-500 uppercase">
                      Próxima
                    </span>
                  )}
                </div>

                <p className="mt-0.5 truncate text-[0.75rem] text-slate-500">{detail}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
