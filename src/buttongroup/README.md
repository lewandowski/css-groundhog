---
layout: components_icons.hbs
meta:
  title: "Buttongroup"
  description: "A grouping element that joins multiple buttons to a group, merging them visually"
  keywords: "buttons, group, tabs, Dynatrace, groundhog, css component"
since: 5.0.0
---

## Introduction

The Groundhog buttongroup joins buttons, which are contextually connected. Most of the time they can function like tabs, where only one can be active. 

## Create a buttongroup

To create a buttongroup, create a wrapping element around the buttons you want to wrap. Give the wrapping element the attribute `class="buttongroup"` to enable the buttongroup styling. 

Buttons within a buttongroup can be marked as active by adding the class `is-active` to the link / button element. 

## Available themes for buttongroup

The default theme for the buttongroup is `turquoise`, other available themes are:

| class name | theme color |
| ---------- | ----------- |
| `.theme--blue` | Base class blue theme |
| `.theme--green` | Base class green theme |
| `.theme--purple` | Base class purple theme |
| `.theme--royalblue` | Base class royalblue theme  |
| `.theme--turquoise` | Base class turquoise theme  |