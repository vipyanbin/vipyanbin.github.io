$(window).load(function() {
	var _divCircle = $(".circle");
	var _divNav = $(".header-nav");
	var timer = setInterval(changeCircle,3000);
	_divCircle.click(doClick);
	_divCircle.mouseout(doMouseOut);
	_divCircle.mouseover(doMouseOver);
	//nav:hover鏁堟灉
	$('.lava_lamp li').each( function(index, val) {
		 /* iterate through array or object */
		 if($(this).hasClass('current')){
		 	if($(this).index() > 5){
		 		$('.lava_lamp').css('width',$('.lava_lamp li').size()*90);
		 		$('.nav-more span').html('鈼€');
		 	}
		 }
	});
	
	$(".lava_lamp").lavaLamp({
		fx: "easeOutBack", 
		speed: 600, 
		click: function(event, menuItem) {
					return true; 
				} 
	});
	
	//寤跺睍nav
	$('.nav-more').click(function(event) {
		/* Act on the event */
		var talWid =  ($('.lava_lamp li').size()-1)*90;
		var width = $('.lava_lamp').width();
		if(width < talWid){
			$('.lava_lamp').animate({'width': talWid},2000, 'easeOutBack',function() {$('.nav-more span').html('鈼€');});
		}else{
			var num = 6;
			$('.lava_lamp li').each(function(index, val) {
				 /* iterate through array or object */
				  if($(this).hasClass('current')){
				  	if($(this).index() > 5){
				  		num = $(this).index() +1;
				  	}
				  }
			});
			$('.lava_lamp').animate({'width': 90*num},2000, 'easeOutBack',function() {$('.nav-more span').html('鈻�');});
		}
	});
	//鎵撳紑鎼滅储妗�
	$('.open-search').click(function(event) {
		$('.info-r').slideDown(400,"easeInQuad",function(){
			$('.header-search').slideDown('400',"easeInQuad",function(){});
		});
		
	});
	$('.close-search').click(function(event) {
		$('.header-search').slideUp(400,"easeInQuad",function(){
			$('.info-r').slideUp('400',"easeInQuad",function(){});
		});
		

	});
	function divBack(){
		var marginTop = parseInt(_divNav.css("margin-top"));
		var _cParent = _divCircle.parent();
		var marginTopCir = parseInt(_cParent.css("margin-top"));
		if(marginTop == -450){
			_divNav.animate({"margin-top": "0px"}, 800,"easeOutBack");
			_cParent.animate(
				{"margin-top": "455px"},800, "easeOutBack");
		}else if(marginTop == 0){
			_divNav.animate(
				{"margin-top": "-450px"},1000,"jswing");
			_cParent.animate(
				{"margin-top": "48px"},1000,"jswing");
			
		}
		
				
	}
	function doClick(){
		divBack();
	}
	function doMouseOver(event){
		clearInterval(timer);
	}
	function doMouseOut(event){
		timer = setInterval(changeCircle,3000);
	}
	function changeCircle(){
		var line = $(".griphook-container .line-blue");
		line.animate({'height': '25'},500,function(){
			line.animate({'height': '20'},500,function(){
				line.animate({'height': '23'},400,function(){
					line.animate({'height': '20'},400);
				});
			});
		});
	}
	//鐐瑰嚮澶撮儴瀵艰埅
	$('.header-nav-title a').click(function(event) {
		var index = parseInt($(this).attr('class').replace('header-nav-title-',''))*-1000;
		$('.header-nav-title li').removeClass();
		$(this).parent().addClass('current');

		$('.header-nav-main-ul').animate({'left': index},1000,'jswing');
	});
	
	//骞翠唤鐐瑰嚮
	$('.year').click(function(event) {
		var id = $(this).parents('.zother').attr('id');
		var year = parseInt($(this).attr('id').replace('year',''));
		$('#'+id+' .year').removeClass('current');
		$(this).addClass('current');
		$('#'+id+' .clock').css('background-image','url(../../images/bg/bg_clock_'+year+'.jpg)');
		
	});
	
	//news-subject
	$('.news-subject-part a').hover(function() {
		$(this).find('.icon-click').animate({'top': '60'},400,'linear');
	}, function() {
		$(this).find('.icon-click').animate({'top': '-46'},400,'linear');
	});
	var marketItemsLength = $('.news-market-items li').size()*250;
	$('.news-market-items').css('width',marketItemsLength);
	$('.news-market-prev').click(function(event) {
		var itemsLeft = parseInt($('.news-market-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft+250;
		if(left <= 0){
			$('.news-market-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.news-market-next').click(function(event) {
		var itemsLeft = parseInt($('.news-market-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft-250;
		if(left >= -(marketItemsLength-250*4)){
			$('.news-market-items').animate({'left': left}, 400,'linear');
		}
	});
	
	var itemsLength = $('.news-subject-items li').size()*250;
	$('.news-subject-items').css('width',itemsLength);
	$('.news-subject-prev').click(function(event) {
		var itemsLeft = parseInt($('.news-subject-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft+250;
		if(left <= 0){
			$('.news-subject-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.news-subject-next').click(function(event) {
		var itemsLeft = parseInt($('.news-subject-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft-250;
		if(left >= -(itemsLength-250*4)){
			$('.news-subject-items').animate({'left': left}, 400,'linear');
		}
	});
	//tecDetail.html
	var tecLength = $('.tec-detail-items li').size()*1000;
	$('.tec-detail-items').css('width',tecLength);
	$('.tec-prev').click(function(event) {
		var itemsLeft = parseInt($('.tec-detail-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%1000 != 0){ return;}
		var left = itemsLeft+1000;
		if(left <= 0){
			$('.tec-detail-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.tec-next').click(function(event) {
		var itemsLeft = parseInt($('.tec-detail-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%1000 != 0){ return;}
		var left = itemsLeft-1000;
		if(left >= -(tecLength-1000*1)){
			$('.tec-detail-items').animate({'left': left}, 400,'linear');
		}
	});
	$('#dock a').click(function(event) {
		/* Act on the event */
		var index = $(this).index();
		var left = index * -1000;
		$('.tec-detail-items').animate({'left': left}, 400,'linear');
	});
	//news-ad
	var addItemsLength = $('.news-ad-items li').size()*250;
	$('.news-ad-items').css('width',addItemsLength);
	$('.news-ad-prev').click(function(event) {
		var itemsLeft = parseInt($('.news-ad-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft+250;
		if(left <= 0){
			$('.news-ad-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.news-ad-next').click(function(event) {
		var itemsLeft = parseInt($('.news-ad-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft-250;
		if(left >= -(addItemsLength-250*4)){
			$('.news-ad-items').animate({'left': left}, 400,'linear');
		}
	});
	//news-album
	var albumItemsLength = $('.news-album-items li').size()*250;
	$('.news-album-items').css('width',albumItemsLength);
	$('.news-album-prev').click(function(event) {
		var itemsLeft = parseInt($('.news-album-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft+250;
		if(left <= 0){
			$('.news-album-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.news-album-next').click(function(event) {
		var itemsLeft = parseInt($('.news-album-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft-250;
		if(left >= -(albumItemsLength-250*4)){
			$('.news-album-items').animate({'left': left}, 400,'linear');
		}
	});
	//news-videoNews
	var videoNewsItemsLength = $('.news-videoNews-items li').size()*250;
	$('.news-videoNews-items').css('width',videoNewsItemsLength);
	$('.news-videoNews-prev').click(function(event) {
		var itemsLeft = parseInt($('.news-videoNews-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft+250;
		if(left <= 0){
			$('.news-videoNews-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.news-videoNews-next').click(function(event) {
		var itemsLeft = parseInt($('.news-videoNews-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%250 != 0){ return;}
		var left = itemsLeft-250;
		if(left >= -(videoNewsItemsLength-250*4)){
			$('.news-videoNews-items').animate({'left': left}, 400,'linear');
		}
	});
	//tecDetail.html
	var tecLength = $('.tec-detail-items li').size()*1000;
	$('.tec-detail-items').css('width',tecLength);
	$('.tec-prev').click(function(event) {
		var itemsLeft = parseInt($('.tec-detail-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%1000 != 0){ return;}
		var left = itemsLeft+1000;
		if(left <= 0){
			$('.tec-detail-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.tec-next').click(function(event) {
		var itemsLeft = parseInt($('.tec-detail-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%1000 != 0){ return;}
		var left = itemsLeft-1000;
		if(left >= -(tecLength-1000*1)){
			$('.tec-detail-items').animate({'left': left}, 400,'linear');
		}
	});
/*	$('#dock a').click(function(event) {
		 Act on the event 
		var index = $(this).index();
		var left = index * -1000;
		$('.tec-detail-items').animate({'left': left}, 400,'linear');
	});*/
	//fancybox
	//$('.fancybox').fancybox();
	$(".albumList-item").fancybox({
				padding: 5,
				openEffect : 'elastic',
				openSpeed  : 300,
				closeEffect : 'elastic',
				closeSpeed  : 300,
				closeClick : true
	});
	
	$(".salesList-a").fancybox({
				padding: 5,
				openEffect : 'elastic',
				openSpeed  : 300,
				closeEffect : 'elastic',
				closeSpeed  : 300,
				closeClick : true
	});
	$('.tg-a').fancybox({
				padding: 5,
				openEffect : 'elastic',
				openSpeed  : 300,
				closeEffect : 'elastic',
				closeSpeed  : 300,
				closeClick : true
	});
	$('.tscb-a').fancybox({
		padding: 5,
		openEffect : 'elastic',
		openSpeed  : 300,
		closeEffect : 'elastic',
		closeSpeed  : 300,
		closeClick : true
	});
	//news 
	$('.nav-sec-news li a').click(function(event) {
		var id = $(this).attr('id');
		if(id == undefined || id == ''){ return false;}
		id = id.replace('item-','');
		$('.nav-sec-news li a').removeClass('current');
		$(this).addClass('current');
		$('.zother:visible').slideUp(600,'jswing',function(){
			$('#'+id).slideDown(600);
		});
		

	});
	//nav click
	
	$('.nav-sec-sales li a').click(function(event) {
		/* Act on the event */
		var id = $(this).attr('id');
		if(id == undefined || id == ''){ return false;}
		id = id.replace('item-','');
		$('.nav-sec-sales li a').removeClass('current');
		$(this).addClass('current');
		$('.zother:visible').slideUp(600,'jswing',function(){
			$('#'+id).slideDown(600);
		});
	});
	//sales
	$('.table-a').click(function(event) {
		/* Act on the event */
		var id = $(this).attr('id').replace('table-','');
		$('.table-a').parent().removeClass('sales-serve-items_hover').addClass('sales-serve-items_normal');
		$(this).parent().removeClass('sales-serve-items_normal').addClass('sales-serve-items_hover');
		$('.sales-c-r').hide();
		$('#sales-c-r-'+id).show();
	});

	//investor
	$('.table-b').click(function(event) {
		/* Act on the event */
		var id = $(this).attr('id').replace('table-','');
		var pId = $(this).parents('.zother').attr('id');
		$('.table-b').parent().removeClass('investor-report-items_hover').addClass('investor-report-items_normal');
		$(this).parent().removeClass('investor-report-items_normal').addClass('investor-report-items_hover');
		$('#'+pId+' .investor-c-r').hide();
		$('#'+pId+' #investor-c-r-'+id).show();
	});
	
	$('.table-c').click(function(event) {
		/* Act on the event */
		var id = $(this).attr('id').replace('table-','');
		var pId = $(this).parents('.zother').attr('id');
		$('.table-c').parent().removeClass('investor-report-items_hover').addClass('investor-report-items_normal');
		$(this).parent().removeClass('investor-report-items_normal').addClass('investor-report-items_hover');
		$('#'+pId+' .investor-c-r').hide();
		$('#'+pId+' #investor-inform-'+id).show();
	});
	$('.nav-sec-investor li a').click(function(event) {
		/* Act on the event */
		var id = $(this).attr('id');
		if(id == undefined || id == ''){ return false;}
		id = id.replace('item-','');
		$('.nav-sec-investor li a').removeClass('current');
		$(this).addClass('current');
		$('.zother:visible').slideUp(600,'jswing',function(){
			$('#'+id).slideDown(600);
		});
	});

	//sales-case
	var caseItemsLength = $('.sales-case-items li').size()*207;
	$('.sales-case-items').css('width',caseItemsLength);
	$('.sales-case-prev').click(function(event) {
		var itemsLeft = parseInt($('.sales-case-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%207 != 0){ return;}
		var left = itemsLeft+207;
		if(left <= 0){
			$('.sales-case-items').animate({'left': left}, 400,'linear');
		}
	});
	$('.sales-case-next').click(function(event) {
		var itemsLeft = parseInt($('.sales-case-items').css('left'));
		//闃插啀鐐瑰嚮
		if(itemsLeft%207 != 0){ return;}
		var left = itemsLeft-207;
		if(left >= -(caseItemsLength-207*3)){
			$('.sales-case-items').animate({'left': left}, 400,'linear');
		}
	});
	//fancybox
	$('.fancybox').fancybox();
	$('.his-item').fancybox({
				helpers : {
					title : {
						type : 'inside'
					}
				}
	});
	$(".albumList-item").fancybox({
				padding: 5,
				openEffect : 'elastic',
				openSpeed  : 300,
				closeEffect : 'elastic',
				closeSpeed  : 300,
				closeClick : true
	});
	
	$(".salesList-a").fancybox({
				padding: 5,
				openEffect : 'elastic',
				openSpeed  : 300,
				closeEffect : 'elastic',
				closeSpeed  : 300,
				closeClick : true
	});
	

	
	//sets
	$('.sets-top-items').css('width',$('.sets-top-items li').size()*1200);
	$('.sets-bottom-items').css('width',$('.sets-bottom-items li').size()*250);
	$('.sets-top-uls-main').css('width',$('.sets-top-uls-main .sets-top-uls-item').size()*parseInt($('.sets-top').width()));
	if($('.sets-bottom-items').find('.sets-item-b').size() != 0){
		$('.sets-bottom-items').css('width',$('.sets-bottom-items li').size()*167);
	}
	$('.intro-more').click(function(event) {
		/* Act on the event */
		var src = $(this).find('img').attr('src');
		if(src == src.replace('blue')){
			$(this).parent().animate({'height':'28px'}, 400);
			src = src.replace('grey','blue');
		}else{
			$(this).parent().css({'height':'auto'});
			//$(this).parent().animate({'height':'auto'}, 400);
			src = src.replace('blue','grey');
		}
		$(this).find('img').attr('src',src);
	});
	
	$('.sets-bottom-prev').click(function(event) {
		var _sb = $(this).nextAll('.sets-bottom-main').find('.sets-bottom-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%250 != 0){ return;}
		left = left + 250;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
		}

	});
	$('.sets-bottom-next').click(function(event) {
		var _sb = $(this).prevAll('.sets-bottom-main').find('.sets-bottom-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%250 != 0){ return;}
		left = left -250;
		if(left >= -(wid-250*4)){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	$('.sets-bottom-prev-b').click(function(event) {

		var _sb = $(this).nextAll('.sets-bottom-main').find('.sets-bottom-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%167 != 0){ return;}
		left = left + 167;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
		}
		
	});
	$('.sets-bottom-next-b').click(function(event) {
		var _sb = $(this).prevAll('.sets-bottom-main').find('.sets-bottom-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%167 != 0){ return;}
		left = left -167;
		if(left >= -(wid-167*6)){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	/*$('.sets-top-prev').click(function(event) {
		var _sb = $(this).nextAll('.sets-top-uls-main');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%1200 != 0){ return;}
		left = left + 1200;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
			var sbi = parseInt($('.sets-bottom-items').css('left')) + 250;
			var _current = $('.sets-bottom-items').find('.current').parent().parent();
			$('.sets-bottom-items').find('.current').removeClass('current');
			if( sbi <= 0){
				$('.sets-bottom-items').animate({'left': sbi}, 400,'jswing');
			}
			_current.prev().find('img').addClass('current');
			

		}
	});
	$('.sets-top-next').click(function(event) {
		var _sb = $(this).prevAll('.sets-top-uls-main');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%1200 != 0){ return;}
		left = left -1200;
		if(left >= -(wid-1200)){
			_sb.animate({'left': left}, 400,'jswing');
			var sbi = parseInt($('.sets-bottom-items').css('left')) - 250;
			var sbiw = parseInt($('.sets-bottom-items').css('width'));
			var _current = $('.sets-bottom-items').find('.current').parent().parent();
			$('.sets-bottom-items').find('.current').removeClass('current');
			if(sbi >= -(sbiw - 250*4) ){
				$('.sets-bottom-items').animate({'left': sbi}, 400,'jswing');
			}
			_current.next().find('img').addClass('current');
		}
	});
	$('.sets-item-a').click(function(event) {
		var index =  $('.sets-item-a').index($(this));	
		$('.sets-top-overlay').fadeIn(800);
		$('.sets-top-uls-main').animate({'left': -index*1200}, 400);
		$('.sets-item-a img.current').removeClass('current');
		$(this).find('img').addClass('current');

	});*/
$('.sets-top-prev').click(function(event) {
		 $(".sets-top-next").css("display","block");
		 
  		var ulszhi=$(".sets-top-uls-main").css('width');
		var lizhi=$(".sets-top-uls-item").css('width');
		var leftzhi=$(".sets-top-uls-main").css('left');
		if(parseInt(leftzhi)== -parseInt(lizhi))
		{
			$(".sets-top-prev").css("display","none");
		}
		
		var _sb = $(this).nextAll('.sets-top-uls-main');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		var dWid = $('.sets-top').width();
		if(left%dWid != 0){ return;}
		left = left + dWid;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
			var sbi = parseInt($('.sets-bottom-items').css('left')) + 250;
			var _current = $('.sets-bottom-items').find('.current').parent().parent();
			$('.sets-bottom-items').find('.current').removeClass('current');
			if( sbi <= 0){
				$('.sets-bottom-items').animate({'left': sbi}, 400,'jswing');
			}
			_current.prev().find('img').addClass('current');
		}
	});
	$('.sets-top-next').click(function(event) {
		 $(".sets-top-prev").css("display","block");
  		var ulszhi=$(".sets-top-uls-main").css('width');
		var lizhi=$(".sets-top-uls-item").css('width');
		var leftzhi=$(".sets-top-uls-main").css('left');
		if(parseInt(lizhi)*2==parseInt(ulszhi)+parseInt(leftzhi))
		{
			$(".sets-top-next").css("display","none")	
		}
		
		var _sb = $(this).prevAll('.sets-top-uls-main');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		var dWid = $('.sets-top').width();
		if(left%dWid != 0){ return;}
		left = left -dWid;
		if(left >= -(wid-dWid)){
			_sb.animate({'left': left}, 400,'jswing');
			var sbi = parseInt($('.sets-bottom-items').css('left')) - 250;
			var sbiw = parseInt($('.sets-bottom-items').css('width'));
			var _current = $('.sets-bottom-items').find('.current').parent().parent();
			$('.sets-bottom-items').find('.current').removeClass('current');
			if(sbi >= -(sbiw - 250*4) ){
				$('.sets-bottom-items').animate({'left': sbi}, 400,'jswing');
			}
			_current.next().find('img').addClass('current');
		}

		
	});
	$('.sets-item-a').click(function(event) {
		var index =  $('.sets-item-a').index($(this));
		var dWid = 	$('.sets-top').width();
		$('.sets-top-overlay').fadeIn(800);
		$('.sets-top-uls-main').animate({'left': -index*dWid}, 400);
		$('.sets-item-a img.current').removeClass('current');
		$(this).find('img').addClass('current');

	});
	$('.sets-item-b').click(function(event) {
		var index =  $('.sets-item-b').index($(this));	
		$('.sets-top-overlay').fadeIn(800);
		$('.sets-top-uls-main').animate({'left': -index*1200}, 400);
		$('.sets-item-b img.current').removeClass('current');
		$(this).find('img').addClass('current');

	});
	$('.sets-item-c').click(function(event) {
		var index =  $('.sets-item-c').index($(this));
		var dWid = 	$('.sets-top').width();
		$('.sets-top-overlay').fadeIn(800);
		$('.sets-top-uls-main').animate({'left': -index*dWid}, 400);
		$('.sets-item-c div.current').removeClass('current');
		$(this).find('div').addClass('current');
		
		var sbi_number=parseInt($('.sets-bottom-items li').length);
		
		if(sbi_number>index && index!==0 && sbi_number!=index){
			$(".sets-top-next").show();
			$(".sets-top-prev").show();
		}
		
		if(sbi_number===(index+1)){
			$(".sets-top-next").hide();
			$(".sets-top-prev").show();
		}
		if(index===0){
			$(".sets-top-next").show();
			$(".sets-top-prev").hide();
		}
		
	});
	$('.page-a').click(function(event) {
		/* Act on the event */
		var index =  $(this).parent().find('.page-a').index($(this));	
		 $(this).parent().prev().animate({'left': -index*1200}, 400);
		$(this).parent().find('a.current').removeClass('current');
		$(this).addClass('current');
	});
	//products
	$('.sets-item-a').click(function(event) {
		$('.sets-top-uls .title ,.sets-top-uls-txt').fadeOut(400);
	});
	$('.sets-item-b').click(function(event) {
		$('.sets-top-uls .title ,.sets-top-uls-txt').fadeOut(400);
	});
	//proDetail
	$('.pro-details').css('height',$('.pro-details .pro-details-item').size()*480);
	$('.pro-nav-a').hover(function(event) {
		var index = $('.pro-nav-a').index($(this));
		$('.pro-details').stop();
		$('.pro-details').animate({'top': -index*480}, 400);
		$('.pro-detail-main-r li.current').removeClass('current');
		$(this).parent().addClass('current');
	});

	$('.pro-show-items').css('width',$('.pro-show-items li').size()*1000);
	$('.pro-show-prev').click(function(event) {
		/* Act on the event */
		var _sb = $(this).nextAll('.pro-show').find('.pro-show-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%1000 != 0){ return;}
		left = left +1000;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
			var _current = $('.pro-show-nav').find('.current').parent().parent();
			$('.pro-show-nav').find('.current').removeClass('current');
			_current.prev().find('img').addClass('current');
		}
	});
	$('.pro-show-next').click(function(event) {
		/* Act on the event */
		var _sb = $(this).prevAll('.pro-show').find('.pro-show-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%1000 != 0){ return;}
		left = left -1000;
		if(left >= -(wid-1000)){
			_sb.animate({'left': left}, 400,'jswing');
			var _current = $('.pro-show-nav').find('.current').parent().parent();
			$('.pro-show-nav').find('.current').removeClass('current');
			_current.next().find('img').addClass('current');
		}
	});
	$('.pro-show-a').hover(function(event) {
		/* Act on the event */
		var index = $('.pro-show-a').index($(this));
		$(this).parent().parent().find('li a img.current').removeClass('current');
		$(this).find('img').addClass('current');
		$('.pro-show-items').stop();
		$('.pro-show-items').animate({'left': -index*1000}, 400,'jswing');

	});
	//proTec
	$('.pro-tec-items').css('width',$('.pro-tec-items li').size()*1000);
	$('.pro-tec-a').click(function(event) {
		/* Act on the event */
		var index = $('.pro-tec-a').index($(this));
		$('.pro-tec-items').animate({'left': -index*1000}, 400);
		//alert($(this).children('img').addclass('pro-tec-now'));
		$('.pro-tec-a').removeClass('pro-tec-now');
		$(this).addClass('pro-tec-now');
	});
	//proGallery
	$('.pro-gallery-items').css('width',$('.pro-gallery-items li').size()*1200);
	$('.pro-gallery-prev').click(function(event) {
		/* Act on the event */
		var _sb = $(this).nextAll('.pro-gallery').find('.pro-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%1200 != 0){ return;}
		left = left + 1200;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	$('.pro-gallery-next').click(function(event) {
		/* Act on the event */
		var _sb = $(this).prevAll('.pro-gallery').find('.pro-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%1200 != 0){ return;}
		left = left -1200;
		if(left >= -(wid-1200)){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});

//	showContent(1,1,6);
//	showContent(1,2013,5);
	//salary.html
	$('.talentcenter-gallery-items').css('width',$('.talentcenter-gallery-items li').size()*200)
	$('.tg-gallery-prev').click(function(event) {
		var _sb = $(this).prevAll('.talentcenter-gallery-main').find('.talentcenter-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%200 != 0){ return;}
		left = left + 200;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	$('.tg-gallery-next').click(function(event) {
		var _sb = $(this).nextAll('.talentcenter-gallery-main').find('.talentcenter-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%200 != 0){ return;}
		left = left -200;
		if(left >= -(wid-200*5)){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	
	//salary_12.5.html
	$('.tscb-gallery-items').css('width',$('.tscb-gallery-items li').size()*200);
	$('.tscb-gallery-prev').click(function(event) {
		var _sb = $(this).nextAll('.tscb-gallery-main').find('.tscb-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%200 != 0){ return;}
		left = left + 200;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	$('.tscb-gallery-next').click(function(event) {
		var _sb = $(this).prevAll('.tscb-gallery-main').find('.tscb-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%200 != 0){ return;}
		left = left -200;
		if(left >= -(wid-200*5)){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	
	//case.html
	$('.tp-top-items').css('width',$('.tp-top-items li').size()*900);
	$('.tp-bottom-items').css('width',$('.tp-bottom-items li').size()*200);
	$('.tp-gallery-prev').click(function(event) {
		var _sb = $(this).nextAll('.tp-bottom-main').find('.tp-bottom-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%200 != 0){ return;}
		left = left + 200;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
		}

	});
	$('.tp-gallery-next').click(function(event) {
		var _sb = $(this).prevAll('.tp-bottom-main').find('.tp-bottom-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%200 != 0){ return;}
		left = left -200;
		if(left >= -(wid-200*4)){
			_sb.animate({'left': left}, 400,'jswing');
		}
	});
	$('.tp-bottom-a').click(function(event) {
		/* Act on the event */
		var index = $('.tp-bottom-a').index($(this));
		$('.tp-top-items').animate({'left':-index*900}, 400);
		$('.tp-bottom-a.current').removeClass('current');
		$(this).addClass('current');
	});
	//index.html
	$('.index-gallery-items').css('width',$('.index-gallery-items li').size()*214);
	$('.index-main-prev').click(function(event) {
		/* Act on the event */
		var _sb = $(this).nextAll('.index-gallery').find('.index-gallery-items');
		var wid = parseInt(_sb.css('width'));
		var left = parseInt(_sb.css('left'));
		if(left%214 != 0){ return;}
		left = left + 214;
		if(left <= 0){
			_sb.animate({'left': left}, 400,'jswing');
			if(left > -214){
				$('.index-main-next').removeClass('a-blue').addClass('a-grey');
			}
			if(left <= 0 && $('.index-main-prev').hasClass('a-grey')){
				$('.index-main-prev').removeClass('a-grey').addClass('a-blue');
			}
			var current = $('.index-a.current');
			current.removeClass('current');
			current.prev().addClass('current');
		}
		});
		$('.index-main-next').click(function(event) {
			/* Act on the event */
			var _sb = $(this).nextAll('.index-gallery').find('.index-gallery-items');
			var wid = parseInt(_sb.css('width'));
			var left = parseInt(_sb.css('left'));
			if(left%214 != 0){ return;}
			left = left -214;
			if(left >= -(wid-214)){
				_sb.animate({'left': left}, 400,'jswing');
				if(left < -(wid-214*2)){
					$('.index-main-prev').removeClass('a-blue').addClass('a-grey');
				}
				if(left <= 0 && $('.index-main-next').hasClass('a-grey')){
					$('.index-main-next').removeClass('a-grey').addClass('a-blue');
				}
				var current = $('.index-a.current');
				current.removeClass('current');
				current.next().addClass('current');
			}
		});
		//login
		$('.login-close a').click(function(event) {
			/* Act on the event */
			$('.login-service-mask').show();
			$('.login-service-main').fadeIn(400);
		});
		$('.login-service-close').click(function(event) {
			/* Act on the event */
			$('.login-service-mask').hide();
			$('.login-service-main').fadeOut(400);
		});
		$('.index-a').click(function(event) {
		 	/* Act on the event */
		 	var index = $('.index-gallery-nav a').index($(this));
		 	var oIndex = $('.index-gallery-nav a').index($('.index-a.current'));
		 	var _sb =  $('.index-gallery .index-gallery-items');
		 	var wid = parseInt(_sb.css('width'));
			var left = parseInt(_sb.css('left'));
			if(index > oIndex){
				if(left%214 != 0){ return;}
				left = left - 214*(index-oIndex);
				if(left >= -(wid-214)){
					_sb.animate({'left': left}, 400,'jswing');
					if(left < -(wid-214*2)){
						$('.index-main-prev').removeClass('a-blue').addClass('a-grey');
					}
					if(left <= 0 && $('.index-main-next').hasClass('a-grey')){
						$('.index-main-next').removeClass('a-grey').addClass('a-blue');
					}
					var current = $('.index-a.current');
					current.removeClass('current');
					$(this).addClass('current');
				}
			}else if(index < oIndex){
				if(left%214 != 0){ return;}
				left = left + 214*(oIndex-index);
				if(left <= 0){
					_sb.animate({'left': left}, 400,'jswing');
					if(left > -214){
						$('.index-main-next').removeClass('a-blue').addClass('a-grey');
					}
					if(left <= 0 && $('.index-main-prev').hasClass('a-grey')){
						$('.index-main-prev').removeClass('a-grey').addClass('a-blue');
					}
					var current = $('.index-a.current');
					current.removeClass('current');
					$(this).addClass('current');
				}
			}
		});

		
		//footer
		var ns = true;
		var jtt = true;
		var lava_lamp_num = $('.lava_lamp li').index($('.lava_lamp li.current'));
		if( lava_lamp_num != 5 ){
			$('.nav-sec-items').css({'width':$('.nav-sec-items .nav-sec-item').size()*1000,'left':-lava_lamp_num*1000});
			$('.nav-sec').hide(400);
		}else{
			$('.nav-sec-items').css({'width':$('.nav-sec-items .nav-sec-item').size()*1000});
			 $('.nav-sec').hide();
		}
		
		$('.lava_lamp li').click(function(event) {
			if($(this).hasClass('current')){
				 autoNavSec();
			}
		});
		$('.lava_lamp li.lava_lamp_item a').hover(function() {
			var _ele = $('.nav-sec');
			var _this = $(this);
			var indexL = $('.lava_lamp li.lava_lamp_item a').index($(this));
			var indexU = parseInt($('.nav-sec-items').css('left'))/1000;
			ns = false;
			if(  indexL != 5 ){
				_ele.stop();
				_ele.slideUp(400,function(){
					$('.nav-sec-items').css('left',-indexL*1000);
					_ele.slideDown(400);
				});
			}else{
				_ele.stop();
				_ele.slideUp(400,function(){
					$('.nav-sec-items').css('left',-indexL*1000);
					$('.nav-sec').attr("style","display: none; height: 30px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;");
				});
			}
		}, function() {
			ns = true;
			window.setTimeout(autoNavSec, 1000);
		});
		$('.nav-sec').hover(function() {
			jtt = false;
		}, function() {
			jtt = true;
			window.setTimeout(autoNavSec, 1000);
		});
		function autoNavSec(){
			var _ele = $('.nav-sec');
			if( _ele.is(':visible') && ns && jtt){
				_ele.stop().slideUp('800');
			}
		}
		
			//menu
		  $('li.mainlevel').mousemove(function(){
		  $(this).find('ul').slideDown("fast");
		  $(this).addClass("current");
		  //you can give it a speed
		  });
		  $('li.mainlevel').mouseleave(function(){
		  $(this).find('ul').slideUp("fast");
		  $(this).removeClass("current");
		  });
		
		
		//hot-point
		//浜у搧
		/*$('.hot-point').each(function(index, el) {
			btnGif($(this));
		});
		//鍦板浘
		$('.red-point').each(function(index, el) {
			btnGif($(this));
		});
		//棰嗗厛鎶€鏈�
		btnGif($('.time-btn-l'));
		btnGif($('.time-btn-r'));
		function btnGif(ele){
			var url = ele.attr('background-image');
			setInterval(function(){changeImg(ele);},100);
		}*/
		$('.back').show(400);
		//$('#content .content-overlay').show(400);
});
function showContent(page,clumn,type,pathName) {
//	alert(clumn);
    $.when(
     $.ajax({
		type: "POST",
		url: pathName+"/Investors/AjaxPage",
		dataType:"json",
		data: {page: page , clumn: clumn , type: type}
		})
		).done(function(json){
			var str='';
			for(var i=0;i<json.val.length;i++)
			{
				if(i%2==0){
				str+='<li > <h1> <div><p>'+json.val[i]['news_title']+'</p><span>'+json.val[i]['news_date']+'</span><a target="_blank" class="fr" href="'+pathName+'/site/download'+json.val[i]['news_address']+'">鐐瑰嚮棰勮锛圥DF锛�<em class="icon-radio-blue"></em></a></div></h1></li>';
				}
				else{
				str+='<li > <h1> <div class="investor-even"><p>'+json.val[i]['news_title']+'</p><span>'+json.val[i]['news_date']+'</span><a target="_blank" class="fr" href="'+pathName+'/site/download'+json.val[i]['news_address']+'">鐐瑰嚮棰勮锛圥DF锛�<em class="icon-radio-blue"></em></a></div></h1></li>';
				}
			}
			if(type==6)
			{
			$('#investor-pre-1').unbind('click');
			$('#investor-pre-1').click(function(){
				 showContent(json.prepg,1,6,pathName);
			});
			$('#investor-next-1').unbind('click');
			$('#investor-next-1').click(function(){
				 showContent(json.nextpg,1,6,pathName);
			});
			$('#investor-report-1').html(str);
			}
			if(type==7)
			{
			$('#investor-pre-2').unbind('click');
			$('#investor-pre-2').click(function(){
				 showContent(json.prepg,1,7,pathName);
			});
			$('#investor-next-2').unbind('click');
			$('#investor-next-2').click(function(){
				 showContent(json.nextpg,1,7,pathName);
			});
			$('#investor-report-2').html(str);
			}
			if(type==8)
			{
			$('#investor-pre-3').unbind('click');
			$('#investor-pre-3').click(function(){
				 showContent(json.prepg,1,8,pathName);
			});
			$('#investor-next-3').unbind('click');
			$('#investor-next-3').click(function(){
				 showContent(json.nextpg,1,8,pathName);
			});
			$('#investor-report-3').html(str);
			}
			if(clumn==2015)
			{
			$('#investor-pre-4').unbind('click');
			$('#investor-pre-4').click(function(){
				 showContent(json.prepg,2015,5,pathName);
			});
			$('#investor-next-4').unbind('click');
			$('#investor-next-4').click(function(){
				 showContent(json.nextpg,2015,5,pathName);
			});
			$('#investor-inform-c-1').html(str);
			}
			if(clumn==2014)
			{
			$('#investor-pre-4').unbind('click');
			$('#investor-pre-4').click(function(){
				 showContent(json.prepg,2014,5,pathName);
			});
			$('#investor-next-4').unbind('click');
			$('#investor-next-4').click(function(){
				 showContent(json.nextpg,2014,5,pathName);
			});
			$('#investor-inform-c-1').html(str);
			}
			if(clumn==2013)
			{
			$('#investor-pre-5').unbind('click');
			$('#investor-pre-5').click(function(){
				 showContent(json.prepg,2013,5,pathName);
			});
			$('#investor-next-5').unbind('click');
			$('#investor-next-5').click(function(){
				 showContent(json.nextpg,2013,5,pathName);
			});
			$('#investor-inform-c-2').html(str);
			}
			if(clumn==2012)
			{
			$('#investor-pre-6').unbind('click');
			$('#investor-pre-6').click(function(){
				 showContent(json.prepg,2012,5,pathName);
			});
			$('#investor-next-6').unbind('click');
			$('#investor-next-6').click(function(){
				 showContent(json.nextpg,2012,5,pathName);
			});
			$('#investor-inform-c-3').html(str);
			}
			if(clumn==2011)
			{
			$('#investor-pre-7').unbind('click');
			$('#investor-pre-7').click(function(){
				 showContent(json.prepg,2011,5,pathName);
			});
			$('#investor-next-7').unbind('click');
			$('#investor-next-7').click(function(){
				 showContent(json.nextpg,2011,5,pathName);
			});
			$('#investor-inform-c-4').html(str);
			}
			if(clumn==2010)
			{
			$('#investor-pre-8').unbind('click');
			$('#investor-pre-8').click(function(){
				 showContent(json.prepg,2010,5,pathName);
			});
			$('#investor-next-8').unbind('click');
			$('#investor-next-8').click(function(){
				 showContent(json.nextpg,2010,5,pathName);
			});
			$('#investor-inform-c-5').html(str);
			}
		});
}
//鍨傜洿灞呬腑
function verticalCenter(dName,dHeight){
	var cHeight = parseInt($('#content').height());
	if( cHeight > dHeight){
			$(dName).css('margin-top',(cHeight-dHeight)/2);
		}
	$(dName).show();
}
//鏈嶅姟閮ㄥ瀭鐩村眳涓�
function sVerticalCenter(dName,dWidth){
	var wHeight =  $(window).height(),
		wWidth = $(window).width();
	$('.service-l').hide();
	$(dName).css({'left':(wWidth-dWidth)/2,'top':(wHeight-$(dName).height())/2});
	$('.service-l').show();
}
function changeImg(ele){
	var arr = $(ele).css('background-image').split('/');
	var temp = arr[arr.length - 1];
	var num,num1 ;
	var url;
	if( temp != temp.replace('b','')){
		
		temp = temp.replace('b','');
		
	}else if(temp != temp.replace('r','')){
		temp = temp.replace('r','');	
	}else if(temp != temp.replace('l','')){
		temp = temp.replace('l','');
	}else{
		temp = temp.replace('t','');
	}
	num1 = num  = parseInt(temp.replace('.png")',''));
	if(num < 4){
		num +=1;
	}else{
		num = 1;
	}
	arr[arr.length - 1] = arr[arr.length - 1].replace(num1,num);
	url = arr.join('/');
	 $(ele).css('background-image',url);
}
