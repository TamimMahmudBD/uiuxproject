import React from 'react'
import Hero from './Hero'
import CarveSec from './CarveSec'
import AboutSec from './AboutSec'
import Card from './Card'
import ServiceSec from './ServiceSec.jsx'

const Home = () => {
  return (
    <div>
    <Hero/>
    <CarveSec/>
    <AboutSec/>
    <Card/>
    <ServiceSec/>
    </div>
  )
}

export default Home