# Astro [![Build Status](https://travis-ci.org/cferdinandi/astro.svg)](https://travis-ci.org/cferdinandi/astro)
A collection of five mobile-first navigation patterns. The "plus" version of each pattern includes an expand-and-collapse menu on small screens.

* **Basic | Basic Plus.** A centered navigation and logo.
* **Basic Left | Basic Left Plus.** A left-aligned navigation and logo.
* **Navbar | Navbar Plus.** An inline navigation and logo.
* **Navbar Left | Navbar Left Plus.** An inline navigation and logo with left-aligned navigation.
* **Stacked | Stacked Plus.** Stacked navigation and logo.

[Download Astro](https://github.com/cferdinandi/astro/archive/master.zip) / [View the demo](http://cferdinandi.github.io/astro/)

**In This Documentation**

1. [Getting Started](#getting-started)
2. [Installing with Package Managers](#installing-with-package-managers)
3. [Using Multiple Patterns](#using-multiple-patterns)
4. [Active Link Styling](#active-link-styling)
5. [Options & Settings](#options-and-settings)
6. [Browser Compatibility](#browser-compatibility)
7. [How to Contribute](#how-to-contribute)
8. [License](#license)
9. [Changelog](#changelog)
10. [Older Docs](#older-docs)



## Getting Started

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code. Unit tests are located in the `test` directory.

### 1. Include Astro on your site.

```html
<!-- Replace the * with your chosen version of Astro -->
<link rel="stylesheet" href="dist/css/astro-*-css.css">
<script src="dist/js/classList.js"></script>
<script src="dist/js/bind-polyfill.js"></script>
<script src="dist/js/astro-plus.js"></script>
```

Astro is [built with Sass](http://sass-lang.com/) for easy customization. If you don't use Sass, that's ok. The `css` folder contains compiled vanilla CSS.

The `_config.scss` and `_mixins.scss` files are the same ones used in [Kraken](http://cferdinandi.github.io/kraken/), so you can drop the `_astro-*.css` files right into Kraken without making any updates. Or, adjust the variables to suit your own project.

Plus versions of Astro require `astro-plus.js`, and [classList.js](https://github.com/eligrey/classList.js) and `bind-polyfill.js`, polyfills that extend ECMAScript 5 API support to more browsers. Basic versions can omit these files.

### 2. Add the markup to your HTML.

All five navigation patterns use the same markup structure, though the markup varies slightly between the Basic and Plus versions. For Plus versions of Astro, make sure that the `[data-nav-toggle]` value matches the ID of the `.nav-collapse` section.

#### Basic

```html
<nav class="nav-wrap">
	<a class="logo" href="#">My Brand</a>
	<ul class="nav">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
	</ul>
</nav>
```

#### Plus

```html
<nav class="nav-wrap">
	<a class="logo" href="#">My Brand</a>
	<a class="nav-toggle" data-nav-toggle="#nav-menu" href="#">Menu</a>
	<div class="nav-collapse" id="nav-menu">
		<ul class="nav">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</div>
</nav>
```


### 3. Initialize Astro.

```html
<script>
	astro.init();
</script>
```

If you're using a Plus version, initialize Astro in the footer of your page, after the content. And that's it, you're done. Nice work!



## Installing with Package Managers

You can install Astro with your favorite package manager.

* **NPM:** `npm install cferdinandi/astro`
* **Bower:** `bower install https://github.com/cferdinandi/astro.git`
* **Component:** `component install cferdinandi/astro`



## Using Multiple Patterns

For simplicity, each navigation pattern uses the same naming conventions. If you will be using more than one pattern on a project, you'll need to change the class names to avoid conflicts.

For example, if you were combining Astro Basic and Astro Stacked, you might rename `.nav` to `.nav-basic` and `.nav-stacked`, respectively.



## Active Link Styling

There's a placeholder in the CSS to add styling to the current page in the navigation menu.

```css
/*  Placeholder for active link styling */
/*  .nav > li.active > a { */
/*      Add your styles here */
/*  } */
```

*Note:* If you're using WordPress, check out [this great tutorial by Todd Motto](http://www.toddmotto.com/highlight-your-current-page-with-wordpress-conditionals) on how to add the `.active` class using a simple PHP function.



## Options and Settings

Astro includes smart defaults and works right out of the box. But if you want to customize things, it also has a robust API that provides multiple ways for you to adjust the default options and settings.

### Global Settings

You can pass options and callbacks into Astro through the `init()` function:

```javascript
astro.init({
	toggleActiveClass: 'active', // Class added to active dropdown toggles on small screens
	navActiveClass: 'active', // Class added to active dropdown content areas on small screens
	initClass: 'js-astro', // Class added to `<html>` element when initiated
	callbackBefore: function ( toggle, navID ) {}, // Function that's run before a dropdown is toggled
	callbackAfter: function ( toggle, navID ) {} // Function that's run after a dropdown is toggled
});
```

### Use Astro events in your own scripts

You can also call Astro's navigation toggle event in your own scripts.

#### toggleNav()
Expand or collapse a navigation menu.

```javascript
astro.toggleNav(
	toggle, // Node that toggles the dropdown action. ex. document.querySelector('#toggle')
	navID, // ID of the navigation content wrapper. ex. '#nav-menu'
	options, // Classes and callbacks. Same options as those passed into the init() function.
	event // Optional, if a DOM event was triggered.
);
```

**Example**

```javascript
astro.toggleNav( null, '#nav-menu' );
```

#### destroy()
Destroy the current `astro.init()`.

```javascript
astro.destroy();
```


## Browser Compatibility

Astro works in all modern browsers, and IE 9 and above.

Astro is built with modern JavaScript APIs, and uses progressive enhancement. If the JavaScript file fails to load, or if your site is viewed on older and less capable browsers, the Basic navigation patterns will be displayed instead of the Plus versions.



## How to Contribute

In lieu of a formal style guide, take care to maintain the existing coding style. Don't forget to update the version number, the changelog (in the `readme.md` file), and when applicable, the documentation.



## License

Astro is licensed under the [MIT License](http://gomakethings.com/mit/).



## Changelog

Astro uses [semantic versioning](http://semver.org/).

* v5.4.2 - August 31, 2014
	* Fixed event listener filter to account for sub elements.
* v5.4.1 - August 22, 2014
	* Fixed `eventHandler` function `event` variable reference.
* v5.4.0 - August 18, 2014
	* Switched to event bubbling approach.
	* Converted to Ruby Sass.
	* Fixed testing path.
* v5.3.2 - August 15, 2014
	* Updated UMD pattern to fix a few bugs.
* v5.3.1 - August 8, 2014
	* Added polyfill for `Functions.prototype.bind`.
	* Removed Sass paths from `gulpfile.js`.
* v5.3.0 - June 28, 2014
	* Added a `destroy()` method.
	* Updated unit tests.
* v5.2.2 - June 28, 2014
	* Fixed `extend()` function.
* v5.2.1 - June 19, 2014
	* Converted to gulp.js workflow.
	* Added unit testing.
	* Updated naming conventions.
	* Removed unused `_mixins.scss` file.
	* Added minified versions of files.
* v5.1.1 - June 19, 2014
	* Fixed factory/root/UMD definition.
* v5.1.0 - June 6, 2014
	* Converted to UMD module.
	* Replaced Buoy with classList.js polyfill.
	* Moved public APIs to exports variable.
	* Improved feature test.
	* Replaced Array.prototype.forEach hack with proper forEach function.
	* Added a more well supported trim function.
	* General code optimizations for better minification and performance.
	* Updated to JSDoc documentation (sort of).
	* Updated to three number versioning system.
	* Added package manager installation info.
* v5.0 - April 3, 2014
	* Converted from Buoy class helpers to `classList` with polyfill.
* v4.1 - February 27, 2014
	* Converted `_defaults` to a literal object
* v4.0 - February 24, 2014
	* Better public/private method namespacing.
	* Require `init()` call to run.
	* New API exposes additional methods for use in your own scripts.
	* Better documentation.
* v3.6 - February 5, 2014
	* Switched to a data attribute for the toggle selector (separates scripts from styles).
	* Added namespacing to IIFE.
	* Moved feature test to script itself for better progressive enhancement.
	* Updated looping method.
* v3.5 - December 4, 2013
	* Added Sass support.
* v3.4 - August 27, 2013
	* Added missing semicolon.
* v3.3 - August 26, 2013
	* Converted to an IIFE pattern.
	* Added Buoy micro-library.
* v3.2 - August 14,2013
	* Added `toggleNav` function to make code more DRY.
* v3.1 - August 12, 2013
	* Fixed IE 9/10 bug.
* v3.0 - August 9, 2013
	* Rewritten in vanilla JS.
	* Removed dependence on jQuery.
* v2.0 - June 7, 2013
	* Switched to MIT license.
* v2.0 - June 5, 2013
	* Removed `href` as element selector. Just `data-target` supported now.
* v1.1 - February 13, 2013
	* Renamed `example.html` to `index.html`.
	* Removed "Convert to Vanilla JS" from roadmap.
* v1.1 - February 10, 2013
	* Added placeholder active link styling.
* v1.1 - February 5, 2013
	* Switched to relative sizing (ems and %'s instead of px).
* v1.0 - January 31, 2013
	* Initial release.



## Older Docs

* [Version 4](https://github.com/cferdinandi/astro/tree/archive-v4)
* [Version 3](http://cferdinandi.github.io/astro/archive/v3/)