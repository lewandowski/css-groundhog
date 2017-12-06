---
layout: components_icons.hbs
meta:
  title: "Table"
  description: "A table component for Dynatrace styled web entities with css and markup examples."
  keywords: "table, Dynatrace, groundhog, css component"
since: 0.1.1
---


## Introduction
The Groundhog **table** usually holds multiple columns of text. The table component is used to present  information in a structured format.


## Table versions
The Groundhog table appears in three versions:

* Standard table `table`
* Responsive table `table--responsive`
* The [expandable table](../table-expandable/)


## Including a table
1. To include a Groundhog table add a `<table>` element. Add other table elements like in the example. Include the necessary text.
```html
<table class="table">
  <thead>
    <tr>
      <th>header</th>
      <th>header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>content</td>
      <td>content</td>
    </tr>
  </tbody>
</table>
```
2. Add the necessary Groundhog classes to the elements class attribute.
```html
<table class="table">...</table>
```
3. The table is ready to use


## Available classes for table
| class name | effect |
|------------|--------|
| `.table` | Base class for the table element |
| `.table--responsive` | Sets the table to behave responsively |
