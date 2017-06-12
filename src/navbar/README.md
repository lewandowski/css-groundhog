---
layout: components_icons.hbs
meta:
  title: "Navbar"
  description: "A navbar component for Dynatrace styled web entities with css and markup examples."
  keywords: "navbar, menu, menubar, navigation, css component"
---


## Introduction
The Groundhog **navbar** usually holds links and the logo. Additionally, there can be a search and a call to action button.


## Navbar versions
The Groundhog navbar appears in a two versions:

* With secondary navigation items `nav`
* Without secondary navigation items `nav has-no-secondary`


## Including the navbar
1. To include a Groundhog navbar add an `<ul>` element with multiple `<li>` items, for the menu items. The `<ul>` with secondary menu items is optional. Add a wrapper `<div>`.

2. Update all menu items' references and classes

  ```html
  <li class="nav__item">
    <a class="nav__link" href="#">Services</a>
  </li>
  ```

  ```html
  <li class="nav__item">
    <a class="nav__link nav__link--secondary" href="#">Company</a>
  </li>
  ```

3. (Optional) Add the search functionality and update the link to the search page.

  ```html
  <form action="/assets/data/search_results.json">
    <input type="search" class="inputfield inputfield--search nav__search js-search" name="searchterm"/>
  </form>
  ```

  ```html
  <a href="" class="nav__search__icon"></a>
  ```

4. Adjust the breakpoints

The `$nav-breakpoint` sets the width where all menu items from the 'Menu' dropdown are shown in the navbar. The second breakpoint `$nav-search-to-icon-breakpoint` sets the width where the search link is replaced by a search input field, directly in the navbar.


## Available classes for navbar
| class name | effect |
|------------|--------|
| `.nav` | Base class for the navbar element |
| `.nav has-no-secondary` | Navbar without secondary navigation items |
| `.nav__list--primary` | Menu item list for primary nav |
| `.nav__list--secondary` | Menu item list for secondary nav |
