import React from "react";
import layout from '@/json/resource-pages/jobDetailLayout.json';

import { jobDetailPageMap } from "./jobDetailPageMap";

const JobDetailPage = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = jobDetailPageMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default JobDetailPage;
