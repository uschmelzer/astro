var astro = function ( toggle, menus, cb ) {

	'use strict';

	// Variables
	toggle = document.querySelector( toggle );
	menus = document.querySelectorAll( menus );

	// Sanity check
	if ( !toggle || menus.length === 0 ) return;

	// Show and hide navigation menu
	var toggleNav = function () {

		// Toggle the '.active' class on the toggle element
		toggle.classList.toggle( 'active' );

		for (var i = 0, len = menus.length; i < len; i++) {
			menus[i].classList.toggle( 'active' );
		}

		// Run callback
		if ( cb && typeof(cb) === 'function' ) {
			cb(toggle, pws);
		}

	};

	// Add class to <html> element on load
	document.documentElement.classList.add( 'astro' );

	// Listen for menu clicks
	toggle.addEventListener('click', function () {

		// Prevent default click event
		if ( toggle.tagName.toLowerCase() === 'a' ) {
			event.preventDefault();
		}

		// Toggle nav
		toggleNav();

	}, false); // Listen for click events and run event handler

};