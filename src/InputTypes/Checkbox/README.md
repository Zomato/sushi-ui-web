# Checkbox

```js
import Checkbox from "sushiweb/InputTypes/Checkbox";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Checkbox

```js
<Checkbox label="Click Me" />
```

#### Props

`label: string` This prop defines the label of the Checkbox. This is a required prop.

`value: string` This prop defines the value of the Checkbox. This is a required prop.

`onChange: func` This prop is a function which returns an object with key as `value` prop and value as true or false, whenever the value of checkbox is changed. By default it's a function which returns nothing.

#### Additional Props

`checked: bool` This prop is a boolean value which will set the initial state of Checkbox. By default it's false.

```js
<Checkbox checked />
```

`disabled: bool` This prop is a boolean value which will set the Checkbox to disabled. By default it's false.

```js
<Checkbox disabled />
```

`solid: bool` This prop is a boolean value which will set the Checkbox state i.e. hollow or solid. By default it's true.

```js
<Checkbox solid={false} />
```
