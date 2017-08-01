---
layout: components_icons.hbs
meta:
  title: "Subnav"
  description: "A subnav component for Dynatrace styled web entities with css and markup examples."
  keywords: "subnav, menu, menubar, navigation, css component"
---


## Introduction
The Groundhog **subnav** usually holds links to child pages of the current page. It appears together with the [navbar](/doc/components/navbar/) instead of the [breadcrumbs component](/doc/components/breadcrumbs/).

## Subnav versions
The Groundhog subnav appears in two versions:

* Without expandable behavior on mobile: `<nav class="subnav__bar">`
* With expandable behavior on mobile: `<nav class="subnav__bar expandable expandable--subnav">`

## Including the subnav
1. To include a Groundhog subnav add a `<ul>` element that contains links to pages as `<li>` items and wrap the list in a `<nav>` and a `<div>` element.

2. Add the necessary Groundhog classes to the elements.
```html
<div class="subnav">
  <nav class="subnav__bar">
    <ul class="subnav__list">
      <li class="subnav__item">
        <a class="subnav__link" href="#">Speakers</a>
      </li>
      <li class="subnav__item">
        <a class="subnav__link" href="#">Schedule</a>
      </li>
      ...
    </ul>
  </nav>
</div>
```

3. To add the expandable behavior for small screens add an expandable trigger and all necessary classes from Groundhog's [expandable component](/doc/components/expandable/). The text of the expandable trigger should always be the same as the linktext of the current subnav item.
```html
<div class="subnav">
  <nav class="subnav__bar expandable expandable--subnav">
    <a href="#" class="expandable__trigger">Schedule</a>
    <ul class="subnav__list expandable__content">
      <li class="subnav__item">
        <a class="subnav__link" href="#">Speakers</a>
      </li>
      <li class="subnav__item is-current">
        <a class="subnav__link" href="#">Schedule</a>
      </li>
      ...
    </ul>
  </nav>
</div>
```

## Available classes for subnav and its elements
| class name | effect |
|------------|--------|
| `.subnav` | Base class for the subnav element |
| `.subnav__bar expandable--subnav` | Adds expandable behavior to subnav bar on mobile |
| `.nav__item is-current` | Indicates that page or a child page is currently selected |
