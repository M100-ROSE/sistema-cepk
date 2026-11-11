import { useRef, useState, type FormEvent } from 'react'
import { cn } from '../lib/cn'
import { getRole, type Role } from '../lib/roles'
import { authenticate, type DemoAccount } from '../data/accounts'
import {
  validateIdentifier,
  validateLogin,
  validatePassword,
  type FieldErrors,
  type LoginField,
} from '../lib/validation'
import { TextField } from './TextField'
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
  SpinnerIcon,
  UserIcon,
} from './icons'

type LoginFormProps = {
  role: Role
  initialIdentifier?: string
  initialPassword?: string
  onAuthenticated: (account: DemoAccount, remember: boolean) => void
}

export function LoginForm({
  role,
  initialIdentifier = '',
  initialPassword = '',
  onAuthenticated,
}: LoginFormProps) {
  const [identifier, setIdentifier] = useState(initialIdentifier)
  const [password, setPassword] = useState(initialPassword)
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Partial<Record<LoginField, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)

  const identifierRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function updateField(field: LoginField, value: string) {
    const setter = field === 'identifier' ? setIdentifier : setPassword
    setter(value)

    if (submitError) setSubmitError(null)

    // Revalida ao digitar somente depois que o campo já foi tocado.
    if (touched[field]) {
      const message =
        field === 'identifier' ? validateIdentifier(value) : validatePassword(value)
      setErrors((current) => ({ ...current, [field]: message }))
    }
  }

  function handleBlur(field: LoginField) {
    setTouched((current) => ({ ...current, [field]: true }))

    const value = field === 'identifier' ? identifier : password
    const message =
      field === 'identifier' ? validateIdentifier(value) : validatePassword(value)

    setErrors((current) => ({ ...current, [field]: message }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    setAttempt((current) => current + 1)
    setSubmitError(null)
    setTouched({ identifier: true, password: true })

    const nextErrors = validateLogin(identifier, password)
    setErrors(nextErrors)

    if (nextErrors.identifier) {
      identifierRef.current?.focus()
      return
    }
    if (nextErrors.password) {
      passwordRef.current?.focus()
      return
    }

    setIsSubmitting(true)

    try {
      // Simula a latência de uma chamada real à API de autenticação.
      await new Promise((resolve) => setTimeout(resolve, 700))

      const result = authenticate(identifier, password)

      if (!result.ok) {
        setIsSubmitting(false)
        setSubmitError(result.error)
        return
      }

      if (result.account.role !== role) {
        setIsSubmitting(false)
        setSubmitError(
          `Esta conta pertence ao perfil ${getRole(result.account.role).label}. Selecione esse perfil para entrar.`,
        )
        return
      }

      onAuthenticated(result.account, remember)
    } catch {
      setIsSubmitting(false)
      setSubmitError(
        'Não foi possível entrar agora. Verifique suas credenciais e tente novamente.',
      )
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-2">
      {submitError && (
        <div
          key={`error-${attempt}`}
          role="alert"
          className="mb-2 flex animate-shake items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-[0.85rem] font-medium text-red-700"
        >
          <AlertIcon className="mt-px size-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <TextField
        id="identifier"
        label="Usuário ou e-mail"
        value={identifier}
        onChange={(value) => updateField('identifier', value)}
        onBlur={() => handleBlur('identifier')}
        error={errors.identifier}
        placeholder="nome@escola.pr.gov.br"
        autoComplete="username"
        icon={<UserIcon className="size-[1.15rem]" />}
        inputRef={identifierRef}
        disabled={isSubmitting}
      />

      <TextField
        id="password"
        label="Senha"
        type="password"
        value={password}
        onChange={(value) => updateField('password', value)}
        onBlur={() => handleBlur('password')}
        error={errors.password}
        placeholder="Digite sua senha"
        autoComplete="current-password"
        icon={<LockIcon className="size-[1.15rem]" />}
        inputRef={passwordRef}
        disabled={isSubmitting}
        labelAction={
          <a
            href="#recuperar-senha"
            className="rounded text-[0.78rem] font-semibold text-brand-700 underline-offset-4 transition-colors hover:text-brand-800 hover:underline"
          >
            Esqueci minha senha
          </a>
        }
      />

      <label className="flex w-fit cursor-pointer items-center gap-2.5 pt-1 pb-5 text-[0.85rem] text-slate-600 select-none">
        <span className="relative flex size-[1.1rem] shrink-0 items-center justify-center">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            disabled={isSubmitting}
            className="peer size-full cursor-pointer appearance-none rounded-[0.3rem] border border-slate-300 bg-white transition-colors checked:border-brand-600 checked:bg-brand-600 disabled:cursor-not-allowed"
          />
          <CheckIcon className="pointer-events-none absolute size-3 text-white opacity-0 transition-opacity peer-checked:opacity-100 [stroke-width:3]" />
        </span>
        Manter conectado neste dispositivo
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'group flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(120deg,#32d583,#12b76a_55%,#039855)] px-5 py-3.5 text-[0.95rem] font-bold text-brand-950 shadow-lg shadow-brand-600/30 transition duration-200',
          'hover:shadow-xl hover:shadow-brand-600/35 hover:brightness-110',
          'active:translate-y-px active:brightness-95',
          'disabled:cursor-progress disabled:opacity-80 disabled:hover:brightness-100',
        )}
      >
        {isSubmitting ? (
          <>
            <SpinnerIcon className="size-4 animate-spin" />
            Validando acesso…
          </>
        ) : (
          <>
            Entrar
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  )
}
