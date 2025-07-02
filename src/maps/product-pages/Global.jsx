import React from 'react';
import layout from '@/json/product-pages/globalLayout.json'; // adjust path if needed
import { globalMap } from '@/maps/product-pages/page-maps/globalMap';

const Global = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = globalMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Global;
