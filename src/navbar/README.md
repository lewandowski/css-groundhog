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
The Groundhog navbar appears in two versions:

* With secondary navigation items `nav`
* Without secondary navigation items `nav has-no-secondary`


## Including the navbar
1. To include a Groundhog navbar follow the example templates above. The navbar consists of the following elements: a wrapper `<div>`, the primary nav list including optional secondary nav lists (`<ul>`), a container for buttons including the menu toggle and the search, and the company logo.

2. Add all necessary Groundhog classes for the elements mentioned in step 1. Use the `has-no-secondary` class on the nav's wrapper `<div>` if there is no need for a secondary navigation.

3. If a secondary navigation is used, nest the `<ul>` element within the `<li>` item of the pages' parent. Add classes from [Groundhog's expandable](/doc/components/expandable) for mobile behavior.
```html
<ul class="nav__list nav__list--primary">
  <li class="nav__item expandable expandable--nav">
    <a class="nav__link expandable__trigger" href="#">Solution & Pricing</a>
    <ul class="nav__list nav__list--secondary expandable__content">
      <li class="nav__item">
        <a class="nav__link" href="#">Overview</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#">Use cases</a>
      </li>
    </ul>
  </li>
</ul>
```

4. Add the menu toggle button to be able to show the navigation on small screens. Make sure that the `data-target` value is the same as the id of the nav bar.
```html
<button data-target="#nav-bar" class="nav__btn nav__btn--menutoggle">Menu</button>
...
<nav id="nav-bar" class="nav__bar">...</nav>
```

5. Add the search functionality and update the link to the search page. (Optional)
```html
<form action="/search/">
  <input type="search" class="inputfield inputfield--search nav__search js-search" name="searchterm"/>
</form>
```
```html
<a href="#" class="nav__search__icon"></a>
```

6. Update `<form>` action and attributes. (Optional)
  ```html
  <form action="/search/" data-results="/assets/data/search_results.json" data-titleprop="label"
    data-urlprop="path" data-maxresults="5" data-resultskey="results">
  ```
  * `action="/search/"`
  set the form's action.

  * `data-results="/assets/data/search_results.json"`
  sets the url for fetching the search results. (Optional, default: forms action attribute)

  * `data-resultskey="results"`
  sets the key for the list of search results. (Optional, default: results)

  * `data-maxresults="5"`
  sets the number of search results shown. (Optional, default: 10)

  * `data-titleprop="label"`
  sets the key for the search results' title. (Optional, default: label)

  * `data-urlprop="path"`
  sets the key for the search results' path. (Optional, default: url)

  Example results:
  ```json
  {
    "results": [
      {
        "label": "Test-Papaya",
        "url": "/test/test-papaya"
      }
    ]
  }
  ```

7. Adjust the breakpoints. (Optional)

The `$nav-breakpoint` sets the width where all menu items from the 'Menu' dropdown are shown in the navbar. The second breakpoint `$nav-search-to-icon-breakpoint` sets the width where the search link is replaced by a search input field, directly in the navbar.


## Available classes for navbar
| class name | effect |
|------------|--------|
| `.nav` | Base class for the navbar element |
| `.nav has-no-secondary` | Navbar without secondary navigation lists |

## Available classes for nav lists
| class name | effect |
|------------|--------|
| `.nav__list` | Base class for the nav list element |
| `.nav__list--primary` | Menu item list for primary nav |
| `.nav__list--secondary` | Menu item list for secondary nav |

## Available classes for nav items
| class name | effect |
|------------|--------|
| `.nav__item` | Base class for nav items |
| `.nav__item is-current` | Indicates that page or a child page is currently selected |
| `.nav__item--right` | For nav items on primary level only, moves them to the right of the navbar |
