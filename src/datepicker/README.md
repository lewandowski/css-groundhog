---
layout: components_icons.hbs
meta:
  title: "Datepicker"
  description: "A datepicker component for Dynatrace styled web entities with css and markup examples."
  keywords: "Datepicker, Dynatrace, groundhog, css component"
since: 5.2.0
---

## Introduction
The Groundhog **datepicker** component consists of a button that triggers a visual block representing selectable dates. It uses the [icon component](/doc/components/icons/).

## Including the datepicker component

1. To include a datepicker component into your project, first create the html structure according to the example:
```html
<div>
  <button>
    <svg role="img" class="icon icon--small">
      <use xlink:href="#clock"></use>
    </svg>
  Jan 01, 2018
  </button>
  <div>
    <div>
      <button>
        <svg role="img" class="icon icon--small">
          <use xlink:href="#arrow-left"></use>
        </svg>
      </button>
      <span>January 2018</span>
      <button>
        <svg role="img" class="icon icon--small">
          <use xlink:href="#arrow-right"></use>
        </svg>
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
      <button class="btn btn--datepicker__selectMonth">
        <svg role="img" class="icon icon--small">
          <use xlink:href="#arrow-right"></use>
        </svg>
      </button>
      <span>January</span>
      <button class="btn btn--datepicker__selectMonth">
        <svg role="img" class="icon icon--small">
          <use xlink:href="#arrow-right"></use>
        </svg>
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

4. Highlight the currently selected date by adding the `btn--selected` class to the elements class attributes.

5. Set the disabled state for dates that are not part of the currently shown month. 

## Additional attributes for the datepicker
| attribute name | effect |
|----------------|--------|
| `datepicker`      | Sets the basic styles for the datepicker |
| `btn--datepicker`      | Enhances the button style like in the examples |
| `datepicker__calendar`      | Will set the styling for the calendar overlay |
| `datepicker__month`      | Will enhance the styling of the month, previous and next buttons in the calendar |
| `btn--datepicker__selectMonth`      | Enhances the styling of the next/previous buttons |
| `btn--selected`      | Shows which date is currently selected |
| `disabled`      | Disabled state for date buttons that are not in the currently selected month |


