
$(document).ready(function(){
	$('.login_form, .register_form').hide();

	$('#cart_list .btnNext').on('click', function() {
		$('.login_form').fadeIn(300);
		$('#scroll_1').hide();
		$('header').removeClass('navigation');
	})

	$('#cart_list .btn-default.close_modal').on('click', function() {
		$('#section5').removeClass('open_cart');
		$('#section5 .product_container').show();
		$('header').removeClass('black navigation');
		$('#section6').removeClass('open');
	})

	$('.login_button, .btn_facebook, .btn_vk, .regist_button').on('click', function() {
		$('#scroll_1').show();
		$('.login_form, .register_form').hide();
		$('header').addClass('navigation regist');
	})

	$('.regist_link').on('click', function() {
		$('.login_form').hide();
		$('.register_form').fadeIn(300);
	})



	

	$('.btnNext').click(function(){
		$('.nav-tabs > .active').next('li').find('a').trigger('click');

	});

	$('.btnPrevious').click(function(){
		$('.nav-tabs > .active').prev('li').find('a').trigger('click');
	});

	$('.all_orders').on('click', function() {
		$('.orders_block_1').show();
		$('.cart .my_orders_list').hide();
	})

	$('.close_order_block').on('click', function() {
		$('.orders_block_1, .orders_block_2').hide();
		$('.cart .my_orders_list').show();
	})

	$('.read_more_status_list').on('click', function() {
		$('.orders_block_2').show();
		$('.cart .my_orders_list').hide();
	});

	$('.order_list_table .read_more').on('click', function() {
		$('.orders_block_1, .orders_block_2').hide();
		$('.orders_block_3').show();
	});

	$('.btn_back').on('click', function() {
		$('.orders_block_3').hide();
		$('.orders_block_1').show();
	});

	var $table = $('table.order_list_table'),
	    $bodyCells = $table.find('tbody tr:first').children(),
	    colWidth;

	// Adjust the width of thead cells when window resizes
	$(window).resize(function() {
	    // Get the tbody columns width array
	    colWidth = $bodyCells.map(function() {
	    	 console.log($(this).width());
	        return $(this).width();

	    }).get();
	    
	    // Set the width of thead columns
	    $table.find('thead tr').children().each(function(i, v) {
	        $(v).width(colWidth[i]);
	    });    
	}).resize(); // Trigger resize handler

	$('.all_orders').on('click', function() {
		colWidth = $bodyCells.map(function() {
	    	 console.log($(this).width());
	        return $(this).width();

	    }).get();
	    
	    // Set the width of thead columns
	    $table.find('thead tr').children().each(function(i, v) {
	        $(v).width(colWidth[i]);
	    });    
	})
	
	

	function resizeScrenn(){
        if ($(window).width() >= 779){
      		$('.table_scroll').slimScroll({
		height: '355px',
		color: '#ABA9A9',
		size: '14px',
		alwaysVisible: true,
		distance: '20px',
		start: $('#child_image_element'),
		railVisible: true,
		railColor: '#EEEEEE',
		railOpacity: 0.3,
		wheelStep: 10,
		touchScrollStep: 3600,
		disableFadeOut: false
	});
      	} else{
                	}	
      }
      resizeScrenn();
      $(window).resize(function(){
      	resizeScrenn();
      });
	
});

