import React from 'react';
import layout from '@/json/solution-pages/enterpriseLayout.json';
import { enterpriseMap } from '@/maps/solution-pages/page-maps/enterpriseMap';

const Enterprise = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = enterpriseMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Enterprise;
