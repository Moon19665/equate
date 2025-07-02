import React from 'react';
import layout from '@/json/solution-pages/startupsLayout.json';
import { startupsMap } from '@/maps/solution-pages/page-maps/startupsMap';

const Startups = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = startupsMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Startups;
