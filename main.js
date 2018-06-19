/*eslint-env jquery*/
/*eslint no-undef: "error"*/
/*eslint-env browser*/
/*jslint browser: true*/
/*global $, jQuery, alert*/
// the comments abover are predefined JS comments, allowing
// Jquery to be used in the JS and JSlint environments.

$(document).ready(function () {
    // if happy face pressed, make it go to center
    // make sad face disappear
    "use strict";
    $('#col1').on('click', function () {
        $('#colCenter').fadeOut('slow');
        $('#col0').fadeOut('slow');
        $('#col1').animate({verticalAlign: "center"});
        $('#thanks').fadeIn('slow');
        // reload page after 4 seconds, redirecting user to index
        setTimeout(function () {location.reload(true); }, 4000);
    });
    //Same for this function, only with the sad face instead of happy
    $('#col0').on('click', function () {
        $('#colCenter').fadeOut('slow');
        $('#col1').fadeOut('slow');
        $('#col0').animate({verticalAlign: "center"});
        $('#thanks').fadeIn('slow');
        setTimeout(function () {location.reload(true); }, 4000);
    });
    
});