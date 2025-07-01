import IntegrationsSliderSection from '../../components/products/integration/IntegrationsSliderSection'
import EmpireTestimonialSection from '../../components/products/integration/EmpireTestimonialSection'
import NativeIntegrationHero from '../../components/products/integration/NativeIntegrationHero'
import NativeIntegrationsFeatures from '../../components/products/integration/NativeIntegrationsFeatures'

import React from 'react'
import IntegrationsFAQSection from '../../components/products/integration/IntegrationsFAQSection'

const Integrations = () => {
  return (
    <div>
      <NativeIntegrationHero/>
      <NativeIntegrationsFeatures/>
      <EmpireTestimonialSection/>
      <IntegrationsSliderSection/>
      <IntegrationsFAQSection/>
    </div>
  )
}

export default Integrations
