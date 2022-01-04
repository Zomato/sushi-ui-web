# Toast

Toasts provide brief messages about app processes through a message.

## Import

```js
import Toast from "sushiweb/Toast";
```

<!-- STORY -->

## Prerequisite

To use toasts, you should import `ToastContainer` from Components and wrap your `App` with it.

```js
import ToastContainer from "sushiweb/ToastContainer";

return (
  <ToastContainer>
    <App />
  </ToastContainer>
);
```

## Example

### Basic Toast

```js
import Toast from "sushiweb/Toast";
import Button from "sushiweb/Button";

<Button appearance="outline" onClick={showToast}>
  Show Toast
</Button>
<Toast
  show={show}
  align="bottom"
  onClose={handleClose}
  text="Hi! I am a toast."
/>

const showToast = () => {
  // open the toast by changing `show` to `true`
}

const handleClose = () => {
  // close the toast by setting `show` to `false`
}
```

#### Props

`show: bool` this prop sets the visibility state of the toast.

`text: string` sets the message inside a toast.

`align: string` sets alignment of the toast in the screen. It can be any of `"topRight", "topLeft", "top", "bottomRight", "bottomLeft"` and `"bottom"`. By default it is set to `"bottom"` as the alignment.

`type: string` sets the state of the modal. It can be any of `"success", "successSolid", "warning", "warningSolid", "error"`, `"errorSolid"` and `"darkDefault"` . By default it is set to `"default"`.

`onClose: func` callback function, triggered when user clicks the close icon. It is also triggered after the set auto-hide duration.

`autoHideDuration: number` sets the duration in seconds to hide the toast automatically. By default it is set to 3 seconds.

```js
<Toast
  show={show}
  align="bottom"
  onClose={handleClose}
  text="Hi! I am a toast."
  type="warning"
  autoHideDuration={5}
/>
```
