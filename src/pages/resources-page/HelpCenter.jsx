import SupportContactOptions from '../../components/resources/help-center/SupportContactOptions'
import ExploreResourcesSection from '../../components/resources/help-center/ExploreResourcesSection'
import SupportArticle from '../../components/resources/help-center/SupportArticle'
import SupportHero from '../../components/resources/help-center/SupportHero'
import React from 'react'

const HelpCenter = () => {
  return (
    <div>
      <SupportHero/>
      <SupportArticle/>
      <ExploreResourcesSection/>
      <SupportContactOptions/>
    </div>
  )
}

export default HelpCenter
