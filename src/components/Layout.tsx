import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#f0f2f5] to-[#e0e2e5]">
      <Outlet />
    </main>
  )
}
