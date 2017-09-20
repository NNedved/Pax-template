$(document).ready(function(){
      $('.index-slider').slick({
		variableWidth: false,
		vertical: false,
        dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 5000,
    });
});

$(".index-videoblock a").click( function(e) {
	var rickroll = '<iframe src="https://player.vimeo.com/video/45196609?autoplay=1" width="716" height="447" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="margin-top: 40px; margin-left: -23px;"></iframe>';
	e.preventDefault();
	$(this).remove();
	$(".index-videoblock").append(rickroll);
});


var popUp = $(".popup");
var overlay = $(".popup-overlay");
var popUpCloseButton = $(".popup .popup-close");
var popUpSubmitButton = $(".popup .button");
var priceButtons = $(".button-price");

for (var i = 0; i < priceButtons.length; i++) {
	$(priceButtons[i]).click( function(e) {
		e.preventDefault();
		overlay.fadeIn();
		popUp.fadeIn();
	});
}

$(popUpCloseButton).click ( function(e) {
	e.preventDefault();
	overlay.fadeOut();
	popUp.fadeOut();
});

$(popUpSubmitButton).click ( function(e) {
	e.preventDefault();
	overlay.fadeOut();
	popUp.fadeOut();
});

$(window).keydown( function(event) {
	if ( (event.which == 27 ) && ($(popUp).css("display") == "block")) {
		overlay.fadeOut();
		popUp.fadeOut();
	}
});