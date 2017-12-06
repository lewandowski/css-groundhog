---
layout: components_icons.hbs
meta:
  title: "Input"
  description: "A input component for Dynatrace styled web entities with css and markup examples."
  keywords: "input, form, form element, Dynatrace, groundhog, css component"
since: 0.1.1
---


## Introduction
The Groundhog **input** component visually enhances the standard html `<input>` element. It is used to handle user input. It is typically accompanied by a label above. Additionally, there can be a hint text underneath the input.


## Including an input
1. To include a Groundhog input add an `<input>` and a `<label>` element. Include the necessary text content.
```html
<label>Name</label>
<input>
```
2. Add the necessary Groundhog classes, ids and type to the elements.
```html
<label for="i0" class="label">Name</label>
<input type="text" class="inputfield" id="i0"/>
```
3. Add a hint text (optional)
```html
<label for="i1" class="label">Name</label>
<input type="text" class="inputfield" id="i1"/>
<p class="hint" id="i1">Hint text</p>
```

## Available classes for button
| class name | effect |
|------------|--------|
| `.inputfield` | Sets the styling for the input |
| `.inputfield--date--placeholder` | Sets the styling for date watermarks |
| `.inputfield--search` | Sets the styling for search inputs |
| `.hint` | Sets the styling for the hint text |
| `.label` | Sets the label styling |
| `.hint` | Sets the styling for the hint text |
