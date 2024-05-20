import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export interface ProfileProps {
  name: string
  email: string
}

export function Profile({ name, email }: ProfileProps) {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/holices.png"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className=" text-sm/5 font-semibold text-zinc-700 dark:text-zinc-100">
          {name}
          </span>
        <p className="truncate text-sm/5 font-normal text-zinc-500 dark:text-zinc-400">{email}</p>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
