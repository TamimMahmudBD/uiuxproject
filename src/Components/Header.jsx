import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";
import MobMenu from './MobMenu';

const Header = () => {
  return (
    <div className='mm:flex mm:justify-between sm:flex-col md:flex-row md:items-center font-semibold md:justify-center mm:mx-5 mm:mr-2 mm:mt-5 sm:mx-0 sm:my-10   Raleway '>
      <div>
        <h1 className='text-2xl cursor-pointer'>Logo</h1>
      </div>
      <div className='mm:hidden md:justify-between sm:items-center sm:justify-center sm:flex md:flex md:mx-12 lg:mx-44 xl:mx-60 2xl:mx-72 '>
        <Link to={'./'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Home</h1></Link>
        <Link to={'./Service'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Services</h1></Link>
        <Link to={'./About'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>About</h1></Link>
        <Link to={'./Project'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Project</h1></Link>
        <Link to={'./Workes'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Works</h1></Link>
        <Link to={'./Blog'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Blog</h1></Link>
      </div>
      <div>
        <button className='hidden md:flex border-2 px-3  py-2 border-[#01B636] hover:shadow-[-4px_0px_4px_rgb(0,128,0)]  hover:translate-x-1 transition-all rounded-md'><a href="/">
          <h1 className=' justify-between sm:flex font-semibold'> Contact me <FaArrowCircleRight className='icon arrow' />
          </h1>
        </a></button>
      </div>
      <div className='mm:flex sm:hidden'>
        <MobMenu/>
      </div>
    </div>
  )
}

export default Header