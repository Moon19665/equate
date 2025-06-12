import BrexAIFAQ from '../../components/products/brexai/BrexAIFAQ';
import Carousel from '../../components/Carousel';
import AiCtaSection from '../../components/products/brexai/AiCtaSection'
import BrexAIHero from '../../components/products/brexai/BrexAIHero'
import BrexAIPlatformSections from '../../components/products/brexai/BrexAIPlatformSections'
const aiFinanceCarouselData = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    title: "Brex AI x Finance",
    description: "Get actionable advice and executive predictions on the future of AI in finance — from influential industry leaders.",
    link: "#",
    author: "Brex Team",
    authorType: "Report"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
    title: "5 ways AI can accelerate expense management",
    description: "See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.",
    link: "#",
    author: "Finance Today",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=240&fit=crop",
    title: "AI in finance: The human role in AI-powered spend management",
    description: "AI can amplify human effort in every spend management workflow for greater compliance, accuracy, and speed — here's how to take advantage.",
    link: "#",
    author: "Sarah Martinez",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop",
    title: "CFOs need an AI strategy",
    description: "Seven key considerations for CFOs looking to drive immediate impact with AI while continuing to build enduring businesses.",
    link: "#",
    author: "Michael Chen",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=240&fit=crop",
    title: "The future of procurement is automated and integrated",
    description: "How modern companies approach procurement as part of a unified spend management system.",
    link: "#",
    author: "Procurement Weekly",
    authorType: "Article"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=240&fit=crop",
    title: "Spend management: From chaos to control with AI",
    description: "Explore the benefits of adding AI to your finance tech stack, from smart policy controls to a chatbot assistant that handles finance-related inquiries.",
    link: "#",
    author: "OnlyCFO",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop",
    title: "AI in finance and the benefits for enterprises",
    description: "Large orgs are lagging in finance AI adoption, but they stand to gain the most through automation and productivity improvements.",
    link: "#",
    author: "Matt Harney",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=240&fit=crop",
    title: "Why finance leaders are embracing AI-powered spend management",
    description: "Some firms are using AI to increase control and ward off problems in finance and accounting. Are you?",
    link: "#",
    author: "Kurtis Hanni",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=240&fit=crop",
    title: "AI, automation, and the future of accounting",
    description: "Will AI replace my accountants? Probably not, says this CFO, but look for accounting roles to become more specialized as AI and automation go into hyperdrive.",
    link: "#",
    author: "OnlyCFO",
    authorType: "Guest Writer"
  }
];

import React from 'react'

const BrexAi = () => {
  return (
    <div>
      <BrexAIHero/>
      <BrexAIPlatformSections/>
      <AiCtaSection/>
      <Carousel 
        slides={aiFinanceCarouselData}
        title="Explore AI in finance."
      />
      <BrexAIFAQ/>
    </div>
  )
}

export default BrexAi
