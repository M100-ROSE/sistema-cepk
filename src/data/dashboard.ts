import type { Role } from '../lib/roles'

export type DailyClass = {
  id: string
  start: string
  end: string
  subject: string
  room: string
  className: string
  teacher: string
  topic: string
  status?: 'now' | 'next'
}

export type LabBooking = {
  id: string
  name: string
  className: string
  teacher: string
  time: string
  status: 'livre' | 'em uso'
}

export type SubjectEntry = {
  id: string
  name: string
  teacher: string
  className?: string
  topic?: string
  time?: string
  hours?: number
  dot: string
}

export type Room = {
  id: string
  name: string
  floor: string
  capacity: number
  status: 'livre' | 'em uso'
  current?: string
}

export type RoleDashboard = {
  classes: DailyClass[]
  labs: LabBooking[]
  subjects: SubjectEntry[]
  rooms: Room[]
}

/** Aluno: suas aulas, laboratórios e matérias. */
const aluno: RoleDashboard = {
  classes: [
    {
      id: 'aula-1',
      start: '07:30',
      end: '08:20',
      subject: 'Matemática',
      room: 'Sala 12',
      className: '2ª série B',
      teacher: 'Prof. Ana Souza',
      topic: 'Funções quadráticas: gráfico e raízes',
      status: 'now',
    },
    {
      id: 'aula-2',
      start: '08:20',
      end: '09:10',
      subject: 'Português',
      room: 'Sala 12',
      className: '2ª série B',
      teacher: 'Prof. Carlos Lima',
      topic: 'Análise literária: Modernismo',
      status: 'next',
    },
    {
      id: 'aula-3',
      start: '09:30',
      end: '10:20',
      subject: 'Biologia',
      room: 'Lab. 02',
      className: '2ª série B',
      teacher: 'Prof. Renata Alves',
      topic: 'Genética mendeliana',
    },
    {
      id: 'aula-4',
      start: '10:20',
      end: '11:10',
      subject: 'História',
      room: 'Sala 08',
      className: '2ª série B',
      teacher: 'Prof. Marcos Dias',
      topic: 'Era Vargas',
    },
  ],
  labs: [
    {
      id: 'lab-1',
      name: 'Laboratório 02 · Ciências',
      className: '2ª série B',
      teacher: 'Prof. Renata Alves',
      time: '09:30 – 10:20',
      status: 'em uso',
    },
    {
      id: 'lab-2',
      name: 'Laboratório 01 · Informática',
      className: '2ª série B',
      teacher: 'Prof. Carlos Lima',
      time: '13:00 – 15:30',
      status: 'livre',
    },
    {
      id: 'lab-3',
      name: 'Laboratório 03 · Química',
      className: '3ª série A',
      teacher: 'Prof. João Prado',
      time: '15:40 – 17:30',
      status: 'em uso',
    },
  ],
  subjects: [
    { id: 'mat-1', name: 'Matemática', teacher: 'Ana Souza', hours: 120, dot: 'bg-brand-500' },
    { id: 'mat-2', name: 'Português', teacher: 'Carlos Lima', hours: 120, dot: 'bg-emerald-500' },
    { id: 'mat-3', name: 'Biologia', teacher: 'Renata Alves', hours: 80, dot: 'bg-teal-500' },
    { id: 'mat-4', name: 'História', teacher: 'Marcos Dias', hours: 80, dot: 'bg-lime-500' },
    { id: 'mat-5', name: 'Física', teacher: 'João Prado', hours: 80, dot: 'bg-green-600' },
    { id: 'mat-6', name: 'Geografia', teacher: 'Lúcia Reis', hours: 80, dot: 'bg-slate-400' },
  ],
  rooms: [],
}

/** Professor: aulas que vai dar, laboratórios com turma e conteúdos do dia. */
const professor: RoleDashboard = {
  classes: [
    {
      id: 'prof-aula-1',
      start: '07:30',
      end: '08:20',
      subject: 'Matemática',
      room: 'Sala 12',
      className: '2ª série B',
      teacher: 'Você',
      topic: 'Funções quadráticas: gráfico e raízes',
      status: 'now',
    },
    {
      id: 'prof-aula-2',
      start: '08:20',
      end: '09:10',
      subject: 'Matemática',
      room: 'Sala 08',
      className: '1ª série A',
      teacher: 'Você',
      topic: 'Progressões aritméticas: termo geral',
      status: 'next',
    },
    {
      id: 'prof-aula-3',
      start: '09:30',
      end: '10:20',
      subject: 'Matemática',
      room: 'Sala 21',
      className: '3ª série A',
      teacher: 'Você',
      topic: 'Geometria analítica: distância entre pontos',
    },
    {
      id: 'prof-aula-4',
      start: '10:20',
      end: '11:10',
      subject: 'Matemática',
      room: 'Sala 08',
      className: '2ª série A',
      teacher: 'Você',
      topic: 'Funções quadráticas: exercícios',
    },
  ],
  labs: [
    {
      id: 'prof-lab-1',
      name: 'Laboratório 02 · Ciências',
      className: '2ª série B',
      teacher: 'Você',
      time: '09:30 – 10:20',
      status: 'em uso',
    },
    {
      id: 'prof-lab-2',
      name: 'Laboratório 01 · Informática',
      className: '3ª série A',
      teacher: 'Você',
      time: '13:30 – 15:10',
      status: 'em uso',
    },
    {
      id: 'prof-lab-3',
      name: 'Laboratório 03 · Química',
      className: '1ª série A',
      teacher: 'Você',
      time: '15:40 – 17:30',
      status: 'em uso',
    },
  ],
  subjects: [
    {
      id: 'prof-conteudo-1',
      name: 'Matemática',
      teacher: 'Você',
      className: '2ª série B',
      topic: 'Funções quadráticas: gráfico e raízes',
      time: '07:30',
      dot: 'bg-brand-500',
    },
    {
      id: 'prof-conteudo-2',
      name: 'Matemática',
      teacher: 'Você',
      className: '1ª série A',
      topic: 'Progressões aritméticas: termo geral',
      time: '08:20',
      dot: 'bg-emerald-500',
    },
    {
      id: 'prof-conteudo-3',
      name: 'Matemática',
      teacher: 'Você',
      className: '3ª série A',
      topic: 'Geometria analítica: distância entre pontos',
      time: '09:30',
      dot: 'bg-teal-500',
    },
    {
      id: 'prof-conteudo-4',
      name: 'Matemática',
      teacher: 'Você',
      className: '2ª série A',
      topic: 'Funções quadráticas: exercícios',
      time: '10:20',
      dot: 'bg-lime-500',
    },
  ],
  rooms: [
    {
      id: 'prof-sala-1',
      name: 'Sala 12',
      floor: '1º andar',
      capacity: 35,
      status: 'em uso',
      current: 'Matemática · 2ª série B',
    },
    {
      id: 'prof-sala-2',
      name: 'Sala 08',
      floor: '1º andar',
      capacity: 32,
      status: 'em uso',
      current: 'Matemática · 1ª série A',
    },
    {
      id: 'prof-sala-3',
      name: 'Sala 21',
      floor: '2º andar',
      capacity: 40,
      status: 'livre',
    },
    {
      id: 'prof-sala-4',
      name: 'Auditório',
      floor: 'Térreo',
      capacity: 120,
      status: 'livre',
    },
  ],
}

/** Escola: visão completa de aulas, laboratórios, salas e conteúdos. */
const escola: RoleDashboard = {
  classes: [
    {
      id: 'esc-aula-1',
      start: '07:30',
      end: '08:20',
      subject: 'Matemática',
      room: 'Sala 12',
      className: '2ª série B',
      teacher: 'Prof. Carlos Lima',
      topic: 'Funções quadráticas: gráfico e raízes',
      status: 'now',
    },
    {
      id: 'esc-aula-2',
      start: '07:30',
      end: '08:20',
      subject: 'Português',
      room: 'Sala 08',
      className: '1ª série A',
      teacher: 'Prof. Lúcia Reis',
      topic: 'Análise literária: Modernismo',
    },
    {
      id: 'esc-aula-3',
      start: '08:20',
      end: '09:10',
      subject: 'História',
      room: 'Sala 21',
      className: '3ª série A',
      teacher: 'Prof. Marcos Dias',
      topic: 'Era Vargas',
    },
    {
      id: 'esc-aula-4',
      start: '09:30',
      end: '10:20',
      subject: 'Biologia',
      room: 'Lab. 02',
      className: '2ª série B',
      teacher: 'Prof. Renata Alves',
      topic: 'Genética mendeliana',
    },
    {
      id: 'esc-aula-5',
      start: '09:30',
      end: '10:20',
      subject: 'Química',
      room: 'Lab. 03',
      className: '3ª série A',
      teacher: 'Prof. João Prado',
      topic: 'Estequiometria',
    },
    {
      id: 'esc-aula-6',
      start: '10:20',
      end: '11:10',
      subject: 'Matemática',
      room: 'Sala 08',
      className: '2ª série A',
      teacher: 'Prof. Carlos Lima',
      topic: 'Funções quadráticas: exercícios',
    },
  ],
  labs: [
    {
      id: 'esc-lab-1',
      name: 'Laboratório 02 · Ciências',
      className: '2ª série B',
      teacher: 'Prof. Renata Alves',
      time: '09:30 – 10:20',
      status: 'em uso',
    },
    {
      id: 'esc-lab-2',
      name: 'Laboratório 01 · Informática',
      className: '1ª série A',
      teacher: 'Prof. Carlos Lima',
      time: '13:00 – 15:30',
      status: 'livre',
    },
    {
      id: 'esc-lab-3',
      name: 'Laboratório 03 · Química',
      className: '3ª série A',
      teacher: 'Prof. João Prado',
      time: '15:40 – 17:30',
      status: 'em uso',
    },
  ],
  subjects: [
    {
      id: 'esc-conteudo-1',
      name: 'Matemática',
      teacher: 'Carlos Lima',
      className: '2ª série B',
      topic: 'Funções quadráticas: gráfico e raízes',
      time: '07:30',
      dot: 'bg-brand-500',
    },
    {
      id: 'esc-conteudo-2',
      name: 'Português',
      teacher: 'Lúcia Reis',
      className: '1ª série A',
      topic: 'Análise literária: Modernismo',
      time: '07:30',
      dot: 'bg-emerald-500',
    },
    {
      id: 'esc-conteudo-3',
      name: 'História',
      teacher: 'Marcos Dias',
      className: '3ª série A',
      topic: 'Era Vargas',
      time: '08:20',
      dot: 'bg-teal-500',
    },
    {
      id: 'esc-conteudo-4',
      name: 'Biologia',
      teacher: 'Renata Alves',
      className: '2ª série B',
      topic: 'Genética mendeliana',
      time: '09:30',
      dot: 'bg-lime-500',
    },
    {
      id: 'esc-conteudo-5',
      name: 'Química',
      teacher: 'João Prado',
      className: '3ª série A',
      topic: 'Estequiometria',
      time: '09:30',
      dot: 'bg-green-600',
    },
    {
      id: 'esc-conteudo-6',
      name: 'Matemática',
      teacher: 'Carlos Lima',
      className: '2ª série A',
      topic: 'Funções quadráticas: exercícios',
      time: '10:20',
      dot: 'bg-slate-400',
    },
  ],
  rooms: [
    {
      id: 'esc-sala-1',
      name: 'Sala 12',
      floor: '1º andar',
      capacity: 35,
      status: 'em uso',
      current: 'Matemática · 2ª série B',
    },
    {
      id: 'esc-sala-2',
      name: 'Sala 08',
      floor: '1º andar',
      capacity: 32,
      status: 'em uso',
      current: 'Português · 1ª série A',
    },
    {
      id: 'esc-sala-3',
      name: 'Sala 21',
      floor: '2º andar',
      capacity: 40,
      status: 'em uso',
      current: 'História · 3ª série A',
    },
    {
      id: 'esc-sala-4',
      name: 'Auditório',
      floor: 'Térreo',
      capacity: 120,
      status: 'livre',
    },
    {
      id: 'esc-sala-5',
      name: 'Lab. 02 · Ciências',
      floor: 'Térreo',
      capacity: 30,
      status: 'em uso',
      current: 'Biologia · 2ª série B',
    },
    {
      id: 'esc-sala-6',
      name: 'Lab. 03 · Química',
      floor: 'Térreo',
      capacity: 30,
      status: 'em uso',
      current: 'Química · 3ª série A',
    },
  ],
}

export const dashboards: Record<Role, RoleDashboard> = {
  aluno,
  professor,
  escola,
}

export type CalendarEvent = {
  date: Date
  title: string
  detail: string
  tone: 'exam' | 'event'
}

export function getMonthEvents(): CalendarEvent[] {
  const today = new Date()
  const make = (
    offset: number,
    title: string,
    detail: string,
    tone: CalendarEvent['tone'],
  ): CalendarEvent => ({
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset),
    title,
    detail,
    tone,
  })

  return [
    make(5, 'Prova de Matemática', 'Avaliação bimestral · 2ª série B', 'exam'),
    make(9, 'Feira de Ciências', 'Laboratórios 01 e 02 · manhã', 'event'),
    make(14, 'Reunião de pais', 'Auditório · 19h', 'event'),
  ]
}
