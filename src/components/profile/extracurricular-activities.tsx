import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Activity {
  name: string;
  role: string;
  duration: string;
}

interface ExtracurricularActivitiesProps {
  data: Activity[];
  onUpdate: (updatedData: { extracurricular: Activity[] }) => void;
}

export default function ExtracurricularActivities({ data, onUpdate }: ExtracurricularActivitiesProps) {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(data)

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newActivities = [...formData]
    newActivities[index] = { ...newActivities[index], [e.target.name]: e.target.value }
    setFormData(newActivities)
  }

  const handleSubmit = () => {
    onUpdate({ extracurricular: formData })
    setEditMode(false)
  }

  const addActivity = () => {
    setFormData([...formData, { name: '', role: '', duration: '' }])
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Extracurricular Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {editMode ? (
          <div className="space-y-4">
            {formData.map((activity, index) => (
              <div key={index} className="space-y-2">
                <Input 
                  name="name" 
                  value={activity.name} 
                  onChange={(e) => handleChange(index, e)} 
                  placeholder="Activity Name" 
                />
                <Input 
                  name="role" 
                  value={activity.role} 
                  onChange={(e) => handleChange(index, e)} 
                  placeholder="Role" 
                />
                <Input 
                  name="duration" 
                  value={activity.duration} 
                  onChange={(e) => handleChange(index, e)} 
                  placeholder="Duration" 
                />
              </div>
            ))}
            <Button onClick={addActivity}>Add Activity</Button>
            <Button onClick={handleSubmit}>Save</Button>
            <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
          </div>
        ) : (
          <div className="space-y-2">
            {data.map((activity, index) => (
              <p key={index}>{activity.name} - {activity.role} ({activity.duration})</p>
            ))}
            <Button onClick={() => setEditMode(true)}>Edit</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
