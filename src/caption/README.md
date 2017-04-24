---
layout: components_icons.hbs
meta:
  title: "Caption"
  description: "A caption component for Dynatrace styled web entities with css and markup examples."
  keywords: "Caption, figcaption, img, image, Dynatrace, groundhog, css component"
---

## Introduction
The Groundhog **caption** component is a styled text element. It can hold `<a>` elements and is typically accompanied by image or illustrations.  

## Including the caption component
1. To include a caption component into your project, first create the `<img>` and `<p>` or `figcaption` elements:

```html
<img src="/assets/images/test-img.jpg" alt="test-img">
<p>My caption</p>
```

```html
<figure>
  <img src="/assets/images/test-img.jpg" alt="test-img">
  <figcaption>My caption</figcaption>
<figure>
```

2. To add the visual enhancements of Groundhog, add the necessary classes to the elements class attributes:

```html
<img src="/assets/images/test-img.jpg" alt="test-img">
<p class="caption">My caption</p>
```

```html
<figure class="img-container">
  <img src="/assets/images/test-img.jpg" alt="test-img">
  <figcaption class="caption">My caption</figcaption>
<figure>
```

## Additional attributes for the caption
| attribute name | effect |
|----------------|--------|
| `caption`      | Will enable text style like in the examples |
