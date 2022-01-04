# Spinner :zap:

Loading Spinner

```meta
Category: Progress indicator
Description: Spinner is Component intended to
inform the user that an operation is in progress,
to reassure that the system is not hung or waiting for user input.
```

```js
import Spinner from "sushiweb/Spinner/Spinner";
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- PROPS -->

## Examples

### Basic Spinner

```js
import Spinner from "sushiweb/Spinner/Spinner";
...
 <Spinner />
```

### Circular Spinner

```js
import SpinnerCircular from "sushiweb/Spinner/SpinnerCircular";
...
 <SpinnerCircular />
```

### Spinner Sizes

```js
import Spinner from "sushiweb/Spinner/Spinner";
...

<Spinner size="small"/>
<Spinner size="Medium"/>
<Spinner size="large"/>
```

### Spinner Colors

```js
import Spinner from "sushiweb/Spinner/Spinner";
import { red, yellow, green, orange, purple, teal } from "sushiweb/tokens/color";
...

<Spinner color={red.z500} />
<Spinner color={yellow.z500} />
<Spinner color={green.z500} />
<Spinner color={orange.z500} />
<Spinner color={purple.z500} />
<Spinner color={teal.z500} />
<Spinner color="cyan" />
```
