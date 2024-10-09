import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface EducationDataProps {
  data: {
    school: string;
    degree: string;
    graduationYear: string;
  };
  onUpdate: (updatedData: { educationData: { school: string; degree: string; graduationYear: string } }) => void;
}

export default function EducationData({ data, onUpdate }: EducationDataProps) {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onUpdate({ educationData: formData })
    setEditMode(false)
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        {editMode ? (
          <div className="space-y-4">
            <Input name="school" value={formData.school} onChange={handleChange} placeholder="School" />
            <Input name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree" />
            <Input name="graduationYear" value={formData.graduationYear} onChange={handleChange} placeholder="Graduation Year" />
            <Button onClick={handleSubmit}>Save</Button>
            <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
          </div>
        ) : (
          <div className="space-y-2">
            <p>School: {data.school}</p>
            <p>Degree: {data.degree}</p>
            <p>Graduation Year: {data.graduationYear}</p>
            <Button onClick={() => setEditMode(true)}>Edit</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}