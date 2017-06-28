---
layout: components_icons.hbs
meta:
  title: "Tile"
  description: "A tile component for Dynatrace styled web entities with css and markup examples."
  keywords: "tile, button, card, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **tile** is a visual block representing an action or link on the page. It is typically accompanied by a label above.

## Including a slider
1. To include a Groundhog slider add a `<input type="range">` and a `<label>` element. Include the necessary text content.
```html
<label>Label</label>
<input type="range">
```

2. Add the necessary Groundhog classes, ids and type to the elements.
```html
<label for="i0" class="label">Label</label>
<input class="slider" id="i0" type="range">
```

3. Add min, max and default values (optional)
```html
<label for="i0" class="label">Label</label>
<input class="slider" id="i0" type="range" min="0" max="100" value="50">
```
