import WhyPartnerWithBrex from '../../components/solutions/accounting/WhyPartnerWithBrex'
import AccountingLogoSlider from '../../components/solutions/accounting/AccountingLogoSlider'
import AccountingPartnerSection from '../../components/solutions/accounting/AccountingPartnerSection'
import React from 'react'
import PartnerTierComparison from '../../components/solutions/accounting/PartnerTierComparison'
import AccountingInsightsSection from '../../components/solutions/accounting/AccountingInsightsSection'
import BecomePartnerSection from '../../components/solutions/accounting/BecomePartnerSection'

const Accounting = () => {
  return (
    <div>
      <AccountingPartnerSection/>
      <AccountingLogoSlider/>
      <WhyPartnerWithBrex/>
      <PartnerTierComparison/>
      <AccountingInsightsSection/>
      <BecomePartnerSection/>
    </div>
  )
}

export default Accounting
