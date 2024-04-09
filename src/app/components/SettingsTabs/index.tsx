'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabsItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabsItem
          title="My details"
          value="my-details"
          isSelected={currentTab === 'my-details'}
        />
        <TabsItem
          title="Profile"
          value="profile"
          isSelected={currentTab === 'profile'}
        />
        <TabsItem
          title="Password"
          value="password"
          isSelected={currentTab === 'password'}
        />
        <TabsItem
          title="Team"
          value="team"
          isSelected={currentTab === 'team'}
        />
        <TabsItem
          title="Plan"
          value="plan"
          isSelected={currentTab === 'plan'}
        />
        <TabsItem
          title="Billing"
          value="billing"
          isSelected={currentTab === 'billing'}
        />
        <TabsItem
          title="Email"
          value="email"
          isSelected={currentTab === 'email'}
        />
        <TabsItem
          title="Notifications"
          value="notifications"
          isSelected={currentTab === 'notifications'}
        />
        <TabsItem
          title="Integrations"
          value="integrations"
          isSelected={currentTab === 'integrations'}
        />
        <TabsItem title="API" value="api" isSelected={currentTab === 'api'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
