---
layout: components_icons.hbs
meta:
  title: "Progress circle"
  description: "A progress circle component for Dynatrace styled web entities with css and markup examples."
  keywords: "Progress, Dynatrace, groundhog, css component"
since: 5.0.0
---

## Introduction

The Groundhog __progresscircle__ is a visual representation of a progress from 0 to 100. It can be used to visualize a percentage of a whole.

## Progress circle versions 

The Groundhog progresscircle has variable versions in differing colors and states:

* with & without an icon
* thin & bold
* color-themed
* warning state

## Including a progresscircle

Use the syntax from the examples above and modify the parameters as you see fit. Please leave the viewBox and pathdata unchanged.

`width="128px"` and `height="128px"` are for this documentations presentational purpopse only and can be removed to be controled by other layout mechanisms.


## Setting the progress

In modern browsers (all current browsers, no IE11) you can set the `--progress` as a custom property on the `.progresscircle` element.

```html
<div class="progresscircle" style="--progress: 25"></div>
```

If you need to support older browsers as well, you will have to set the progress manually to the `.progresscircle__progress` element. 

```js
// select the DOM-node however you see fit
const element = document.querySelector('.progresscircle__progress'); 

/**
* 1514 is the circumference of the circle and is a constant.
* this will not change unless you change the path data
*/
const progress = 1514 - (1514 / 100 * yourProgress);
element.style['stroke-dashoffset'] = progress;
```

## Using icons

Icons can be used via the `<use xlink:href="" />` element within the svg. Reference the id of the symbol you want to use within the `xlink:href=""`. See more at the [icon refercene page](/doc/components/icons/). 

## Available classes for progresscircle

There are two classes that can control the state of the progresscircle

| class name | effect |
|------------|--------|
| `.progresscircle--bold` | Boldens the circle outline |
| `.progresscircle--warning` | Enables the warning color on the progresscircle |


The default theme for the progresscircle is `turquoise`, other available themes are:

| class name | theme color |
|------------|--------|
| `.theme--blue` | Base class blue theme |
| `.theme--purple` | Base class purple theme |
| `.theme--green` | Base class green theme |
| `.theme--royalblue` | Base class royalblue theme  |

