import React from 'react';
import layout from '@/json/product-pages/integrationsLayout.json'; // adjust path as needed
import { integrationsMap } from '@/maps/product-pages/page-maps/integrationsMap';

const Integrations = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = integrationsMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Integrations;
