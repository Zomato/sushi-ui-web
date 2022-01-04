# Tokens :star:

Contains Configurations for box

```meta
  category: Configurations
  description:
```

```js
import box from "sushiweb/tokens/box";
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

<!-- STORY HIDE END -->

## Examples

### Basic Link

```js
const Box1 = styled(Commonbox)`
  box-shadow: ${box.shadow.z4};
`;

const Box2 = styled(Commonbox)`
  box-shadow: ${box.shadow.z8};
`;

const Box3 = styled(Commonbox)`
  box-shadow: ${box.shadow.z16};
`;

const Box4 = styled(Commonbox)`
  box-shadow: ${box.shadow.z32};
`;

return (
  <Example>
    <Stack>
      <Box1>shadow.z4</Box1>
      <Box2>shadow.z8</Box2>
      <Box3>shadow.z16</Box3>
      <Box4>shadow.z32</Box4>
    </Stack>
  </Example>
);
```
