import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SkillsProps {
  data: string[];
  onUpdate: (updatedData: { skills: string[] }) => void;
}

export default function Skills({ data, onUpdate }: SkillsProps) {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(data)

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newSkills: string[] = [...formData]
    newSkills[index] = e.target.value
    setFormData(newSkills)
  }

  const handleSubmit = () => {
    onUpdate({ skills: formData })
    setEditMode(false)
  }

  const addSkill = () => {
    setFormData([...formData, ''])
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        {editMode ? (
          <div className="space-y-4">
            {formData.map((skill, index) => (
              <Input 
                key={index}
                value={skill} 
                onChange={(e) => handleChange(index, e)} 
                placeholder="Skill" 
              />
            ))}
            <Button onClick={addSkill}>Add Skill</Button>
            <Button onClick={handleSubmit}>Save</Button>
            <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
          </div>
        ) : (
          <div className="space-y-2">
            {data.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
            <Button onClick={() => setEditMode(true)}>Edit</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}