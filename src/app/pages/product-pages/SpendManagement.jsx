import SpendManagementHero from '../../components/products/spend-management/SpendManagementHero'
import SpendFeatures from '../../components/products/spend-management/SpendFeatures'
import PolicyEmbedSection from '../../components/products/spend-management/PolicyEmbedSection'
import AutomateExpenseReviewSection from '../../components/products/spend-management/AutomateExpenseReviewSection'
import PolicyTestimonialSection from '../../components/products/spend-management/PolicyTestimonialSection'
import ExpenseAutomationSection from '../../components/products/spend-management/ExpenseAutomationSection'
import InsightsAndReimburseSection from '../../components/products/spend-management/InsightsAndReimburseSection'
import SpendManagementPreFooter from '../../components/products/spend-management/SpendManagementPreFooter'
import SpendManagementFAQ from '../../components/products/spend-management/SpendManagementFAQ'

import React from 'react'

const SpendManagement = () => {
  return (
    <div>
      <SpendManagementHero/>
      <SpendFeatures/>
      <PolicyEmbedSection/>
      <AutomateExpenseReviewSection/>
      <PolicyTestimonialSection/>
      <ExpenseAutomationSection/>
      <InsightsAndReimburseSection/>
      <SpendManagementPreFooter/>
      <SpendManagementFAQ/>
    </div>
  )
}

export default SpendManagement
