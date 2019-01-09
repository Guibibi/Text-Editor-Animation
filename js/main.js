/*jshint esversion: 6 */

const colorbox = document.getElementById('color-circle');
const inputs = [].slice.call(document.querySelectorAll('input'));
let clicks = 0;
/* TODO: Refactor all of this */
$(document).ready(function () {
    $("#color-circle").click(function () {
        if (clicks === 0) {
            $(".to-hide").addClass('hide');
            clicks = 1;
            $('.slider-container').removeClass('hide');
            $('.slider-container').addClass('animated fadeIn');
        } else {
            $(".to-hide").removeClass('hide');
            $('.slider-container').addClass('hide');
            $('.slider-container').removeClass('animated fadeIn');
            clicks = 0;
        }
    });
});