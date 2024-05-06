import Link from 'next/link'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/about">About</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/team">Team</Link>
        </nav>
      {children}
    </main>
  )
}