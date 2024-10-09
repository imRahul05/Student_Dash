'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { databases } from '@/lib/appwrite';
import { Button } from '@/components/ui/button';
import PersonalInfo from '@/components/profile/personal-info';
import EducationData from '@/components/profile/education-data';
import Achievements from '@/components/profile/achievements';
import ExtracurricularActivities from '@/components/profile/extracurricular-activities';
import Skills from '@/components/profile/skills';

export default function ProfileEditPage() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (user) {
      fetchProfileData();
    }
  }, [user]);

  const fetchProfileData = async () => {
    try {
      const response = await databases.getDocument('profiles', user.$id);
      setProfileData(response);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const updateProfile = async (updatedData) => {
    try {
      await databases.updateDocument('profiles', user.$id, updatedData);
      fetchProfileData();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!user || !profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
      
      <PersonalInfo data={profileData.personalInfo} onUpdate={updateProfile} />
      <EducationData data={profileData.educationData} onUpdate={updateProfile} />
      <Achievements data={profileData.achievements} onUpdate={updateProfile} />
      <ExtracurricularActivities data={profileData.extracurricular} onUpdate={updateProfile} />
      <Skills data={profileData.skills} onUpdate={updateProfile} />
      
      <Button onClick={() => updateProfile(profileData)}>Save Changes</Button>
    </div>
  );
}