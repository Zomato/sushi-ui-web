# Carousel

```js
import Carousel from "sushiweb/Carousel";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Carousel

```js
<Carousel
  componentData={componentData}
  componentToRender={Component}
  height="350px"
/>
```

#### Props

### Accessibility

- `Left` move to the previous view
- `Right` move to the next view
- `Home` move to the first view
- `End` move to the last view

`componentData: array` This prop defines the map of props required for each slide of Carousel. This is a required prop.

```js
<Carousel componentData={[{ src: "https://xyz" }, { src: "https://abc" }]} />
```

`componentToRender: node` This prop defines the Component which will be rendered as slide of Carousel. This is a required prop.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  isResponsive
  height="225px"
  slidesToShow={3}
  slidesToShowTab={2}
  slidesToShowMobile={1}
/>
```

#### Additional Props

`carouselWidth:string` This prop defines the width of carousel component. By default it's value is 100%.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  carouselWidth="500px"
/>
```

`height:string` This prop defines the height of carousel slide. By default it's value is 200px.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  height="350px"
/>
```

`dots:bool` This prop defines whether to show dots below carousel or not. By default it is true.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  dots={false}
/>
```

`slidesToShow:number` This prop defines the number of slides to show. By default it's value is 1.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  slidesToShow={2}
/>
```

`slidesToScroll:number` This prop defines the number of slides to shift. By default it's value is 1.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  slidesToShow={2}
  slidesToScroll={2}
/>
```

`infinite:bool` This prop defines whether carousel is infinite or not. By default it's value is true.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  infinite={false}
/>
```

`defaultTheme:bool` This prop defines whether carousel theme is default or restaurant. By default it's value is true.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  defaultTheme={false}
/>
```

`autoScroll:bool` This prop defines whether carousel is autoscroll or not. By default it's value is false.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  autoScroll
/>
```

`autoScrollTimeout:number` This prop defines after how much milliseconds slide moves. By default it's value is 3000.

```js
<Carousel
  componentData={componentData}
  componentToRender={props => <img src={props.src} />}
  autoScroll
  autoScrollTimeout={4000}
/>
```
