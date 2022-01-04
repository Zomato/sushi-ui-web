# RadioGroup

```js
import RadioGroup from "sushiweb/RadioGroup";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic RadioGroup

```js
const options = [
  {
    label: "Option 1",
    value: "opt_1"
  },
  {
    label: "Option 2",
    value: "opt_2"
  },
  {
    label: "Option 3",
    value: "opt_3"
  }
];

<RadioGroup options={options} name="radio" onChange={onChange} />;
```

#### Props

`name: string` This prop defines the group name of the RadioGroup. This is a required prop.

```js
<RadioGroup name="radio" />
```

`options: array` This prop is an array of options which are object of label and value pair. This is a required prop.

```js
const options = [
  {
    label: "Option 1",
    value: "opt_1"
  },
  {
    label: "Option 2",
    value: "opt_2"
  }
];

<RadioGroup options={options} name="radio" />;
```

`onChange: func` This prop is a function which gets the value of selected value in the group. By default it's a function which returns nothing.

```js
const onChange = value => {
  console.log(value);
};

<RadioGroup onChange={onChange} name="radio" />;
```

#### Additional Props

`horizontal: bool` This prop is a boolean value which will set the horizontal view of Radio Group. By default it's false.

```js
<RadioGroup options={options} name="radio" horizontal />
```

`marginBottom: string` This prop is a string which will set the margin bottom value of Radio Element. By default it's 1.6rem.

```js
<RadioGroup options={options} name="radio" marginBottom="0.5rem" />
```

`selected: string` This prop is a string which will have the value of one of the options and that option will be selected while rendering. This is undefined by default.

```js
<RadioGroup options={options} name="radio" defaultValue="opt_2" />
```

`selectedColor: string` This prop is a string which will have the hex code of the hover and selection color of radio boxes. This is green.z500 by default.

```js
<RadioGroup options={options} name="radio" selectedColor="#ffff00" />
```

`disabled: bool` This prop is a boolean value which will set the RadioGroup option to disabled. By default it's false.

```js
const disabledOptions = [
  {
    label: "Disabled Option 1",
    value: "opt_1",
    disabled: true
  },
  {
    label: "Disabled Option 2",
    value: "opt_2",
    disabled: true
  }
];

<RadioGroup options={disabledOptions} name="radio" defaultValue="opt_2" />;
```
