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
import * as Input from '@/components/Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

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