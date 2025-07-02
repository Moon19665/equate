import React from 'react';
import layout from '@/json/resource-pages/webinarsLayout.json';
import { webinarsMap } from '@/maps/resources-page/page-maps/webinarsMap';

const Webinars = () => {
  return (
    <div>
      {layout
        .filter(block => block.visible !== false)
        .map(block => {
          const Component = webinarsMap[block.component];
          if (!Component) return null;
          return <Component key={block.id} {...(block.props || {})} />;
        })}
    </div>
  );
};

export default Webinars;
