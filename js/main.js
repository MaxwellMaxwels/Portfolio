jQuery(document).ready(function($) {
"use strict";


$(".loader").delay(1000).fadeOut("slow");
$("#overlayer").delay(1000).fadeOut("slow");

// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 500) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(1000);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(1000);
	}
});
// Scroll Up
  $('#back-top a').on("click", function () {
	$('body,html').animate({
	  scrollTop: 0
	}, 800);
	return false;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}
});

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


});	
