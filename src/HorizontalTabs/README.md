```meta
  category:
  description:
```

```jsx
import HorizontalTabs from "sushiweb/HorizontalTabs";
```

## Examples

### Basic

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

<!-- STORY HIDE END -->

```js
const [activeIndex, setActiveIndex] = useState(false);
const handleClick = index => e => {
  setActiveIndex(index);
};
return (
  <HorizontalTabs alignLinks="left" additionalGap="1.8rem">
    <HorizontalTabs.Link active={activeIndex == 0} onClick={handleClick(0)}>
      Delivery
    </HorizontalTabs.Link>
    <HorizontalTabs.Link active={activeIndex == 1} onClick={handleClick(1)}>
      Self Pickup
    </HorizontalTabs.Link>
    <HorizontalTabs.Link active={activeIndex == 2} onClick={handleClick(2)}>
      Dining Out
    </HorizontalTabs.Link>
    <HorizontalTabs.Link active={activeIndex == 3} onClick={handleClick(3)}>
      Nightlife
    </HorizontalTabs.Link>
    <HorizontalTabs.Link active={activeIndex == 4} onClick={handleClick(4)}>
      Membership
    </HorizontalTabs.Link>
    <HorizontalTabs.Link active={activeIndex == 5} onClick={handleClick(5)}>
      Feed
    </HorizontalTabs.Link>
  </HorizontalTabs>
);
```

### Accessibility

`Tab` : to focus with Keyboard only

`Enter/space` : to Click

<!-- PROPS -->
