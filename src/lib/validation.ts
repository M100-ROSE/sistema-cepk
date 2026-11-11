export type LoginField = 'identifier' | 'password'
export type FieldErrors = Partial<Record<LoginField, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Aceita usuário/matrícula ou e-mail institucional. */
export function validateIdentifier(raw: string): string | undefined {
  const value = raw.trim()

  if (!value) return 'Informe seu usuário ou e-mail.'

  if (value.includes('@')) {
    if (!EMAIL_RE.test(value)) return 'Digite um e-mail válido.'
    return undefined
  }

  if (value.length < 3) return 'O usuário deve ter pelo menos 3 caracteres.'
  if (!/^[a-zA-Z0-9._-]+$/.test(value))
    return 'Use apenas letras, números, ponto, hífen ou underline.'

  return undefined
}

export function validatePassword(raw: string): string | undefined {
  if (!raw) return 'Informe sua senha.'
  if (raw.length < 6) return 'A senha deve ter pelo menos 6 caracteres.'
  return undefined
}

export function validateLogin(identifier: string, password: string): FieldErrors {
  const errors: FieldErrors = {}

  const identifierError = validateIdentifier(identifier)
  const passwordError = validatePassword(password)

  if (identifierError) errors.identifier = identifierError
  if (passwordError) errors.password = passwordError

  return errors
}
