---
layout: components_icons.hbs
meta:
  title: "Footer"
  description: "A footer component for Dynatrace styled web entities with css and markup examples."
  keywords: "Footer, web, Dynatrace, groundhog, css component"
---

## Introduction
The Groundhog **footer** component visually enhances the standard html `<footer>` element. The footer component usually holds buttons and link lists.

## Including the footer component
1. To include a footer component into your project, first create the `<footer>` element:
```html
<footer>
  <div>
    <a href="https://www.facebook.com/Dynatrace">facebook</a>
  </div>
</footer>
```

2. To add the visual enhancements of Groundhog, add the necessary classes to the elements class attributes:
```html
<footer class="footer">
  <div class="footer__socials theme--dark">
    <a href="https://www.facebook.com/Dynatrace" class="footer__sociallink">facebook</a>
  </div>
</footer>
```

3. Add a list of links (optional). Links can be divided in multiple columns. To separate a column use the `footer__column__separated` class.

```html
<footer class="footer">
  <div class="footer__columns">
    <div class="footer__column__group">
      <div class="footer__column footer__column__separated">
        <h2>View this page in</h2>
        <ul class="footer__linklist">
          <li class="footer__linkitem">
            <a>German</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__column__group footer__column__linklists">
      <div class="footer__column">
        <h2>Capabilities</h2>
        <ul class="footer__linklist">
          <li class="footer__linkitem">
            <a>Application performance management (APM)</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

## Available classes for footer
| class name | effect |
|------------|--------|
| `.footer` | Sets the basic styling for the footer element |
| `.footer__sociallink` | Sets the styling for the social buttons |
| `.footer__columns` | Defines the link list area |
| `.footer__column__group` | Defines a column group |
| `.footer__column__separated` | Sets the styling for separated columns |
| `.footer__linklist` | Sets the styling for the link list |
| `.footer__linklist--horizontal` | Sets the styling for the horizontal link list |
| `.footer__linkitem` | Sets link styling to list elements |
