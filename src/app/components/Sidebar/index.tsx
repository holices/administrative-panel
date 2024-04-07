import {
  BarChart2,
  Flag,
  Home,
  Layers,
  LifeBuoy,
  Search,
  Settings,
  SquareCheckBig,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Widget } from './Widget'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart2} />
        <NavItem title="Projects" icon={Layers} />
        <NavItem title="Tasks" icon={SquareCheckBig} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Settings} />
        </nav>

        <Widget />

        <div className="h-px rounded bg-zinc-200" />

        <Profile name="Holices" email="dev.holices@gmail.com" />
      </div>
    </aside>
  )
}
