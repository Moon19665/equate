import React from 'react';
import layout from '@/json/solution-pages/midSizeLayout.json';
import { midSizeMap } from '@/maps/solution-pages/page-maps/midSizeMap';

const MidSizeComp = () => {
  return (
    <div>
      {layout
        .filter((block) => block.visible !== false)
        .map((block) => {
          const Component = midSizeMap[block.component];
          if (!Component) return null;

          const props = { ...(block.props || {}) };

          // Optional: Parse JSX in title if using strings like <>..</>
          if (block.component === "SignupHeroSection" && typeof props.title === "string" && props.title.includes("<>")) {
            props.title = <>See what Equate can do <br />for you..</>;
          }

          return <Component key={block.id} {...props} />;
        })}
    </div>
  );
};

export default MidSizeComp;
