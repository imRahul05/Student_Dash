import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PersonalInfoProps {
  data: {
    name: string;
    email: string;
    phone: string;
  };
  onUpdate: (updatedData: { personalInfo: { name: string; email: string; phone: string } }) => void;
}

export default function PersonalInfo({ data, onUpdate }: PersonalInfoProps) {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onUpdate({ personalInfo: formData })
    setEditMode(false)
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        {editMode ? (
          <div className="space-y-4">
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <Button onClick={handleSubmit}>Save</Button>
            <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
          </div>
        ) : (
          <div className="space-y-2">
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <Button onClick={() => setEditMode(true)}>Edit</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}