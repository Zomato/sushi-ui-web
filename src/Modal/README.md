# Modal

A modal displays content that temporarily blocks interactions with the main view of a site.

## Import

```js
import Modal from "sushiweb/Modal";
```

<!-- STORY -->

## Example

```js
import Modal from "sushiweb/Modal";
import Button from "sushiweb/Button";

<Button appearance="outline" onClick={handleClick}>
  Open Modal
</Button>
<Modal visible={isVisible} onClose={handleClose}>
  <div> This is a simple Modal component demo</div>
</Modal>

const handleClose = () => {
  // close the modal or do operations
}
```

#### Props

`id: string` this prop give unique id to modal container.

`visible: bool` this prop sets the visibility state of the modal.

`onClose: func` Callback function, triggered when user clicks outside of the modal or the close icon in the modal.

#### Additional Props

`mode: string` Defines the theme of the modal

`type: string` Defines size of the modal. Availbale types are `"small"`, `"medium"` and `"large"`. By default it takes max-content if no type is provided.

`title:string` Sets the title of the modal in simple string. The style is not mutable.

`titleComponent: node` In case a custom header is to be set, pass that component as the value of `titleComponent`. `title` takes precedence over titleComponent.

`showCloseIcon: bool` Shows or hides close Icon. Shows by default;

`slideOnMobile: bool` Opens the modal with slide up animation in mobile devices. Set to false by default.

`isCentered: bool` Makes the modal center aligned in the screen. Works best for small modals which does not cover the whole screen.

`padding: string` Sets padding in the modal.

`preventFocus: bool` Restricts modal from taking focus, incase you want to focus something inside modal when it opens. (Shown in the example above: Input is focused when modal opens) 

```js
<Modal
  visible={isVisible}
  onClose={handleClose}
  type="medium"
  title="Modal Title"
  titleComponent={<h2>Hey There</h2>}
  showCloseIcon={false}
  slideOnMobile
  isCentered
  padding="2rem"
  preventFocus
>
  <div> This is a simple Modal component demo</div>
</Modal>
```
