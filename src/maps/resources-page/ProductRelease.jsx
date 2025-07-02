import React from 'react';
import layout from '@/json/resource-pages/productReleaseLayout.json';
import { productReleaseMap } from '@/maps/resources-page/page-maps/productReleaseMap';

const ProductRelease = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = productReleaseMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default ProductRelease;
