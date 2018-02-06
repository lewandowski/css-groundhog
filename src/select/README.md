---
layout: components_icons.hbs
meta:
  title: "Select"
  description: "A select component for Dynatrace styled web entities with css and markup examples."
  keywords: "select, dropdown, Dynatrace, groundhog, css component"
since: 0.1.1
---


## Introduction
The Groundhog **select** component visually enhances the standard html `<select>` element. The select usually holds a list of elements that can be expanded.


## Including a select
1. To include a Groundhog select add a `<select>` element. Include the necessary `<options>`.
```html
<select>
  <option>
  </option>
</select>
```
2. Add the necessary Groundhog classes and values to the elements.
```html
<select class="select">
  <option value="Banana">
  </option>
</select>
```
3. Add a label to the select (optional) and the appropriate ids.
```html
<label for="s1" class="label">Label</label>
<select class="select" id="s1">
  <option value="Banana">
  </option>
</select>
```

## Available mixins for select
| class name | effect |
|------------|--------|
| `select-container` | Basic styles for the select container element |
| `select-container-disabled` | Disabled select styles |
| `select-trigger` | Basic styles for the select trigger |
| `select-panel` | Styles for the panel (dropdown) element |
| `option-common` | Basic styles for options |
| `option-hover` | Hover styles for options |
| `option-selected` | Styling for selected options |
| `option-disabled` | Styling for disabled options |
