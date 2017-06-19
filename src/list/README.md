---
layout: components.hbs
  meta:
    title: "Lists"
    description: "A list component for Dynatrace styled web entities with css and markup examples."
    keywords: "list, unordered, ordered, steps, structure, Dynatrace, groundhog, css component"
---

## Introduction

The Groundhog **list** visually enhances the default `<ul>` and `<ol>` list styling and nested versions. Keep in mind that the Groundhog list component does not apply to default `<ul>` and `<ol>` elements. The `.list` class has to be specifically set on the root element.

## Including the list component

1. To include a Groundhog list add a `.list` class to the `<ul>` or `<ol>` tag. That's it.
```html
<ul class="list">
  <li>first list item</li>
  <li>second list item</li>
  <li>third list item</li>
</ul>
```
2. Add a wrapping `<div>` with a [theme class][themeClass] to set the theme (optional, just for `<ul>`):
```html
<div class="theme--blue">
  <ul class="list">
    <li>first list item</li>
    <li>second list item</li>
    <li>third list item</li>
  </ul>
</div>
```

## Nested lists

It is possible to nest unordered lists.
```html
<ul class="list">
  <li>first list item</li>
  <li>
    second list item
    <ul>
      <li>first nested list item</li>
    </ul>
  </li>
</ul>
```
```html
<ol class="list">
  <li>first list item</li>
  <li>
    second list item
    <ol>
      <li>first nested list item</li>
    </ol>
  </li>
</ol>
```

## Number `<div>` or `<p>` elements
It is possible to number blocks by adding the `.step` class.
```html
<div class="step">
  <p>First block</p>
</div>
<div class="step">
  <p>Second block</p>
</div>
```

## Available classes for lists

| class name | effect |
|------------|--------|
| `.list` | Base class for unordered and ordered lists |
| `.step` | Class for numbering blocks |


## Available themes for unordered lists

The default theme for the unordered list is `turquoise`, other available themes are:

| class name | theme color |
| ---------- | ----------- |
| `.theme--blue` | Base class blue theme |
| `.theme--purple` | Base class purple theme |
| `.theme--green` | Base class green theme |
| `.theme--royalblue` | Base class royalblue theme  |

[themeClass]: #available-themes-for-unordered-lists


## Additional notes

To reset list styles use the following snippet:
```css
ul {
  list-style: none;
  padding-left: 0;
}

ul li:before {
  position: absolute;
  content: none;
  margin: 0;
  padding: 0;
  display: none;
  width: auto;
  height: auto;
  float: none;
}
```
