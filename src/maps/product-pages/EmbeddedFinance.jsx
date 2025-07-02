import React from 'react';
import layout from '@/json/product-pages/embeddedFinanceLayout.json'; // adjust path
import { embeddedFinanceMap } from '@/maps/product-pages/page-maps/embeddedFinanceMap';

const EmbeddedFinance = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = embeddedFinanceMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default EmbeddedFinance;
