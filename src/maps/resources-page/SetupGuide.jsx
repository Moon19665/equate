import React from 'react';
import layout from '@/json/resource-pages/setupGuideLayout.json';
import { setupGuideMap } from '@/maps/resources-page/page-maps/setupGuideMap';

const SetupGuide = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = setupGuideMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default SetupGuide;
