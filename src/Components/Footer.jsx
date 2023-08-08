import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10'>
      <footer className="footer p-10 bg-base-200 text-base-content flex md:flex-row mm:flex-col justify-evenly items-start bg-gradient-to-r  from-green-600  to-green-950 text-white">
        <div className='text-left'>
          <h1 className='text-2xl font-bold'>Abir</h1>
          <br />
          <p>Md Abid Akter Ltd.<br />Providing reliable tech since 2012</p>
          <p>Lorem, ipsum dolor sit amet  consectetur <br />adipisicing elit.
            Lorem, ipsum dolor sit.</p> <br />
          <h1>Facebook | Twitter | LinkedIn</h1>
        </div>
        <br />
        <div className='flex flex-col text-left'>
          <span className="footer-title text-lg font-bold">Links</span>
          <br />
          <a className="link link-hover" href='/'>Branding</a>
          <a className="link link-hover" href='/'>Design</a>
          <a className="link link-hover" href='/'>Marketing</a>
          <a className="link link-hover" href='/'>Advertisement</a>
          <a className="link link-hover" href='/'>Marketing</a>
          <a className="link link-hover" href='/'>Advertisement</a>

        </div>
        <br />
        <div className='flex flex-col text-left'>
          <span className="footer-title text-lg font-bold">Service</span>
          <br />
          <a className="link link-hover" href='/'>About us</a>
          <a className="link link-hover" href='/'>Contact</a>
          <a className="link link-hover" href='/'>Jobs</a>
          <a className="link link-hover" href='/'>Press kit</a>
          <a className="link link-hover" href='/'>Terms of use</a>
          <a className="link link-hover" href='/'>Privacy policy</a>
        </div>
        <br/>
        <div className='flex flex-col text-left'>
          <span className="footer-title text-lg font-bold">Office Info</span>
          <br />
          <div className='flex flex-row text-left'>

            <svg viewBox="0 0 500 1000"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
            </svg> 30/A Commercial Orad, Dhaka-1212.
          </div>
            <br />
          <div className='flex flex-row text-left'>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"

            >
              <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
            </svg>
            <a className="link link-hover" href='/'>+88019123456789</a>
          </div>
          <div>
            <br />

          </div>
          <div className='text-left flex flex-row items-center'>
            <input type="email" className='py-3 px-2 rounded-l-lg text-sm' name="" id="" placeholder='Email Address...' />
            <input type="submit" value="Submit" className='bg-green-600 p-2 py-[.62rem] rounded-r-lg w-20' />
          </div>
        </div>
      </footer >
    </div >
  )
}

export default Footer