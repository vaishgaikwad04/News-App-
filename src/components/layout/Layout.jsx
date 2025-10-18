import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        {/* Outlet should take remaining space */}
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
