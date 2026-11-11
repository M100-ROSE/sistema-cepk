import {
  useState,
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
} from 'react'
import { cn } from '../lib/cn'
import { AlertIcon, CapsLockIcon, EyeIcon, EyeOffIcon } from './icons'

type TextFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  autoComplete?: string
  icon?: ReactNode
  inputRef?: RefObject<HTMLInputElement | null>
  disabled?: boolean
  /** Ação opcional alinhada à direita do label (ex.: "Esqueci minha senha"). */
  labelAction?: ReactNode
}

export function TextField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = 'text',
  placeholder,
  autoComplete,
  icon,
  inputRef,
  disabled = false,
  labelAction,
}: TextFieldProps) {
  const [revealed, setRevealed] = useState(false)
  const [capsLock, setCapsLock] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword && revealed ? 'text' : type
  const hasError = Boolean(error)

  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy =
    [hasError ? errorId : null, capsLock && isPassword ? hintId : null]
      .filter(Boolean)
      .join(' ') || undefined

  function handleKey(event: KeyboardEvent<HTMLInputElement>) {
    if (isPassword) setCapsLock(event.getModifierState('CapsLock'))
  }

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="text-sm font-semibold text-slate-700"
        >
          {label}
        </label>
        {labelAction}
      </div>

      <div
        className={cn(
          'group relative flex items-center overflow-hidden rounded-xl border bg-white transition duration-150',
          hasError
            ? 'border-red-400 ring-4 ring-red-500/10'
            : 'border-slate-200 hover:border-slate-300 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15',
          disabled && 'cursor-not-allowed bg-slate-50 opacity-70',
        )}
      >
        {icon && (
          <span
            className={cn(
              'pointer-events-none pl-3.5 transition-colors',
              hasError
                ? 'text-red-400'
                : 'text-slate-400 group-focus-within:text-brand-600',
            )}
          >
            {icon}
          </span>
        )}

        <input
          id={id}
          ref={inputRef}
          type={inputType}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          onKeyDown={handleKey}
          onKeyUp={handleKey}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full bg-transparent py-3.5 pr-3.5 text-[0.95rem] text-ink outline-none placeholder:text-slate-400 disabled:cursor-not-allowed',
            'focus-visible:outline-none',
            icon ? 'pl-2.5' : 'pl-3.5',
            isPassword && 'pr-12',
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setRevealed((current) => !current)}
            aria-label={revealed ? 'Ocultar senha' : 'Mostrar senha'}
            aria-pressed={revealed}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-400 transition-colors hover:text-brand-600 focus-visible:rounded-r-xl"
            tabIndex={0}
          >
            {revealed ? (
              <EyeOffIcon className="size-[1.15rem]" />
            ) : (
              <EyeIcon className="size-[1.15rem]" />
            )}
          </button>
        )}
      </div>

      <div className="mt-1.5 min-h-[1.15rem] text-[0.8rem] leading-tight">
        {hasError ? (
          <p
            id={errorId}
            className="flex items-start gap-1.5 font-medium text-red-600"
          >
            <AlertIcon className="mt-px size-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        ) : (
          capsLock &&
          isPassword && (
            <p
              id={hintId}
              className="flex items-center gap-1.5 font-medium text-amber-600"
            >
              <CapsLockIcon className="size-3.5" />
              Caps Lock está ativado.
            </p>
          )
        )}
      </div>
    </div>
  )
}
