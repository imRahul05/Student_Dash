'use client'

import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import OverviewPanel from '@/components/dashboard/overview-panel'
import AchievementTracker from '@/components/dashboard/achievement-tracker'
import ProjectsPortfolio from '@/components/dashboard/projects-portfolio'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <Button onClick={logout}>Logout</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <OverviewPanel />
        <AchievementTracker />
        <ProjectsPortfolio />
      </div>
    </div>
  )
}
