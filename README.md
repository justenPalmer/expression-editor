## Expression Editor

Use the expression editor to assist in input and modifying MapboxGL expressions. [Live demo version](https://justenpalmer.github.io/expression-editor/)

The easiest way to see the editor in action is to paste an expression into the textarea. Try this one:

``` JSON
[
  "match",
  [
    "get",
    "primary_use"
  ],
  "residential",
  "#8BC34A",

  "commercial",
  "#1976D2",

  "industrial",
  "#FFEB3B",

  "mixed use",
  "#009688",

  "planned district",
  "#009688",

  "open space",
  "#E0F2F1",

  "#EEEEEE"
]
```

Check out the documentation for MapboxGL expressions [here](https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions).