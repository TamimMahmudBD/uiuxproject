import React from 'react'
import Iconone from './images/iconone.png'
import Vector from './images/Vector.png'

const AboutSec = () => {
    return (
        <div className='
        backgroudImg
        mm:mt-0  
        md:pt-14 
        pb-10 
        flex 
        mm:flex-col 
        md:flex-row  
        md:pl-10
        xl:pl-0
        items-center 
        justify-center'>

            <div className=' 
            md:w-1/2
            flex 
            items-center 
            justify-center 
            mm:pt-16
            mm:pb-24
            md:pl-5
            lg:-mt-14
            
            '>
                <div className='
                flex 
                items-center 
                justify-center'>
                    <div className='
                    border-2 
                    mm:h-36 
                    mm:w-36 
                    md:h-44 
                    md:w-44
                    lg:w-64 
                    lg:h-64 
                    p-1 
                    rounded-full 
                    border-green-600 
                    flex 
                    items-center 
                    justify-center'>
                        <div className='
                        border-2 
                        p-1 
                        mm:h-32 
                        mm:w-32 
                        md:h-40 
                        md:w-40  
                        lg:w-60
                        lg:h-60
                        rounded-full 
                        border-green-600 
                        flex items-center 
                        justify-center'>
                            <div className='
                            border-2 
                            p-1 
                            mm:h-28 
                            mm:w-28 
                            md:h-36 
                            md:w-36 
                            lg:w-56
                            lg:h-56
                            rounded-full 
                            border-green-600 
                            flex 
                            items-center 
                            justify-center'>
                                <img className='
                                h-16 
                                lg:h-20
                                pr-8 
                                lg:pr-24
                                lg:mb-8
                                pb-4 
                                mb-2' src={Iconone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='
                    absolute 
                    mm:h-48 
                    mm:w-48 
                    md:h-56 
                    md:w-56  
                    lg:h-72
                    lg:w-72
                    bg-green-900 
                    mm:ml-56
                    md:ml-72
                    rounded-s-full'>
                    </div>
                    <div className='
                    absolute 
                    mm:h-36 
                    mm:w-36 
                    md:h-40 
                    md:w-40 
                    lg:h-48
                    lg:w-48
                    bg-green-600 
                    mt-52 
                    mr-3 
                    rounded-t-full'>
                    </div>
                </div>
                <div>
                    <button className=' 
                    mm:mt-64
                    mm:px-2 
                    md:mt-80
                    lg:-ml-2
                    lg:mt-[22rem]
                    md:px-5 
                    md:w-36
                    py-3  
                    bg-gradient-to-br 
                    text-white 
                    font-semibold 
                    from-green-600 
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
                        hover:scale-110'> UI UX EEPERT
                            </h1>
                        </a></button>
                </div>
            </div>
            <div className='
            md:w-1/2
            mm:mx-4 
            mm:mt-8  
            sm:mt-0 
            md:pl-3
            md:mr-14 
            lg:ml-10 
            xl:-ml-28
            text-left'>
                <div class=" 
                text-neutral-800 
                mm:mx-4  mm:text-xl
                 font-bold ">About Me
                </div>
                <div class="
                mm:mx-4 
                w-[96px] 
                h-[0px] 
                border 
                border-neutral-800">
                </div>
                <div class=" 
                text-green-600 
                text-2xl 
                font-bold 
                mm:mx-4
                my-3">Every great design begin with<br />an even better story</div>
                <div class="
                text-neutral-800 
                text-xl 
                mm:mx-4
                font-bold">Hello, I am Md Abir Akter</div>
                <div class="
                
                md:hidden 
                lg:block 
                lg:max-w-xl 
                text-justify 
                text-neutral-800 
                text-base 
                font-normal 
                mm:mx-4
                my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                <div>
                    <img src={Vector.png} alt="" />
                </div>
                <div className='
                flex 
                flex-col 
                
                md:flex-row 
                lg:flex-col'>
                    <div className='
                    flex 
                    mm:flex-col
                    md:flex-col 
                    lg:flex-row'>
                        {/*----------for computer view start-------*/}
                        <div class=" 
                        mm:mx-4

                        lg:hidden
                        xl:block
                        xl:ml-4
                        xl:mr-1
                        xl:w-1/4
                        my-2 p-2 
                        bg-green-100 
                        rounded-xl 
                        shadow 
                        border 
                        border-green-600">
                            <div class="
                            text-center 
                            text-black 
                            text-xl 
                            md:text-sm 
                            font-semibold">Name</div>
                            <div class="
                            text-center 
                            text-black 
                            text-xl 
                            md:text-sm 
                            font-normal">Md Abir Akter</div>
                        </div>
                        <div class="
                        mm:mx-4
                        mm:block
                        md:block 
                        sm:mx-2 
                        md:mx-4 
                        lg:w-1/2
                        xl:w-1/3
                        xl:mx-1
                        lg:mx-4 
                        my-2 p-2 
                        bg-green-100 
                        rounded-xl 
                        shadow border 
                        border-green-600">
                            <div class="
                            text-center 
                            text-black 
                            text-xl 
                            md:text-sm 
                            font-semibold">Email</div>
                            <div class="
                            text-center 
                            text-black 
                            text-xl 
                            md:text-sm 
                            font-normal">abirakter056@gmail.com1</div>
                        </div>
                        <div class="
                        mm: block 
                        mm:mx-4
                        lg:mx-2
                        md:block 
                        lg:w-1/2
                        xl:w-1/4
                        my-2 p-2 
                        bg-green-100 
                        rounded-xl 
                        shadow border 
                        border-green-600">
                            <div class="
                            text-center 
                            text-black 
                            text-xl 
                            md:text-sm 
                            font-semibold">Phone</div>
                            <div class="
                            text-center 
                            text-black 
                            text-xl 
                            md:text-sm 
                            font-normal">+88013038993001</div>
                        </div>
                    </div>
                    {/*----------for computer view end-------*/}
                    {/*----------for mobile view start-------*/}
                    <div className='flex mm: flex-col '>

                        <div className='
                        flex 
                        mm:flex-col
                        sm:flex-row 
                        md:flex-col 
                        lg:flex-row'>
                            <div class="
                            mm:hidden 
                            sm:hidden
                            
                            md:hidden 
                            xl:hidden 
                            my-2 p-2 
                            bg-green-100 
                            rounded-xl 
                            shadow 
                            border 
                            border-green-600">
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                font-semibold">Phone.</div>
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                font-normal">+880 1303899300</div>
                            </div>
                            <div class="
                            mm:block 
                            sm: hidden 
                            md:hidden 
                            xl:hidden 
                            
                            my-2 
                            mm:px-2 
                            mm:py-1 
                            sm:px-10 
                            sm:py-2 
                            bg-green-100 
                            rounded-xl 
                            shadow 
                            border 
                            mm:mx-4
                            border-green-600">
                                <div class="
                                text-center 
                                text-black 
                                mm:text-xl 
                                sm:text-xl 
                                font-semibold">Telegram</div>
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                font-normal">@abir056</div>
                            </div>
                            <div class="
                            mm:block 
                            sm: hidden 
                            md:hidden 
                            xl:hidden 
                            my-2 p-2 
                            bg-green-100 
                            rounded-xl 
                            shadow border 
                            mm:mx-4
                            
                            border-green-600">
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                font-semibold">What's App</div>
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                font-normal">+880 1633311371</div>
                            </div>
                            {/*----------for mobile view end-------*/}
                            {/*----------for computer view start-------*/}
                            <div class="
                            hidden 
                            md:block 
                            lg:px-10
                            lg:mx-4
                            xl:w-1/4
                            xl:mr-2
                            m-2 
                            p-2 
                            bg-green-100 
                            rounded-xl 
                            shadow 
                            border 
                            border-green-600">
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                md:text-sm 
                                font-semibold">Telegram1</div>
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                md:text-sm 
                                font-normal">@abir056</div>
                            </div>
                            <div class="
                            hidden 
                            md:block 
                            
                            lg:w-1/3
                            xl:w-1/3
                            xl:ml-0
                            m-2 p-2 
                            bg-green-100 
                            rounded-xl 
                            shadow border 
                            border-green-600">
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                md:text-sm 
                                font-semibold">What's App</div>
                                <div class="
                                text-center 
                                text-black 
                                text-xl 
                                md:text-sm 
                                font-normal">+8801633311371</div>
                            </div>
                        <div className='
                        mm:flex
                        justify-start
                        items-center 
                        mm:mx-2
                        md:hidden 
                        xl:hidden'>
                                <button className=' 
                            mm:w-full
                            mt-4  
                            px-8
                            mx-2
                            py-4  
                            
                            bg-gradient-to-br 
                            text-white 
                            font-semibold 
                            from-green-600 
                            to-green-950  
                            rounded-md transition 
                            duration-500 transform 
                            hover:scale-110'><a href="/">
                                        <h1 className='
                                text-white 
                                justify-between 
                                text-center
                                font-semibold 
                                transition
                                duration-500 
                                transform 
                                hover:scale-110'> &ensp;Contact Me.
                                        </h1>
                                    </a></button>
                            </div>
                            <div className='
                            hidden 
                            md:block'>
                                <button className='
                                md:mx-2 
                                md:mt-6 
                                mm:ml-4
                                md:p-2 
                                lg:mt-2  
                                lg:px-4 
                                lg:py-4  
                                lg:w-36
                                xl:w-[10.5rem]
                                xl:ml-1
                                xl:px-4
                                bg-gradient-to-br 
                                text-white 
                                font-semibold 
                                from-green-600 
                                to-green-950  
                                rounded-md transition 
                                duration-500 transform 
                                hover:scale-110'><a href="/">
                                        <h1 className='
                                    text-white 
                                    justify-center 
                                    mm:flex 
                                    font-semibold 
                                    transition
                                    duration-500 
                                    transform 
                                    text-center
                                    hover:scale-110'> &ensp; Contact Me 
                                        </h1>
                                    </a></button>
                            </div>
                            {/*----------for computer view end-------*/}
                        </div>
                        {/*----------for computer view start-------*/}

                        {/*----------for computer view end-------*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSec