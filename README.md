# HTML Templates - jQuery plugin


This is a jQuery plugin of two parts:
- setupTemplates() - A cross-browser polyfill for the `<template>` element
- cloneTemplate() - A jQuery method for retrieving template content as a jQuery element collection

## setupTemplates

A cross-browser polyfill for the `<template>` element, as per [the HTML Templates specification](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html).

### Usage

    jQuery.setupTemplates(); // setup all templates in the page
    // or
    jQuery('.templateContainer').setupTemplates(); // setup all templates under a specific element

### Explanation

To attempt to make `<template>` elements in all browsers behave follow [the HTML Templates specification](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html), the polyfill takes the following steps:

- If the `<template>` DOM object already has a `content` property, do nothing
- Otherwise, convert the contents of the `<template>` to a [DocumentFragment](https://developer.mozilla.org/en-US/docs/DOM/DocumentFragment)
- Save the DocumentFragment under the `content` property of the DOM element
- Empty the `<template>` element of all child DOM elements, so that they are removed from the DOM


