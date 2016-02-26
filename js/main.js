$(document).ready(function(){
	/*Select style*/
	$('select.lang, select.event_select').wSelect();
	$('input.styleform, .form_radio, .select_form, .checkbox_form').styler();

	$('.menu_button').on('click', function() {
		$('#menu').addClass('open');
	})

	$(document).mouseup(function (e) {
		var container = $("#menu");
		if (container.has(e.target).length === 0){
			container.removeClass('open');
		}
	});

	$('#menu .show_menu, #menu li a').on('click', function() {
		$('#menu').removeClass('open');
	})

	var sttt = 2781407662;

	window.setInterval(function() {
	sttt = sttt.toString();
	mynumb = parseInt(sttt) + 18;
	sttt = mynumb.toString();
	var zz = 0;
	for (n = sttt.length -1; n >= 0; n--){
	    zz++;
	    $('#k-'+zz).html(sttt[n]);
	}

	}, 1000);	
});

$(window).load(function() {
	$('#pre-block').fadeOut();
	$('#preloader').delay(100).fadeOut('slow');
})