import React from 'react';
import layout from '@/json/product-pages/accountAutomationLayout.json';
import { accountAutomationMap } from '@/maps/product-pages/page-maps/accountAutomationMap';

// dynamic data used in layout JSON
const accountingInsightsData = [
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop",
    title: "The new controller role: leading through change amid AI and remote work",
    description: "Brex's CAO Erik Zhou dives deep into the evolution of accounting and finance with guest Ron Cook, the VP/Controller at Lightcast.",
    link: "#",
    author: "Ron Cook",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    title: "Why finance leaders are embracing AI-powered spend management",
    description: "Some firms are using AI to increase control and ward off problems in finance and accounting. Are you?",
    link: "#",
    author: "OnlyCFO",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
    title: "AI, automation, and the future of accounting",
    description: "Will AI replace my accountants? Probably not, says this CFO, but look for accounting roles to become more specialized as AI and automation go into hyperdrive.",
    link: "#",
    author: "Kurtis Hanni",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=240&fit=crop",
    title: "Using technology to make life easier for Controllers",
    description: "Two accounting leaders explain how they lighten their load through people, processes and systems.",
    link: "#",
    author: "Brex Team",
    authorType: "Article"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop",
    title: "Streamlining month-end close: A controller's guide",
    description: "Learn how modern controllers are reducing close time from weeks to days using automation and smart workflows.",
    link: "#",
    author: "Sarah Martinez",
    authorType: "Guest Writer"
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=240&fit=crop",
    title: "The ROI of accounting automation: Real numbers",
    description: "Finance teams share actual metrics on time savings, error reduction, and cost benefits from implementing automation tools.",
    link: "#",
    author: "Finance Today",
    authorType: "Guest Writer"
  }
];

const dynamicProps = {
  accountingInsightsData
};

const AccountAutomation = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = accountAutomationMap[block.component];
          if (!Component) return null;

          const resolvedProps = {};
          if (block.props) {
            Object.entries(block.props).forEach(([key, value]) => {
              resolvedProps[key] = dynamicProps[value] ?? value;
            });
          }

          return <Component key={block.id} {...resolvedProps} />;
        })}
    </div>
  );
};

export default AccountAutomation;
