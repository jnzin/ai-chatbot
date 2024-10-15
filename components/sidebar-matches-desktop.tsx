'use client'
import { auth } from '@/auth'

export async function SidebarMatchesDesktop() {
  const session = await auth()

  if (!session?.user?.id) {
    return null
  }

  return (
      <p>aaaa</p>
  )
}