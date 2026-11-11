import { useId } from 'react'
import { cn } from '../lib/cn'

type LogoProps = {
  /** Variante para fundo escuro (padrão) ou claro. */
  variant?: 'dark' | 'light'
  className?: string
}

export function LogoMark({ className }: { className?: string }) {
  const id = useId()

  return (
    <svg
      viewBox="0 0 48 48"
      className={cn('size-11 shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#${id})`} />
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="12.25"
        fill="none"
        stroke="white"
        strokeOpacity="0.18"
      />
      <path
        d="M31.5 17.4a9.2 9.2 0 1 0 0 13.2"
        fill="none"
        stroke="#032b1a"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <circle cx="33" cy="24" r="2.6" fill="#0b0f0d" />
    </svg>
  )
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  const isDark = variant === 'dark'

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoMark />
      <div className="leading-none">
        <span
          className={cn(
            'block text-[1.35rem] font-extrabold tracking-[0.12em]',
            isDark ? 'text-white' : 'text-brand-900',
          )}
        >
          KENNEDY
        </span>
        <span
          className={cn(
            'mt-1.5 block text-[0.6rem] font-medium tracking-[0.2em] uppercase',
            isDark ? 'text-brand-200/80' : 'text-slate-500',
          )}
        >
          Colégio Estadual · PR
        </span>
      </div>
    </div>
  )
}
