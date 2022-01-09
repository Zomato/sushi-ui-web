import React, { useState } from 'react';
import HorizontalTabs from '../HorizontalTabs';

const HorizontalStory = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  const handleClick = (index) => () => {
    setActiveIndex(index);
  };
  return (
    <div style={{ marginBottom: '100px' }}>
      <HorizontalTabs
        alignLinks='left'
        additionalGap='1.8rem'
        bottomBorder
        appearance='bold'
      >
        <HorizontalTabs.Link active={activeIndex == 0} onClick={handleClick(0)}>
          Tab 1
        </HorizontalTabs.Link>
        <HorizontalTabs.Link active={activeIndex == 1} onClick={handleClick(1)}>
          Tab 2
        </HorizontalTabs.Link>
        <HorizontalTabs.Link active={activeIndex == 2} onClick={handleClick(2)}>
          Tab 3
        </HorizontalTabs.Link>
        <HorizontalTabs.Link active={activeIndex == 3} onClick={handleClick(3)}>
          Tab 4
        </HorizontalTabs.Link>
        <HorizontalTabs.Link active={activeIndex == 4} onClick={handleClick(4)}>
          Tab 5
        </HorizontalTabs.Link>
        <HorizontalTabs.Link active={activeIndex == 5} onClick={handleClick(5)}>
          Tab 6
        </HorizontalTabs.Link>
      </HorizontalTabs>
    </div>
  );
};

export { HorizontalStory };
