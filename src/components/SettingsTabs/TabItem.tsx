'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabsItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 dark:text-zinc-200 dark:data-[state=active]:text-violet-400 outline-none hover:text-violet-700 dark:hover:text-violet-400 data-[state=active]:text-violet-700"
    >
      <span className="whitespace-nowrap rounded group-focus:ring-offset-4 group-focus-visible:ring-2 group-focus-visible:ring-violet-400">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
