---
layout: components_icons.hbs
meta:
  title: "Datepicker"
  description: "A datepicker component for Dynatrace styled web entities with css and markup examples."
  keywords: "Datepicker, Dynatrace, groundhog, css component"
since: 5.2.0
---

## Introduction
The Groundhog **datepicker** component consists of a button that triggers a visual block representing selectable dates.

## Including the datepicker component

1. To include a datepicker component into your project, first create the html structure according to the example:

```html
<div>
  <button>
    Jan 01, 2018
  </button>
  <div>
    <div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M189.246 446L364.49 270.758v-29.52L189.245 66l-41.735 41.742L295.764 256 147.51 404.252z"/></svg>        
      </button>
      <span>January</span>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M189.246 446L364.49 270.758v-29.52L189.245 66l-41.735 41.742L295.764 256 147.51 404.252z"/></svg>
      </button>
    </div>
    <div>
      <table>
        <tr>
          <th>Mon</th>
          <th>Tue</th> 
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th> 
          <th>Sat</th>
          <th>Sun</th>
        </tr>
        <tr>
          <td><button disabled>30</button></td>
          <td><button disabled>31</button></td> 
          <td><button class="btn--selected">1</button></td>
          <td><button>2</button></td>
          <td><button>3</button></td> 
          <td><button>4</button></td>
          <td><button>5</button></td>
        </tr>
      </table>
    </div>
  </div>
</div>
```

2. To add the visual enhancements of Groundhog, add the necessary classes to the elements' class attributes.

```html
<div class="datepicker">
  <button class="btn btn--datepicker">
    Jan 01, 2018
  </button>
  <div class="datepicker__calendar">
    <div class="datepicker__month">
      <button class="btn btn--datepicker__previous">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M189.246 446L364.49 270.758v-29.52L189.245 66l-41.735 41.742L295.764 256 147.51 404.252z"/></svg>        
      </button>
      <span>January</span>
      <button class="btn btn--datepicker__next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M189.246 446L364.49 270.758v-29.52L189.245 66l-41.735 41.742L295.764 256 147.51 404.252z"/></svg>
      </button>
    </div>
    ...
```

3. To make the calendar expandable add the `data-target` and the appropriate `id` elements.

```html
<div id="datepicker" class="datepicker">
  <button data-target="#datepicker" class="btn btn--datepicker">
    ...
```

## Additional attributes for the caption
| attribute name | effect |
|----------------|--------|
| `datepicker`      | Sets the basic styles for the datepicker |
| `btn--datepicker`      | Enhances the button style like in the examples |
| `datepicker__calendar`      | Will set the styling for the calendar overlay |
| `datepicker__month`      | Will enhance the styling of the month, previous and next buttons in the calendar |
| `btn--datepicker__previous`      | Enhances the styling of the previous button |
| `btn--datepicker__next`      | Enhances the styling of the next button |

