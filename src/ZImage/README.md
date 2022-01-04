# Z-Image

Lazy loaded image component.

## Import

```js
import ZImage from "sushiweb/ZImage";
```

## Example

```js
import ZImage from "sushiweb/ZImage";

<ZImage imgSrc={src} height="200px" width="400px" ratio={0.3} imgAlt="Sample image">
```

All the images will be loaded lazily (only when the component enters viewport).

## Props

`imgSrc: string` Image Source to load.

`imgAlt: string required` alt attribute of the image.

`width: string` width of the image.

`height: string` height of the image. By default it takes `auto`. Need to specify height in case of using shimmer and not base64 image.

`base64: string` Base64 link of the shimmer image. Shows base64 instead of shimmer when url is provided.

`burred: string` takes the lower quality image & shows it until the main image is loaded.

`ratio: number` The intersection ratio, in which the image would be loaded. `ratio={0.5}` means the image would be loaded when 50% of the component is visible in the viewport. By default the image is loaded as soon as the component enters the viewport.

`container: node` The element that is used as the viewport for checking visiblity of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

`doPreload: bool` set to true if the image needs to be loaded as soon as it is mounted.

`clickable: bool` set to true if the image needs transition before clicking.

Scroll the page to check the lazy effect.

<!-- STORY -->
