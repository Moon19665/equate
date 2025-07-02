import React from 'react';
import layout from '@/json/solution-pages/vcFirmsLayout.json';
import { vcFirmsMap } from '@/maps/solution-pages/page-maps/vcFirmsMap';

const VCFirms = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = vcFirmsMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default VCFirms;
