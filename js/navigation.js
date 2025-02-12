
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function() {
    const siteNavigation = document.getElementById('site-navigation');
    const button = siteNavigation?.querySelector('button');

    if (!siteNavigation || !button) {
        return;
    }

    // Toggle mobile menu
    button.addEventListener('click', function() {
        siteNavigation.classList.toggle('toggled');
        
        if (button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false');
        } else {
            button.setAttribute('aria-expanded', 'true');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!siteNavigation.contains(event.target)) {
            siteNavigation.classList.remove('toggled');
            button.setAttribute('aria-expanded', 'false');
        }
    });

    // Get all the link elements within the menu.
    const links = siteNavigation.getElementsByTagName('a');

    // Get all the link elements with children within the menu.
    const linksWithChildren = siteNavigation.querySelectorAll('.menu-item-has-children > a');

    // Toggle focus each time a menu link is focused or blurred.
    for (const link of links) {
        link.addEventListener('focus', toggleFocus, true);
        link.addEventListener('blur', toggleFocus, true);
    }

    // Toggle focus each time a menu link with children receives a touch event.
    for (const link of linksWithChildren) {
        link.addEventListener('touchstart', toggleFocus, false);
    }

    /**
     * Sets or removes .focus class on an element.
     */
    function toggleFocus() {
        if (event.type === 'focus' || event.type === 'blur') {
            let self = this;
            // Move up through the ancestors of the current link until we hit .nav-menu.
            while (!self.classList.contains('nav-menu')) {
                // On li elements toggle the class .focus.
                if ('li' === self.tagName.toLowerCase()) {
                    self.classList.toggle('focus');
                }
                self = self.parentNode;
            }
        }
    }
})();
