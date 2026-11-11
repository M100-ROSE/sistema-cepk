import type { LabBooking } from '../../data/dashboard'
import type { Role } from '../../lib/roles'
import { FlaskIcon } from '../icons'
import { Card, CardAction, StatusBadge } from './Card'

type LabsCardProps = {
  labs: LabBooking[]
  role: Role
  className?: string
}

export function LabsCard({ labs, role, className }: LabsCardProps) {
  const title =
    role === 'professor' ? 'Laboratórios e turmas' : 'Laboratórios do dia'

  return (
    <Card
      title={title}
      icon={<FlaskIcon className="size-[1.15rem]" />}
      action={<CardAction>{labs.length} reservas</CardAction>}
      className={className}
    >
      <ul className="grid gap-3 sm:grid-cols-3">
        {labs.map((lab) => {
          const detail =
            lab.status === 'livre'
              ? role === 'professor'
                ? 'Sem turma agendada'
                : 'Reserva livre'
              : role === 'aluno'
                ? `Turma ${lab.className}`
                : role === 'professor'
                  ? `Levar turma · ${lab.className}`
                  : `${lab.className} · ${lab.teacher}`

          return (
            <li
              key={lab.id}
              className="rounded-xl border border-slate-100 bg-mist/60 p-3.5 transition-colors hover:border-brand-200"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[0.82rem] leading-snug font-semibold text-ink">
                  {lab.name}
                </p>
                <StatusBadge tone={lab.status === 'livre' ? 'positive' : 'busy'}>
                  {lab.status}
                </StatusBadge>
              </div>
              <p className="mt-1.5 truncate text-[0.72rem] text-slate-500">{detail}</p>
              <p className="mt-2 text-[0.72rem] font-semibold text-slate-600 tabular-nums">
                {lab.time}
              </p>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
