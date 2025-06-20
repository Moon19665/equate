import WeeklyWebinarForm from '../../components/resources/setup-guide/WeeklyWebinarForm'
import SetupGuideHero from '../../components/resources/setup-guide/SetupGuideHero'
import React from 'react'
import HelpCenterResources from '../../components/resources/setup-guide/HelpCenterResources'
import SupportContactSection from '../../components/resources/setup-guide/SupportContactSection'

const SetupGuide = () => {
  return (
    <div>
      <SetupGuideHero/>
      <WeeklyWebinarForm/>
      <HelpCenterResources/>
      <SupportContactSection/>
    </div>
  )
}

export default SetupGuide
