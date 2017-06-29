---
layout: components_icons.hbs
meta:
  title: "textarea"
  description: "A textarea component for Dynatrace styled web entities with css and markup examples."
  keywords: "textarea, input, form, form element, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **textarea** component visually enhances the standard html `<textarea>` element. It is used to handle user input. It is typically accompanied by a label above. Additionally, there can be a hint text underneath the input.


## Including a textarea
1. To include a Groundhog textarea add a `<textarea>` and a `<label>` element. Include the necessary text content.
```html
<label>Name</label>
<textarea></textarea>
```
2. Add the necessary Groundhog classes, ids and type to the elements.
```html
<label for="i0" class="label">Name</label>
<textarea class="textarea" id="i0" rows="4" cols="50" ></textarea>
```
3. Add a hint text (optional)
```html
<label for="i1" class="label">Name</label>
<textarea class="textarea" id="i1" aria-describedby="i0" rows="4" cols="50" ></textarea>
<p class="hint" id="i1">Hint text</p>
```
