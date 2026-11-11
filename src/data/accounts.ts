import type { Role } from '../lib/roles'

export type DemoAccount = {
  role: Role
  name: string
  firstName: string
  detail: string
  email: string
  password: string
  initials: string
}

/**
 * Contas de demonstração usadas enquanto não há API de autenticação.
 * Cada perfil do login possui uma conta própria para testes.
 */
export const demoAccounts: Record<Role, DemoAccount> = {
  aluno: {
    role: 'aluno',
    name: 'Ana Beatriz Souza',
    firstName: 'Ana',
    detail: '2ª série B · Técnico em Desenvolvimento de Sistemas',
    email: 'aluno@escola.pr.gov.br',
    password: 'aluno2026',
    initials: 'AS',
  },
  professor: {
    role: 'professor',
    name: 'Carlos Henrique Lima',
    firstName: 'Carlos',
    detail: 'Matemática · Ensino Médio',
    email: 'professor@escola.pr.gov.br',
    password: 'prof2026',
    initials: 'CL',
  },
  escola: {
    role: 'escola',
    name: 'Direção Kennedy',
    firstName: 'Direção',
    detail: 'Colégio Estadual Presidente Kennedy',
    email: 'escola@escola.pr.gov.br',
    password: 'escola2026',
    initials: 'DK',
  },
}

export const demoAccountList = Object.values(demoAccounts)

export function accountByEmail(email: string): DemoAccount | null {
  const value = email.trim().toLowerCase()
  return demoAccountList.find((account) => account.email === value) ?? null
}

type AuthResult =
  | { ok: true; account: DemoAccount }
  | { ok: false; error: string }

/** Autenticação simulada: valida apenas as contas de demonstração. */
export function authenticate(identifier: string, password: string): AuthResult {
  const account = accountByEmail(identifier)

  if (!account) {
    return {
      ok: false,
      error: 'Conta não encontrada. Use uma das contas de teste abaixo.',
    }
  }

  if (account.password !== password) {
    return {
      ok: false,
      error: 'Senha incorreta para esta conta. Confira e tente novamente.',
    }
  }

  return { ok: true, account }
}
