import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/homepage/Hero'
import TrustedBySection from '../components/homepage/TrustedBySection'
import FeaturesSection from '../components/homepage/FeaturesSection'
import FinancialOperationsHero from '../components/homepage/FinancialOperationsHero'
import TestimonialSection from '../components/homepage/TestimonialSection'
import BrexHeroCTA from '../components/homepage/BrexHeroCTA'
import InsightsCarousel from '../components/homepage/InsightsCarousel'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <TrustedBySection/>
      <FeaturesSection/>
     <FinancialOperationsHero/>
     <TestimonialSection/>
     <BrexHeroCTA/>
     <InsightsCarousel/>
     {/* <Footer/> */}

    </div>
  )
}

export default HomePage
