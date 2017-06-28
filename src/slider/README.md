---
layout: components_icons.hbs
meta:
  title: "Slider"
  description: "A range component for Dynatrace styled web entities with css and markup examples."
  keywords: "slider, range, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **slider** component visually enhances the standard html `<input type="range">` element. The tile usually holds text and an icon representing an action.

## Including a tile
1. To include a Groundhog tile add either a `<button>` element with the child elements as shown in the examples. Include the necessary text or [icon][icon] content. Add the classes to the elements as follows:
```html
<button class="tile tile--error">
  <div class="tile__header">
    <div class="tile__iconbox">
      <svg role="img" class="icon icon--small icon--white">
        <use xlink:href="#ruxit"></use>
      </svg>
    </div>
    <h1 class="tile__heading">L-W8-64-APMDay3</h1>
    <h2 class="tile__subheading">Linux (x84, 64-bit)</h2>
  </div>
  <p class="tile__content">Network traffic</p>
</button>
```

2. The tile is ready to use


## Using Icons with Tiles

To use tiles and icons together, you need the `icon` module as well as the
icon definition file.


## Available themes for tiles

The default theme for the tiles is `turquoise`, other available themes are:

| class name | theme color |
|------------|--------|
| `.theme--blue` | Base class blue theme |
| `.theme--purple` | Base class purple theme |
| `.theme--green` | Base class green theme |
| `.theme--royalblue` | Base class royalblue theme  |
| `.theme--error` | Base class error/red theme  |
| `.theme--gray` | Base class gray theme  |
