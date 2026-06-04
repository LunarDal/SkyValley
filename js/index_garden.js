'use strict'


$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tab') === 'info') {
        $('html, body').animate({
            scrollTop: $('#intro').offset().top 
        }, 500);
    }
});
