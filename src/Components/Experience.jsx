import React from 'react'
import FigmaLogo from './images/FigmaLogo.png'
import AdobeAi from './images/AdobeAi.png'
import SketchLogo from './images/SketchLogo.png'
import AdobePS from './images/AdobePS.png'

const Experience = () => {
  return (
    <div >
      <div className='mm:w-5/6 md:w-full text-left mb-2 mt-12 mm:mx-10 md:mx-0'>
        <div className="text-green-600 text-xl  md:text-center font-bold  ">About of experience</div>
        <div className="text-neutral-800 mm:text-lg lg:text-3xl  md:text-center font-bold ">I craft wonderful digital experiences for brands</div>
      </div>
      <div className='
      flex 
      mm:flex-col
      md:flex-row
      items-center 
      justify-center
      lg:px-7
      xl:px-28 '>
        <div className='
            flex 
            flex-col
            items-center 
            justify-center 
            text-left
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            m-7
            py-2
            mm: w-5/6
            
            md:w-4/6
            h-44 
            '>
          <img className='w-28 my-4' src={FigmaLogo} alt="" />
          <h1 className='mb-4 text-5xl md:text-4xl font-bold lg:text-5xl mx-2 md:ml-01'>98%</h1>

        </div>
        <div className='
            flex 
            flex-col
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            m-7
            mm: w-5/6
           
            mm:mt-0
            mm:mb-6
            md:ml-0
            md:mt-7
            md:mr-3
            py-2
            md:w-4/6
            h-44
            '>
          <img className='w-28 my-4' src={SketchLogo} alt="" />
          <h1 className='mb-4 text-5xl font-bold lg:text-5xl md:text-4xl mx-2 md:ml-01'>85%</h1>

        </div>
        <div className='
            flex 
            flex-col
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            m-7
            md:ml-3
            md:mr-0
            mm: w-5/6
            
            mm:my-0
            py-2
            md:w-4/6
            h-44
            
            '>
          <img className='w-32 my-4' src={AdobePS} alt="" />
          <h1 className='mb-4 text-5xl font-bold lg:text-5xl md:text-4xl mx-2 md:ml-01'>90%</h1>

        </div>
        <div className='
            flex 
            flex-col
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            mm:m-7
            py-2
            mm: w-5/6
            
            md:w-4/6
            h-44
            '>
          <img className='w-32 my-4' src={AdobeAi} alt="" />
          <h1 className='mb-4 text-5xl font-bold lg:text-5xl md:text-4xl mx-2 md:ml-01'>95%</h1>

        </div>
      </div>

      <div className='flex mm:flex-col lg:px-7 xl:px-28 md:flex-row md:justify-center'>
        <div className='mm:w-5/6 mm:m-7 md:'>
          <div className='flex flex-row justify-start items-center  mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            <h1 className='font-bold text-green-700 text-xl'>My Education</h1>
          </div>
          <div className=' '>
            <div className='text-neutral-800 bg-green-100 font-medium flex mm:flex-col md:flex-row justify-between items-center mm:w-full md:w-full border-2 p-2 rounded-md md:h-20 my-2'>
              <h1>2012-2013</h1>
              <h1>Interaction Design Specialization</h1>
            </div>
            <div className='text-neutral-800 bg-green-100 font-medium flex mm:flex-col md:flex-row justify-between items-center mm:w-full md:w-full border-2 p-2 rounded-md md:h-20 my-2'>
              <h1>2015-2016</h1>
              <h1>Human-Computer Interaction</h1>
            </div>
            <div className='text-neutral-800 bg-green-100 font-medium flex mm:flex-col md:flex-row justify-between items-center mm:w-full md:w-full border-2 p-2 rounded-md md:h-20 my-2'>
              <h1>2017-2018</h1>
              <h1>Design Thinking for Innovation</h1>
            </div>
          </div>
        </div>
        <div className='mm:w-5/6 mm:m-7 md:'>
          <div className='flex flex-row justify-start items-center mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        
            <h1 className='font-bold text-green-700 text-xl'>My Experience</h1>
          </div>
          <div className=''>
            <div className='text-neutral-800 bg-green-100 font-medium flex mm:flex-col md:flex-row justify-between items-center mm:w-full md:w-full border-2 p-2 rounded-md md:h-20 my-2'>
              <div><h1>2015-2016</h1></div>
              <div><h1>JUNIOR UI/UX DESIGNER</h1><p className='mm:text-center md:text-right text-sm mt-1'>THINK NETWORK</p></div>

            </div>
            <div className='text-neutral-800 bg-green-100 font-medium flex mm:flex-col md:flex-row justify-between items-center mm:w-full md:w-full border-2 p-2 rounded-md md:h-20 my-2'>
            <div><h1>2016-2017</h1></div>
            <div><h1>User Experience Researcher</h1><p className=' mm:text-center md:text-right text-sm mt-1'>Tec IT LTD</p></div>

            </div>
            <div className='text-neutral-800 bg-green-100 font-medium flex mm:flex-col md:flex-row justify-between items-center mm:w-full md:w-full border-2 p-2 rounded-md md:h-20 my-2'>
            <div><h1>2017-2018</h1></div>
            <div><h1>Product Designer</h1><p className='mm:text-center md:text-right text-sm mt-1'>BD Tec Ltd</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience