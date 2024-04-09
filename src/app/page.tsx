import { SettingsTabs } from './components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-8 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div>
            <span className="text-lg font-medium text-zinc-900">
              Personal info
            </span>
            <p className="text-sm font-normal text-zinc-500">
              Update your photo and personal details here.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg border border-violet-600 bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" action="" className="mt-6 flex w-full flex-col">
          form
        </form>
      </div>
    </>
  )
}
