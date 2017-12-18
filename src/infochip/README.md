---
layout: components_icons.hbs
meta:
  title: "Infochip"
  description: "A infochip component for Dynatrace styled web entities with css and markup examples."
  keywords: "Infochip, information, summary, Dynatrace, groundhog, css component"
since: 5.1.0
---

## Introduction
The Groundhog **infochip** component is a styled element, usually two lines of text, a title and a description. It is typically accompanied by an icon.

## Including the infochip component
1. To include a infochip component into your project, first create the html structure like shown in the example:
```html
<div>
  <div>
    <div>
      My title
    </div>
    <div>
      Description
    </div>
  </div>
</div>
```

2. To add the visual enhancements of Groundhog, add the necessary classes to the elements class attributes:
```html
<div class="infochip">
  <div class="infochip__desc">
    <div class="infochip__desc__title">
      My title
    </div>
    <div>
      Description
    </div>
  </div>
</div>
```

3. For infochips with an icon, adapt the structue like this:
```html
<div class="infochip">
  <div class="infochip__icon">
    <svg role="img" class="icon icon--blue">
      <use xlink:href="#ruxit"></use>
    </svg>    
  </div>
  <div class="infochip__desc">
    <div class="infochip__desc__title">
      My title
    </div>
    <div>
      Description
    </div>
  </div>
</div>
```

4. Add the `title` attribute for hover functionality.
```html
...
  <div class="infochip__desc">
    <div class="infochip__desc__title" title="My title">
      My title
    </div>
...
```


## Additional attributes for the caption
| attribute name   | effect |
|------------------|--------|
| `infochip`       | Wrapper class for the infochip |
| `infochip__desc` | Styling for infochip text |
| `infochip__desc__title`       | Styles the infochip title |
| `infochip__icon`       | Wrapper for the infochip icon |
