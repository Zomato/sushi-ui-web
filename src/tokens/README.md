# Tokens :star:

Contains Configurations of size , spacing etc

```meta
  category: Configurations
  description:
```

```js
import sizes from "sushiweb/tokens/sizes";
import spacing, { zSpacing } from "sushiweb/tokens/misc";
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- PROPS -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

<!-- STORY HIDE END -->

### Basic Config

```js
const spacing = {
  unit,
  xxsmall: unit * 0.1 + "rem", //4px
  xsmall: unit * 0.2 + "rem", //8px
  small: unit * 0.4 + "rem", //16px
  medium: unit * 0.6 + "rem", //24px
  large: unit * 0.8 + "rem", //32px
  xlarge: unit * 1.2 + "rem" //48px
};

const zSpacing = {
  z0: 0,
  z1: unit * 0.1 + "rem", //4px
  z2: unit * 0.2 + "rem", //8px
  z3: unit * 0.4 + "rem", //16px
  z4: unit * 0.6 + "rem", //24px
  z5: unit * 0.8 + "rem", //32px
  z6: unit + "rem" //40px
};
```
