# Grid Container

It is a container component which acts as a grid and is customizable according to different screen types.

## Import

```js
import ContainerGrid from "sushiweb/ContainerGrid";
```

<!-- STORY -->

## Example

```js
import ContainerGrid from "sushiweb/ContainerGrid";

<ContainerGrid
  columns="1 1 1"
  tabletColumns="1 2"
  mobileColumns="1 2"
  gridGap="1rem"
>
  <div class="box"> This is div 1 </div>
  <div class="box"> This is div 2 </div>
  <div class="box"> This is div 3 </div>
</ContainerGrid>;
```

#### Props

`columns: string` sets grid columns in `fr` for desktop screen.

`tabletColumns: string` sets grid columns in `fr` for tablet screen.

`mobileColumns: string` sets grid columns in `fr` for mobile screen.

`gridGap: string` sets grid gap for the grid container.

### Gridcontainer Item

This is a customizable element to use in grid container when grid-column needs to be set differently.
It comes in handy to justify a single container element in a grid row. You can define a grid item's column separately with this component.

```js
<ContainerGrid
  columns="1 1 1"
  tabletColumns="1 2"
  mobileColumns="1 2"
  gridGap="1rem"
>
  <div class="box"> This is div 1 </div>
  <div class="box"> This is div 2 </div>
  <div class="box"> This is div 3 </div>
  <ContainerGrid.Item tabletGridColumn="1/3">
    <div class="box"> This is div 4 </div>
  </ContainerGrid.Item>
  <ContainerGrid.Item tabletGridRow="1/3">
    <div class="box"> This is div 5 </div>
  </ContainerGrid.Item>
</ContainerGrid>
```

In this example the third element that is wrapped within `ContainerGrid.Item` component will take two columns in tablet screen. And will be center justified.

`tabletGridRow` and `tabletGridColumn` is used to set the grid column and grid row of a `ContainerGrid.Item`. Props-

`gridRow`, `gridColumn` for desktop, `tabletGridRow`, `tabletGridColumn` for tablet and `mobileGridRow`, `mobileGridColumn` for mobile screens.
