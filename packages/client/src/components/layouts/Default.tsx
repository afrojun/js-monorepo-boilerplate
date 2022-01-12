import React from 'react'
import NavHeader from '../NavHeader'

type LayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen mb-2">
    <NavHeader />
    <>{children}</>
  </div>
)

export default DefaultLayout
