import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <div>
        <h4>Service</h4>
        <h1>What I Do For My Claints</h1>
      </div>
      <div className='flex justify-evenly items-center'>
        <NavLink to="Service/AllServices"> <h1 className=''>All Services</h1></NavLink>
        <NavLink to="Service/AdminPnl"> <h1 className=''>Admin Panel</h1></NavLink>
      </div>


      <Outlet />

      <h1>What I Do For My Claints</h1>
    </div>
  )
}

export default Blog