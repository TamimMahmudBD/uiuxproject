import React from 'react'
import Hero from './Hero'
import CarveSec from './CarveSec'
import AboutSec from './AboutSec'
import Card from './Card'
import ServiceSec from './ServiceSec.jsx'
import Experience from './Experience'

const Home = () => {
  return (
    <div>
    <Hero/>
    <CarveSec/>
    <AboutSec/>
    <Card/>
    <ServiceSec/>
    <Experience/>
    </div>
  )
}

export default Home