import type { ComponentType } from 'react'
import {
  GraduationCapIcon,
  PresentationIcon,
  SchoolIcon,
} from '../components/icons'

export type Role = 'aluno' | 'professor' | 'escola'

export type RoleConfig = {
  id: Role
  label: string
  description: string
  icon: ComponentType<{ className?: string }>
  /** Módulos liberados no painel (por enquanto, todos compartilham a mesma base). */
  modules: {
    subjects: boolean
    rooms: boolean
  }
}

export const roles: RoleConfig[] = [
  {
    id: 'aluno',
    label: 'Aluno',
    description: 'Suas aulas, laboratórios, calendário e matérias.',
    icon: GraduationCapIcon,
    modules: { subjects: true, rooms: false },
  },
  {
    id: 'professor',
    label: 'Professor',
    description: 'Suas aulas, laboratórios, calendário, salas e conteúdos.',
    icon: PresentationIcon,
    modules: { subjects: true, rooms: true },
  },
  {
    id: 'escola',
    label: 'Escola',
    description: 'Visão completa de aulas, laboratórios, salas, matérias e conteúdos.',
    icon: SchoolIcon,
    modules: { subjects: true, rooms: true },
  },
]

export function getRole(id: Role): RoleConfig {
  const role = roles.find((item) => item.id === id)
  if (!role) throw new Error(`Perfil desconhecido: ${id}`)
  return role
}
