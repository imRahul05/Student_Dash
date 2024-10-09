import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AchievementTracker() {
  const achievements = [
    { id: 1, title: "Dean's List", date: "Spring 2023" },
    { id: 2, title: "Hackathon Winner", date: "Summer 2023" },
    { id: 3, title: "Research Publication", date: "Fall 2023" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              {achievement.title} - {achievement.date}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}