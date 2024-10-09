import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OverviewPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>GPA: 3.8</p>
          <p>Courses: 5</p>
          <p>Projects: 3</p>
          <p>Certifications: 2</p>
        </div>
      </CardContent>
    </Card>
  )
}