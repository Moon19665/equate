import React from 'react';
import layout from '@/json/solution-pages/accountingLayout.json';
import { accountingMap } from '@/maps/solution-pages/page-maps/accountingMap';

const Accounting = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = accountingMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Accounting;
