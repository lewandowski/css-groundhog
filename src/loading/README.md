---
layout: components_icons.hbs
meta:
  title: "Loading distractor"
  description: "A loading distractor for Dynatrace styled web entities with css and markup examples."
  keywords: "loading, distractor, spinner, Dynatrace, groundhog, css component"
---


## Introduction
The Groundhog **loading distractor** is an element, representing a saving or loading action. I can be combined with text. The small version of the loading distractor can be used for indicating saving of input fields and loading in buttons.


## Button versions
The Groundhog loading distractor appears in a two versions:

* Standard loading distractor `loading__distractor`
* Loading distractor for input fields and buttons `loading--small`


## Including a button
1. To include a Groundhog loading distractor add the `<svg>` element with a `<circle>`. Include the necessary text content.
```html
<svg>
   <circle></circle>
</svg>
```

2. Add the necessary Groundhog classes to the elements class attribute.
```html
<svg class="loading__distractor">
   <circle class="loading__path"></circle>
</svg>
```

3. The loading distractor is ready to use


## Available classes for button
| class name | effect |
|------------|--------|
| `.loading__distractor` | Base class for the loading distractor |
| `.loading__distractor--small` | Small version of loading distractor for input fields and buttons |
