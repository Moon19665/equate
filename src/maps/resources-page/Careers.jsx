import React from 'react';
import layout from '@/json/resource-pages/careersLayout.json';
import { careersMap } from '@/maps/resources-page/page-maps/careersMap';

const Careers = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = careersMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Careers;
