$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if ($(window).width() <= 991) {
            // if larger or equal
            $(".hoverHide").hover(function() {
                $(".hide").css("display", "none");
            }, function() {
                $(".hide").css("display", "block");
            })
        }
        if ($(window).width() >= 992) {
            $(".hoverHide").hover(function() {
                $(".hide").css("display", "block");
            })
        }
    });
    $(window).resize();
    $(".navbar-toggler").click(function() {
        $(".navbar-toggler").toggleClass("navbar-toggler-position", "button:focus");
    });
});