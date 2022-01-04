# Icons

Guidance and suggestions for using icons in your components.

## Import

```js
import StarEmpty from "sushiweb/Icons/all/StarEmpty";
```

or, if tree-shaking is enabled in your project you can use -
```js
import { StarEmpty } from "sushiweb/Icons";
```
PS: Using named import of icons without tree-shaking will include all the icons causing your bundlesize heavy.

## Example

```js
import AndroidCircle from "sushiweb/Icons/all/AndroidCircle";
import { AndroidFill, Star, Cross } from "sushiweb/Icons";
import { red } from "sushiweb/tokens/color";

<AndroidCircle size={22} />
<AndroidFill />
<Star color={red.z300}/>
<Cross showPointer={true} onClick={handleClose}/>
```

### Adding a new icon

- Rename the svg in lowercase characters separated by dash, e.g. 'big-circle.svg'
- Ensure that the value of viewbox attribute is "0 0 20 20". If it's not, ask the designer for "0 0 20 20" version.
- Place the svg in "src/Icons/svgs/src"
- Run this in Terminal - "npm run generate-icons"
- If the command ran successfully, icon component will be generated and will be available in Storybook at path=/story/atoms-icon--introduction
- [Sample commit](https://github.com/Zomato/WebUIKit/commit/078d9f8162754c0a46cb72a7f658d394c6526b94)


<!-- PROPS -->
#### Props

<!--

`size: number` the size prop overrides the default size of the icon. It helps user to set a custom size of the icon.

`color: string` the color prop helps user to set a custom color of the icon.

`showPointer: bool` Shows cursor as pointer on hover if set to `true`. By default it does not show pointer;

`onClick: func` Callback function to be triggered when user clicks on an icon. -->

## All available icons and their names

<!-- STORY -->
