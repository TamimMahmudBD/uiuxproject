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
import RotetDown from './images/Rotet-down.png'
const Hero = () => {
  return (
    <div>

      <div className='
      mm:flex 
      mm:justify-center 
      mt-16 mm:flex-col 
      mm:items-center 
      sm:flex 
      sm:justify-center 
      sm:flex-col 
      md:flex 
      md:flex-row 
      md:justify-center 
      md:mt-5
      xl:pr-36
      3xl:mx-[7%]
       4xl:mx-[14%]
      bgImg'>
        <img className='
        mm:hidden 
       
        xl:block 
        md:pl-10
        pointer 
        h-12 mr-3 
        mt-16 
        animate-bounce' src={Pointer} alt="" />
        <div className="
        mm:text-left 
        sm:text-left 
        md:text-left 
        mm:mx-5 
        sm:mx-0 
        md:pl-10
        lg:mr-28 
        xl:mr-40
        xl:my-12">
          <div className='
          flex 
          mb-0 
          
          mm:text-left 
          sm:text-center 
          md:text-left'>
            <div>
              <span className="
              text-neutral-800 
              mm:text-4xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-6xl 
              2xl:text-7xl 
              font-bold">Hello!</span>
            </div>
            <div className=''>
              <span className='
              text-white 
              font-semibold 
              mm:text-3xl 
              md:text-2xl 
              md:p-2  
              text-3xl 
              lg:text-2xl 
              ml-4 
              mm:px-2
              mm:py-1
              lg:py-1.5 
              lg:px-2.5 
              xl:py-2 
              xl:px-4 
              rounded-lg 
              bg-gradient-to-br 
              from-green-500 
              to-green-950'>UI/UX</span>
            </div>
          </div>
          <div className='-mt-10'>
            <span className="
            text-black 
            mm:text-4xl 
            md:text-5xl 
            lg:text-5xl 
            xl:text-6xl 
            2xl:text-7xl 
            font-bold"> <br /></span>
            <div className='
            back 
            rounded-full mm:my-3'>
              <span className="
              text-green-700 
              mm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-[3.5rem] 
              2xl:text-7xl 
              font-bold">I'm JHON SMITH<br /></span>
            </div>
            <img className='
          absolute 
          mm:rotate-12
          mm: ml-64
          mm:-mt-3
          mm:h-20
          sm:hidden 
          md:hidden 
          lg:' 
          src={RotetDown} alt="" />
            <div className='mt-4'>
              <span className="
              text-neutral-800 
              mm:text-2xl 
              md:text-2xl 
              lg:text-3xl 
              xl:text-5xl 
              font-normal">Website & User Interface <br /> Designer</span>
            </div>
          </div>
          <div className='
          flex 
          mm:hidden
          md:flex
          mt-11 
          md:mt-5 
          lg:mt-8 
          lg:items-center 
          mm:flex-col 
          lg:flex-row 
          md:justify-start 
          md:items-start
          xl:mb-0'>
            <div className=''>
              <button className='
              border-2 
              px-4 py-2  
              lg:w-36
              bg-gradient-to-br 
              text-white 
              font-semibold 
              from-green-500 
              to-green-950  
              rounded-md 
              transition 
              duration-500 
              transform 
              hover:scale-110'>
              <a href="/">
                <h1 className='
                text-white 
                justify-between 
                mm:flex 
                font-semibold 
                transition 
                duration-500 
                transform 
                hover:scale-110'> 
                Hire me! &ensp; 
                <FaArrowCircleRight className='
                icon 
                arrow 
                heroArrow' />
                </h1>
              </a></button>

            </div>
            <div className='
            flex 
            sm:justify-start 
            items-center 
            mm:my-3 mm:ml-0 
            md:my-3 
            lg:ml-4 
            xl:ml-16'>
              <img className='rounded-full h-10 ' src={usertwo} alt="" />
              <img className='rounded-full h-10 -mx-2' src={userone} alt="" />
              <img className='rounded-full h-10 -mx-2' src={userthree} alt="" />
              <img className='rounded-full h-10 ' src={userfour} alt="" />
            </div>
            <div class="
            text-black 
            text-lg 
            font-semibold 
            md:ml-0 
            md:mb-1 
            lg:ml-5
            
            ">1K+ World Wide <br />Clients </div>

          </div>
        </div>
        <div className='lg:mb-96'>
          <img className='
          expimage 
          mm:w-24
          mm:ml-[65px]
          md:ml-30
          md:ml-auto
          md:w-auto
          sm:hidden 
          lg:block 
          xl:block 
          lg:mt-2
          2xl:block 
          animate-bounce' src={expImg} alt="" />
          <img className='
          carveArrow 
          mm:hidden
          sm:hidden 
          md:hidden 
          lg:block' src={CarveArrow} alt="" />
        </div>
        <div className='
        mm:mx-3 
        sm:mr-10 
        md:mt-[3.25rem]'>
          <div class="
          w-[300px] 
          h-[350px] 
          lg:w-[320px] 
          lg:h-[400px] 
          rounded-tl-[300px] 
          rounded-tr-[300px] 
          border-4 pl-4 
          border-green-300">
            <div class=""> </div><img className='
            w-[300px] 
            h-[350px] 
            lg:w-[320px] 
            lg:h-[400px] 
            p-10 
            pb-0 
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            rounded-tl-[300px] 
            rounded-tr-[300px]' src={manimg} alt="react logo" /></div>
        </div>
      </div>
    </div>
  )
}

export default Hero