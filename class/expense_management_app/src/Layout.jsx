import React from 'react'
import { Navbar, Sidebar, Footer} from './components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Navbar />
        <div className=" w-full flex h-screen">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout