import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Achievement {
  title: string;
  date: string;
}

interface AchievementsProps {
  data: Achievement[];
  onUpdate: (updatedData: { achievements: Achievement[] }) => void;
}

export default function Achievements({ data, onUpdate }: AchievementsProps) {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(data)

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newAchievements = [...formData]
    newAchievements[index] = { ...newAchievements[index], [e.target.name]: e.target.value }
    setFormData(newAchievements)
  }

  const handleSubmit = () => {
    onUpdate({ achievements: formData })
    setEditMode(false)
  }

  const addAchievement = () => {
    setFormData([...formData, { title: '', date: '' }])
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        {editMode ? (
          <div className="space-y-4">
            {formData.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <Input 
                  name="title" 
                  value={achievement.title} 
                  onChange={(e) => handleChange(index, e)} 
                  placeholder="Achievement Title" 
                />
                <Input 
                  name="date" 
                  value={achievement.date} 
                  onChange={(e) => handleChange(index, e)} 
                  placeholder="Date" 
                />
              </div>
            ))}
            <Button onClick={addAchievement}>Add Achievement</Button>
            <Button onClick={handleSubmit}>Save</Button>
            <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
          </div>
        ) : (
          <div className="space-y-2">
            {data.map((achievement, index) => (
              <p key={index}>{achievement.title} - {achievement.date}</p>
            ))}
            <Button onClick={() => setEditMode(true)}>Edit</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

