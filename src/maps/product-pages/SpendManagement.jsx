import React from 'react';
import layout from '@/json/product-pages/spendManagementLayout.json'; // adjust path as needed
import { spendManagementMap } from '@/maps/product-pages/page-maps/spendManagementMap';

const SpendManagement = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = spendManagementMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default SpendManagement;
