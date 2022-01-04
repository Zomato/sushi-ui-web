# Input

```js
import Input from "sushiweb/InputTypes/Input";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Input

```js
<Input label="Name" />
```

#### Props

`label: string` This prop defines the label of the Input. This is a required prop.

```js
<Input label="Name" />
```

`value: string` This prop defines the initial value of the Input. By default this is empty.

```js
<Input label="Name" value="FirstName LastName" />
```

`type: string` This prop defines the type of the Input i.e. text, number, etc. By default this is "text".

```js
<Input label="Name" type="number" />
```

`onChange: func` This prop is a function which gets the value of input field whenever value is changed. By default it's a function which returns nothing.

```js
<Input label="Name" onChange={onChange} />
```

`onBlur: func` This prop is a function which gets the value of input field whenever the focus is out of box. By default it's a function which returns nothing.

```js
<Input label="Name" onBlur={onBlur} />
```

#### Additional Props

`autocomplete:bool` This prop defines whether input box autocomplete is enabled or disabled. By default it's value is true.

```js
<Input label="Name" autocomplete={false} />
```

`innerWidth:string` This prop defines width of the input box. By default it is 300px.

```js
<Input label="Name" innerWidth="200px" />
```

`disabled:bool` This prop defines whether input box is enabled or disabled. By default it's value is false.

```js
<Input label="Name" disabled />
```

`helperText:string` This prop defines what will be the helper text of input box shown below that. By default it's value is empty.

```js
<Input label="Name" helperText="Character Limit: 25" />
```

`icon:string` This prop defines the icon which can be shown at the right side within the input box.

```js
<Input label="Name" icon="star" />
```

`iconColor` This prop defines the icon color in the input box. By default it's #B5B5B5 (GREY400).

```js
<Input label="Name" icon="star" iconColor="#B5B5B5" />
```

`leftIcon:string` This prop defines the icon which can be shown at the left side within the input box.

```js
<Input label="Name" leftIcon="star" />
```

`leftIconColor:string` This prop defines the left icon color in the input box. By default it's #B5B5B5 (GREY400).

```js
<Input label="Name" leftIcon="star" leftIconColor="#B5B5B5" />
```

`hideLabel:bool` This prop whether placeholder will become label or not. By default it will be false.

```js
<Input label="Name" hideLabel />
```

`autoFocus:bool` This prop defines if the input is auto focus on load or not. By default it will be false.

```js
<Input label="Name" autoFocus />
```
