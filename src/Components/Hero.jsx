import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import manimg from "./images/man-img.png";
import CarveArrow from "./images/carvearrow.svg"
import expImg from "./images/expimg.svg"
import Pointer from "./images/Pointer.svg"
import userone from "./images/userone.png"
import usertwo from "./images/usertwo.png"
import userthree from "./images/userthree.png"
import userfour from "./images/userfour.png"

const Hero = () => {
  return (
    <div >
      <div className='mm:flex mm:justify-center  mm:flex-col mm:items-center sm:flex sm:justify-center sm:flex-col md:flex md:flex-row md:justify-center bgImg'>
        <img className='pointer h-12 mr-3 mt-16 animate-bounce' src={Pointer} alt="" />
        <div className="mm:text-left sm:text-left md:text-left mm:mx-5 sm:mx-0 lg:mr-32 xl:mr-36">
          <div className='flex mb-0 mm:text-left sm:text-center md:text-left'>
            <div>
              <span className="text-neutral-800 mm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">Hello!</span>
            </div>
            <div className=''>
              <span className='text-white font-semibold mm:text-4xl md:text-2xl md:p-2 text-3xl lg:text-2xl ml-4 lg:py-1.5 lg:px-2.5 xl:py-2 xl:px-4 rounded-lg bg-gradient-to-br from-green-500 to-green-950'>UI/UX</span>
            </div>
          </div>
          <div className='-mt-10'>
            <span className="text-black mm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold"> <br /></span>
            <div className='back rounded-full'>
              <span className="text-green-700 mm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">I'm MD ABIR AKTER<br /></span>
            </div>
            <div className='mt-4'>
              <span className="text-neutral-800 mm:text-4xl md:text-2xl lg:text-3xl xl:text-5xl font-normal">Website & User Interface <br /> Designer</span>
            </div>
          </div>
          <div className='flex mt-11 md:mt-5 lg:mt-8 lg:items-center mm:flex-col lg:flex-row md:justify-start md:items-start'>
            <div>
              <button className='border-2 px-4 py-2  bg-gradient-to-br text-white font-semibold from-green-500 to-green-950  rounded-md transition duration-500 transform hover:scale-110'><a href="/">
                <h1 className='text-white justify-between mm:flex font-semibold transition duration-500 transform hover:scale-110'> Hire me! &ensp; <FaArrowCircleRight className='icon arrow heroArrow' />
                </h1>
              </a></button>
              
            </div>
            <div className='flex sm:justify-start items-center mm:my-3 mm:ml-0 md:my-3 lg:ml-4 xl:ml-16'>
              <img className='rounded-full h-10 ' src={usertwo} alt="" />
              <img className='rounded-full h-10 -mx-2' src={userone} alt="" />
              <img className='rounded-full h-10 -mx-2' src={userthree} alt="" />
              <img className='rounded-full h-10 ' src={userfour}alt="" />
            </div>
            <div class="text-black text-lg font-semibold md:ml-0 md:mb-1 lg:ml-5">1K+ World Wide <br />Clients </div>

          </div>
        </div>
        <div className='lg:mb-96'>
          <img className='expimage mm:hidden sm:hidden lg:block xl:block 2xl:block animate-bounce' src={expImg} alt="" />
          <img className='carveArrow mm:hidden sm:hidden md:hidden lg:block' src={CarveArrow} alt="" />
        </div>
        <div className='mm:mx-3 sm:mr-10 md:mt-5'>
          <div class="w-[349px] lg:w-[249] lg:h-[349] h-[439px] rounded-tl-[311px] rounded-tr-[311px] border-4 pl-4 border-green-300">
            <div class=""> </div><img className='w-[349px] h-[439px] lg:w-[249] lg:h-[349] p-10 pb-0 bg-gradient-to-br from-green-500 to-green-950 rounded-tl-[311px] rounded-tr-[311px]' src={manimg} alt="react logo" /></div>
        </div>
      </div>
    </div>
  )
}

export default Hero