import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroSection from '../../components/landingPage/hero-section'
import MeetingSection from '../../components/landingPage/meeting-section'
import DiversificationSection from '../../components/landingPage/diversification-section'
import MonitorSection from '../../components/landingPage/monitor-section'
import TestimonialsSection from '../../components/landingPage/testimonials'

const index = () => {
  return (
    <div>
        <main>
            <HeroSection/>
            <MeetingSection/>   
            <DiversificationSection/>
            
            <MonitorSection/>
           
            <TestimonialsSection/>
             {/* 
            <section></section> */}
        </main>
        <footer>
            
        </footer>
            <script>

            </script>
    </div>
  )
}

export default index