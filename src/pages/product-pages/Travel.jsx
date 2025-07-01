import TravelHero from '../../components/products/travel/TravelHero'
import TravelSpendCards from '../../components/products/travel/TravelSpendCards'
import TravelSpendTestimonial from '../../components/products/travel/TravelSpendTestimonial'
import GroupEventsSection from '../../components/products/travel/GroupEventsSection'
import FutureProofTravelSection from '../../components/products/travel/FutureProofTravelSection'
import TravelFAQ from '../../components/products/travel/TravelFAQ'

import React from 'react'

const Travel = () => {
  return (
    <div>
      <TravelHero/>
      <TravelSpendCards/>
      <TravelSpendTestimonial/>
      <GroupEventsSection/>
      <FutureProofTravelSection/>
      <TravelFAQ/>
    </div>
  )
}

export default Travel
