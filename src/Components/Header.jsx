import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";
import MobMenu from './MobMenu';

const Header = () => {
  return (
    <div className='
    mm:flex 
    mm:justify-between
    mm:items-center
    sm:flex-col 
    md:flex-row 
    md:items-center 
    font-semibold 
    md:justify-center 
    mm:pt-5
    
    sm:mx-0 
    sm:my-10 
    md:mt-5 
    md:mb-3 
    lg:mx-20 
    xl:mx-16
    
    Raleway '>

      <div>
        <h1 className='
        mm:mr-56 
        sm:mr-0
        md:mr-0
        xl:mr-0 
        font-serif
        font-bold
        text-green-600
        text-2xl 
        cursor-pointer'><a href="/"> &nbsp;&nbsp;&nbsp;&nbsp;UI UX</a></h1>
      </div>

      <div className='flex justify-between sm:hidden'>
        <MobMenu />
      </div>

      <div className='
      mm:hidden 
      md:justify-between 
      sm:items-center 
      sm:justify-center 
      sm:flex md:flex 
      md:mx-12 
      lg:mx-36 
      xl:mx-52 
      2xl:mx-72 '>
        <NavLink to={'./'}> <h1 className='mx-2 hover:text-[#01B636] hoverEffect'>Home</h1></NavLink>
        <NavLink to={'./Service'}> <h1 className='mx-3 hover:text-[#01B636] hoverEffect'>Services</h1></NavLink>
        <NavLink to={'./About'}><h1 className=' mx-3  hover:text-[#01B636]  hoverEffect'>About</h1></NavLink>
        <NavLink to={'./Project'}> <h1 className=' mx-3 hover:text-[#01B636] hoverEffect'>Project</h1></NavLink>
        <NavLink to={'./Workes'}> <h1 className=' mx-3 hover:text-[#01B636] hoverEffect'>Works</h1></NavLink>
        <NavLink to={'./Blog'}><h1 className=' mx-2 hover:text-[#01B636] hoverEffect'>Blog</h1></NavLink>
      </div>
      <div className='
      mm:hidden 
      md:block'>

        <button className="
        btn border 
        rounded-md 
        border-green-500 
        px-2  
        py-2 
        xl:mr-10
        relative 
        inline-flex 
        items-center 
        justify-start 
        overflow-hidden 
        transition-all 
        bg-white  
        hover:bg-white 
        group">
          <span className="
          w-0 h-0 
          rounded 
          bg-gradient-to-br 
          from-green-500 
          to-green-950 
          absolute 
          top-0 
          left-0 
          ease-out 
          duration-500 
          transition-all 
          group-hover:w-full 
          group-hover:h-full 
          -z-1"></span>
          <span className=" 
          w-full 
          text-green-600 
          transition-colors 
          duration-300 
          ease-in-out 
          group-hover:text-white  
          z-10">
            <a className='
            w-36
          flex 
          flex-row 
          items-center'
              href="/">&nbsp; Contact Me &nbsp;
              <FaArrowCircleRight className='
          text-green-600 
          icon 
          group-hover:text-white ' />
            </a>

          </span>
        </button>
      </div>

      <div>

      </div>

    </div>
  )
}

export default Header;