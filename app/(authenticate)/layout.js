import NavbarComponent from '@/components/NavbarComponent'
import React from 'react'

const AuthenticateLayout = ({children}) => {
  return (
    <div>
      <NavbarComponent />
      {children}
    </div>
  )
}

export default AuthenticateLayout
