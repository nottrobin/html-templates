// A jQuery wrapper for HTML templates
(function( $ ) {
    function getTemplateContents(template) {
        // Check template exists
        if (template.length < 1) {
            if ( 'console' in window ) {
                  console.warn( 'jQuery.htmlTemplate: Template ' + templateId + ' not found' );
            }

            return [];
        }

        var templateElem = template.get(0);

        if (! ('content' in templateElem)) {
            $.error(
                'jQuery.htmlTemplate: Template '
                + templateId
                + ' not correctly instantiated (no "content" property)'
            );

            return [];
        }

        // Return a jQuery collection of cloned template elements
        return $(templateElem.content.cloneNode(true).childNodes);
    }

    $.fn.htmlTemplate = function(templateId) {
        // Find template contents from a child template
        return getTemplateContents(this.find('template#' + templateId));
    };

    $.htmlTemplate = function(templateId) {
        // Find template contents from template on page
        return getTemplateContents($('template#' + templateId));
    };
})( jQuery );
