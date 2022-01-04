# Heading :zap:

Typography heading.

```meta
  category: Typography
  description: Headings Could be used for defining semanting H* tag for highlighting text
```

```js
import H1 from "sushiweb/Typography/Heading/H1";
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

<!-- STORY HIDE END -->

## Examples

### Basic Heading

```js
import H1 from "sushiweb/Typography/Heading/H1";

<H1>This is H1 Heading</H1>;
```

#### Heading types

`H1`, `H2`, `H3`, `H4`, `H5` and `H6`. It is possible to import as standalone component

```js
import H1 from "sushiweb/Typography/Heading/H1";
import H2 from "sushiweb/Typography/Heading/H2";
import H3 from "sushiweb/Typography/Heading/H3";
import H4 from "sushiweb/Typography/Heading/H4";
import H5 from "sushiweb/Typography/Heading/H5";
import H6 from "sushiweb/Typography/Heading/H6";


return(
    <H1>This is H1 Heading</H1>  // 900
    <H2>This is H2 Heading</H2>  // 800
    <H3>This is H3 Heading</H3>  // 700
    <H4>This is H4 Heading</H4>  // 600
    <H5>This is H5 Heading</H5>  // 500
    <H6>This is H6 Heading</H6>  // 400
);
```

<!-- PROPS -->

| Heading |  FontSize   |   FontWeight |
| ------- | :---------: | -----------: |
| H1      | z900 (44px) | regular(400) |
| H2      | z800 (36px) | regular(400) |
| H3      | z700(30px)  | regular(400) |
| H4      | z600(24px)  | regular(400) |
| H5      | z500(20px)  | regular(400) |
| H6      | z400(18px)  | regular(400) |
