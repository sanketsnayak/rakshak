import AddArmoryComponent from '@/components/addArmoryManager'
import AddDistributorComponent from '@/components/addDistributor'
import AddManufacturerComponent from '@/components/addManufracturer'
import AddRmsComponent from '@/components/addRms'
import React from 'react'

const AddRolesPage = () => {
  return (
    <div className='grid grid-cols-2'>
      <AddRmsComponent />
      <AddManufacturerComponent />
      <AddDistributorComponent />
      <AddArmoryComponent />
    </div>
  )
}

export default AddRolesPage
