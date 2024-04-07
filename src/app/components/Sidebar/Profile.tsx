import { LogOut } from 'lucide-react'

export interface ProfileProps {
  name: string
  email: string
}

export function Profile({ name, email }: ProfileProps) {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/holices.png"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className=" text-sm/5 font-semibold text-zinc-700">{name}</span>
        <p className="truncate text-sm/5 font-normal text-zinc-500">{email}</p>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
