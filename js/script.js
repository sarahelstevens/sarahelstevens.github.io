
$(document).ready(function(){

//Mobile Menu Slide Down


var h = window.innerHeight;
	nav = $('nav').height();

function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
    $('.mobile-nav').text('Close').css('color' ,'#000').css('font-weight' , '500');
    $('nav.open').css('height', h);

    if ($('.mobile-nav').hasClass('open') === false) {
    	$('.mobile-nav').text('Menu').css('color' ,'#3B0CD2').css('font-weight' , '500');
    	$('nav').css('height', nav);
    }
  }

  $('.mobile-nav').click(toggleMobileNav);

});
