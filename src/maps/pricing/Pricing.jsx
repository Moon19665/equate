import React from 'react';
import layout from '@/json/pricing/pricingLayout.json';
import { pricingMap } from '@/maps/pricing/pricingMap';

const Pricing = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = pricingMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Pricing;
