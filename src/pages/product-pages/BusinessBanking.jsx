import React from "react";
import layout from "@/json/product-pages/businessBankingLayout.json";
import { businessBankingMap } from "@/pages/product-pages/page-maps/businessBankingMap";

// Static data (used in layout JSON via keyword "insights")
const insights = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "AI in Finance: Transforming the Future",
    description:
      "Discover how artificial intelligence is revolutionizing financial operations and decision-making across the globe.",
    link: "#",
    author: "Jane Smith",
    authorType: "Fintech Analyst",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "Expense Automation with Machine Learning",
    description:
      "Learn how machine learning streamlines expense reporting, reduces fraud, and saves valuable time.",
    link: "#",
    author: "Alex Johnson",
    authorType: "AI Specialist",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    title: "The Rise of Automated Procurement",
    description:
      "Explore the benefits of integrating automation into procurement processes for modern businesses.",
    link: "#",
    author: "Priya Patel",
    authorType: "Procurement Lead",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    title: "AI-Powered Spend Management Tools",
    description:
      "A look at the top tools harnessing AI to manage and optimize business spend in real-time.",
    link: "#",
    author: "Michael Lee",
    authorType: "Tech Writer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "How CFOs Use AI for Strategic Growth",
    description:
      "CFOs share their insights on leveraging AI to drive efficiency and strategic business growth.",
    link: "#",
    author: "Sophia Garcia",
    authorType: "CFO",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    title: "The Future of Accounting: Humans + AI",
    description:
      "Will AI replace accountants? Experts weigh in on the evolving roles in a tech-driven industry.",
    link: "#",
    author: "Liam Wong",
    authorType: "Guest Writer",
  },
];

const dynamicProps = {
  insights,
};

const BusinessBanking = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = businessBankingMap[block.component];
          if (!Component) return null;

          // Replace any string props that match a dynamic key like "insights"
          const resolvedProps = {};
          if (block.props) {
            Object.entries(block.props).forEach(([key, value]) => {
              resolvedProps[key] = dynamicProps[value] || value;
            });
          }

          return <Component key={block.id} {...resolvedProps} />;
        })}
    </div>
  );
};

export default BusinessBanking;
