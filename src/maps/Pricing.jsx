import React from 'react'
import PricingLogosSection from '../components/pricing/PricingLogosSection'
import PricingPlans from '../components/pricing/PricingPlans'
import FeaturesAccordion from '../components/pricing/FeaturesAccordion'

const Pricing = () => {
  return (
    <div>
      <PricingLogosSection/>
      <PricingPlans/>
      <FeaturesAccordion/>
    </div>
  )
}

export default Pricing
