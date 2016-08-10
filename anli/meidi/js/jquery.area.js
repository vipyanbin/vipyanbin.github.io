$(function(){
	$.ajax({
	     type: "GET",
	     url: "/js/City/",
	     data: {p_id:-1},
	     dataType: "json",
	     success: function(data){
			$("<option></option>").val("").text("璇烽€夋嫨鐪佷唤").appendTo($("#selProvince"));
			$("<option></option>").val("").text("璇烽€夋嫨鍩庡競").appendTo($("#selCity"));
			$("<option></option>").val("").text("璇烽€夋嫨鍖哄煙").appendTo($("#selDist"));
			$.each(data, function(k,v){
				// $("#selProvince").append(new Option(v,k));
				$("<option></option>").val(k).text(v).appendTo($("#selProvince"));
			});
		      }
	 });
	$("#selProvince").change(function(){
		$.ajax({
		     type: "GET",
		     url: "/js/City/",
		     data: {p_id:$(this).val()},
		     dataType: "json",
		     success: function(data){
				$("#selCity").empty();
				$("#selDist").empty();
				$("<option></option>").val("").text("璇烽€夋嫨鍩庡競").appendTo($("#selCity"));
				$("<option></option>").val("").text("璇烽€夋嫨鍖哄煙").appendTo($("#selDist"));
				$.each(data, function(k,v){
					// $("#selCity").append(new Option(v,k));
					$("<option></option>").val(k).text(v).appendTo($("#selCity"));
				});
			      }
		 });
	});
	$("#selCity").change(function(){
		$.ajax({
		     type: "GET",
		     url: "/js/City/",
		     data: {p_id:$(this).val()},
		     dataType: "json",
		     success: function(data){
				$("#selDist").empty();
				$("<option></option>").val("").text("璇烽€夋嫨鍖哄煙").appendTo($("#selDist"));
				$.each(data, function(k,v){
					// $("#selDist").append(new Option(v,k));
					$("<option></option>").val(k).text(v).appendTo($("#selDist"));
				});
			      }
		 });
	});
});
