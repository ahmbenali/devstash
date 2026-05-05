import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | DevStash',
  description: 'Your developer knowledge dashboard',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen w-full">
      {children}
    </div>
  )
}
