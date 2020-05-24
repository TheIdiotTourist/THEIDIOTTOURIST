$(document).ready(function() {
    //SCOTLAND INSERTS
    $('#authNote').load("../html/scotland/scotlandAuthorNote.html"),
        $('#day1').load("../html/scotland/scotlandDay1.html"),
        $('#day2').load("../html/scotland/scotlandDay2.html"),
        $('#day3').load("../html/scotland/scotlandDay3.html"),
        $('#day4').load("../html/scotland/scotlandDay4.html"),
        $('#day5').load("../html/scotland/scotlandDay5.html"),
        $('#day6').load("../html/scotland/scotlandDay6.html"),
        $('#day7').load("../html/scotland/scotlandDay7.html"),
        $('#day8').load("../html/scotland/scotlandDay8.html"),
        $('#day9').load("../html/scotland/scotlandDay9.html"),
        $('#day10').load("../html/scotland/scotlandDay10.html"),
        $('#day11').load("../html/scotland/scotlandDay11.html"),
        $('#day12').load("../html/scotland/scotlandDay12.html"),
        $('#day13').load("../html/scotland/scotlandDay13.html"),
        $('#scotlandNav').load("../html/scotland/scotlandNav.html");
});

// URL updates and the element focus is maintained
// originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
//https://css-tricks.com/smooth-scrolling-accessibility/

// filter handling for a /dir/ OR /indexordefault.page
// function filterPath(string) {
//     return string
//       .replace(/^\//, '')
//       .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
//       .replace(/\/$/, '');
//   }

//   var locationPath = filterPath(location.pathname);
//   $('a[href*="#"]').each(function () {
//     var thisPath = filterPath(this.pathname) || locationPath;
//     var hash = this.hash;
//     if ($("#" + hash.replace(/#/, '')).length) {
//       if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
//         var $target = $(hash), target = this.hash;
//         if (target) {
//           $(this).click(function (event) {
//             event.preventDefault();
//             $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
//               location.hash = target; 
//               $target.focus();
//               if ($target.is(":focus")){ //checking if the target was focused
//                 return false;
//               }else{
//                 $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
//                 $target.focus(); //Setting focus
//               };
//             });       
//           });
//         }
//       }
//     }
//   });