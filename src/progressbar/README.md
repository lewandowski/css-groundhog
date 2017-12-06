---
layout: components_icons.hbs
meta:
  title: "Progress bar"
  description: "A progress bar component for Dynatrace styled web entities with css and markup examples."
  keywords: "Progress, Dynatrace, groundhog, css component"
since: 2.0.0
---

## Introduction
The Groundhog **progress bar** component visually enhances the standard html `<progress>` element. It is typically accompanied by a text - indicating the progress in numbers.  

## Including the progress bar component
1. To include a progress bar component into your project, first create the `<progress>` element and set `value` and `max` attribues:
```html
<progress value="50" max="100"></progress>
```
2. To add the visual enhancements of Groundhog, add the necessary class to the elements class attribute:
```html
<progress class="progressbar" value="50" max="100"></progress>
```
3. To additionally show the text - indicating the progress - add a `<span>` element and set `label--progressbar` to the elements class attribute, like shown in the examples:
```html
<span class="label--progressbar">50/100 days</span>
<progress class="progressbar" value="50" max="100"></progress>
```

## Available themes for the groundhog progress bar

The default theme for the progress bar is `turquoise`, other available themes are:

| class name | theme color |
|------------|--------|
| `.theme--blue` | Base class blue theme |
| `.theme--purple` | Base class purple theme |
| `.theme--green` | Base class green theme |
| `.theme--royalblue` | Base class royalblue theme  |