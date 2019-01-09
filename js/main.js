/*jshint esversion: 6 */

const colorbox = document.getElementById('color-circle');
const inputs = [].slice.call(document.querySelectorAll('input'));
let clicks = 0;

$(document).ready(function () {
    $("#color-circle").click(function () {
        if (clicks === 0) {
            console.log("Hi")
            $(".to-hide").addClass('hide');
            clicks = 1;
            $('.slider-container').css('visibility', 'visible');
        } else {
            $(".to-hide").removeClass('hide');
            $('.slider-container').css('visibility', 'hidden');
            clicks = 0;
        }
    });
});