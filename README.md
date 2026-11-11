# Portal do Colégio Estadual Presidente Kennedy

Site e área restrita do Colégio Estadual Presidente Kennedy — Ponta Grossa, PR
(Rede estadual do Paraná · NRE Ponta Grossa). Construído com React, Vite e
Tailwind CSS v4.

## Rodando o projeto

```bash
npm install
npm run dev
```

O Vite abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build    # build de produção (tsc + vite)
npm run preview  # serve o build
```

## O que já está pronto

**Login**

- Seleção de perfil: **Aluno**, **Professor** ou **Escola** (obrigatória para entrar).
- Acesso público como **visitante**, sem credenciais.
- **Contas de demonstração** por perfil, com preenchimento automático ao clicar.
- Validação de usuário/e-mail e senha com mensagens em tempo real.
- Mostrar/ocultar senha e aviso de Caps Lock ativado.
- "Manter conectado" com sessão salva no navegador (`localStorage`).
- Estados de carregamento e erro, com acessibilidade (`label`, `aria-invalid`,
  `aria-describedby`, `role="alert"`, `radiogroup`).

### Contas para teste

| Perfil    | E-mail                        | Senha       |
| --------- | ----------------------------- | ----------- |
| Aluno     | `aluno@escola.pr.gov.br`      | `aluno2026` |
| Professor | `professor@escola.pr.gov.br`  | `prof2026`  |
| Escola    | `escola@escola.pr.gov.br`     | `escola2026` |

As contas ficam em `src/data/accounts.ts` e também aparecem na tela de login
no bloco **Contas de teste** — basta clicar para preencher e-mail e senha.

**Área do visitante**

Página pública com navegação por âncoras (Anos, Cursos, Notícias):

- Hero institucional com indicadores do colégio.
- **Anos e etapas**: Ensino Fundamental (6º ao 9º), Ensino Médio (1ª a 3ª série)
  e Ensino Médio + Técnico integrado.
- **Cursos técnicos**: Administração e Desenvolvimento de Sistemas.
- **Últimas notícias**: inscrições, projetos e história do colégio.
- Faixa de contato com telefone e WhatsApp da secretaria.

## Dados do colégio

As informações ficam centralizadas em `src/data/school.ts`:

- **Colégio Estadual Presidente Kennedy** — Ensino Fundamental, Médio e Profissional
- Av. Anita Garibaldi, 150 · Nova Rússia · Ponta Grossa – PR · CEP 84015-050
- Telefone: (42) 3224-1679 · WhatsApp: (42) 3224-3523
- INEP: 41062914 · Instagram: [@colegiokennedypg](https://www.instagram.com/colegiokennedypg/)
- 62 anos de história (fundado em 1964), 2 cursos técnicos, turnos da manhã e da tarde

> Dados obtidos de fontes públicas do colégio (blog oficial, redes sociais e
> cadastro da rede estadual). Notícias e indicadores podem ser atualizados no
> arquivo acima.

**Painel (após o login)**

Cada perfil entra com a própria conta de demonstração e vê apenas o que lhe
cabe — os dados do painel também mudam por perfil:

| Módulo                     | Aluno | Professor | Escola |
| -------------------------- | :---: | :-------: | :----: |
| Aulas do dia               |  ✅   |    ✅     |   ✅   |
| Laboratórios do dia        |  ✅   |    ✅     |   ✅   |
| Calendário                 |  ✅   |    ✅     |   ✅   |
| Matérias / conteúdos       |  ✅   |    ✅     |   ✅   |
| Salas                      |  —    |    ✅     |   ✅   |

- **Aluno**: suas aulas, os laboratórios que a turma usa e a lista de matérias
  (com professor e carga horária). Não vê o módulo de salas.
- **Professor**: as aulas que vai dar (com turma e sala), os laboratórios com as
  turmas que deve levar e os conteúdos planejados para cada aula do dia; também
  consulta as salas e o que está acontecendo em cada uma.
- **Escola**: visão geral (salas, turmas, professores e conteúdos), todas as
  aulas do dia por turma, laboratórios com professor e turma, matérias com os
  professores e os assuntos de cada aula, e o mapa de salas com a aula em curso.

- Cabeçalho com perfil, usuário e botão **Sair** (volta para o login).
- Sessão restaurada ao recarregar a página quando "Manter conectado" está marcado.
- Layout responsivo e animação de entrada suave.

## Estrutura

```
src/
  App.tsx                     controla login ↔ painel ↔ visitante + sessão
  pages/
    LoginPage.tsx             página de login
    VisitorPage.tsx           área pública (anos, cursos, notícias)
    DashboardPage.tsx         painel pós-login
  components/
    BrandPanel.tsx            painel institucional (desktop)
    RoleSelector.tsx          seletor Aluno / Professor / Escola
    LoginForm.tsx             formulário, validação e autenticação simulada
    DemoAccounts.tsx          contas de teste com preenchimento automático
    TextField.tsx             campo com erro, ícone e toggle de senha
    Logo.tsx                  marca Kennedy
    icons.tsx                 ícones SVG inline
    dashboard/
      Card.tsx                card, ação e badge de status
      ClassesCard.tsx         aulas do dia
      LabsCard.tsx            laboratórios do dia
      CalendarCard.tsx        calendário do mês + próximos eventos
      SubjectsCard.tsx        matérias
      RoomsCard.tsx           salas
  data/
    accounts.ts               contas de demonstração e autenticação simulada
    dashboard.ts              aulas, laboratórios, conteúdos e salas por perfil
    school.ts                 anos, cursos, notícias e indicadores
  lib/
    roles.ts                  perfis e módulos liberados
    validation.ts             regras de validação
    format.ts                 formatação de texto
    cn.ts                     utilitário de classes
  index.css                   Tailwind + tema (verde e preto)
```

## Alterando os módulos por perfil

Em `src/lib/roles.ts`, cada perfil tem um bloco `modules`:

```ts
modules: { subjects: true, rooms: true }
```

Basta mudar para `false` para esconder o módulo do perfil. A ordem e o
posicionamento dos cards ficam em `src/pages/DashboardPage.tsx`.

## Integrando com a API

A autenticação está simulada em `src/data/accounts.ts`:

```ts
export function authenticate(identifier: string, password: string): AuthResult
```

Ela confere e-mail e senha nas contas de demonstração e devolve a conta
correspondente. Para usar uma API real, troque o corpo dessa função por uma
chamada ao backend mantendo o mesmo retorno (`{ ok: true, account }` ou
`{ ok: false, error }`). O recebimento acontece em `src/components/LoginForm.tsx`
e a sessão é guardada em `src/App.tsx`.

Os dados do painel ficam em `src/data/dashboard.ts` — é o ponto natural para
plugar os endpoints de aulas, laboratórios, calendário, matérias e salas.

## Identidade visual

As cores ficam em `src/index.css`, no bloco `@theme` (`--color-brand-*` e
`--color-accent-*`). A paleta atual segue a identidade do colégio: verde e preto.
Ajuste os valores se o manual da marca trouxer hexadecimais oficiais.
