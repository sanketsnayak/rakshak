"use client"
import React from 'react'
import GetCampComponent from '@/components/getCampComponent'
import CreateCamp from '@/components/createCampComponent'
import { Analytics } from '@/components/analytics'
import GenerateIdentificationCard from '@/components/generateIdentificationCard'
const Dashboard = () => {
  return (
    <div>
      <CreateCamp />
      <GenerateIdentificationCard />
      <GetCampComponent />
      <Analytics />
    </div>
  )
}

export default Dashboard
