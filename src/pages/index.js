import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroSection from '../../components/landingPage/hero-section'
import MeetingSection from '../../components/landingPage/meeting-section'
import DiversificationSection from '../../components/landingPage/diversification-section'
import MonitorSection from '../../components/landingPage/monitor-section'
import TestimonialSection from '../../components/landingPage/testimonials'

const index = () => {
  return (
    <div>
        <main>
            <HeroSection/>
            <MeetingSection/>   
            <DiversificationSection/>
            <MonitorSection/>
            <TestimonialSection/>
             {/* 
            <section></section> */}
        </main>
        <footer>
            
        </footer>
    </div>
  )
}

export default index