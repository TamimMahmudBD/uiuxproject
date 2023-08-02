import React from 'react'

import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const ServiceSec = () => {
  return (
    <div className='my-7'>
      <div className='mm:w-5/6 md:w-full text-left mm:mx-10 md:mx-0'>
        <div className="text-green-600 text-xl  md:text-center font-bold  ">Service</div>
        <div className="text-neutral-800 mm:text-lg lg:text-3xl  md:text-center font-bold ">What I Do For My Clients</div>
      </div>
      <div className='flex mm:flex-col md:flex-row justify-center items-center my-4'>
      <NavLink to="Service/AllServices"> <h1 className='bg-green-100 rounded-xl border border-green-600 py-2 m-2 mm:mb-1 text-base md:text-sm font-semibold serAct mm:w-[20rem] md:w-28'>All</h1></NavLink>
      <NavLink to="Service/AppDesign"> <h1 className='bg-green-100 rounded-xl border border-green-600 py-2 mm:m-1 md:m-2 text-base md:text-sm font-semibold serAct mm:w-[20rem] md:w-28'>App Design</h1></NavLink>
      <NavLink to="Service/WebDesign"> <h1 className='bg-green-100 rounded-xl border border-green-600  py-2 mm:m-1 md:m-2 text-base md:text-sm font-semibold serAct mm:w-[20rem] md:w-28'>Web Design</h1></NavLink>
      <NavLink to="Service/AdminPnl"> <h1 className='bg-green-100 rounded-xl border border-green-600  py-2 mm:m-1 md:m-2 text-base md:text-sm font-semibold serAct mm:w-[20rem] md:w-28'>Admin Panel</h1></NavLink>
      <NavLink to="Service/IsoDesign"> <h1 className='bg-green-100 rounded-xl border border-green-600  py-2 m-2 mm:mt-1 text-base md:text-sm font-semibold serAct mm:w-[20rem] md:w-28'>ISO Design</h1></NavLink>
      </div>
      <Outlet />

     
    </div>
  )
}

export default ServiceSec