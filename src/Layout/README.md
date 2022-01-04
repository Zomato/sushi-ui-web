# Layout

It is a container component which acts as a layout and is customizable according to different screen types.

## Import

```js
import Layout from "sushiweb/Layout";
```

<!-- STORY -->

## Example

```js
import Layout from "sushiweb/Layout";

<Layout gap={10}>
  <Layout.Item colD={12} colT={6} colM={12}>
    This is div 1
  </Layout.Item>
  <LayoutItem colD={6} colT={6} colM={12}>
    This is div 2
  </Layout.Item>
  <LayoutItem colD={6} colT={4} colM={12}>
    This is div 3
  </Layout.Item>
</Layout>
```

This layout uses 12 grid columns as max width or 100% available width.
So if you want a div to occupy 50% of the parent's width, the column number should be 6.

### Layout.Item

This is the customizable component which should be used in the `Layout` component.
It takes three different props to specify its width.

#### Props

`colD: number` number of occupied columns for desktop screen.

`colT: number` number of occupied columns for tablet screen.

`colM: number` number of occupied columns for mobile screen.

`gap: number` pixel gap between items in number, .
