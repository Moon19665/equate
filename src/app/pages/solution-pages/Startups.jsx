import StartupsCorporateCard from '../../components/solutions/startups/StartupsCorporateCard'
import BankingTreasurySection from '../../components/solutions/startups/BankingTreasurySection'
import StartupStory from '../../components/solutions/startups/StartupStory'
import StartupsHero from '../../components/solutions/startups/StartupsHero'
import React from 'react'
import StartupsBillboardSection from '../../components/solutions/startups/StartupsBillboardSection'
import TreetGrowthSection from '../../components/solutions/startups/TreetGrowthSection'
import EnterpriseCopilotSection from '../../components/solutions/startups/EnterpriseCopilotSection'
import FoundersGrowSection from '../../components/solutions/startups/FoundersGrowSection'
import XealTestimonialAndComparison from '../../components/solutions/startups/XealTestimonialAndComparison'
import StartupSignupSection from '../../components/solutions/startups/StartupSignupSection'

const Startups = () => {
  return (
    <div>
      <StartupsHero/>
      <StartupStory/>
      <BankingTreasurySection/>
      <StartupsCorporateCard/>
      <StartupsBillboardSection/>
      <TreetGrowthSection/>
      <EnterpriseCopilotSection/>
      <FoundersGrowSection/>
      <XealTestimonialAndComparison/>
      <StartupSignupSection/>
    </div>
  )
}

export default Startups
