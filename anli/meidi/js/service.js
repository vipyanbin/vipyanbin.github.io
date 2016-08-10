$(window).load(function() {
	$('.service-close').click(function(event) {
		$('.overlayer-txt').slideUp('400');		
	});
//	$(".oli-content-txt").mCustomScrollbar({
//					scrollInertia:600,
//					autoDraggerLength:false
//	});
//	$('.overlayer-detail ').click(function(event) {
//		/* Act on the event */
//		$(".oli-content-txt").empty();
//		var id = ($(this).attr('id')).replace('a-','');
//		$.ajax({
//			type: "json",
//			url: "/ajax/AjaxElectricityGuide",
//			dataType: "json",
//			data: {id: id},
//		}).done(function(json){
//			
//		});
//		$('.overlayer-txt').slideDown('400',function(){$(".oli-content-txt").mCustomScrollbar('update');});
//		
//	});
	//img
	/*var current			= -1;
	var num = $('.srm-img').size();
	for(var i=0;i<num;++i){
		var $thumb = $('.srm-img:eq('+i+')');
		$('<img/>').load(function(){
				 
		}).attr('src',$thumb.attr('href'));
	}
	$('.srm-img').click(function(event) {
		event.preventDefault();
		current = $('.srm-img').index($(this));
		var t = $(this).next().find('span').text();
		var src = $(this).attr('href');
		$('<img/>').load(function(){
			$('.oli-content h1').text(t);
			$($(this)).insertBefore('.oli-content img').next('img').remove();
			$('.overlayer-img').slideDown('1000');
		}).attr({'src':src,width:390,height:250});
	});	
	$('.service-close').click(function(event) {
		$('.overlayer-img').slideUp('400');		
	});
	$('.service-left').click(function(event) {
		--current;
		if($('.overlayer-loading').is(':visible')){
			return;
		}
		$('.overlayer-loading').show();
		$('.oli-content img').stop();
		var $e_prev	= $('.srm-img:eq('+current+')');
		var t;
		if($e_prev.length == 0){
			current = $('.srm-img').size()-1;
			$e_prev	= $('.srm-img:eq('+current+')');
		}
		t = $e_prev.next().find('span').text();
		$('<img style="display:none;margin-left:0;"/>').load(function(){
			var $newimg 		= $(this);
			var $currImage 		= $('.oli-content img');
			$newimg.insertBefore($currImage);
			$currImage.fadeOut(1000,function(){  $newimg.fadeIn('400',function(){$('.overlayer-loading').hide();});$(this).parent().find('h1').text(t); $(this).remove();});
			
		}).attr({'src':$e_prev.attr('href'),width:390,height:250});

	});
	$('.service-right').click(function(event) {
		++current;
		if($('.overlayer-loading').is(':visible')){
			return;
		}
		$('.overlayer-loading').show();
		$('.oli-content img').stop();
		var $e_next	= $('.srm-img:eq('+current+')');
		var t;
		if($e_next.length == 0){
			current = 0;
			$e_next	= $('.srm-img:eq('+current+')');
		}
		t = $e_next.next().find('span').text();

		$('<img style="display:none;margin-right:0;"/>').load(function(){
			var $newimg 		= $(this);
			var $currImage 		= $('.oli-content img');
			$newimg.insertBefore($currImage);
			$currImage.fadeOut(function(){$newimg.fadeIn('400',function(){$('.overlayer-loading').hide();});$(this).parent().find('h1').text(t); $(this).remove();});
			
		}).attr({'src':$e_next.attr('href'),width:390,height:250});

	});*/
});