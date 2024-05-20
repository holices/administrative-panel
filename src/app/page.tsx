import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { SettingsTabs } from '../components/SettingsTabs'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-8 flex flex-col">
        
        <div className="flex flex-col gap-4 lg:items-center lg:flex-row justify-between border-b border-zinc-200 pb-5 dark:border-zinc-700">
          <div>
            <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </span>
            <p className="text-sm font-normal text-zinc-500 dark:text-zinc-300">
              Update your photo and personal details here.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Name
            </label>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 ">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Holices" />
              </Input.Root>

              <div className='flex flex-col gap-3 lg:block'>
                <label
                htmlFor="lastName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-200 lg:sr-only">
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id='lastName' defaultValue="Júnior" />
                </Input.Root>
              </div>
            </div>
            <div />
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="dev.holices@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-400">
                This will be displayed on your profile.
              </p>
            </label>
            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Timezone
            </label>
            <Select placeholder="Select a country">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem
                value="utc3"
                text="América - São Paulo (UTC -03:00)"
              />
            </Select>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-400">
                Write a short introduction.
              </p>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 border-b border-zinc-200 pb-5 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Portfolio projects
              <p className="mt-0.5 text-sm font-normal text-zinc-400">
                Share a few snippets of your work.
              </p>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-4 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
