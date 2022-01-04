# Button :zap:

Application button.

```meta
  category: Actions
  description: Buttons are great to ask users for action
```

```js
import Button from "sushiweb/Button";
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- PROPS -->

## Examples

### Basic button

```js
<Button>Save</Button>
```

#### Button types

`Outlined Button`, `Contained Button`, `Text Button`, `Icon Button`. It is possible to import as standalone component or pass `appearance` property. Default value is `contained`.

Supported colors are only primary colors and can be passed through `btnColor` property.

```js
  <Button onClick={action("button-click=default")}>Button</Button>
  <Button appearance="outline" btnColor="white">
      White Button
    </Button>
  <Button btnColor="red">Red</Button>
  <Button appearance="outline" btnColor="red">outline</Button>
  <Button appearance="outline" btnColor="pink">Pink</Button>
```

#### Icons

Icons are passed to component via `icon` property. They are aligned to left by default but can be changed by `iconAlign` property.

```js
import Button from 'sushiweb/Button';

render() {
  return (
    <Button icon="star" iconAlign="left">Starred</Button>
    <Button icon="location" iconAlign="right">Locate Me</Button>
  );
}
```

#### Sizes

```js
import Button from 'Components/Button';

render() {
  return (
    <Button size="large">Large Button</Button>
  );
}
```

### Button States

```js
import Button from 'sushiweb/Button';

render() {
  return (
    <Button disabled>Disabled Button</Button>
    <Button loading>Button Loading</Button>
  );
}
```
