import React from 'react';
import layout from '@/json/product-pages/travelLayout.json'; // adjust path
import { travelMap } from '@/pages/product-pages/page-maps/travelMap';

const Travel = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = travelMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Travel;
