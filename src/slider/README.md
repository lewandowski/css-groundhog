---
layout: components_icons.hbs
meta:
  title: "Slider"
  description: "A range component for Dynatrace styled web entities with css and markup examples."
  keywords: "slider, range, Dynatrace, groundhog, css component"
since: 0.1.1
---


## Introduction
The Groundhog **slider** component visually enhances the standard html `<input type="range">` element. The tile usually holds text and an icon representing an action.

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
