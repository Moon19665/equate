import React from 'react';
import layout from '@/json/product-pages/billPayLayout.json'; 
import { billPayMap } from '@/pages/product-pages/page-maps/billPayMap';

const BillPay = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = billPayMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default BillPay;
