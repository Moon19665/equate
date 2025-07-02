import React from 'react';
import layout from '@/json/resource-pages/helpCenterLayout.json';
import { helpCenterMap } from '@/maps/resources-page/page-maps/helpCenterMap';

const HelpCenter = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = helpCenterMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default HelpCenter;
