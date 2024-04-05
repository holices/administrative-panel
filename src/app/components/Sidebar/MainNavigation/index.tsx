import {
  BarChart2,
  Flag,
  Home,
  Layers,
  SquareCheckBig,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart2} />
      <NavItem title="Projects" icon={Layers} />
      <NavItem title="Tasks" icon={SquareCheckBig} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
