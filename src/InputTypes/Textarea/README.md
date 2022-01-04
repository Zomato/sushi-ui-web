# Textarea

```js
import Textarea from "sushiweb/InputTypes/Textarea";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Textarea

```js
<Textarea label="Description" />
```

#### Props

`label: string` This prop defines the label of the Textarea. This is a required prop.

`onChange: func` This prop is a function which gets the value of Textarea whenever it is changed. By default it's a function which returns nothing.

```js
<Input label="Name" onChange={onChange} />
```

`onBlur: func` This prop is a function which gets the value of input field whenever the focus is out of box. By default it's a function which returns nothing.

```js
<Input label="Name" onBlur={onBlur} />
```

`autoFocus: bool` This prop is a bool which will focus the TextArea by default.

```js
<Input label="Name"  autoFocus/>
```
#### Ref

```js
const TextareaWrapper = props => {
  const [value, setValue] = useState(props.value);

  const ref = React.createRef();

  return <Textarea {...props} onChange={setValue} value={value} ref={ref} />;
};
```

#### Additional Props

`value: string` This prop is initial value of textarea. By default it's empty string.

```js
<Textarea value="Initial Value" />
```

`disabled: bool` This prop is a boolean value which will set the Textarea to disabled. By default it's false.

```js
<Textarea disabled />
```

`helperText:string` This prop defines what will be the helper text of Textarea box shown below that. By default it's value is empty.

```js
<Textarea label="Name" helperText="Character Limit: 25" />
```

`resize:string` This prop defines resize value of Textarea box.

```js
<Textarea label="Name" resize="none" />
```

`innerWidth:string` This prop defines width value of Textarea box.

```js
<Textarea label="Name" innerWidth="400px" />
```
