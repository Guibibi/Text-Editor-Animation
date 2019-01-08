/*jshint esversion: 6 */

const colorbox = document.getElementById('color-circle');
const inputs = [].slice.call(document.querySelectorAll('input'));

$(document).ready(function () {
    $("#color-circle").click(function () {
        $(".to-hide").toggleClass('hide');
    });
});