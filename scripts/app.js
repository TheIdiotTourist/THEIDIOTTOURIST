$(document).ready(function() {
    // This will fire when document is ready:
    $('#indexMeta').load("./html/PARTIALS/index_meta.html"),
        $('#indexNav').load("./html/PARTIALS/index_nav.html"),
        $('#idiotCarousel').load("./html/PARTIALS/carousel.html"),
        $('#footerDiv').load("./html/PARTIALS/footer.html"),
        $('#tertMeta').load("../html/PARTIALS/tertiary_meta.html"),
        $('#tertNav').load("../html/PARTIALS/tertiary_nav.html"),
        $('#tertFooterDiv').load("../html/PARTIALS/footer.html");
});