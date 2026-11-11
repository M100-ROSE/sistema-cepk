/** Informações públicas do Colégio Estadual Presidente Kennedy — Ponta Grossa/PR. */
export const school = {
  name: 'Colégio Estadual Presidente Kennedy',
  shortName: 'Kennedy',
  network: 'Rede estadual do Paraná · NRE Ponta Grossa',
  address: 'Av. Anita Garibaldi, 150 · Nova Rússia',
  city: 'Ponta Grossa – PR',
  zip: 'CEP 84015-050',
  phone: '(42) 3224-1679',
  phoneHref: 'tel:+554232241679',
  whatsapp: '(42) 3224-3523',
  whatsappHref: 'https://wa.me/554232243523',
  inep: '41062914',
  instagram: '@colegiokennedypg',
  instagramUrl: 'https://www.instagram.com/colegiokennedypg/',
  officeHours: 'Secretaria: segunda a sexta, das 8h às 12h e das 13h às 17h25',
  founded: 1964,
}

export const schoolStats = [
  { value: '62', label: 'anos de história' },
  { value: '2', label: 'cursos técnicos' },
  { value: '2', label: 'turnos' },
  { value: '100%', label: 'público e gratuito' },
]

export type SchoolYear = {
  id: string
  name: string
  ages: string
  summary: string
  icon: 'book' | 'cap' | 'presentation'
}

export const schoolYears: SchoolYear[] = [
  {
    id: 'fundamental',
    name: 'Ensino Fundamental',
    ages: '6º ao 9º ano',
    summary:
      'Anos finais no turno da tarde, com saída às 17h25 e projetos de leitura, ciências e tecnologia.',
    icon: 'book',
  },
  {
    id: 'medio',
    name: 'Ensino Médio',
    ages: '1ª a 3ª série',
    summary:
      'Turno da manhã, com saída às 12h35 e preparação para o ENEM, vestibulares e o mundo do trabalho.',
    icon: 'cap',
  },
  {
    id: 'tecnico',
    name: 'Ensino Médio + Técnico',
    ages: '3 anos · turno único',
    summary:
      'Formação profissional gratuita integrada ao Ensino Médio, em Administração e Desenvolvimento de Sistemas.',
    icon: 'presentation',
  },
]

export type SchoolCourse = {
  id: string
  name: string
  duration: string
  shift: string
  summary: string
  highlights: string[]
}

export const schoolCourses: SchoolCourse[] = [
  {
    id: 'administracao',
    name: 'Técnico em Administração',
    duration: '3 anos',
    shift: 'Turno único',
    summary:
      'Gestão, finanças, atendimento e empreendedorismo com projetos ligados à comunidade.',
    highlights: ['Gestão', 'Finanças', 'Projetos'],
  },
  {
    id: 'desenvolvimento-sistemas',
    name: 'Técnico em Desenvolvimento de Sistemas',
    duration: '3 anos',
    shift: 'Turno único',
    summary:
      'Programação, banco de dados, redes e desenvolvimento de aplicações web e mobile.',
    highlights: ['Programação', 'Redes', 'Web'],
  },
]

export type SchoolNews = {
  id: string
  dateLabel: string
  tag: string
  title: string
  excerpt: string
}

export const schoolNews: SchoolNews[] = [
  {
    id: 'noticia-1',
    dateLabel: 'Inscrições até 10/11/2026',
    tag: 'Inscrições',
    title: 'Inscrições abertas para Administração e Desenvolvimento de Sistemas',
    excerpt:
      'Vagas para estudantes que concluem o 9º ano em 2026, com formação técnica integrada em Administração ou Desenvolvimento de Sistemas.',
  },
  {
    id: 'noticia-2',
    dateLabel: 'Publicado em 2026',
    tag: 'Projetos',
    title: 'Alunos conhecem carro de corrida 100% elétrico',
    excerpt:
      'A atividade aproximou as turmas de projetos de engenharia, mobilidade elétrica e tecnologia.',
  },
  {
    id: 'noticia-3',
    dateLabel: 'Publicado em 2026',
    tag: 'História',
    title: 'Colégio Kennedy completa 62 anos de história',
    excerpt:
      'Seis décadas formando gerações em Ponta Grossa, com ensino fundamental, médio e técnico profissionalizante.',
  },
]
