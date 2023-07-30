import React from 'react'
import Iconone from './images/iconone.png'

const AboutSec = () => {
    return (
        <div className='mm:mt-0  md:mt-10 mb-24 flex mm:flex-col md:flex-row  md:ml-14 items-center justify-center'>
            <div className=' flex items-center justify-center '>
                <div className='flex items-center justify-center'>
                    <div className='border-2 mm:h-36 mm:w-36 p-1 rounded-full border-green-600 flex items-center justify-center'>
                        <div className='border-2 mm:h-32 p-1 mm:w-32 rounded-full border-green-600 flex items-center justify-center'>
                            <div className='border-2 p-1 mm:h-28 mm:w-28 rounded-full border-green-600 flex items-center justify-center'>
                                <img className='h-16' src={Iconone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='absolute h-48 w-48 bg-green-900 ml-56 rounded-s-full'> </div>
                    <div className='absolute h-32 w-32 bg-green-600 mt-44 mr-3 rounded-t-full'></div>
                </div>
                <div>
                    <button className=' mt-64 px-3 py-3  bg-gradient-to-br text-white font-semibold from-green-600 to-green-950  rounded-md transition duration-500 transform hover:scale-110'><a href="/">
                        <h1 className='text-white justify-between mm:flex font-semibold transition duration-500 transform hover:scale-110'> UI UX EEPERT
                        </h1>
                    </a></button>
                </div>
            </div>
            <div className='mm:mx-8 mm:mt-8 mm:px-4 sm:mt-0 md:mr-14  text-left'>
                <div class=" text-neutral-800 text-xl font-bold ">About Me</div>
                <div class=" text-green-600 text-2xl font-bold">Every great design begin with<br />an even better story</div>
                <div class="text-neutral-800 text-xl font-bold">Hello, I am Md Abir Akter</div>
                <div class="mm:block md:hidden text-justify text-neutral-800 text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. dolore magna aliqua.</div>
                <div className='flex flex-col md:flex-row lg:flex-col'>
                    <div className='flex md:flex-col lg:flex-row'>
                    {/*----------for computer view start-------*/}
                        <div class=" my-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                            <div class="text-center text-black text-xl md:text-sm font-semibold">Name</div>
                            <div class="text-center text-black text-xl md:text-sm font-normal">Md Abir Akter</div>
                        </div>
                        <div class="hidden md:block mx-2 my-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                            <div class="text-center text-black text-xl md:text-sm font-semibold">Email</div>
                            <div class="text-center text-black text-xl md:text-sm font-normal">abirakter056@gmail.com1</div>
                        </div>
                        <div class="hidden md:block my-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                            <div class="text-center text-black text-xl md:text-sm font-semibold">Phone</div>
                            <div class="text-center text-black text-xl md:text-sm font-normal">+88013038993001</div>
                        </div>
                    </div>
                    {/*----------for computer view end-------*/}
                    {/*----------for mobile view start-------*/}
                    <div className='flex mm: flex-col '>
                        <div class="mm:block sm: hidden md:hidden xl:hidden 2xl:hidden p-2 bg-green-100 rounded-xl shadow border border-green-600">
                            <div class="text-center text-black text-xl font-semibold">Email</div>
                            <div class="text-center text-black text-xl font-normal">abirakter056@gmail.com</div>
                        </div>
                        <div className='flex sm:flex-row md:flex-col lg:flex-row'>
                            <div class="mm:block sm: hidden md:hidden xl:hidden my-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                                <div class="text-center text-black text-xl font-semibold">Phone</div>
                                <div class="text-center text-black text-xl font-normal">+880 1303899300</div>
                            </div>
                            <div class="mm:block sm: hidden md:hidden xl:hidden mm:mx-2 my-2 mm:px-2 mm:py-1 sm:px-10 sm:py-2 bg-green-100 rounded-xl shadow border border-green-600">
                                <div class="text-center text-black mm:text-xl  sm:text-xl font-semibold">Telegram</div>
                                <div class="text-center text-black text-xl font-normal">@abir056</div>
                            </div>
                            <div class="mm:block sm: hidden md:hidden xl:hidden my-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                                <div class="text-center text-black text-xl font-semibold">What's App</div>
                                <div class="text-center text-black text-xl font-normal">+880 1633311371</div>
                            </div>
                        {/*----------for mobile view end-------*/}
                            {/*----------for computer view start-------*/}
                            <div class="hidden md:block m-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                                <div class="text-center text-black text-xl md:text-sm font-semibold">Telegram</div>
                                <div class="text-center text-black text-xl md:text-sm font-normal">@abir056</div>
                            </div>
                            <div class="hidden md:block m-2 p-2 bg-green-100 rounded-xl shadow border border-green-600">
                                <div class="text-center text-black text-xl md:text-sm font-semibold">What's App</div>
                                <div class="text-center text-black text-xl md:text-sm font-normal">+8801633311371</div>
                            </div>
                            <div className='hidden md:block'>
                                <button className='md:mx-2 md:mt-6 md:p-2 lg:mt-4  lg:px-4 lg:py-4  bg-gradient-to-br text-white font-semibold from-green-600 to-green-950  rounded-md transition duration-500 transform hover:scale-110'><a href="/">
                                    <h1 className='text-white justify-between mm:flex font-semibold transition duration-500 transform hover:scale-110'> &ensp; Contact Me &ensp;
                                    </h1>
                                </a></button>
                            </div>
                            {/*----------for computer view end-------*/}
                        </div>
                        {/*----------for computer view start-------*/}
                        <div className='mm:block sm: hidden md:hidden xl:hidden'>
                            <button className=' mt-2  px-3 py-3  bg-gradient-to-br text-white font-semibold from-green-600 to-green-950  rounded-md transition duration-500 transform hover:scale-110'><a href="/">
                                <h1 className='text-white justify-between mm:flex font-semibold transition duration-500 transform hover:scale-110'> Contact Me1
                                </h1>
                            </a></button>
                        </div>
                        {/*----------for computer view end-------*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSec