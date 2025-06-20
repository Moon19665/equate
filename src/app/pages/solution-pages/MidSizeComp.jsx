import TravelExpenseSection from '../../components/solutions/midSize-companies/TravelExpenseSection'
import MidSizeHero from '../../components/solutions/midSize-companies/MidSizeHero'
import React from 'react'
import MidSizeSecondSec from '../../components/solutions/midSize-companies/MidSizeSecondSec'
import IncodeTestimonial from '../../components/solutions/midSize-companies/IncodeTestimonial'
import GoLiveWithBrex from '../../components/solutions/midSize-companies/GoLiveWithBrex'
import MidSizeFAQ from '../../components/solutions/midSize-companies/MidSizeFAQ'
import SignupHeroSection from '../../components/SignupHeroSection'

const MidSizeComp = () => {
  return (
    <div>
      <MidSizeHero/>
      <TravelExpenseSection/>
      <MidSizeSecondSec/>
      <IncodeTestimonial/>
      <GoLiveWithBrex/>
      <MidSizeFAQ/>
      <SignupHeroSection
  title={<>See what Equate can do <br />for you..</>}
  desc="Equate is the only fully unified global spend platform — with corporate cards, expense management, reimbursements, bill pay, and travel, all in one place."
/>

    </div>
  )
}

export default MidSizeComp
