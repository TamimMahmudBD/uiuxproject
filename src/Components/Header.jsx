import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";
import MobMenu from './MobMenu';

const Header = () => {
  return (
    <div className='mm:flex mm:justify-between sm:flex-col md:flex-row md:items-center font-semibold md:justify-center mm:mx-5 mm:mr-2 mm:mt-5 sm:mx-0 sm:my-10 md:mt-10 md:mb-3  Raleway '>
      <div>
        <h1 className='text-2xl cursor-pointer'>Logo</h1>
      </div>
      <div className='mm:hidden md:justify-between sm:items-center sm:justify-center sm:flex md:flex md:mx-12 lg:mx-44 xl:mx-60 2xl:mx-72 '>
        <Link to={'./'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Home</h1></Link>
        <Link to={'./Service'}><h1 className='mx-3 hover:text-[#01B636] hoverEffect'>Services</h1></Link>
        <Link to={'./About'}><h1 className='mx-3 hover:text-[#01B636] hoverEffect'>About</h1></Link>
        <Link to={'./Project'}><h1 className='mx-3 hover:text-[#01B636] hoverEffect'>Project</h1></Link>
        <Link to={'./Workes'}><h1 className='mx-3 hover:text-[#01B636] hoverEffect'>Works</h1></Link>
        <Link to={'./Blog'}><h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Blog</h1></Link>
      </div>
      <div>
       
        <button className="btn border rounded-md border-green-500 px-2  py-2 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white  hover:bg-white group">
          <span className="w-0 h-0 rounded bg-gradient-to-br from-green-500 to-green-950 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className=" w-full text-green-600 transition-colors duration-300 ease-in-out group-hover:text-white  z-10"><a className='flex flex-row items-center' href="/">&nbsp; Contact Me &nbsp;<FaArrowCircleRight className='text-green-600 icon group-hover:text-white ' /></a>
          
          </span>
        </button>
      </div>
      <div className='mm:flex sm:hidden'>
        <MobMenu />
      </div>
      <div>

      </div>

    </div>
  )
}

export default Header