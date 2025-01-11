import { OrderTable } from '@/components/orderTable'
import OrderWeaponComponent from '@/components/orderWeaponComponent'
import React from 'react'

const OrderWeaponsPage = () => {
  return (
    <div>
        <OrderWeaponComponent />
        <OrderTable />
    </div>
  )
}

export default OrderWeaponsPage