import CorporateCards from '../../components/products/corporate-card/CorporateCards'
import CardsHero from '../../components/products/corporate-card/CardsHero'
import React from 'react'
import CorporateCardSection from '../../components/products/corporate-card/CorporateCardSection'
import ControlsSection from '../../components/products/corporate-card/ControlsSection'
import FAQSection from '../../components/products/corporate-card/FAQSection'

const CorporateCard = () => {
  return (
    <div>
      <CardsHero/>
      <CorporateCards/>
      <CorporateCardSection/>
      <ControlsSection/>
      <FAQSection/>
    </div>
  )
}

export default CorporateCard
