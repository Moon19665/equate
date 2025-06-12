import EmbeddedProductSection from '../../components/products/embedded-finance/EmbeddedProductSection'
import EmbeddedFinanceHero from '../../components/products/embedded-finance/EmbeddedFinanceHero'
import React from 'react'
import EmbeddedFinanceInAction from '../../components/products/embedded-finance/EmbeddedFinanceInAction'
import EmbeddedCardsYourWay from '../../components/products/embedded-finance/EmbeddedCardsYourWay'
import EmbeddedFinanceFAQ from '../../components/products/embedded-finance/EmbeddedFinanceFAQ'

const EmbeddedFinance = () => {
  return (
    <div>
      <EmbeddedFinanceHero/>
      <EmbeddedProductSection/>
      <EmbeddedFinanceInAction/>
      <EmbeddedCardsYourWay/>
      <EmbeddedFinanceFAQ/>
    </div>
  )
}

export default EmbeddedFinance
