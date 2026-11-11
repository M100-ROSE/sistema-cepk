import { cn } from '../lib/cn'
import { roles, type Role } from '../lib/roles'

type RoleSelectorProps = {
  value: Role
  onChange: (role: Role) => void
  disabled?: boolean
}

export function RoleSelector({ value, onChange, disabled = false }: RoleSelectorProps) {
  return (
    <div>
      <span
        id="role-selector-label"
        className="mb-1.5 block text-sm font-semibold text-slate-700"
      >
        Entrar como
      </span>

      <div
        role="radiogroup"
        aria-labelledby="role-selector-label"
        className="grid grid-cols-3 gap-1 rounded-xl border border-slate-200 bg-slate-100/80 p-1"
      >
        {roles.map((role) => {
          const active = role.id === value
          const Icon = role.icon

          return (
            <button
              key={role.id}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`Entrar como ${role.label}`}
              title={role.description}
              onClick={() => onChange(role.id)}
              disabled={disabled}
              className={cn(
                'flex flex-col items-center gap-1.5 rounded-lg px-2 py-2.5 text-[0.8rem] font-semibold transition duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-600',
                active
                  ? 'bg-white text-brand-800 shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-500 hover:bg-white/60 hover:text-slate-700',
                disabled && 'cursor-not-allowed opacity-70',
              )}
            >
              <Icon
                className={cn(
                  'size-[1.15rem] transition-colors',
                  active ? 'text-brand-600' : 'text-slate-400',
                )}
              />
              {role.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
