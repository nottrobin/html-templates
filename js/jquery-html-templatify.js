// A cross-browser polyfill for HTML templates
(function($) {
    function templatify() {
        // If template currently has no content
        if (! ('content' in this)) {
            var templateFragment = document.createDocumentFragment();

            // Add template elements to fragment
            $(this).clone().children().each(function() {
                templateFragment.appendChild(this);
            });

            // Remove template elements from the DOM
            $(this).empty();

            // Add the fragment as content
            this.content = templateFragment;
        }
    }

    $.htmlTemplatify = function() {
        // Set up content for all templates
        $(document).htmlTemplatify();
    }

    // Setup html templates inside an element
    $.fn.htmlTemplatify = function() {
        // templatify all template elements
        this.find('template').each(templatify);
    }
}(jQuery));
