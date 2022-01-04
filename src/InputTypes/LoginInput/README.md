# Login Input

This component is used in login box. It adapts its view with respect to typed email or phone number.

```js
import LoginInput from "sushiweb/InputTypes/LoginInput";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Input

```js
<LoginInput
  width="100%"
  placeholder="Email/Phone"
  onChange={onChange}
  fnCountryChange={handleCountryChange}
/>
```

#### Props

`width: string` This prop sets width of the input.

`placeholder: string` This prop sets the placeholder/label of the input.

`onChange: func` callback function, gets triggered on input change. First param `e` or event and second param is a boolean which indicates if the value is phone or not. `true` defines phone and `false` defines email.

`fnCountryChange: func` This prop gets triggered when user chooses an country with isd code. it returns the ISD code of the country selected.

`defaultIsdCode: number` This prop sets the default isd code of input.
