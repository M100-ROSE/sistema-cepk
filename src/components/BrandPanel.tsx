import { Logo } from './Logo'
import { CheckIcon, ShieldIcon } from './icons'
import { schoolStats } from '../data/school'

const highlights = [
  'Notas, frequência e ocorrências em um só lugar',
  'Gestão de turmas, alunos e professores em tempo real',
  'Comunicados e relatórios centralizados',
]

export function BrandPanel() {
  return (
    <aside className="relative hidden overflow-hidden bg-[linear-gradient(160deg,#0b1712_0%,#050807_55%,#020403_100%)] lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-14">
      {/* Texturas decorativas */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -left-32 size-[28rem] rounded-full bg-brand-500/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 -bottom-28 size-[26rem] rounded-full bg-accent-500/15 blur-[130px]"
        aria-hidden="true"
      />

      {/* Marca d'água em "C" */}
      <svg
        className="pointer-events-none absolute -right-24 -bottom-28 size-[30rem] text-brand-400/10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
        <path
          d="M148 60A64 64 0 1 0 148 140"
          stroke="currentColor"
          strokeWidth="22"
          strokeLinecap="round"
        />
      </svg>

      <span className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 rotate-180 text-[0.56rem] font-semibold tracking-[0.55em] text-white/20 uppercase [writing-mode:vertical-rl]">
        Portal institucional · 2026
      </span>

      <div className="relative z-10">
        <Logo />
      </div>

      <div className="relative z-10 max-w-[35rem]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.14em] text-brand-100 uppercase backdrop-blur-sm">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent-400" />
          </span>
          Ano letivo 2026
        </span>

        <h1 className="mt-7 text-[2.6rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-white xl:text-[2.85rem]">
          Educação com dados,
          <br />
          gestão com{' '}
          <span className="relative inline-block text-brand-300">
            clareza.
            <svg
              className="absolute -bottom-2 left-0 h-2 w-full"
              viewBox="0 0 120 8"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6C32 2 63 1 118 4"
                stroke="#32d583"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-6 max-w-[27rem] text-[0.97rem] leading-relaxed text-brand-100/70">
          O portal do Colégio Estadual Presidente Kennedy, em Ponta Grossa, conecta
          alunos, professores e escola em um ambiente único e sempre disponível.
        </p>

        <ul className="mt-8 space-y-3.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-300 ring-1 ring-accent-400/30">
                <CheckIcon className="size-3" />
              </span>
              <span className="text-[0.88rem] leading-snug text-brand-100/85">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-9 grid grid-cols-3 border-t border-white/10 pt-6">
          {schoolStats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="px-4 first:pl-0">
              <dd className="text-[1.7rem] leading-none font-extrabold text-white tabular-nums">
                {stat.value}
              </dd>
              <dt className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.14em] text-brand-200/55 uppercase">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-[0.72rem] text-brand-200/55">
        <span className="flex items-center gap-2">
          <ShieldIcon className="size-4" />
          Ambiente protegido · conexão criptografada
        </span>
        <span>Kennedy © 2026</span>
      </div>
    </aside>
  )
}
