### AnimateOnChange

```js
import AnimateOnChange from "sushiweb/tokens/AnimationsUtils/AnimateOnChange";
```

It can be helpful to let users know when something has changed in our UI. This component aims to help by adding an animation to any content that changes.

```js
    <AnimateOnChange>{value or child components}</AnimateOnChange>
```

<!-- STORY -->

<!-- PROPS -->

The `AnimateOnChange` component will automatically fade out old content and fade in the new content when the content changes. This could be a number or string or any child components.

The following (optional) properties can be used:

- animationIn
- animationOut
- className
- durationOut
- style

By default, the animation used is a fade out and in. You can specify an animation for both the `out` (when the old content is removed) and `in` (when new content is shown) stages of the animation.

You can reference these by name, for example:

```js

<AnimateOnChange animation="fade">{value or child components}</AnimateOnChange>
<AnimateOnChange animation="pop">{value or child components}</AnimateOnChange>
<AnimateOnChange animation="slide">{value or child components}</AnimateOnChange>
<AnimateOnChange animation="bounce">{value or child components}</AnimateOnChange>


<AnimateOnChange animationIn="popIn" animationOut="popOut">...</AnimateOnChange>
```

Last one will apply a `popOut` animation when removing the old content, and a `popIn` animation on the new content.

## Animations

Sushiweb includes some pre-built animations along with their associated keyframes. As well as supplying the animation names to the above components, you can also apply these animations directly to your components:

In this example, `popIn` evaluates to `${popin} 500ms cubic-bezier(0.19, 1, 0.22, 1) forwards`.

```js
import { animations } from "sushiweb/tokens/AnimationsUtils";

const MyComponent = styled.div`
  animation: ${animation.fadeIn};
`;
```

The following animations are included:

- fadeIn
- fadeOut
- fadeInUp
- popIn
- popOut
- bounceIn
- bounceOut
- slideIn
- slideOut
- shake
- swing

## Easings

As well as pre-built animations, this package includes a range of timing functions you can use in animations and transitions.

You can apply these to your component styles like so:

```js
import { easings } from "sushiweb/tokens/AnimationsUtils";

const MyComponent = styled.div`
  transition: opacity 0.5s ${easings.easeInOutExpo};
`;
```

The full list includes:

- linear
- easeInSine
- easeOutSine
- easeInOutSine
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInCubic
- easeOutCubic
- easeInOutCubic
- easeInQuart
- easeOutQuart
- easeInOutQuart
- easeInQuint
- easeOutQuint
- easeInOutQuint
- easeInExpo
- easeOutExpo
- easeInOutExpo
- easeInBack
- easeOutBack
- easeInOutBack
