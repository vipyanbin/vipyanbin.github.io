$(window).load(function() {
	/* Act on the event */
	var	_Ul=$(".vertical-line").find('ul');
	var _Li=_Ul.find('li');
	var ulLeft = _Ul.width();
	var arr_txt = new Array(
		['鍥藉唴鍚告补鐑熸満PY-1鍨嬮棶涓栵紝绔嬭冻楂樿捣鐐� 浠ヤ腑鍥藉帹鎴库€滅厧鐐哥児鐐� 娌圭儫杈冨ぇ鈥濈殑鐢熸椿鐗圭偣鍑哄彂锛屼娇鐢ㄧ洿鎺掑紡銆佺煭娌归亾寮哄姏娑¤疆椋庡彾鐨勬补鐑熸満缁撴瀯'],
		['鍥藉唴鍏嶆媶娲桟PY-88鍨嬫繁鏌滃瀷娌圭儫鏈猴紝寮€鍒涗簡鍚告补鐑熸満浜т笟鎶€鏈彂灞曠殑涓€娆℃椂浠ｉ潻鍛斤紝瑙ｅ喅浜嗘补缃╂淮娌归棶棰橈紝涔熻В鍐充簡娌圭儫鍒嗙鎶€鏈棶棰�'],
		['鍥藉唴娆у紡鍏嶆媶娲楀惛娌圭儫鏈�737 瀹炵幇浜嗗崟搴楀崟鍛�400鍙扮殑閿€鍞褰�'],
		['鍥藉唴鏋佺畝椋庢牸鐨勬寮忓钩鏉�8302B涓婂競'],
		['鍏ㄩ潰鍗囩骇鍏嶆媶娲楁妧鏈紝鎺ㄥ嚭鍏嶆媶娲桝++锛岄潻鏂板厤鎷嗘礂琛屼笟鐨勬爣鍑嗭紝鍐嶅垱鍏嶆媶娲楁妧鏈粡鍏�'],
		['鍏ㄧ悆濂㈠崕鍨嬪惛娌圭儫鏈�9508S涓婂競 鍏ㄧ悆缁熶竴鍙戣浠�33800鍏�'],
		['鍒涙柊鐮斿彂鐏跺叿涓荤伀涓疆鎶€鏈紝灏嗕富鐏敱澶栫幆鏀圭疆涓幆锛屾樉钁楁彁楂樼儹鏁堬紝鑷充粖璧板湪鎶€鏈墠娌匡紝鈥滀富鐏腑缃€濊幏寰椾笟鍐呮妧鏈敞鍐屽晢鏍�'],
		['娑堟瘨鏌滅幆褰㈢伅绠℃妧鏈紝淇濊瘉鏌滃唴姣忎釜瑙掕惤閮借兘寰楀埌鍏呭垎鍧囧寑鐨勭传澶栫嚎鐓у皠锛屼笉鐣欎换浣曟瑙掞紝瀹炵幇鐪熸360掳鍏ㄦ柟浣嶆潃鑿岋紱涓哄仴搴风敓娲绘洿娣讳寒鑹层€傚桨鏄惧嚭鐜颁唬瀹跺涵鍘ㄦ埧涔嬪仴搴风悊蹇�'],
		['鐪熸涓€浣撳寲鑱斿姩鏅鸿兘鑱槑濂楄涓婂競锛屽洓涓仾鏄庣偣锛堢儫缃╄嚜鍔ㄦ劅搴斿惎鍔ㄣ€侀閫熻嚜鐢辫皟鑺傘€佷竴浣撳寲瑙︽懜鎺у埗銆佷竴浣撳寲鏅鸿兘鏄剧ず锛夛紝69椤硅仾鏄庢妧鏈紝澶уぇ鎺ㄥ姩浜嗗叏鐞冨帹鎴跨殑鏅鸿兘鍖栬繘绋�'],
		['Crossover璺ㄧ晫鍏嶆媶娲楀惛娌圭儫鏈轰笂甯傦紝鍚屾椂鍖呮徑鈥滃伐涓氳璁″ゥ鏂崱濂栤€濃€斿痉鍥絀F濂栧拰鍥藉唴椤跺皷璁捐澶уCIDF濂栥€佺孩椤跺涓ゃ€佷笁椤瑰ぇ濂�'],
		['鑰佹澘鐢靛櫒鐢靛帇鍔涚叢鐨刄P+钀ュ吇婵€娲绘妧鏈紝绐佺牬浜嗙數鍘嬪姏鐓茶涓氬唴鐨勬妧鏈彂灞曠摱棰堬紝瀹炵幇浜嗛珮鍘嬩笌寰帇鐨勭湡姝ｈ瀺鍚�'],
		['鈥滃姴鐢辫姱鐢熲€旇€佹澘鍙岃姱鎶€鏈法瓒婂穮宄奥疯崳鑰€鍒涗笘锛佲€濆彂甯冧細闅嗛噸鍙紑锛屽叏闈㈡帹鍑衡€滃弻鍔茶姱鈥濈郴鍒椾骇鍝侊紝甯﹂鍚告补鐑熸満杩涘叆17绔嬫柟绫抽閲忔椂浠�'],
		['璺ㄧ晫i5濂楄鏅哄彇涓婂競銆傛帰姹傝法鐣屾瀬鑷达紝灏嗏€滄粦瑙︽搷鎺р€濊法鐣屽紩鐢ㄤ簬鍘ㄧ數琛屼笟锛屼互i-slide鏅鸿兘婊戣Е銆乮-link鏅鸿兘鑱旀帶銆乮-light鏅鸿兘鐐僵鎶€鏈瀯寤哄墠鐬昏法鐣岀郴缁燂紝鍐嶆瀹岀編璇犻噴濂楄涓€浣�'],
		['鑰佹澘iCook渚у惛绯诲垪锛屽交搴曢瑕嗕紶缁熻璁★紝浠ヤ釜鎬у桨鏄剧偒閰峰褰紝杩戣窛鏇存樉娲佸噣锛岃交鏉惧噣浜磥鍑€'],
		['鍏ㄦ柊鍙屽姴鑺�2.0椋庢満绯荤粺锛岄摳閫犳瀬閫熷惛鎺掑崜瓒婄鎶€锛屼互鈥�18m鲁/min椋庨噺銆�330Pa椋庡帇銆�16m/s鎺掔儫閫熷害銆�55dB浠ヤ笅瓒呬綆闈欓煶鈥濆啀搴﹀埛鏂拌涓氭爣鍑�'],
		['2013骞�11鏈�22鏃ワ紝澶у惛鍔涙湁澶ф櫤鎱�--鑰佹澘鍚告补鐑熸満閲嶆柊瀹氫箟澶у惛鍔涘彂甯冧細鍦ㄤ含闅嗛噸涓捐锛岃€佹澘鐢靛櫒浠庘€滄嫝鍚搞€佸己铏戙€侀€熸帓銆佽妭鑳解€濆洓涓柟闈㈤噸鏂板畾涔夊ぇ鍚稿姏']
		);
	var arr_year = new Array([1987],[1998],[2003],[2005],[2006],[2007],[2007],[2007],[2008],[2008],[2008],[2009],[2010],[2010],[2012],[2013]);
	var aLength = arr_year.length;
	var index =aLength - 1; 
	$(".pre").click(function(event) {
		/* Act on the event */
			if(index == 0){
				index = aLength - 1;
				
			}else{
				index -= 1;
				
			}
		btnPre();
	});
	$(".next").click(function(event) {
		/* Act on the event */
		if(index == (aLength - 1)){
			index = 0;
			
		}else{
			index += 1;
			
		}
		btnNext();
	});
	_Ul.html(_Ul.html()+_Ul.html());
	_Ul.width(780*2);

	
	function btnPre(){
		hideProduct();
		_Ul.css("left",-_Ul.width()/2);
		_Ul.animate({
			left: 0
		},
			1000, "jswing");
	}
	function btnNext(){
		hideProduct();
		_Ul.css("left",0);
		_Ul.animate({
			left: -_Ul.width()/2
		},
			1000, "jswing");
	}
	function hideProduct(){
		$(".time-btn div").fadeOut(1000,"jswing",function(){
			var pIndex,nIndex;
			if(index == 0){
				pIndex = aLength-1;
				
			}else{
				pIndex =index - 1;
				
			}
			if(index == aLength-1){
				nIndex = 0;
				
			}else{
				nIndex = index + 1;
				
			}
			$('.time-btn  .pre span').text(arr_year[pIndex]);
			$('.time-btn  .next span').text(arr_year[nIndex]);
			$(this).fadeIn(1000,"jswing");
		});
		$(".product").fadeOut(1000,"jswing",function(){
			var _img = $('.product img');
			var iArr = _img.attr('src').split('/');
			var temp =  iArr[iArr.length - 1];
			temp = temp.replace('tecPro_','');
			temp = temp.replace('.png','');
			iArr[iArr.length - 1] =  iArr[iArr.length - 1].replace(temp,index);
			_img.attr('src',iArr.join('/'));
			$('.product h2').text(arr_year[index]);
			$('.product p').text(arr_txt[index]);
			$(this).fadeIn(1000,"jswing");
		});
	}
	
});