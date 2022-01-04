# OTP Input

This component is used in login box. It is used to provide OTP inputs.

```js
import OTPbox from "sushiweb/InputTypes/OTPbox";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic Input

```js
<OTPbox length={6} fnInputFill={handleOTPCallback} />
```

#### Props

`length: number` Sets length of the OTP field.

`fnInputFill: func` Callback function, gets triggered when all of the input fields are filled.

`inputType: oneOf(["number","text"])` sets type of OTP input.

`alignInput: oneOf(["left", "right", "center"])` aligns otp box

`isSecure: bool` tells if the OTP input is password type
