import { cn } from '../../lib/cn'
import { capitalize } from '../../lib/format'
import { getMonthEvents } from '../../data/dashboard'
import { CalendarIcon } from '../icons'
import { Card, CardAction } from './Card'

const weekdayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function CalendarCard({ className }: { className?: string }) {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()

  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const events = getMonthEvents().filter(
    (event) => event.date.getMonth() === month && event.date.getFullYear() === year,
  )
  const eventDays = new Set(events.map((event) => event.date.getDate()))

  const cells: Array<number | null> = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ]

  const monthLabel = capitalize(
    new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
      year: 'numeric',
    }).format(today),
  )

  return (
    <Card
      title="Calendário"
      icon={<CalendarIcon className="size-[1.15rem]" />}
      action={<CardAction>Ver tudo</CardAction>}
      className={className}
    >
      <p className="text-[0.82rem] font-semibold text-ink">{monthLabel}</p>

      <div className="mt-3 grid grid-cols-7 gap-1">
        {weekdayLabels.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="pb-1 text-center text-[0.62rem] font-bold tracking-wide text-slate-400 uppercase"
          >
            {label}
          </span>
        ))}

        {cells.map((day, index) => {
          if (day === null) return <span key={`empty-${index}`} />

          const isToday = day === today.getDate()
          const hasEvent = eventDays.has(day)

          return (
            <span key={day} className="relative flex justify-center">
              <span
                className={cn(
                  'grid size-7 place-items-center rounded-lg text-[0.75rem] tabular-nums transition-colors',
                  isToday
                    ? 'bg-brand-600 font-bold text-white'
                    : 'text-slate-600 hover:bg-mist',
                )}
              >
                {day}
              </span>
              {hasEvent && !isToday && (
                <span className="absolute -bottom-0.5 size-1 rounded-full bg-accent-500" />
              )}
            </span>
          )
        })}
      </div>

      <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
        {events.slice(0, 2).map((event) => (
          <li key={event.title} className="flex items-center gap-3">
            <span
              className={cn(
                'grid size-9 shrink-0 place-items-center rounded-lg text-[0.8rem] font-bold',
                event.tone === 'exam'
                  ? 'bg-rose-50 text-rose-600'
                  : 'bg-brand-50 text-brand-700',
              )}
            >
              {event.date.getDate()}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.82rem] font-semibold text-ink">
                {event.title}
              </p>
              <p className="truncate text-[0.72rem] text-slate-500">{event.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
