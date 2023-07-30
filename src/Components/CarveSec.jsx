import React from 'react'
import Figma from './images/fg.png'
import Illust from './images/ai.png'
import PhotoS from './images/ps.png'
import Sketch from './images/sc.png'

const CarveSec = () => {
  return (
    <div>
      <div className='mm:h-12 sm:h-14 bg-gradient-to-r from-green-600 to-green-950'>
        <div className='mm:h-12 sm:h-14 p-2 bg-[#CEF5DB] -rotate-1 flex justify-center align-middle'>
          <h1 className='cursor-pointer flex justify-center items-center mm:text-xl mm:mx-2 sm:text-2xl md:mx-5 mx-10  text-green-900 font-semibold '><img className='mm:h-6 mm:mx-1 sm:mx-3 h-10 mx-3' src={Figma} alt="" />Figma</h1>
          <h1 className='md:flex cursor-pointer flex justify-center items-center text-2xl text-green-900 font-semibold mm:mx-3 md:mx-5 mx-10'><img className='mm:h-6 mm:mx-1 sm:mx-3 h-10' src={Sketch} alt="" />Sketch</h1>
          <h1 className='md:flex cursor-pointer flex justify-center items-center text-2xl text-green-900 font-semibold mm:mx-2 md:mx-5  mx-10'><img className='mm:h-6 mm:mx-1 sm:mx-3 h-10' src={PhotoS} alt="" />PhotoShop</h1>
          <h1 className='mm:hidden sm:hidden md:flex justify-center items-center cursor-pointer flex text-2xl text-green-900 font-semibold md:mx-5 mx-10'><img className='mm:h-6 mm:mx-1 sm:mx-3 h-10 mx-3' src={Illust} alt="" />Illustrator</h1>
          <h1 className='mm:hidden sm:hidden md:hidden lg:flex justify-center items-center cursor-pointer flex text-2xl text-green-900 font-semibold mx-10'><img className='mm:h-6 mm:mx-1 sm:mx-3 h-10 mx-3' src={Figma} alt="" />Figma</h1>
          <h1 className='mm:hidden sm:hidden md:hidden lg:flex justify-center items-center cursor-pointer flex text-2xl text-green-900 font-semibold mx-10'><img className='mm:h-6 mm:mx-1 sm:mx-3 h-10 mx-3' src={Sketch} alt="" />Sketch</h1>
        </div>
      </div>
    </div>
  )
}

export default CarveSec