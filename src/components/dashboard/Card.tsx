import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardProps = {
  title: string
  icon: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
}

export function Card({ title, icon, action, children, className }: CardProps) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5',
        className,
      )}
    >
      <header className="flex items-center gap-2.5">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          {icon}
        </span>
        <h2 className="text-[0.95rem] font-semibold text-ink">{title}</h2>
        {action && <div className="ml-auto shrink-0">{action}</div>}
      </header>

      <div className="mt-4">{children}</div>
    </section>
  )
}

export function CardAction({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.75rem] font-semibold text-brand-700 underline-offset-4 hover:underline">
      {children}
    </span>
  )
}

export function StatusBadge({ tone, children }: { tone: 'positive' | 'neutral' | 'busy'; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.68rem] font-bold whitespace-nowrap uppercase tracking-wide',
        tone === 'positive' && 'bg-brand-50 text-brand-700',
        tone === 'busy' && 'bg-amber-50 text-amber-700',
        tone === 'neutral' && 'bg-slate-100 text-slate-500',
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          tone === 'positive' && 'bg-brand-500',
          tone === 'busy' && 'bg-amber-500',
          tone === 'neutral' && 'bg-slate-400',
        )}
      />
      {children}
    </span>
  )
}
