import React from 'react';
import { corporateCardMap } from '@/maps/product-pages/page-maps/corporateCardMap'; // adjust path if needed
import layout from '@/json/product-pages/corporateCard.json'; // adjust path if needed

const CorporateCard = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = corporateCardMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default CorporateCard;
