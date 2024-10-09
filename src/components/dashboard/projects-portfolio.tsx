import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPortfolio() {
  const projects = [
    { id: 1, title: "AI Chatbot", description: "Developed using Python and TensorFlow" },
    { id: 2, title: "E-commerce Website", description: "Built with React and Node.js" },
    { id: 3, title: "Mobile Fitness App", description: "Created using React Native" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id}>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
