# Tokens :star:

Contains Configurations of size , color appearance etc

```meta
  category: Configurations
  description: Contains Configurations of size , color appearance and more to make consistent UIs across web apps
```

```js
import misc from "sushiweb/tokens/misc";
// import sizes from "sushiweb/tokens/sizes";
// import spacing from "sushiweb/tokens/misc";
// import { fontSizes, fontWeights, lineHeight } from "sushiweb/tokens/misc";

const transition = `all ${misc.animationduration} ${misc.animation.linear}`; //translates to : all 0.25s linear
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- PROPS -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

<!-- STORY HIDE END -->

## Examples

### Basic Link

```js
Misc configuration object :

 {
  radius: "6px",
  lineHeight: 1.6,
  animationDuration: "0.25s",
  shortAnimDuration: "0.15s",
  animation: {
    linear: "linear",
    easeingCurve: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeInBackCurve: "cubic-bezier(0.6, -0.28, 0.74, 0.05)",
    easeIn: "ease-in"
  },
  genericOutline: "rgba(0, 103, 244, 0.247) auto 0.5rem",
  inputs: {
    padding: "12px",
    lineHeight: "21px"
  },
  button: {
    defaultColor: "green",
    disabledColor: "grey",
    appearances: { solid: "solid", outline: "outline", link: "link" }
  },
  dropdown: {
    defaultWidth: "32rem"
  }
};
```
