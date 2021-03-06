/*
 *   jquery.select.js
 *   Date : 08/11/30
 *   author : zhangjingwei
 *   http://www.zhangjingwei.com
 *	 Thanks for yoom
 *   Virsion : 1.2
 *	 妯℃嫙鐢熸垚select琛ㄥ崟銆傞敭鐩樺彲鎺с€�
*/

jQuery.fn.sSelect = function(){
	var selectId = $(this).attr('id');
	var selectIndex;
	$('#'+selectId).append('<div class="dropselectbox"><h4></h4><span class="FixSelectBrowserSpan"></span><ul ></ul></div>');
	$.each($('#'+selectId+' > select > option'), function(i){
		if ($(this).is(":selected")){
			$('#'+selectId+' > div > h4').empty().append($(this).text());
			selectIndex = $('#'+selectId+' > select > option').index(this);
		};
	});
	$('.dropselectbox').show();
	$('#'+selectId+' > select').hide();
	$('#'+selectId).bind("click",function(e){
		selectId = $(this).attr('id');
		if($('#'+selectId+' > div > ul').css("display") == 'block'){
			$('.dropselectbox > h4').removeClass("over");
			$('.dropselectbox > span').removeClass("over");
			$('.dropselectbox > ul').empty().hide();
		}else{
			$('#'+selectId+' > div > h4').addClass("over");
			$('#'+selectId+' > div > span').addClass("over");
			$('#'+selectId+' > div > ul').empty().toggle();
			setSelectValue(selectId);
			selectIndex = $('#'+selectId+' > div > ul > li').index($('.selectedli')[0]);
			//鐩稿簲閫夋嫨浜嬩欢
			$('#'+selectId+' > div > ul > li').click(function(e){
					selectIndex = $('#'+selectId+' > div > ul > li').index(this);
					//alert (selectIndex);
					$('#'+selectId+'> select')[0].selectedIndex = selectIndex;
					setSelectValue(selectId);
					cleadMenu();
					e.stopPropagation()
			})
			.hover(
				   function(){
						$('#'+selectId+' > div > ul > li').removeClass("over").removeClass("selectedli");
						$(this).addClass("over").addClass("selectedli");
						selectIndex = $('#'+selectId+' > div > ul > li').index(this);
						//$('#value2').append('婊氬姩鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
					},
					function(){
						$(this).removeClass("over");
					}
			)
		}
		e.stopPropagation();
	})
	.bind("blur",function(){
		$('#'+selectId+' > div > h4').removeClass("over");
		$('#'+selectId+' > div > span').removeClass("over");
		cleadMenu();						  
	})
	.bind("mousewheel",function(){
		//浠ュ悗涔熻鏀寔婊氳疆
		return false;				   
	})
	.bind("dblclick", function(){
		return false;
	})
	.bind("focus", function(){
		keyUpOrDown(selectId,selectIndex);			
	})
	.bind("keydown",function(e){
		// alert (e.keyCode);
		switch(e.keyCode){
			case 9:
				return true;
				break;
			case 13:
				//enter
				selectIndex = $('#'+selectId+' > div > ul > li').index($('.selectedli')[0]);
				$('#'+selectId+'> select')[0].selectedIndex = selectIndex;
				setSelectValue(selectId);
				cleadMenu();
				break;
			case 27:
				//esc
				cleadMenu();
				break;
			case 38:
				//up
				//$('#value2').append('鍘熷鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				$('#'+selectId+' > div > ul > li').removeClass("over").removeClass("selectedli");
				selectIndex--;
				//$('#value2').append('璁＄畻鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				selectIndex < 0 ? selectIndex=$('#'+selectId+' > select > option').length - 1 : selectIndex;
				//$('#value2').append('鍒ゆ柇鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>--------------------------------------------------<br>');
				$('#'+selectId+' > div > ul > li:eq('+selectIndex+')').toggleClass("over").toggleClass("selectedli");
				break;
			case 40:
				//down
				//$('#value2').append('鍘熷鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				$('#'+selectId+' > div > ul > li').removeClass("over").removeClass("selectedli");
				selectIndex ++;
				//$('#value2').append('璁＄畻鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				selectIndex > ($('#'+selectId+' > select > option').length - 1) ? selectIndex=0 : selectIndex;
				//$('#value2').append('鍒ゆ柇鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>--------------------------------------------------<br>');
				$('#'+selectId+' > div > ul > li:eq('+selectIndex+')').toggleClass("over").toggleClass("selectedli");
				break;
			default:
				return false;
		}
	}); 
	
	//绂佹閫夋嫨
	$('.dropselectbox').bind("selectstart",function(){
			return false;
	});
};



function cleadMenu(){
	$('.dropselectbox > ul').empty().hide();
	$('.dropselectbox > h4').removeClass("over");
	$('.dropselectbox > span').removeClass("over");
	$(document).unbind("click",cleadMenu);
}

function keyUpOrDown(selectId,selectIndex){
	$('#'+selectId+' > div > h4').toggleClass("over");
	$("#"+selectId).bind("keydown",function(e){
		//alert (e.keyCode);
		switch(e.keyCode){
			case 9:
				return true;
				break;
			case 38:
				//up
				//$('#value2').append('鍘熷鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				$('#'+selectId+' > div > ul > li').removeClass("over").removeClass("selectedli");
				selectIndex--;
				//$('#value2').append('璁＄畻鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				selectIndex < 0 ? selectIndex=$('#'+selectId+' > select > option').length - 1 : selectIndex;
				//$('#value2').append('鍒ゆ柇鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>--------------------------------------------------<br>');
				$('#'+selectId+' > div > ul > li:eq('+selectIndex+')').toggleClass("over").toggleClass("selectedli");
				$('#'+selectId+'> select')[0].selectedIndex = selectIndex;
				$.each($('#'+selectId+' > select > option'), function(i){
					if ($(this).attr("selected") == true){
						$('#'+selectId+' > div > h4').empty().append($(this).text());
						$('#'+selectId+' > div > ul > li').eq(i).addClass("over").addClass("selectedli");
					};
				});
				break;
			case 40:
				//down
				//$('#value2').append('鍘熷鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				$('#'+selectId+' > div > ul > li').removeClass("over").removeClass("selectedli");
				selectIndex ++;
				//$('#value2').append('璁＄畻鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>');
				selectIndex > ($('#'+selectId+' > select > option').length - 1) ? selectIndex=0 : selectIndex;
				//$('#value2').append('鍒ゆ柇鍊硷細'+selectIndex+'&nbsp;&nbsp;<br>--------------------------------------------------<br>');
				$('#'+selectId+' > div > ul > li:eq('+selectIndex+')').toggleClass("over").toggleClass("selectedli");
				$('#'+selectId+'> select')[0].selectedIndex = selectIndex;
				$.each($('#'+selectId+' > select > option'), function(i){
					if ($(this).attr("selected") == true){
						$('#'+selectId+' > div > h4').empty().append($(this).text());
						$('#'+selectId+' > div > ul > li').eq(i).addClass("over").addClass("selectedli");
					};
				});
				break;
			default:
				return false;
		};
	}); 
}

function setSelectValue(sID){
	$.each($('#'+sID+' > select > option'), function(i){
		$('#'+sID+' > div > ul').append("<li class='FixSelectBrowser'>"+$(this).text()+"</li>");
		if ($(this).is(":selected")){
			$('#'+sID+' > div > h4').empty().append($(this).text());
			$('#'+sID+' > div > ul > li').eq(i).addClass("over").addClass("selectedli");
		};
	});
}