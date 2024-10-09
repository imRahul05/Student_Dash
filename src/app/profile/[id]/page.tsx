'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { databases } from '@/lib/appwrite'
import PersonalInfo from '@/components/profile/personal-info'
import EducationData from '@/components/profile/education-data'
import Achievements from '@/components/profile/achievements'
import ExtracurricularActivities from '@/components/profile/extracurricular-activities'
import Skills from '@/components/profile/skills'

export default function ProfilePage() {
  const { id } = useParams()
 // const [profileData, setProfileData] = useState(null)
 const [profileData, setProfileData] = useState<Document | null>(null)
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await databases.getDocument('profiles', id as string)
        setProfileData(response)

        console.error('Error fetching profile data:', error)
      }
    }

    fetchProfileData()
  }, [id])

  if (!profileData) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{profileData.name}'s Profile</h1>
      
      <PersonalInfo data={profileData.personalInfo} />
      <EducationData data={profileData.educationData} />
      <Achievements data={profileData.achievements} />
      <ExtracurricularActivities data={profileData.extracurricular} />
      <Skills data={profileData.skills} />
    </div>
  )
}
