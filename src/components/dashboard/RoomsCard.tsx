import type { Room } from '../../data/dashboard'
import type { Role } from '../../lib/roles'
import { ClockIcon, DoorIcon, UsersIcon } from '../icons'
import { Card, CardAction, StatusBadge } from './Card'

type RoomsCardProps = {
  rooms: Room[]
  role: Role
  className?: string
}

export function RoomsCard({ rooms, role, className }: RoomsCardProps) {
  return (
    <Card
      title={role === 'escola' ? 'Salas e aulas' : 'Salas'}
      icon={<DoorIcon className="size-[1.15rem]" />}
      action={<CardAction>{rooms.length} salas</CardAction>}
      className={className}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="rounded-xl border border-slate-100 bg-mist/60 p-3.5 transition-colors hover:border-brand-200"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[0.85rem] font-semibold text-ink">{room.name}</p>
              <StatusBadge tone={room.status === 'livre' ? 'positive' : 'busy'}>
                {room.status}
              </StatusBadge>
            </div>

            <p className="mt-1 text-[0.72rem] text-slate-500">{room.floor}</p>

            {room.current && (
              <p className="mt-2 flex items-center gap-1.5 text-[0.72rem] font-medium text-slate-600">
                <ClockIcon className="size-3.5 shrink-0 text-slate-400" />
                <span className="truncate">{room.current}</span>
              </p>
            )}

            <p className="mt-2.5 flex items-center gap-1.5 text-[0.72rem] font-medium text-slate-600">
              <UsersIcon className="size-3.5 text-slate-400" />
              {room.capacity} lugares
            </p>
          </li>
        ))}
      </ul>
    </Card>
  )
}
