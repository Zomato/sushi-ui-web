# Chips Input

```js
import Chips from "sushiweb/InputTypes/Chips";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Input

```js
<Chips label="names"/>
```

## Props

`label: string` This prop defines the label of the Input.

```js
<Chips label="Emails" />
```

`list: array` This prop defines the initial value of the Input. By default this is empty. List should contain only unique values.

```js
<Chips label="Emails" list={["xyz@abc.com", "abc@xyz.com"]} />
```

`listHandler: func` Callback function, triggered when an item is removed or a trigger key is pressed e.g. Enter, Tab, Space or ",". Use it to update the contents of the list.

```js
<Chips label="Emails" list={["xyz@abc.com", "abc@xyz.com"]} listHandler={callBackFunc} />
```

`existingList: array` This prop defines existing list. The items of the"list" will also be compared with items of the "exisitingList".

```js
<Chips label="Emails" existingList={["xyz@abc.com", "abc@xyz.com"]} />
```

`gap: string` This prop defines the top and bottom margin of the component.

```js
<Chips label="Emails" gap="1rem" />
```

`helperText: string` This prop defines what will be the helper text of the Chips Box. By default it's value is empty.

```js
<Chips label="Emails" helperText="Character Limit: 25" />
```

`padding: string` This prop defines the padding inside the Chips Box.

```js
<Chips label="Emails" padding="1rem" />
```

`hideCross: bool` This prop defines whether to show cross icon on chips or not. By default it is false.

```js 
<Chips label="Emails" hideCross />
```

`maxHeight: string` This prop defines the maximum height of Chips Box.

```js
<Chips label="Emails" maxWidth="1rem" />
```

`minWidth: string` This prop defines the minimum width of Chips Box.

```js
<Chips label="Emails" minWidth="1rem" />
```

`disabled:bool` This prop defines whether Chips Box is disabled or enables. By default its value is false.

```js 
<Chips label="Emails" disabled />
```

`hideLabel:bool` This prop defines whether the label is disabled or not. By default its value is false.

```js
<Chips label="Emails" hideLabel/>
```

`loading: bool` This prop defines whether spinner is visible or not. By default its value is false. 

```js
<Chips label="Emails" loading/>
```

`validator: func` This props defines a a callback which recieves the user input. If it returns true then the input will be appended to the list otherwise not. Use it for validating user input.

```js
<Chips label="Emails" validator={callbackFunc}>
```

`triggerKeys: array` This prop defines an array of keys which when clicked will add the user input to the list. Default trigger keys are "Enter", "space" and ",". Defining trigger keys will overwrite the exisiting ones.

```js
<Chips label="Email" triggerKeys={["t"]}>
```

`activeColors: object` This prop defines an object of strings. Add styles for various parts, for focused state of the component.

```js 
<Chips label="Email" activeColors={{
    border: pink.z500,
    font: red.z600,
    labelFont: pink.z500,
    chipBg:pink.z700,
    chipFont:"white",
    chipCross:"white",
    labelFont:pink.z500
}}>
```

`inert: object` This prop defines an object of strings. Add styles for various parts, for inert state of the component.

```js 
<Chips label="Email" inertColors={{
    border: pink.z500,
    font: red.z600,
    labelFont: pink.z500,
    chipBg:pink.z700,
    chipFont:"white",
    chipCross:"white",
    labelFont:pink.z500
}}>
```

## Autofocus 

### Example
See the last demo in the demo page to see the example in action.  
`NOTE:` Only focus, blur and value props of Chips' input element can be accessed with this method.
```js
export const AutoFocusExample = () => {
  const chipRef = useRef();
  const focus = () => {
    chipRef.current.focus();
  }

  return (
    <>
      <Chips label="Focus" ref={chipRef}/>
      <Button size="small" onClick={focus}>Focus Chips</Button>
    </>
  )
}
```