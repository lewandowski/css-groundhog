---
layout: components_icons.hbs
meta:
  title: "Expandable"
  description: "An expandable component for Dynatrace styled web entities with css and markup examples."
  keywords: "expandable, Dynatrace, groundhog, css component"
---

## Introduction

The expandable component is used for sections of a page that are hidden by default and can be expanded by the user.

## Including an expandable section

1. First add a link with the `expandable__trigger` class and include the expandable headline.
```html
<a href="#" class="expandable__trigger">Click me</a>
```

2. Than create an element that contains the expandable content and add the `expandable__content` class.
```html
<div class="expandable__content">...</div>
```

3. Finally put header and content into a section and and add the `expandable` class.
```html
  <div class="expandable">
    <a href="#" class="expandable__trigger">Click me</a>
    <div class="expandable__content">
      <p>Expandable content</p>
    </div>
  </div>
```

## Expandable versions

If you want to separate the expandable section from the rest of the content when it's active, add the `expandable--separated` class to the expandable container.
```html
  <div class="expandable expandable--separated">
    <a href="#" class="expandable__trigger">Click me</a>
    <div class="expandable__content">
      <p>Expandable content</p>
    </div>
  </div>
```

## States

| state name | effect |
|------------|--------|
| `.is-active` | Expands the `expandable__content` area and (optionally) sets the borders on top of the active `expandable` area (only if `expandable--separated` is set). |
