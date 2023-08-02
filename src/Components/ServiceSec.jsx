import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const ServiceSec = () => {
  return (
    <div className='my-7'>
      <div>
        <div className="text-green-600 text-xl font-bold">Service</div>
        <div className="text-neutral-800 text-[50px] font-bold">What I Do For My Clients</div>
      </div>
      <div className='flex justify-center items-center'>
        <NavLink to="Service/AllServices"> <h1 className='bg-green-100 rounded-xl border border-green-600 px-12 py-2 mx-2 serAct'>All</h1></NavLink>
        <NavLink to="Service/AppDesign"> <h1 className='bg-green-100 rounded-xl border border-green-600 px-12 py-2 mx-2'>App Design</h1></NavLink>
        <NavLink to="Service/WebDesign"> <h1 className='bg-green-100 rounded-xl border border-green-600 px-5 py-2 mx-2'>Web Design</h1></NavLink>
        <NavLink to="Service/AdminPnl"> <h1 className='bg-green-100 rounded-xl border border-green-600 px-5 py-2 mx-2'>Admin Panel</h1></NavLink>
        <NavLink to="Service/IsoDesign"> <h1 className='bg-green-100 rounded-xl border border-green-600 px-5 py-2 mx-2'>ISO Design</h1></NavLink>
      </div>
      <Outlet />

     
    </div>
  )
}

export default ServiceSec