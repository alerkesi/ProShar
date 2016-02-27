$(document).ready(function(){

	/*Step*/
	var owl = $("#steps .owl-carousel"),
	status = $("#owlStatus");

	owl.owlCarousel({
		navigation : false,
		afterAction : afterAction,
		singleItem : true,
		margin:50,
		pagination : false,
		afterAction : afterAction,
		responsive: true,
	});

	function updateResult(pos,value){
		status.find(pos).find(".result").text(value);
	}

	function afterAction(){
		updateResult(".owlItems", this.owl.owlItems.length);
		updateResult(".currentItem", this.owl.currentItem + 1);
	}

	var owl_ideology = $(".ideology_items.owl-carousel").owlCarousel({
		items : 4,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [880,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [640,1],
	});

	$(".navigation_step .next").click(function(){
		owl.trigger('owl.next');
	})
	$(".navigation_step .prev").click(function(){
		owl.trigger('owl.prev');
	})

	var owlTab = $("#galleryCarousel.owl-carousel");

	owlTab.owlCarousel({
		navigation : false,
		singleItem : true,
		margin:50,
		responsive: true,
	});

	/*News*/
	var owlNews = $("#oneNews.owl-carousel"),
	statusNews = $("#owlStatusNews");

	owlNews.owlCarousel({
		navigation : false,
		singleItem : true,
		margin:50,
		pagination : false,
		afterAction : afterActionNews,
		responsive: true,
	});

	function updateResultNews(pos,value) {
		statusNews.find(pos).find(".result_news").text(value);
	}

	function afterActionNews() {

		updateResultNews(".owlItems", this.owl.owlItems.length);
		updateResultNews(".currentItem", this.owl.currentItem + 1);

		this.$owlItems.removeClass('active');
		this.$owlItems.eq(this.currentItem).addClass('active');
		var imgCurrent = this.$owlItems.eq(this.currentItem).find('img.hidden').attr('src');
		this.$owlItems.eq(this.currentItem).parents('.fp-tableCell').children('.bg_section').css('background-image', 'url("'+ imgCurrent +'")');
	}

	$(".navigation_news .next").click(function(){
		owlNews.trigger('owl.next');
	})
	$(".navigation_news .prev").click(function(){
		owlNews.trigger('owl.prev');
	})

	var owlNewsList = $(".all_news .owl-carousel");

	owlNewsList.owlCarousel({
		items : 1.33,
		itemsCustom : false,
		itemsDesktop : [1199,1.33],
		itemsDesktopSmall : [959,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [640,1],

		pagination : true,
	});

	/*Photo*/
	var owlPhoto = $("#onePhoto.owl-carousel"),
	statusPhoto = $("#owlStatusPhoto");

	owlPhoto.owlCarousel({
		navigation : false,
		singleItem : true,
		margin:50,
		pagination : false,
		afterAction : afterActionPhoto,
		responsive: false,
	});

	function updateResultPhoto(pos,value) {
		statusPhoto.find(pos).find(".result_photo").text(value);
	}

	function afterActionPhoto() {
		updateResultPhoto(".owlItems", this.owl.owlItems.length);
		updateResultPhoto(".currentItem", this.owl.currentItem + 1);

		this.$owlItems.removeClass('active');
		this.$owlItems.eq(this.currentItem).addClass('active');
		var imgCurrent = this.$owlItems.eq(this.currentItem).find('img.hidden').attr('src');
		this.$owlItems.eq(this.currentItem).parents('.fp-tableCell').children('.bg_section').css('background-image', 'url("../'+ imgCurrent +'")');
	}

	$(".navigation_photo .next").click(function(){
		owlPhoto.trigger('owl.next');
	})
	$(".navigation_photo .prev").click(function(){
		owlPhoto.trigger('owl.prev');
	})

	var owlPhotoList = $(".all_photo .owl-carousel");

	owlPhotoList.owlCarousel({
		items : 1.33,
		itemsCustom : false,
		itemsDesktop : [1199,1.33],
		itemsDesktopSmall : [959,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [640,1],

		pagination : true,
	});

	/*Video*/
	var owlVideo = $("#oneVideo.owl-carousel"),
	statusVideo = $("#owlStatusVideo");

	owlVideo.owlCarousel({
		navigation : false,
		singleItem : true,
		margin:50,
		pagination : false,
		afterAction : afterActionVideo,
		responsive: false,
	});

	function updateResultVideo(pos,value) {
		statusVideo.find(pos).find(".result_video").text(value);
	}

	function afterActionVideo() {

		updateResultVideo(".owlItems", this.owl.owlItems.length);
		updateResultVideo(".currentItem", this.owl.currentItem + 1);

		this.$owlItems.removeClass('active');
		this.$owlItems.eq(this.currentItem).addClass('active');
		var imgCurrent = this.$owlItems.eq(this.currentItem).find('img.hidden').attr('src');
		this.$owlItems.eq(this.currentItem).parents('.fp-tableCell').children('.bg_section').css('background-image', 'url("'+ imgCurrent +'")');
	   

	}

	$(".navigation_video .next").click(function(){
		owlVideo.trigger('owl.next');
	})
	$(".navigation_video .prev").click(function(){
		owlVideo.trigger('owl.prev');
	})

	var owlVideoList = $(".all_video .owl-carousel");

	owlVideoList.owlCarousel({
		items : 1.33,
		itemsCustom : false,
		itemsDesktop : [1199,1.33],
		itemsDesktopSmall : [959,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [640,1],

		pagination : true,
	});

	/*Chemp*/
	var owlChemp = $("#oneChemp.owl-carousel"),
	statusChemp = $("#owlStatusChemp");

	owlChemp.owlCarousel({
		navigation : false,
		singleItem : true,
		margin:50,
		pagination : false,
		afterAction : afterActionChemp,
		responsive: true,
	});

	function updateResultChemp(pos,value) {
		statusChemp.find(pos).find(".result_chemp").text(value);
	}

	function afterActionChemp() {
		updateResultChemp(".owlItems", this.owl.owlItems.length);
		updateResultChemp(".currentItem", this.owl.currentItem + 1);

		this.$owlItems.removeClass('active');
		this.$owlItems.eq(this.currentItem).addClass('active');
		var imgCurrent = this.$owlItems.eq(this.currentItem).find('img.hidden').attr('src');
		this.$owlItems.eq(this.currentItem).parents('.fp-tableCell').children('.bg_section_chemp').css('background-image', 'url("../'+ imgCurrent +'")');
		/*console.log(imgCurrent);*/
	}

	var owlChempList = $(".all_chemp .owl-carousel");

	owlChempList.owlCarousel({
		items : 1.33,
		itemsCustom : false,
		itemsDesktop : [1199,1.33],
		itemsDesktopSmall : [959,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [640,1],

		pagination : true,
	});

	$(".navigation_chemp .next").click(function(){
		owlChemp.trigger('owl.next');
	})
	$(".navigation_chemp .prev").click(function(){
		owlChemp.trigger('owl.prev');
	})

	/*Product*/
	var owlProduct = $("#oneProduct.owl-carousel"),
	statusProduct = $("#owlStatusProduct");

	owlProduct.owlCarousel({
		navigation : false,
		singleItem : true,
		margin:50,
		pagination : false,
		afterAction : afterActionProduct,
		responsive: true,
	});

	function updateResultProduct(pos,value) {
		statusProduct.find(pos).find(".result_product").text(value);
	}

	function afterActionProduct() {

		updateResultProduct(".owlItems", this.owl.owlItems.length);
		updateResultProduct(".currentItem", this.owl.currentItem + 1);

	}

	$(".navigation_product .next").click(function(){
		owlProduct.trigger('owl.next');
	})
	$(".navigation_product .prev").click(function(){
		owlProduct.trigger('owl.prev');
	})

	$(".all_product").on("click", ".col-sm-3", function(e){
		e.preventDefault();
		var number = $(this).data("owl");
		owlProduct.trigger("owl.goTo",number);
	});

	/*Button*/
	$('.all_video_button .all_button').on('click', function() {
		$('.all_video').addClass('open');
		$('footer').addClass('hidden');
	})
	$('.all_news_button .all_button').on('click', function() {
		$('.all_news').addClass('open');
		$('footer').addClass('hidden');
	})
	$('.all_photo_button .all_button').on('click', function() {
		$('.all_photo').addClass('open');
		$('footer').addClass('hidden');
	})
	$('.all_product_button .all_button').on('click', function() {
		$('.all_product').addClass('open');
		$('footer').addClass('hidden');
	})
	$('.all_video_button .all_button').on('click', function() {
		$('.all_video').addClass('open');
		$('footer').addClass('hidden');
	})
	$('.all_chemp_button .all_button').on('click', function() {
		$('.all_chemp').addClass('open');
		$('footer').addClass('hidden');
	})


	$('.more_diler .show_menu').on('click', function() {
		$('.more_diler').removeClass('open');
	})

	
	

	$('.section.pressroom .nav-tabs li a').on('click', function() {
		var myEm = $(this).attr('aria-controls');
		$('#galleryCarousel').removeAttr('class');
		$('#galleryCarousel').addClass(myEm);
	})

	$('.section.home .nav-tabs li a').on('click', function() {
		var myEm = $(this).attr('aria-controls');
		$('#homeLeftSidebar').removeAttr('class');
		$('#homeLeftSidebar').addClass(myEm);
	})

	$('#left_sidebar .title_tabs').on('click', function() {
		var myEm = $(this).data('action-page');
		$('#left_sidebar').removeAttr('class')
		$('#left_sidebar').addClass(myEm);
	})
	
	$('.table_scroll').slimScroll({
		height: '400px',
		color: '#999',
		size: '10px',
	});	

	$(document).mouseup(function (e) {
		var container = $(".all_list");
		if (container.has(e.target).length === 0){
			container.removeClass('open');
			$('footer').removeClass('hidden');
		}
	});

	

	$(document).mouseup(function (e) {
		var container = $(".more_diler");
		if (container.has(e.target).length === 0){
			container.removeClass('open');
			$('footer').removeClass('z_minus');
		}
	});


	$('.section').each(function(indx, element){
		var heightElm = $(element).height();
		$(element).find('.contentr').css('height', heightElm + 'px');
	});

	/*Modal*/
	$('.md-trigger').on('click', function(e) {
		e.preventDefault();
		var data = $(this).data('modal');
		var idModal = '#' + data;
		$(idModal).addClass('md-show');
		var wind = $(window).width();
	});
	$('.md-overlay, .close_modal, #hide_modal, #hide_modal_video, .more_product').on('click', function() {
		$('.md-modal').removeClass('md-show');
		$('#header').removeClass('open_modal open_modal_video open_modal_filter');
		/*$('header').removeClass('black')*/
	});
	$('.more_product').on('click', function() {
		$('.all_product').removeClass('open');
	});


	/*Owl Gallery*/
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var statusSync1 = $("#owlStatusSync1");
 
	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
	});
 
	sync2.owlCarousel({
		items : 1.5,
		itemsDesktop      : [1199,1.5],
		itemsDesktopSmall     : [979,1],
		itemsTablet       : [768,1],
		itemsMobile       : [479,1],
		pagination:true,
		responsiveRefreshRate : 100,
		itemsScaleUp:true,
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});
	$("#photo .read_more, .all_photo .read_more").on('click', function() {
		sync1.trigger('refresh.owl.carousel');
	});
	


	function updateResultSync1(pos,value) {
		statusSync1.find(pos).find(".result_sync_1").text(value);
	}

	function syncPosition(el){
		
		updateResultSync1(".owlItems", this.owl.owlItems.length);
		updateResultSync1(".currentItem", this.owl.currentItem + 1);

		var current = this.currentItem;
		$("#sync2")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
			center(current)
		}
	}

	$(".navigation_sync_1 .next").click(function(){
		sync1.trigger('owl.next');
	})
	$(".navigation_sync_1 .prev").click(function(){
		sync1.trigger('owl.prev');
	})


	$("#sync2").on("click", ".col-xs-2", function(e){
		e.preventDefault();
		var number = $(this).data("owl");
		sync1.trigger("owl.goTo",number);
	});

	$("#sync2").on('click', function() {
		$('.image_home').addClass('open_image');
		$('#header').addClass('open_photo');
	})
	$('.hide_image').on('click', function() {
		$('#header').removeClass('open_photo');
		$('.image_home').removeClass('open_image');
	})

 
	function center(number){

		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
			if(num === sync2visible[i]){
				var found = true;
			}
		}

		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}

	}

	/*Select style*/
	$('select.lang, select.event_select').wSelect();
	$('input.styleform, .form_radio, .select_form, .checkbox_form').styler();

	$('.mini_cart_link').click(function(){	  
		$(this).toggleClass('active');
		$('#cart').toggleClass('pullDown');
	});

	/*Tabs Cart*/

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

	$('.marker').on('click', function() {
		$('.marker.active').removeClass('active');
		$('.marker .popup').hide();
		$(this).addClass('active');
		$(this).children('.popup').show();
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

	$('.md-trigger, .all_button').on('click', function() {
		$('#header').addClass('open_modal');
	})

	$('#video .md-trigger, .all_video .all_button').on('click', function() {
		$('#header').addClass('open_modal_video');
	})

	$('.md-trigger[data-modal="modal-4"]').on('click', function() {
		$('#header').addClass('open_modal_filter');
	})
	
	$('.title_tabs').on('click', function() {
		$(this).parent().hide().siblings('.content_left_sidebar').fadeIn(500);
		var currentSlide = $('#galleryCarousel').children('.item.active');
		var currentBg = $('.section.pressroom').find('.bg_section_block.active');
		currentSlide.removeClass('active').siblings('.item').addClass('active');
		currentBg.removeClass('active').hide().siblings('.bg_section_block').fadeIn(500).addClass('active');
	})

	


	

});
	  
	$(function() {
		$(".scroll_maps").jScrollPane({
			autoReinitialise: true,
		});
	});

$(window).load(function() {
	$('#pre-block').fadeOut();
	$('#preloader').delay(100).fadeOut('slow');
})

var devWidth = $(window).width();

$(document).ready(function() {
	if(devWidth>959) {
		$('#content').fullpage({
			anchors: ['home', 'ideology', 'maps', 'pressroom', 'social_responsibility', 'products'],
			menu: '#menu nav',
			scrollingSpeed: 800,
			scrollOverflow: true,
			normalScrollElements: '#map_canvas',
		});
	}
	else {
		$('#content').fullpage({
			anchors: ['home', 'ideology', 'maps', 'pressroom', 'social_responsibility', 'products'],
			menu: '#menu nav',
			scrollingSpeed: 800,
			normalScrollElements: '.more_diler, .all_product.all_list',
		});
	}

	var positionLeft = $(".logo a").offset();
	$(".left_sidebar").css('left', positionLeft.left + 'px');
	$(".more_diler").css('left', positionLeft.left + 'px');
	
	var windowHeight = $('html').height();
	$('#modal-2 #sync1 img').css('max-height', windowHeight - 315 + 'px' );
	$('#scroll_block').css('height', windowHeight - 465 + 'px');
	$('.custom_navigation').css('top', windowHeight/2 - 62.5 + 'px');
	var mapsHeight = $('.section.maps').height();
	$('.scroll_maps > .container').css('height', mapsHeight + 'px');
});