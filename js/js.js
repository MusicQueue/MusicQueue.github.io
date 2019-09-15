/* Navigation Bar Active Section */
var navbar = document.getElementById("navbar");
var items = navbar.getElementsByClassName("nav-item");
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$(document).ready(function() {
    $("a").on('click', function(event) {
        var navbarOffset = 64;

        if (this.hash !== "") {
            event.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').animate({
                    scrollTop: $target.offset().top - navbarOffset
                }, 900, 'swing', function() {
            });
        }
    });
});