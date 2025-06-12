import LocalCurrencySection from '../../components/products/global/LocalCurrencySection'
import GlobalHeroSection from '../../components/products/global/GlobalHeroSection'
import React from 'react'
import IndustryCoverageSection from '../../components/products/global/IndustryCoverageSection'
import TaxPolicyComplianceSection from '../../components/products/global/TaxPolicyComplianceSection'
import GlobalDiagramSection from '../../components/products/global/GlobalDiagramSection'
import GlobalFeaturesAndTestimonial from '../../components/products/global/GlobalFeaturesAndTestimonial'
import GlobalCtaSection from '../../components/products/global/GlobalCtaSection'

const Global = () => {
  return (
    <div>
      <GlobalHeroSection/>
      <LocalCurrencySection/>
      <IndustryCoverageSection/>
      <TaxPolicyComplianceSection/>
      <GlobalDiagramSection/>
      <GlobalFeaturesAndTestimonial/>
      <GlobalCtaSection/>
    </div>
  )
}

export default Global
