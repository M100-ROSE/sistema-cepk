import type { SubjectEntry } from '../../data/dashboard'
import type { Role } from '../../lib/roles'
import { cn } from '../../lib/cn'
import { BookIcon } from '../icons'
import { Card, CardAction } from './Card'

type SubjectsCardProps = {
  entries: SubjectEntry[]
  role: Role
  className?: string
}

export function SubjectsCard({ entries, role, className }: SubjectsCardProps) {
  const isPlanning = role !== 'aluno'
  const title =
    role === 'professor'
      ? 'Conteúdos de hoje'
      : role === 'escola'
        ? 'Matérias e conteúdos'
        : 'Matérias'

  return (
    <Card
      title={title}
      icon={<BookIcon className="size-[1.15rem]" />}
      action={
        <CardAction>
          {isPlanning ? `${entries.length} conteúdos` : `${entries.length} matérias`}
        </CardAction>
      }
      className={className}
    >
      <ul className="-mx-2 divide-y divide-slate-100">
        {entries.map((entry) =>
          isPlanning ? (
            <li
              key={entry.id}
              className="flex gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-mist/70"
            >
              <span className={cn('mt-1.5 size-2 shrink-0 rounded-full', entry.dot)} />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <p className="text-[0.85rem] font-semibold text-ink">{entry.name}</p>
                  {entry.time && (
                    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.66rem] font-semibold text-slate-600 tabular-nums">
                      {entry.time}
                    </span>
                  )}
                </div>

                <p className="mt-0.5 truncate text-[0.72rem] text-slate-500">
                  {role === 'escola' && entry.teacher ? `Prof. ${entry.teacher} · ` : ''}
                  {entry.className}
                </p>

                <p className="mt-1 text-[0.74rem] leading-snug text-slate-600">
                  <span className="text-slate-400">Conteúdo: </span>
                  {entry.topic}
                </p>
              </div>
            </li>
          ) : (
            <li
              key={entry.id}
              className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-mist/70"
            >
              <span className={cn('size-2 shrink-0 rounded-full', entry.dot)} />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.85rem] font-semibold text-ink">
                  {entry.name}
                </p>
                <p className="truncate text-[0.72rem] text-slate-500">
                  Prof. {entry.teacher}
                </p>
              </div>

              <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.68rem] font-semibold text-slate-600 tabular-nums">
                {entry.hours}h
              </span>
            </li>
          ),
        )}
      </ul>
    </Card>
  )
}
